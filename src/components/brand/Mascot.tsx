import { useId } from "react";

interface MascotProps {
  className?: string;
  title?: string;
  wave?: boolean;
}

export function Mascot({ className = "", title, wave = true }: MascotProps) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const bronze = `${id}b`;
  const body = `${id}c`;
  const screen = `${id}s`;
  return (
    <svg
      viewBox="0 0 240 300"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      <defs>
        <linearGradient id={bronze} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E0B062" />
          <stop offset="0.55" stopColor="#B9822A" />
          <stop offset="1" stopColor="#7A5216" />
        </linearGradient>
        <linearGradient id={body} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#C9923A" />
          <stop offset="1" stopColor="#8A5E12" />
        </linearGradient>
        <linearGradient id={screen} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#123038" />
          <stop offset="1" stopColor="#0A1A1F" />
        </linearGradient>
      </defs>

      <ellipse cx="120" cy="290" rx="64" ry="7" fill="var(--ep-fg)" opacity="0.12" />

      <g className="ep-bob">
        <polygon className="ep-antenna" points="108,47 127,47 143,8 124,8" fill="#B9822A" />
        <rect x="112" y="42" width="16" height="12" rx="3" fill="#8A5E12" />

        <circle cx="46" cy="104" r="9" fill="#8A5E12" />
        <circle cx="194" cy="104" r="9" fill="#8A5E12" />
        <rect x="50" y="52" width="140" height="104" rx="30" fill={`url(#${bronze})`} />
        <path d="M62 70 Q70 58 86 56 Q74 66 72 80 Z" fill="#5FA897" opacity="0.55" />
        <path d="M176 138 Q182 128 186 118 Q186 136 176 146 Z" fill="#5FA897" opacity="0.5" />
        <rect x="66" y="72" width="108" height="62" rx="18" fill={`url(#${screen})`} />
        <g className="ep-blink-eye">
          <circle cx="100" cy="103" r="9" fill="#5FD0BE" />
          <circle cx="140" cy="103" r="9" fill="#5FD0BE" />
          <circle cx="103" cy="100" r="3" fill="#E8FFF9" />
          <circle cx="143" cy="100" r="3" fill="#E8FFF9" />
        </g>
        <path d="M108 120 Q120 128 132 120" fill="none" stroke="#5FD0BE" strokeWidth="3" strokeLinecap="round" />

        <rect x="105" y="156" width="30" height="12" rx="3" fill="#7A5216" />

        <rect x="42" y="176" width="22" height="58" rx="11" fill="#8A5E12" />
        <g className={wave ? "ep-wave" : undefined}>
          <rect x="176" y="150" width="22" height="58" rx="11" fill="#8A5E12" transform="rotate(32 187 204)" />
        </g>

        <rect x="62" y="166" width="116" height="92" rx="24" fill={`url(#${body})`} />
        <path d="M68 236 Q76 250 96 254 Q78 256 70 248 Z" fill="#5FA897" opacity="0.5" />
        <rect x="88" y="186" width="64" height="50" rx="10" fill="#F6EBD6" opacity="0.18" />
        <g transform="translate(96 194) scale(0.04)" fill="#F6EBD6">
          <path d="M0 896L0 209L731.5 209L676.5 345L173 345L173 480L642 480L642 614L173 614L173 759L712 759L712 896Z" />
          <path d="M764.6 325L924.6 325L1055.9 0L895.9 0Z" fill="#5FD0BE" />
        </g>

        <rect x="84" y="256" width="24" height="22" rx="6" fill="#7A5216" />
        <rect x="132" y="256" width="24" height="22" rx="6" fill="#7A5216" />
        <rect x="76" y="274" width="38" height="12" rx="6" fill="#8A5E12" />
        <rect x="126" y="274" width="38" height="12" rx="6" fill="#8A5E12" />
      </g>
    </svg>
  );
}
