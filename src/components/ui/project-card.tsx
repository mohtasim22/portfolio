import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { buttonStyles } from "@/components/ui/button";
import { ProjectArt } from "@/components/ui/project-art";
import Link from "next/link";
import { projectColors } from "@/components/ui/project-colors";


export function ProjectCard({
  project,
  tilt = "",
}: {
  project: Project;
  tilt?: string;
}) {
  return (
    <article
      className={`dots flex flex-col gap-3.5 rounded-[22px] border-2 border-edge p-[18px] shadow-card transition duration-300 ease-[cubic-bezier(0.3,1.6,0.5,1)] hover:-translate-y-1.5 hover:rotate-0 hover:shadow-card-lg ${projectColors[project.color].surface} ${tilt}`}
    >
      <ProjectArt kind={project.art} />

      <div className="flex flex-1 flex-col gap-3">
        <h3 className="mt-1 font-display text-[28px] font-extrabold tracking-tight">
          {project.name}
        </h3>
        <p className="opacity-90">{project.summary}</p>

        <ul aria-label="Built with" className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border-2 border-ink-dark bg-white px-2.5 py-0.5 font-display text-[13px] font-semibold text-ink-dark"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2.5 pt-1">
          <Link
            href={`/projects/${project.slug}`}
            className={buttonStyles({
              variant: project.color === "blue" ? "yellow" : "primary",
              size: "sm",
            })}
          >
            Case study
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyles({ size: "sm" })}
            >
              Live <ArrowUpRight className="size-4" />
            </a>
          )}
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles({ size: "sm" })}
          >
            Code
          </a>
        </div>
      </div>
    </article>
  );
}
