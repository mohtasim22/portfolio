import { site } from "@/data/site";
import { LocalTime } from "@/components/ui/live-clock";

export function Footer() {
  return (
    <footer className="bg-pop-orange text-ink-dark">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 border-t-2 border-ink-dark/15 px-4 pb-8 pt-6 text-sm sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>
          Made in Dhaka · <LocalTime className="font-bold tabular-nums" /> {site.utcLabel}
        </p>
      </div>
    </footer>
  );
}
