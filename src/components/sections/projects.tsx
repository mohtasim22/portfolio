import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/project-card";

const tilts = ["rotate-[-1.6deg]", "rotate-[1.2deg]", "rotate-[-0.8deg]"];

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-6 px-4 pt-24 sm:px-8">
      <div className="mb-9 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
        <h2 className="font-display text-[clamp(2rem,4.6vw,3.5rem)] font-extrabold tracking-tight">
          Things I&apos;ve built
        </h2>
        <p className="text-muted">All of them are live. Click through.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} tilt={tilts[i % tilts.length]} />
        ))}
      </div>
    </section>
  );
}
