interface PrimeSymbolProps {
  className?: string;
  animate?: boolean;
  delay?: number;
  primeColor?: string;
  title?: string;
}

/* The E′ symbol. On load the E arrives first, then the stroke lifts into place. */
export function PrimeSymbol({ className, animate = false, delay = 0, primeColor = "var(--ep-accent)", title = "E-Prime" }: PrimeSymbolProps) {
  return (
    <svg viewBox="0 0 1056 896" className={className} role="img" aria-label={title}>
      <path
        className={animate ? "ep-rise" : undefined}
        style={animate ? { animationDelay: `${delay}ms` } : undefined}
        fill="currentColor"
        d="M0 896L0 209L731.5 209L676.5 345L173 345L173 480L642 480L642 614L173 614L173 759L712 759L712 896Z"
      />
      <path
        className={animate ? "ep-lift" : undefined}
        style={animate ? { animationDelay: `${delay + 260}ms` } : undefined}
        fill={primeColor}
        d="M764.6 325L924.6 325L1055.9 0L895.9 0Z"
      />
    </svg>
  );
}
