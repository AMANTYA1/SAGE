import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import SkillsGrid from "@/components/SkillsGrid";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <SkillsGrid />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
