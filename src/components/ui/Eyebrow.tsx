import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p className={`ep-eyebrow flex items-center gap-3 ${className}`}>
      <span aria-hidden="true" className="h-px w-8 bg-primary" />
      {children}
    </p>
  );
}
