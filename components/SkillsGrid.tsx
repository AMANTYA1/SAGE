"use client";
import Image from "next/image";

export const SKILL_DATA = [
  { skill_name: "HTML", image: "/skills/html.png" },
  { skill_name: "CSS", image: "/skills/css.png" },
  { skill_name: "JavaScript", image: "/skills/js.png" },
  { skill_name: "Tailwind CSS", image: "/skills/tailwind.png" },
  { skill_name: "React", image: "/skills/react.png" },
  { skill_name: "TypeScript", image: "/skills/ts.png" },
  { skill_name: "Next.js 14", image: "/skills/next.png" },
  { skill_name: "Node.js", image: "/skills/node.png" },
  { skill_name: "MongoDB", image: "/skills/mongodb.png" },
  { skill_name: "Express.js", image: "/skills/express.png" },
] as const;

export default function SkillsGrid() {
  return (
    <section className="py-16 px-4 bg-gray-900- text-white text-center">
      <h2 className="text-4xl font-bold mb-12">My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center perspective-[1000px]">
        {SKILL_DATA.map((skill) => (
          <div
            key={skill.skill_name}
            className="flex flex-col items-center transition-transform duration-500 transform-gpu hover:rotate-x-6 hover:rotate-y-6 hover:scale-105"
          >
           <Image
  src={skill.image}
  alt={skill.skill_name}
  width={70}
  height={50}
  className="mb-2 object-contain"
/>

            <p className="text-lg font-medium">{skill.skill_name}</p>
          </div>
        ))}
      </div>

      {/* 3D Resume Button */}
      <div className="mt-16 flex justify-center">
        <a
          href="/skills/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-8 py-4 text-white font-bold text-lg bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-x-3 hover:rotate-y-3"
        >
          <span className="block relative z-10">View Resume</span>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 blur-md opacity-50 rounded-2xl z-0"></div>
        </a>
      </div>
    </section>
  );
}
