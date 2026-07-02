import { useState } from "react";
import { cn } from "@/lib/utils";
const skills: any = [
  // Web Dev
  { name: "HTML/CSS", level: 95, category: "Web Development" },
  { name: "JavaScript/TypeScript", level: 90, category: "Web Development" },
  { name: "React", level: 95, category: "Web Development" },
  { name: "Svelte", level: 90, category: "Web Development" },
  { name: "Tailwindcss", level: 95, category: "Web Development" },
  { name: "Next.js", level: 95, category: "Web Development" },
  { name: "Node.js", level: 95, category: "Web Development" },
  { name: "Express.js", level: 90, category: "Web Development" },
  { name: "MySQL", level: 95, category: "Web Development" },
  { name: "PostgreSQL", level: 95, category: "Web Development" },
  { name: "Python FastAPI", level: 95, category: "Web Development"},
  { name: "C#", level: 95, category: "Web Development"},

  // AI/Deep learning
  { name: "TensorFlow", level: 95, category: "AI/Deep learning" },
  { name: "PyTorch", level: 95, category: "AI/Deep learning" },
  { name: "Langchain", level: 95, category: "AI/Deep learning" },
  { name: "AI Agents", level: 90, category: "AI/Deep learning" },
  { name: "Large Language Models", level: 90, category: "AI/Deep learning" },
  { name: "GPU/HPC Training", level: 88, category: "AI/Deep learning" },
  { name: "Computer Vision", level: 90, category: "AI/Deep learning" },
  { name: "Hugging Face", level: 85, category: "AI/Deep learning" },
  { name: "Scikit-learn", level: 85, category: "AI/Deep learning" },

  // Data Science
  { name: "Pandas", level: 95, category: "Data Science" },
  { name: "Numpy", level: 95, category: "Data Science" },
  { name: "Matplotlib", level: 95, category: "Data Science" },
  { name: "SQL Querying", level: 85, category: "Data Science" },
  { name: "Database Management", level: 85, category: "Data Science" },
  { name: "Database Migration", level: 85, category: "Data Science" },

  // Operating System/Tools
  { name: "Linux Environment", level: 95, category: "Operating System/Tools" },
  { name: "Windows Environment", level: 95, category: "Operating System/Tools" },
  { name: "Bash Scripting", level: 95, category: "Operating System/Tools" },
  { name: "PowerShell Scripting", level: 95, category: "Operating System/Tools" },
  { name: "OS virtualization", level: 90, category: "Operating System/Tools" },
  { name: "Git/GitHub", level: 95, category: "Operating System/Tools" },
  { name: "Docker", level: 90, category: "Operating System/Tools" },
  { name: "VS Code", level: 90, category: "Operating System/Tools" },
  { name: "Conda/Micromamba/Venv", level: 95, category: "Operating System/Tools" },
];

const categories = ["all", "Web Development", "AI/Deep learning", "Data Science", "Operating System/Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredskills = skills.filter(
    (skill: any) =>
      activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "cursor-pointer px-5 py-2 rounded-full trasition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredskills.map((skill: any, key: any) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3>{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate[grow_1.5s_ease-out"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
