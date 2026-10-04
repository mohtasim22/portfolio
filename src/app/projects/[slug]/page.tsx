import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, getProject } from "@/data/projects";
import { projectColors } from "@/components/ui/project-colors";
import { buttonStyles } from "@/components/ui/button";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { Contact } from "@/components/sections/contact";

// Only the slugs listed below exist; anything else is a 404
export const dynamicParams = false;

// Build one page per project at build time
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// Tab title and description for each project page
type ProjectPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata(props: ProjectPageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.name} · Mohtasim Fahim`,
    description: project.caseStudy.overview,
  };
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 font-display text-3xl font-extrabold tracking-tight">{children}</h2>;
}

export default async function ProjectPage(props: ProjectPageProps) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const cs = project.caseStudy;
  const colors = projectColors[project.color];
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const host = project.liveUrl ? new URL(project.liveUrl).host : project.name;

  return (
    <main className="overflow-x-clip">
      {/* Colored header */}
      <header className={`dots border-y-2 border-edge ${colors.surface}`}>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-8 lg:py-20">
          <Link
            href="/#work"
            className="mb-8 inline-flex items-center gap-1.5 font-display font-semibold opacity-80 hover:opacity-100"
          >
            <ArrowLeft className="size-4" /> All projects
          </Link>
          <h1 className="font-display text-[clamp(2.75rem,8vw,6rem)] font-extrabold leading-none tracking-[-0.035em]">
            {project.name}
          </h1>
          <p className="mt-5 max-w-[52ch] text-lg opacity-90 sm:text-xl">{cs.overview}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles({ variant: project.color === "blue" ? "yellow" : "primary" })}
              >
                Visit live site <ArrowUpRight className="size-4" />
              </a>
            )}
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className={buttonStyles()}>
              View code <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Content + sidebar */}
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:py-24">
        <article className="min-w-0 space-y-14">
          {cs.screenshots && cs.screenshots.length > 0 && (
            <section className="space-y-8">
              <h2 className="sr-only">Screenshots</h2>
              {cs.screenshots.map((shot) => (
                <BrowserFrame
                  key={shot.src}
                  src={shot.src}
                  alt={shot.alt}
                  url={host}
                  sizes="(min-width: 1024px) 760px, 100vw"
                />
              ))}
            </section>
          )}

          <section>
            <SectionTitle>The problem</SectionTitle>
            <p className="max-w-[65ch] text-lg text-muted">{cs.problem}</p>
          </section>

          <section>
            <SectionTitle>What I built</SectionTitle>
            <ul className="grid gap-3">
              {cs.built.map((item) => (
                <li key={item} className="flex gap-3 text-lg">
                  <span aria-hidden className={`mt-1.5 size-3.5 shrink-0 rounded-[4px] border-2 border-edge ${colors.bg}`} />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <SectionTitle>The hardest part</SectionTitle>
            <div className="rounded-[22px] border-2 border-edge bg-card p-6 shadow-pop-lg">
              <h3 className="font-display text-xl font-extrabold">{cs.hardest.title}</h3>
              <p className="mt-3 text-muted">{cs.hardest.text}</p>
              {cs.hardest.code && (
                <pre className="mt-5 overflow-x-auto rounded-xl border-2 border-edge bg-[#15161f] p-4 font-mono text-sm leading-relaxed text-[#e9eaf5]">
                  <code>{cs.hardest.code}</code>
                </pre>
              )}
            </div>
          </section>
        </article>

        {/* Sidebar: sticks while you scroll on large screens */}
        <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
          <div className="rounded-2xl border-2 border-edge bg-card p-5 shadow-pop">
            <h2 className="mb-3 font-display text-lg font-extrabold">Built with</h2>
            <ul className="flex flex-wrap gap-2">
              {cs.stack.map((tech) => (
                <li key={tech} className="rounded-[10px] border-2 border-edge px-2.5 py-1 font-display text-sm font-bold">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {cs.demoLogins && cs.demoLogins.length > 0 && (
            <div className="rounded-2xl border-2 border-edge bg-card p-5 shadow-pop">
              <h2 className="mb-3 font-display text-lg font-extrabold">Try it yourself</h2>
              <ul className="space-y-3 text-sm">
                {cs.demoLogins.map((login) => (
                  <li key={login.role}>
                    <p className="font-display font-bold">{login.role}</p>
                    <p className="font-mono text-muted">{login.email}</p>
                    <p className="font-mono text-muted">{login.password}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      {/* Next project */}
      <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-8">
        <Link
          href={`/projects/${next.slug}`}
          className={`dots group flex items-center justify-between gap-6 rounded-[22px] border-2 border-edge p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg sm:p-8 ${projectColors[next.color].surface}`}
        >
          <div>
            <p className="font-semibold opacity-80">Next project</p>
            <p className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{next.name}</p>
          </div>
          <ArrowRight className="size-8 shrink-0 transition group-hover:translate-x-1" />
        </Link>
      </div>

      <Contact />
    </main>
  );
}
