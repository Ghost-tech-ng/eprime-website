type Status = "Live" | "Beta" | "Coming" | "Active" | "Forming";

const styles: Record<Status, string> = {
  Live: "ep-badge-live",
  Active: "ep-badge-live",
  Beta: "ep-badge-beta",
  Coming: "ep-badge-soon",
  Forming: "ep-badge-soon",
};

interface BadgeProps {
  status: Status;
  className?: string;
}

export function Badge({ status, className = "" }: BadgeProps) {
  const live = status === "Live" || status === "Active";
  return (
    <span className={`ep-badge ${styles[status]} ${className}`}>
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full bg-current ${live ? "ep-live-dot" : "opacity-60"}`} />
      {status}
    </span>
  );
}
