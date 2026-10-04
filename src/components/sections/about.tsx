import { principles } from "@/data/about";

const markerColors = {
  yellow: "bg-pop-yellow",
  green: "bg-pop-green",
  orange: "bg-pop-orange",
};

const tilts = ["-rotate-1", "rotate-[0.8deg]", "rotate-[-0.5deg]"];

export function About() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-6xl scroll-mt-6 items-start gap-7 px-4 py-24 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12"
    >
      <h2 className="sr-only">About me</h2>

      <p className="font-display text-[clamp(1.375rem,2.6vw,1.875rem)] font-semibold leading-[1.3] tracking-[-0.01em]">
        I like owning a feature end to end, from the <span className="text-pop-blue">database</span>{" "}
        to the <span className="text-pop-blue">API</span> to the{" "}
        <span className="text-pop-blue">screen</span>. The tricky parts, like payments, double
        bookings and duplicate webhooks, are my favorite parts.
      </p>

      <ul className="grid gap-3.5">
        {principles.map((item, i) => (
          <li
            key={item.title}
            className={`relative rounded-2xl border-2 border-edge bg-card py-4 pl-[46px] pr-[18px] text-muted shadow-pop-md ${tilts[i % tilts.length]}`}
          >
            <span
              aria-hidden
              className={`absolute left-4 top-5 size-4 rounded-[5px] border-2 border-edge ${markerColors[item.color]}`}
            />
            <strong className="font-display font-extrabold text-ink">{item.title}</strong> {item.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
