import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

// Step 1: Define Skill type
type Skill = {
  skill_name: string;
  image: string;
  width: number;
  height?: number;
};

// Step 2: Safely cast readonly arrays to mutable Skill[]
const SKILL_DATA_TYPED = SKILL_DATA as unknown as Skill[];
const FRONTEND_SKILL_TYPED = FRONTEND_SKILL as unknown as Skill[];
const BACKEND_SKILL_TYPED = BACKEND_SKILL as unknown as Skill[];
const FULLSTACK_SKILL_TYPED = FULLSTACK_SKILL as unknown as Skill[];
const OTHER_SKILL_TYPED = OTHER_SKILL as unknown as Skill[];

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      {/* SKILL_DATA */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {SKILL_DATA_TYPED.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* FRONTEND_SKILL */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {FRONTEND_SKILL_TYPED.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* BACKEND_SKILL */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {BACKEND_SKILL_TYPED.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* FULLSTACK_SKILL */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {FULLSTACK_SKILL_TYPED.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* OTHER_SKILL */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {OTHER_SKILL_TYPED.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* Background Video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
