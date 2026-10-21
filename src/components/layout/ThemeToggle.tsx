import { Moon, Sun } from "lucide-react";

/* Both icons render on the server; CSS shows the right one, so hydration never mismatches. */
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("ep-theme", next);
    } catch {
      /* storage blocked: the choice lasts for this page view */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-control text-fg/80 transition-colors hover:bg-surface-2 hover:text-fg"
      aria-label="Switch colour theme"
    >
      <Sun size={18} strokeWidth={1.75} className="hidden dark:block" aria-hidden="true" />
      <Moon size={18} strokeWidth={1.75} className="block dark:hidden" aria-hidden="true" />
    </button>
  );
}
