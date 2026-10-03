const points =
  "50,0 59.1,10 71.7,5 75.6,17.9 89.1,18.8 86.9,32.2 98.7,38.9 91,50 98.7,61.1 86.9,67.8 89.1,81.2 75.6,82.1 71.7,95 59.1,90 50,100 40.9,90 28.3,95 24.4,82.1 10.9,81.2 13.1,67.8 1.3,61.1 9,50 1.3,38.9 13.1,32.2 10.9,18.8 24.4,17.9 28.3,5 40.9,10";

export function Starburst({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative isolate grid size-28 shrink-0 rotate-[10deg] place-items-center text-center font-display text-[13px] font-extrabold leading-tight text-ink-dark lg:size-[142px] lg:text-base ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        aria-hidden
        className="absolute inset-0 -z-10 size-full overflow-visible drop-shadow-[3px_3px_0_var(--pop-shadow)] animate-[spin_24s_linear_infinite] motion-reduce:animate-none"
      >
        <polygon points={points} className="fill-pop-yellow stroke-edge" strokeWidth={1.6} strokeLinejoin="round" />
      </svg>
      <span>{children}</span>
    </div>
  );
}
