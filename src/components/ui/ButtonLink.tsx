import type { ReactNode } from "react";
import { Link } from "react-router";

type Variant = "accent" | "solid" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  accent: "ep-btn-primary",
  solid: "ep-btn-solid",
  secondary: "ep-btn-secondary",
  ghost: "ep-btn-ghost",
};

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

export function ButtonLink({ to, children, variant = "solid", className = "" }: ButtonLinkProps) {
  const cls = `ep-btn ${variants[variant]} ${className}`;
  const external = /^(https?:|mailto:|tel:)/.test(to);
  if (external) {
    const newTab = to.startsWith("http");
    return (
      <a href={to} className={cls} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  );
}
