import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Ribbon } from "@/components/sections/ribbon";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ribbon />
        <Projects />
      </main>
    </>
  );
}
