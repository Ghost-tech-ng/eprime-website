import type { Division } from "../../content/site";

interface DivisionLogoProps {
  division: Division;
  className?: string;
  eager?: boolean;
}

export function DivisionLogo({ division, className = "h-7 w-auto", eager = false }: DivisionLogoProps) {
  const loading = eager ? "eager" : "lazy";
  return (
    <>
      <img
        src={`/brand/divisions/eprime-${division.key}.svg`}
        alt={division.name}
        width={5292}
        height={1386}
        loading={loading}
        className={`${className} dark:hidden`}
      />
      <img
        src={`/brand/divisions/eprime-${division.key}-on-dark.svg`}
        alt=""
        aria-hidden="true"
        width={5292}
        height={1386}
        loading={loading}
        className={`${className} hidden dark:block`}
      />
    </>
  );
}
