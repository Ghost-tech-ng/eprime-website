import type { DivisionKey } from "../../content/site";

type Pt = [number, number, number];
type Tone = "top" | "left" | "right" | "accent" | "accentSide" | "glass" | "none";
type Stroke = "ink" | "accent" | "primary" | "faint";

interface Shape {
  pts: Pt[];
  fill: Tone;
  stroke: Stroke;
  closed: boolean;
  dash?: boolean;
}

const fills: Record<Tone, string> = {
  top: "var(--ep-surface)",
  left: "var(--ep-surface-2)",
  right: "color-mix(in oklab, var(--ep-surface-2) 78%, var(--ep-fg))",
  accent: "var(--ep-accent-soft)",
  accentSide: "color-mix(in oklab, var(--ep-accent) 55%, var(--ep-surface))",
  glass: "color-mix(in oklab, var(--ep-primary-soft) 55%, transparent)",
  none: "none",
};

const strokes: Record<Stroke, string> = {
  ink: "var(--ep-fg)",
  accent: "var(--ep-accent)",
  primary: "var(--ep-primary)",
  faint: "color-mix(in oklab, var(--ep-fg) 35%, transparent)",
};

const S = 20;
const project = ([x, y, z]: Pt): [number, number] => [(x - y) * 0.866 * S, (x + y) * 0.5 * S - z * S];

function box(x: number, y: number, z: number, w: number, d: number, h: number, bronze = false): Shape[] {
  const t = z + h;
  return [
    { pts: [[x, y + d, z], [x + w, y + d, z], [x + w, y + d, t], [x, y + d, t]], fill: bronze ? "accentSide" : "left", stroke: bronze ? "accent" : "ink", closed: true },
    { pts: [[x + w, y, z], [x + w, y + d, z], [x + w, y + d, t], [x + w, y, t]], fill: bronze ? "accentSide" : "right", stroke: bronze ? "accent" : "ink", closed: true },
    { pts: [[x, y, t], [x + w, y, t], [x + w, y + d, t], [x, y + d, t]], fill: bronze ? "accent" : "top", stroke: bronze ? "accent" : "ink", closed: true },
  ];
}

const line = (pts: Pt[], stroke: Stroke = "ink", dash = false): Shape => ({ pts, fill: "none", stroke, closed: false, dash });

function arch(x: number, cy: number, r: number, z: number): Pt[] {
  return Array.from({ length: 17 }, (_, i) => {
    const a = (Math.PI * i) / 16;
    return [x, cy + r * Math.cos(a), z + r * Math.sin(a)] as Pt;
  });
}

function tech(): Shape[] {
  const screen = (u: number, v: number): Pt => [2 + 5.4 * u, 2 - 0.5 * v, 0.7 + 3.6 * v];
  const code = [0.18, 0.3, 0.42, 0.54].map((v, i) => line([screen(0.08 + (i % 2) * 0.06, v), screen(0.5 - i * 0.05, v)], "faint"));
  const curve = Array.from({ length: 14 }, (_, i) => {
    const u = i / 13;
    return screen(0.08 + u * 0.84, 0.66 + 0.26 * (Math.exp(u * 2.2) - 1) / (Math.exp(2.2) - 1));
  });
  return [
    ...box(0, 0, 0, 12, 8, 0.4),
    ...box(2, 2, 0.4, 5.4, 3.6, 0.28),
    { pts: [screen(0, 0), screen(1, 0), screen(1, 1), screen(0, 1)], fill: "top", stroke: "ink", closed: true },
    ...code,
    line(curve, "accent"),
    line([[2.6, 3.0, 0.68], [6.8, 3.0, 0.68]], "faint"),
    line([[2.6, 3.8, 0.68], [6.8, 3.8, 0.68]], "faint"),
    line([[3.8, 4.6, 0.68], [5.6, 4.6, 0.68]], "faint"),
    ...box(8.6, 3.2, 0.4, 1.6, 2.8, 0.14),
    { pts: [[8.8, 3.45, 0.55], [10.0, 3.45, 0.55], [10.0, 5.75, 0.55], [8.8, 5.75, 0.55]], fill: "glass", stroke: "primary", closed: true },
    ...box(9.4, 0.8, 0.4, 1.2, 1.2, 1.1),
  ];
}

function agro(): Shape[] {
  const beds = [2.1, 3.9, 5.7].flatMap((y) => box(1.4, y, 0.3, 9.2, 1.2, 0.35));
  const plants = [2.7, 4.5, 6.3].flatMap((y) =>
    Array.from({ length: 9 }, (_, i) => line([[2 + i, y, 0.65], [2 + i, y, 1.15]], "primary")),
  );
  const arches = [1, 3, 5, 7, 9, 11].map((x) => line(arch(x, 4.5, 3.6, 0.3)));
  const ridges = [0.25, 0.5, 0.75].map((t) => {
    const a = Math.PI * t;
    return line([[1, 4.5 + 3.6 * Math.cos(a), 0.3 + 3.6 * Math.sin(a)], [11, 4.5 + 3.6 * Math.cos(a), 0.3 + 3.6 * Math.sin(a)]], "faint");
  });
  return [
    ...box(0, 0, 0, 12.5, 9.5, 0.3),
    ...beds,
    ...plants,
    line([[1.6, 3.3, 0.68], [10.4, 3.3, 0.68]], "primary", true),
    line([[1.6, 5.1, 0.68], [10.4, 5.1, 0.68]], "primary", true),
    ...ridges,
    ...arches,
    { pts: arch(11, 4.5, 3.6, 0.3), fill: "glass", stroke: "ink", closed: true },
    line([[11.8, 8.6, 0.3], [11.8, 8.6, 2.2]], "accent"),
    ...box(11.5, 8.3, 2.2, 0.6, 0.6, 0.5, true),
  ];
}

function build(): Shape[] {
  const cols: Array<[number, number]> = [
    [0, 0],
    [5, 0],
    [10, 0],
    [0, 4.5],
    [5, 4.5],
  ];
  const rebar: Shape[] = [];
  for (const [dx, dy] of [
    [0, 0],
    [0.5, 0],
    [0, 0.5],
    [0.5, 0.5],
  ] as const) {
    rebar.push(line([[10 + dx, 4.5 + dy, 0.3], [10 + dx, 4.5 + dy, 5.2]], "accent"));
  }
  for (const z of [1, 1.8, 2.6, 3.4, 4.2]) {
    rebar.push({ pts: [[10, 4.5, z], [10.5, 4.5, z], [10.5, 5, z], [10, 5, z]], fill: "none", stroke: "accent", closed: true });
  }
  const mesh = [0.8, 1.6, 2.4, 3.2, 4.0].map((y) => line([[5.5, y, 4.55], [10.5, y, 4.55]], "faint"));
  const meshX = [6.5, 7.5, 8.5, 9.5].map((x) => line([[x, 0, 4.55], [x, 5, 4.55]], "faint"));
  return [
    ...box(-0.8, -0.8, 0, 12.6, 6.8, 0.3),
    ...cols.flatMap(([x, y]) => box(x, y, 0.3, 0.5, 0.5, 4)),
    ...box(0, 0, 4.3, 10.5, 0.5, 0.25),
    ...box(0, 0, 4.3, 0.5, 5, 0.25),
    ...box(5, 0, 4.3, 0.5, 5, 0.25),
    ...box(0, 0, 4.55, 5.5, 5, 0.22),
    ...mesh,
    ...meshX,
    ...box(0, 4.5, 4.3, 5.5, 0.5, 0.25),
    ...rebar,
    line([[11.2, -0.4, 0.3], [11.2, -0.4, 6.4], [3, -0.4, 6.4]], "faint"),
    line([[6, -0.4, 6.4], [6, -0.4, 5.2]], "faint", true),
  ];
}

function capital(): Shape[] {
  const heights = [1.2, 2, 3, 4.4];
  const stacks = heights.flatMap((h, i) => box(1 + i * 2.6, 1.6, 0.3, 1.8, 2.8, h, i === heights.length - 1));
  const tops = heights.map((h, i) => [1.9 + i * 2.6, 3, 0.3 + h + 0.5] as Pt);
  const ruling = heights.flatMap((h, i) =>
    Array.from({ length: Math.floor(h / 0.6) }, (_, k) =>
      line([[1 + i * 2.6, 4.4, 0.6 + k * 0.6], [2.8 + i * 2.6, 4.4, 0.6 + k * 0.6]], i === heights.length - 1 ? "accent" : "faint"),
    ),
  );
  return [...box(0, 0, 0, 12, 6, 0.3), ...stacks, ...ruling, line(tops, "primary", true)];
}

function benin(): Shape[] {
  const legs = [
    [0.6, 0.6],
    [10.6, 0.6],
    [0.6, 5.6],
    [10.6, 5.6],
  ].flatMap(([x, y]) => box(x ?? 0, y ?? 0, 0, 0.6, 0.6, 3.2));
  const tools = [1.4, 2.0, 2.6].flatMap((y, i) => [
    ...box(1.2, y, 3.6, 3.2 - i * 0.5, 0.3, 0.14),
    ...box(4.4 - i * 0.5, y - 0.1, 3.6, 0.8, 0.5, 0.3),
  ]);
  return [
    ...legs,
    ...box(0, 0, 3.2, 11.8, 6.8, 0.4),
    ...tools,
    ...box(6.4, 3.4, 3.6, 2.2, 1.6, 0.9),
    ...box(6.9, 3.8, 4.5, 1.2, 0.8, 0.1),
    ...box(9.2, 1.2, 3.6, 1.4, 1.4, 0.6, true),
    ...box(9.5, 1.5, 4.2, 0.8, 0.8, 1.2, true),
    line([[0.4, 6.8, 2.2], [11.4, 6.8, 2.2]], "faint"),
  ];
}

export type SchematicMotif = DivisionKey | "benin";

const scenes: Record<SchematicMotif, () => Shape[]> = { tech, agro, build, capital, benin };

interface SchematicProps {
  motif: SchematicMotif;
  className?: string;
}

export function Schematic({ motif, className = "" }: SchematicProps) {
  const shapes = scenes[motif]().map((s) => ({ ...s, flat: s.pts.map(project) }));
  const xs = shapes.flatMap((s) => s.flat.map((p) => p[0]));
  const ys = shapes.flatMap((s) => s.flat.map((p) => p[1]));
  const pad = 12;
  const minX = Math.min(...xs) - pad;
  const minY = Math.min(...ys) - pad;
  const w = Math.max(...xs) + pad - minX;
  const h = Math.max(...ys) + pad - minY;
  return (
    <svg viewBox={`${minX.toFixed(1)} ${minY.toFixed(1)} ${w.toFixed(1)} ${h.toFixed(1)}`} className={className} aria-hidden="true" focusable="false">
      {shapes.map((s, i) => {
        const d = s.flat.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
        const common = {
          fill: fills[s.fill],
          stroke: strokes[s.stroke],
          strokeWidth: s.stroke === "accent" ? 1.6 : 1,
          strokeLinejoin: "round" as const,
          strokeLinecap: "round" as const,
          vectorEffect: "non-scaling-stroke" as const,
          ...(s.dash ? { strokeDasharray: "3 3" } : {}),
        };
        return s.closed ? <polygon key={i} points={d} {...common} /> : <polyline key={i} points={d} {...common} />;
      })}
    </svg>
  );
}
