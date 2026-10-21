import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router";

interface SmartLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  "aria-label"?: string;
}

/* Division links switch to their own subdomains later, so internal and external targets share one component. */
export function SmartLink({ to, children, ...rest }: SmartLinkProps) {
  if (/^https?:/.test(to)) {
    return (
      <a href={to} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
}
