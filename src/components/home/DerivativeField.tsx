import { useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";

/* f(x) is a compounding curve; the tangent shows its derivative, the "prime" in E-Prime. */
const K = 3;
const DENOM = Math.exp(K) - 1;
const f = (x: number) => (Math.exp(K * x) - 1) / DENOM;
const df = (x: number) => (K * Math.exp(K * x)) / DENOM;

const W = 600;
const H = 420;
const PAD_X = 48;
const PAD_Y = 40;
const SPAN_X = W - PAD_X * 2;
const SPAN_Y = H - PAD_Y * 2;
const toX = (x: number) => PAD_X + x * SPAN_X;
const toY = (y: number) => H - PAD_Y - y * SPAN_Y;

const curve = Array.from({ length: 81 }, (_, i) => {
  const x = i / 80;
  return `${i === 0 ? "M" : "L"}${toX(x).toFixed(1)} ${toY(f(x)).toFixed(1)}`;
}).join(" ");

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

export function DerivativeField() {
  const [x, setX] = useState(0.64);
  const touched = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      if (touched.current) return;
      const t = (now - start) / 1000;
      setX(0.5 + 0.36 * Math.sin(t * 0.55 - 0.4));
      raf = requestAnimationFrame(tick);
    };
    const delay = window.setTimeout(() => (raf = requestAnimationFrame(tick)), 1800);
    return () => {
      window.clearTimeout(delay);
      cancelAnimationFrame(raf);
    };
  }, []);

  const onMove = (e: PointerEvent<SVGSVGElement>) => {
    touched.current = true;
    const rect = e.currentTarget.getBoundingClientRect();
    const vx = ((e.clientX - rect.left) / rect.width) * W;
    setX(clamp((vx - PAD_X) / SPAN_X, 0.04, 0.96));
  };

  const y = f(x);
  const slope = df(x);
  const reach = 0.16;
  const x1 = x - reach;
  const x2 = x + reach;
  const px = toX(x);
  const py = toY(y);

  return (
    <figure className="relative">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full touch-pan-y select-none"
        onPointerMove={onMove}
        onPointerDown={onMove}
        role="img"
        aria-label="A compounding growth curve with its tangent line. The slope of the tangent is the derivative, which grows as the curve rises."
      >
        <defs>
          <linearGradient id="df-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--ep-primary)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="var(--ep-primary)" stopOpacity="0" />
          </linearGradient>
          <clipPath id="df-clip">
            <rect x={PAD_X} y={0} width={SPAN_X} height={H - PAD_Y} />
          </clipPath>
        </defs>

        {[0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1={PAD_X} x2={W - PAD_X} y1={toY(g)} y2={toY(g)} stroke="var(--ep-line)" strokeDasharray="2 6" />
        ))}
        <line x1={PAD_X} x2={W - PAD_X} y1={H - PAD_Y} y2={H - PAD_Y} stroke="var(--ep-muted)" strokeOpacity="0.5" />
        <line x1={PAD_X} x2={PAD_X} y1={PAD_Y - 10} y2={H - PAD_Y} stroke="var(--ep-muted)" strokeOpacity="0.5" />

        <path d={`${curve} L${toX(1)} ${toY(0)} L${toX(0)} ${toY(0)} Z`} fill="url(#df-fill)" className="ep-rise" style={{ animationDelay: "900ms" }} />
        <path
          d={curve}
          pathLength={1}
          fill="none"
          stroke="var(--ep-primary)"
          strokeWidth="3"
          strokeLinecap="round"
          className="ep-draw"
          style={{ animationDelay: "300ms" }}
        />

        <g className="ep-rise" style={{ animationDelay: "1500ms" }} clipPath="url(#df-clip)">
          <line x1={px} x2={px} y1={py} y2={H - PAD_Y} stroke="var(--ep-muted)" strokeDasharray="3 5" />
          <line
            x1={toX(x1)}
            y1={toY(y + slope * (x1 - x))}
            x2={toX(x2)}
            y2={toY(y + slope * (x2 - x))}
            stroke="var(--ep-fg)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <g className="ep-rise" style={{ animationDelay: "1500ms" }}>
          <circle cx={px} cy={py} r="14" fill="var(--ep-primary)" fillOpacity="0.18" />
          <circle cx={px} cy={py} r="6" fill="var(--ep-bg)" stroke="var(--ep-fg)" strokeWidth="2.5" />
        </g>

        <text x={W - PAD_X} y={H - 14} textAnchor="end" className="fill-muted font-mono text-[13px]">
          time →
        </text>
        <text x={PAD_X - 8} y={PAD_Y - 18} className="fill-muted font-mono text-[13px]">
          value
        </text>
      </svg>

      <figcaption
        className="ep-rise absolute left-3 top-3 rounded-control border border-line bg-surface/85 px-3 py-2 font-mono text-[12px] leading-relaxed backdrop-blur sm:left-14 sm:top-6"
        style={{ animationDelay: "1600ms" }}
      >
        <span className="text-muted">f(x) </span>
        <span className="tabular-nums">{y.toFixed(2)}</span>
        <br />
        <span className="text-primary">f′(x) </span>
        <span className="tabular-nums">{slope.toFixed(2)}</span>
        <span className="text-muted"> ← rate of growth</span>
      </figcaption>
    </figure>
  );
}
