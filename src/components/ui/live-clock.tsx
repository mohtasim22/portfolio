"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/data/site";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: site.timeZone,
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

export function useLocalTime() {
  return useSyncExternalStore(
    subscribe,
    () => formatter.format(new Date()), // in the browser: the real time
    () => "--:--", // on the server: a placeholder
  );
}

export function LocalTime({ className = "" }: { className?: string }) {
  const time = useLocalTime();
  return <time className={className}>{time}</time>;
}

// Tells React to re-check the time every 15 seconds
function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 15_000);
  return () => clearInterval(id);
}

// Sticker version, used in the hero
export function LiveClock({ className = "" }: { className?: string }) {
  const time = useLocalTime();

  return (
    <div
      className={`grid shrink-0 rotate-[5deg] place-items-center gap-0.5 rounded-2xl border-2 border-edge bg-pop-green px-[18px] py-2.5 text-center font-display font-extrabold leading-tight text-ink-dark shadow-pop ${className}`}
    >
      <small className="text-xs font-semibold">Dhaka now</small>
      <time className="text-[28px] tracking-tight tabular-nums">{time}</time>
      <small className="text-xs font-semibold">{site.utcLabel}</small>
    </div>
  );
}
