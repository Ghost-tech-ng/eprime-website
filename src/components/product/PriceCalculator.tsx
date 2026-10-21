import { useId, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { edusmart, formatNaira, formatNumber, tierFor } from "../../content/products";

const MIN = 100;
const MAX = 2000;
const SCHOOL_DAYS_PER_TERM = 60;

export function PriceCalculator() {
  const [students, setStudents] = useState(600);
  const [draft, setDraft] = useState<string | null>(null);
  const id = useId();
  const tier = tierFor(students);
  const total = students * tier.perStudent;
  const perDay = Math.round(tier.perStudent / SCHOOL_DAYS_PER_TERM);
  const fill = Math.min(100, ((students - MIN) / (MAX - MIN)) * 100);

  const set = (v: number) => setStudents(Math.min(MAX * 5, Math.max(MIN, Math.round(v))));

  return (
    <div className="overflow-hidden rounded-card border border-line bg-surface">
      <div className="border-b border-line p-6 md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <label htmlFor={`${id}-range`} className="text-sm font-semibold">
            How many students does your school have?
          </label>
          <div className="flex items-center gap-2">
            <input
              id={`${id}-number`}
              type="number"
              inputMode="numeric"
              min={MIN}
              value={draft ?? students}
              onChange={(e) => {
                setDraft(e.target.value);
                const n = Number(e.target.value);
                if (n >= MIN) set(n);
              }}
              onBlur={() => setDraft(null)}
              aria-label="Number of students"
              className="w-28 rounded-control border border-line bg-bg px-3 py-2 text-right font-mono text-lg font-semibold tabular-nums"
            />
            <span className="text-sm text-muted">students</span>
          </div>
        </div>
        <input
          id={`${id}-range`}
          type="range"
          min={MIN}
          max={MAX}
          step={10}
          value={Math.min(students, MAX)}
          onChange={(e) => set(Number(e.target.value))}
          className="mt-6 h-2 w-full cursor-pointer appearance-none rounded-full accent-[var(--ep-primary)]"
          style={{ background: `linear-gradient(to right, var(--ep-primary) ${fill}%, var(--ep-surface-2) ${fill}%)` }}
        />
        <div className="mt-2 flex justify-between font-mono text-[11px] text-muted">
          <span>{MIN}</span>
          <span>{formatNumber(MAX)}+</span>
        </div>
      </div>

      <dl className="grid gap-px bg-line sm:grid-cols-3" aria-live="polite">
        <div className="bg-surface p-6">
          <dt className="text-xs text-muted">Your tier</dt>
          <dd className="mt-2 font-semibold">{tier.label}</dd>
          <dd className="mt-1 font-mono text-sm text-muted tabular-nums">{formatNaira(tier.perStudent)} per student</dd>
        </div>
        <div className="bg-surface p-6">
          <dt className="text-xs text-muted">Collected through fees, per term</dt>
          <dd className="mt-2 font-mono text-2xl font-semibold tabular-nums">
            <AnimatePresence mode="popLayout" initial={false}>
              <m.span
                key={total}
                className="inline-block"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.16 }}
              >
                {formatNaira(total)}
              </m.span>
            </AnimatePresence>
          </dd>
          <dd className="mt-1 text-xs text-muted">About {formatNaira(perDay)} per child per school day</dd>
        </div>
        <div className="bg-primary-soft p-6 text-primary-strong">
          <dt className="text-xs font-semibold">Paid from the school's budget</dt>
          <dd className="mt-2 font-mono text-2xl font-semibold tabular-nums">{formatNaira(0)}</dd>
          <dd className="mt-1 text-xs">The fee goes on each student's invoice</dd>
        </div>
      </dl>

      <p className="border-t border-line px-6 py-4 text-xs text-muted md:px-8">
        Prices per student, per term. Includes {edusmart.included.join(", ").toLowerCase()}. Day figure assumes about {SCHOOL_DAYS_PER_TERM}{" "}
        school days a term.
      </p>
    </div>
  );
}
