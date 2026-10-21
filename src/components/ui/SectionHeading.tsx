import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  id?: string;
  className?: string;
}

export function SectionHeading({ eyebrow, title, lede, id, className = "" }: SectionHeadingProps) {
  return (
    <Reveal className={`max-w-3xl ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="ep-h2 mt-5">
        {title}
      </h2>
      {lede ? <p className="ep-lede mt-5">{lede}</p> : null}
    </Reveal>
  );
}
