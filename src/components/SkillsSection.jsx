import { useState } from "react";
import { cn } from "@/lib/utils";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiFigma,
  SiPython,
  SiCplusplus,
} from "react-icons/si";

import { DiJava } from "react-icons/di"; // Java icon

const skills = [
  // Frontend
  {
    name: "HTML/CSS",
    level: 95,
    category: "frontend",
    icon: (
      <div className="flex gap-1 text-xl">
        <SiHtml5 className="text-orange-500" />
        <SiCss3 className="text-blue-500" />
      </div>
    ),
  },
  {
    name: "JavaScript",
    level: 85,
    category: "frontend",
    icon: <SiJavascript className="text-yellow-400 text-xl" />,
  },
  {
    name: "React",
    level: 90,
    category: "frontend",
    icon: <SiReact className="text-cyan-400 text-xl" />,
  },
  {
    name: "Tailwind CSS",
    level: 80,
    category: "frontend",
    icon: <SiTailwindcss className="text-sky-400 text-xl" />,
  },
  {
    name: "Next.js",
    level: 80,
    category: "frontend",
    icon: <SiNextdotjs className="text-black dark:text-white text-xl" />,
  },

  // Backend
  {
    name: "Node.js",
    level: 85,
    category: "backend",
    icon: <SiNodedotjs className="text-green-600 text-xl" />,
  },
  {
    name: "Express",
    level: 85,
    category: "backend",
    icon: <SiExpress className="text-gray-700 dark:text-gray-300 text-xl" />,
  },
  {
    name: "MongoDB",
    level: 90,
    category: "backend",
    icon: <SiMongodb className="text-green-500 text-xl" />,
  },
  {
    name: "Java",
    level: 90,
    category: "backend",
    icon: <DiJava className="text-red-600 text-xl" />,
  },
  {
  name: "Python",
  level: 85,
  category: "backend",
  icon: (
    <img
      src="Python.png"
      alt="Python"
      className="w-5 h-5 object-contain"
    />
  ),
},

  {
    name: "C++",
    level: 80,
    category: "backend",
    icon: <SiCplusplus className="text-blue-700 text-xl" />,
  },

  // Tools
  {
    name: "Git/GitHub",
    level: 90,
    category: "tools",
    icon: <SiGithub className="text-gray-800 dark:text-white text-xl" />,
  },
  {
    name: "Figma",
    level: 85,
    category: "tools",
    icon: <SiFigma className="text-pink-500 text-xl" />,
  },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                {skill.icon}
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
