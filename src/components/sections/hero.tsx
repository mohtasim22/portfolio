import { site } from "@/data/site";
import { buttonStyles } from "@/components/ui/button";
import { Terminal } from "@/components/ui/terminal";
import { Starburst } from "@/components/ui/starburst";
import { LiveClock } from "@/components/ui/live-clock";
import { TechTiles } from "@/components/ui/tech-tiles";

const highlightColors = {
  orange: "bg-pop-orange",
  yellow: "bg-pop-yellow",
  green: "bg-pop-green",
};

function Highlight({
  color,
  children,
}: {
  color: keyof typeof highlightColors;
  children: React.ReactNode;
}) {
  return (
    <span className="relative whitespace-nowrap text-ink-dark">
      <span
        aria-hidden
        className={`absolute -inset-x-2 inset-y-[4%] -z-10 -rotate-1 rounded-md ${highlightColors[color]}`}
      />
      {children}
    </span>
  );
}

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-22 pt-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center lg:pt-16">
      {/* Left: text */}
      <div>
        <p className="mb-4 font-semibold text-muted">
          {site.role} · {site.location}
        </p>

        <h1 className="relative isolate max-w-[13ch] font-display text-[clamp(2.5rem,7vw,6rem)] font-extrabold leading-none tracking-[-0.035em] text-balance">
          <span className="mb-3 block text-[0.5em] tracking-tight text-muted">
            Got an app idea?
          </span>
          I&apos;ll <Highlight color="orange">build</Highlight> it,{" "}
          <Highlight color="yellow">launch</Highlight> it and{" "}
          <Highlight color="green">fix</Highlight> it.
        </h1>

        <p className="mb-7 mt-6 max-w-[46ch] text-lg text-muted sm:text-[19px]">
          Hi, I&apos;m Mohtasim. I turn ideas into real products with Next.js,
          Express and PostgreSQL, and I sweat the details that keep them
          working.
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="#work" className={buttonStyles({ variant: "primary" })}>
            See my projects
          </a>
          <a href="#contact" className={buttonStyles()}>
            Get in touch
          </a>
        </div>
      </div>

      {/* Right: stickers. Free-flowing on phones, placed exactly on large screens */}
      <div className="relative flex flex-wrap items-center gap-3.5 lg:block lg:min-h-[330px]">
        <Terminal className="lg:absolute lg:left-0 lg:top-9 lg:z-[1]" />
        <Starburst className="lg:absolute lg:right-1 lg:top-0 lg:z-[2]">
          Full-stack
          <br />
          developer
        </Starburst>
        <LiveClock className="lg:absolute lg:right-2 lg:top-[172px] lg:z-[2]" />
        <TechTiles className="w-full lg:absolute lg:left-0 lg:top-[200px] lg:w-[262px]" />
      </div>
    </section>
  );
}
