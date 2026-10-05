import Link from "next/link";
import { projects } from "@/data/projects";
import { buttonStyles } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-4 pb-24 pt-12 sm:px-8 lg:pt-20">
      <p
        aria-hidden
        className="font-display text-[clamp(6rem,22vw,14rem)] font-extrabold leading-none tracking-[-0.05em]"
      >
        4
        <span className="relative isolate inline-block px-1 text-ink-dark">
          <span className="absolute inset-0 -z-10 rotate-[-4deg] rounded-2xl border-2 border-edge bg-pop-yellow shadow-pop" />
          0
        </span>
        4
      </p>

      <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
        This page took a wrong turn.
      </h1>
      <p className="mt-4 max-w-[48ch] text-lg text-muted">
        The link might be old, or the page moved. Here&apos;s where you probably wanted to go:
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className={buttonStyles({ variant: "primary" })}>
          Back to home
        </Link>
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className={buttonStyles()}>
            {project.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
