import { ThemeToggle } from "@/components/theme-toggle";

const swatches = [
  { name: "blue", className: "bg-pop-blue text-on-blue" },
  { name: "yellow", className: "bg-pop-yellow text-ink-dark" },
  { name: "green", className: "bg-pop-green text-ink-dark" },
  { name: "orange", className: "bg-pop-orange text-ink-dark" },
  { name: "card", className: "bg-card text-ink" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-8">
      <div className="flex items-center justify-between">
        <p className="font-display text-xl font-extrabold">mohtasim</p>
        <ThemeToggle />
      </div>

      <h1 className="mt-16 font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
        Setup works.
      </h1>
      <p className="mt-4 max-w-prose text-lg text-muted">
        This paragraph should be in Manrope and the heading in Gabarito.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        {swatches.map((s) => (
          <div
            key={s.name}
            className={`rounded-xl border-2 border-edge px-5 py-3 font-display font-extrabold shadow-pop ${s.className}`}
          >
            {s.name}
          </div>
        ))}
      </div>
    </main>
  );
}
