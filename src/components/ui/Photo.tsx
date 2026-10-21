import type { PhotoSpec } from "../../content/site";
import { Schematic } from "../art/Schematic";
import type { SchematicMotif } from "../art/Schematic";

/* Resolved at build time, so server and client agree on which photos exist and hydration stays stable. */
const files = import.meta.glob<string>("../../assets/photos/*.{webp,jpg,jpeg,png,avif}", {
  eager: true,
  query: "?url",
  import: "default",
});

const photos = new Map<string, string>(
  Object.entries(files).map(([path, url]) => [path.replace(/^.*\//, "").replace(/\.[^.]+$/, ""), url]),
);

interface PhotoProps {
  spec: PhotoSpec;
  motif: SchematicMotif;
  /** Mirrored, closer crop of the same drawing, so two placeholders of one division do not look identical. */
  detail?: boolean;
  figure: string;
  className?: string;
  aspect?: string;
  eager?: boolean;
}

export function Photo({ spec, motif, figure, className = "", aspect = "aspect-[16/10]", eager = false, detail = false }: PhotoProps) {
  const src = photos.get(spec.file);
  return (
    <figure className={`relative overflow-hidden rounded-card border border-line bg-surface-2 ${aspect} ${className}`}>
      {src ? (
        <img
          src={src}
          alt={spec.alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(160deg,var(--ep-surface),var(--ep-surface-2))]">
          <div aria-hidden="true" className="ep-grid-bg absolute inset-0 opacity-70 [background-size:24px_24px]" />
          <Schematic
            motif={motif}
            className={`absolute inset-[12%_10%_16%] h-[72%] w-[80%] ${detail ? "origin-[35%_60%] -scale-x-[1.35] scale-y-[1.35]" : ""}`}
          />
          <span className="sr-only">{spec.alt}</span>
        </div>
      )}
      <figcaption
        className={`absolute inset-x-0 bottom-0 px-4 pb-3 font-mono text-[11px] ${
          src ? "bg-gradient-to-t from-ink-950/70 to-transparent pt-8 text-white/90" : "pt-2 text-muted"
        }`}
      >
        Fig. {figure} · {spec.caption}
      </figcaption>
    </figure>
  );
}
