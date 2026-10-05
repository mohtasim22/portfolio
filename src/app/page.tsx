import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Ribbon } from "@/components/sections/ribbon";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};


export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <Ribbon />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
