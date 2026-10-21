import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import { AnimatePresence, m } from "motion/react";
import { Check, Landmark, ScanLine, Users, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { formatNaira } from "../../content/products";

/* An illustrative mock-up of EduSmart360, built from the brochure examples. Not live data. */

type TabKey = "accounts" | "gate" | "wallet" | "parents";

const tabs: Array<{ key: TabKey; label: string; icon: LucideIcon }> = [
  { key: "accounts", label: "Accounts", icon: Landmark },
  { key: "gate", label: "Gate", icon: ScanLine },
  { key: "wallet", label: "Tuck shop", icon: Wallet },
  { key: "parents", label: "Parents", icon: Users },
];

function Accounts() {
  const collected = 31_420_000;
  const target = 40_000_000;
  const chain = ["Procurement", "Audit", "Director"];
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs text-muted">First Term collections</p>
        <p className="mt-1 font-mono text-2xl font-semibold tabular-nums">{formatNaira(collected)}</p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-2">
          <m.div
            className="h-full rounded-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${(collected / target) * 100}%` }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
          />
        </div>
        <p className="mt-2 font-mono text-[11px] text-muted">of {formatNaira(target)} invoiced · reconciled with bank</p>
      </div>
      <div className="rounded-control border border-line p-3">
        <p className="text-xs font-semibold">Purchase request · Lab reagents · {formatNaira(184_500)}</p>
        <ol className="mt-3 flex items-center gap-2">
          {chain.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              <m.span
                className="inline-flex items-center gap-1 rounded-full bg-primary-soft px-2 py-0.5 text-[11px] font-semibold text-primary-strong"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.35 }}
              >
                <Check size={11} strokeWidth={2.5} aria-hidden="true" />
                {step}
              </m.span>
              {i < chain.length - 1 ? <span className="h-px w-3 bg-line" aria-hidden="true" /> : null}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function Gate() {
  const inCount = 412;
  const total = 436;
  const r = 34;
  const c = 2 * Math.PI * r;
  const log = [
    { t: "7:31am", name: "Chiamaka Okafor", cls: "JSS 2" },
    { t: "7:30am", name: "Tobi Adeyemi", cls: "SS 1" },
    { t: "7:30am", name: "Osaro Igbinedion", cls: "Primary 5" },
  ];
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <svg viewBox="0 0 80 80" className="h-20 w-20 -rotate-90" aria-hidden="true">
          <circle cx="40" cy="40" r={r} fill="none" stroke="var(--ep-surface-2)" strokeWidth="8" />
          <m.circle
            cx="40"
            cy="40"
            r={r}
            fill="none"
            stroke="var(--ep-primary)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            animate={{ strokeDashoffset: c * (1 - inCount / total) }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          />
        </svg>
        <div>
          <p className="font-mono text-2xl font-semibold tabular-nums">
            {inCount} <span className="text-base text-muted">of {total} in</span>
          </p>
          <p className="text-xs text-muted">Tapped in at the main gate</p>
        </div>
      </div>
      <ul className="divide-y divide-line rounded-control border border-line text-xs">
        {log.map((row, i) => (
          <m.li
            key={row.name}
            className="flex items-center justify-between gap-3 px-3 py-2"
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.12 }}
          >
            <span className="font-mono text-muted">{row.t}</span>
            <span className="flex-1 truncate font-medium">{row.name}</span>
            <span className="text-muted">{row.cls}</span>
            <span className="rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-semibold text-primary-strong">Present</span>
          </m.li>
        ))}
      </ul>
    </div>
  );
}

function TuckShop() {
  const items = [
    { name: "Meat pie", qty: 1, amount: 600 },
    { name: "Zobo", qty: 1, amount: 500 },
    { name: "Exercise book", qty: 2, amount: 300 },
  ];
  const total = items.reduce((s, i) => s + i.amount, 0);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted">Card tap · Tuck shop reader 2</p>
        <span className="font-mono text-[11px] text-muted">12:04pm</span>
      </div>
      <ul className="space-y-2 text-sm">
        {items.map((it, i) => (
          <m.li
            key={it.name}
            className="flex justify-between"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
          >
            <span>
              {it.name}
              {it.qty > 1 ? <span className="text-muted"> × {it.qty}</span> : null}
            </span>
            <span className="font-mono tabular-nums">{formatNaira(it.amount)}</span>
          </m.li>
        ))}
      </ul>
      <div className="flex justify-between border-t border-line pt-3 text-sm font-semibold">
        <span>Total</span>
        <span className="font-mono tabular-nums">{formatNaira(total)}</span>
      </div>
      <div className="flex items-center justify-between rounded-control bg-primary-soft px-3 py-2 text-primary-strong">
        <span className="text-xs font-semibold">Wallet balance</span>
        <span className="font-mono text-sm font-semibold tabular-nums">{formatNaira(6100)}</span>
      </div>
    </div>
  );
}

function Parents() {
  return (
    <div className="space-y-3 text-sm">
      <div className="rounded-control border border-line p-3">
        <p className="text-xs text-muted">Second Term fees · 2 children</p>
        <div className="mt-1 flex items-center justify-between">
          <span className="font-mono text-lg font-semibold tabular-nums">{formatNaira(0)} owed</span>
          <span className="rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-semibold text-primary-strong">Paid · receipt ready</span>
        </div>
      </div>
      <div className="rounded-control border border-line p-3">
        <p className="text-xs text-muted">Results published</p>
        <div className="mt-2 grid grid-cols-3 gap-2 font-mono text-xs">
          {[
            ["Maths", "CA 36", "Exam 52"],
            ["English", "CA 34", "Exam 49"],
            ["Basic Sci.", "CA 38", "Exam 55"],
          ].map(([s, ca, ex]) => (
            <div key={s} className="rounded bg-surface-2 p-2">
              <p className="font-body font-semibold">{s}</p>
              <p className="text-muted">{ca}</p>
              <p className="text-muted">{ex}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-control border border-line p-3">
        <p className="text-xs text-muted">Message from the class teacher</p>
        <p className="mt-1">Inter-house sports on Friday. Please send white canvas shoes.</p>
      </div>
    </div>
  );
}

const panels: Record<TabKey, ComponentType> = {
  accounts: Accounts,
  gate: Gate,
  wallet: TuckShop,
  parents: Parents,
};

interface EduSmartScreenProps {
  className?: string;
}

export function EduSmartScreen({ className = "" }: EduSmartScreenProps) {
  const [active, setActive] = useState<TabKey>("accounts");
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActive((cur) => {
        const i = tabs.findIndex((t) => t.key === cur);
        return tabs[(i + 1) % tabs.length]?.key ?? "accounts";
      });
    }, 4800);
    return () => window.clearInterval(id);
  }, [paused]);

  const Panel = panels[active];

  return (
    <div
      className={`relative overflow-hidden rounded-card border border-line bg-surface shadow-[0_30px_60px_-30px_rgba(10,26,31,0.45)] ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
    >
      <div className="flex items-center justify-between border-b border-line bg-surface-2/60 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded bg-primary font-display text-[10px] font-bold text-on-primary">360</span>
          <span className="text-xs font-semibold">Greenfield College</span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted">Illustrative view</span>
      </div>

      <div className="grid grid-cols-[auto_1fr]">
        <div role="tablist" aria-label="EduSmart360 modules" aria-orientation="vertical" className="flex flex-col gap-1 border-r border-line p-2">
          {tabs.map(({ key, label, icon: Icon }) => {
            const selected = key === active;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                id={`es-tab-${key}`}
                aria-selected={selected}
                aria-controls="es-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(key)}
                onKeyDown={(e) => {
                  if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
                  e.preventDefault();
                  const i = tabs.findIndex((t) => t.key === key);
                  const next = tabs[(i + (e.key === "ArrowDown" ? 1 : tabs.length - 1)) % tabs.length];
                  if (next) {
                    setActive(next.key);
                    document.getElementById(`es-tab-${next.key}`)?.focus();
                  }
                }}
                className={`relative flex min-h-11 items-center gap-2 rounded-control px-2.5 text-left text-xs font-medium transition-colors sm:px-3 ${
                  selected ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {selected ? (
                  <m.span layoutId="es-tab-bg" className="absolute inset-0 rounded-control bg-primary-soft" transition={{ duration: 0.2 }} />
                ) : null}
                <Icon size={16} strokeWidth={1.75} className="relative" aria-hidden="true" />
                <span className="relative hidden sm:inline">{label}</span>
                <span className="sr-only sm:hidden">{label}</span>
              </button>
            );
          })}
        </div>

        <div id="es-panel" role="tabpanel" aria-labelledby={`es-tab-${active}`} className="relative min-h-[300px] p-4 sm:p-5">
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Panel />
            </m.div>
          </AnimatePresence>
        </div>
      </div>

      {!paused ? (
        <m.div
          key={active}
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-0.5 bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 4.8, ease: "linear" }}
        />
      ) : null}
    </div>
  );
}
