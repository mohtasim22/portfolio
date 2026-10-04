import type { Project } from "@/data/projects";

function Call() {
  return (
    <>
      <div className="flex gap-2.5">
        <div className="grid aspect-4/3 flex-1 place-items-center rounded-[10px] border-2 border-edge bg-pop-yellow font-display font-extrabold text-ink-dark">
          Tutor
        </div>
        <div className="grid aspect-4/3 flex-1 place-items-center rounded-[10px] border-2 border-edge bg-pop-orange font-display font-extrabold text-ink-dark">
          You
        </div>
      </div>
      <svg viewBox="0 0 200 34" preserveAspectRatio="none" className="h-[34px] w-full" fill="none">
        <path
          d="M4 26 C 30 2, 50 2, 70 20 S 110 34, 130 14 S 170 4, 196 22"
          className="stroke-pop-blue"
          strokeWidth={4}
          strokeLinecap="round"
        />
      </svg>
    </>
  );
}

// 0 = free, 1 = booked, 2 = awaiting payment
const days = [0, 1, 1, 1, 0, 0, 0, 0, 0, 2, 2, 0, 1, 1];
const dayColors = ["bg-card", "bg-pop-yellow", "bg-pop-orange"];

function Calendar() {
  return (
    <>
      <div className="grid grid-cols-7 gap-[5px]">
        {days.map((day, i) => (
          <span key={i} className={`aspect-square rounded-md border-2 border-edge ${dayColors[day]}`} />
        ))}
      </div>
      <div className="flex flex-wrap gap-3.5 text-xs font-semibold text-muted">
        <span className="inline-flex items-center gap-1.5">
          <span className="size-2.5 rounded-[3px] border-2 border-edge bg-pop-yellow" /> Booked
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="size-2.5 rounded-[3px] border-2 border-edge bg-pop-orange" /> Awaiting payment
        </span>
      </div>
    </>
  );
}

const steps = [
  { label: "Booked", dot: "bg-pop-green" },
  { label: "Picked up", dot: "bg-pop-green" },
  { label: "In transit", dot: "bg-pop-orange" },
  { label: "Delivered", dot: "bg-card" },
];

function Tracking() {
  return (
    <ul className="grid gap-[9px]">
      {steps.map((step) => (
        <li key={step.label} className="flex items-center gap-2.5 font-display text-sm font-semibold">
          <span className={`size-[22px] shrink-0 rounded-full border-2 border-edge ${step.dot}`} />
          {step.label}
        </li>
      ))}
    </ul>
  );
}

const arts = { call: Call, calendar: Calendar, tracking: Tracking };

export function ProjectArt({ kind }: { kind: Project["art"] }) {
  const Art = arts[kind];
  return (
    <div
      aria-hidden
      className="grid min-h-[170px] content-center gap-2.5 rounded-[14px] border-2 border-edge bg-card p-3.5 text-ink"
    >
      <Art />
    </div>
  );
}
