import Link from "next/link";
import { site } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonStyles } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 sm:px-8">
      <Link href="/" className="inline-flex items-center gap-2.5 font-display text-[19px] font-extrabold">
        <span className="grid size-8 rotate-[-8deg] place-items-center rounded-[9px] border-2 border-edge bg-pop-blue text-base text-on-blue">
          M
        </span>
        {site.shortName}
      </Link>

      <nav aria-label="Main" className="flex items-center gap-2">
        <a href="#work" className="hidden px-2.5 py-2 font-semibold hover:text-pop-blue sm:block">
          Work
        </a>
        <a href="#about" className="hidden px-2.5 py-2 font-semibold hover:text-pop-blue sm:block">
          About
        </a>
        <a href="#contact" className={buttonStyles({ variant: "yellow", size: "sm" })}>
          Say hi
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
