import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { buttonStyles } from "@/components/ui/button";
import { CopyEmailButton } from "@/components/ui/copy-email-button";

export function Contact() {
  return (
    <section id="contact" className="border-t-2 border-edge bg-pop-orange text-ink-dark">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-8">
        <h2 className="max-w-[12ch] font-display text-[clamp(2.75rem,8vw,6.75rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
          Got an idea? Let&apos;s build it.
        </h2>
        <p className="mb-8 mt-5 max-w-[44ch] text-lg">
          Tell me what you&apos;re making or what&apos;s broken, and I&apos;ll reply with how I&apos;d
          approach it.
        </p>

        <div className="flex flex-wrap gap-3">
          <CopyEmailButton email={site.email} />
          <a href={site.github} target="_blank" rel="noopener noreferrer" className={buttonStyles()}>
            GitHub <ArrowUpRight className="size-4" />
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={buttonStyles()}>
            LinkedIn <ArrowUpRight className="size-4" />
          </a>
        </div>

        <p className="mt-6 text-sm">
          Or email me directly at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-4">
            {site.email}
          </a>
        </p>
      </div>
    </section>
  );
}
