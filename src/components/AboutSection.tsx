import {
  Code,
  User,
  Brain,
  Bot,
  ScanEye,
  Database,
  GraduationCap,
  Award,
  MapPin,
} from "lucide-react";

const aboutCards = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Creating responsive websites and web applications with modern frameworks",
  },
  {
    icon: User,
    title: "UI/UX Design",
    description:
      "Design intuitive user interfaces and seamless user experiences",
  },
  {
    icon: Brain,
    title: "Machine Learning & Deep Learning",
    description:
      "Building and training neural networks with PyTorch and TensorFlow for real-world prediction tasks",
  },
  {
    icon: Bot,
    title: "AI Agents & LLMs",
    description:
      "Developing intelligent agents and LLM-powered tools for automation, research, and productivity",
  },
  {
    icon: ScanEye,
    title: "Computer Vision",
    description:
      "Implementing vision models for pose estimation, geospatial analysis, and edge deployment",
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    description:
      "Working with SQL, Pandas, and visualization tools to clean, analyze, and derive insights from large datasets",
  },
];

const highlights = [
  { value: "3+", label: "Years Experience" },
  { value: "88%", label: "CS Honours Average" },
];

const awards = [
  "Entrance Scholarship ($3,000) & Academic Excellence Award ($2,500)",
  "Dean's Honor List 2023–2024",
  "Golden Key International Honour Society",
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-left">
            <h3 className="text-3xl font-semibold">
              Passionate Web Developer & AI Developer & Tech Creator
            </h3>
            <p className="text-muted-foreground text-lg">
              4th-year Computer Science Honours student at the University of
              Saskatchewan, specializing in full-stack development, deep learning,
              and building tools that solve real problems.
            </p>
            <p className="text-muted-foreground text-lg">
              From agricultural management platforms and LLM-powered travel
              planners to flood prediction models and published AI research, I
              love turning complex ideas into production-ready software.
            </p>
            <p className="text-muted-foreground text-lg">
              Fast learner, team player, and always looking for opportunities to
              grow — fluent in English and Chinese.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="gradient-border p-4 card-hover text-center"
                >
                  <p className="text-2xl font-bold text-primary">
                    {item.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-semibold text-lg">Education (2023 - 2027)</h4>
                  <p className="text-muted-foreground">
                    B.Sc. Honours, Computer Science, University of Saskatchewan— Software Engineering
                    Option 
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-semibold text-lg">Awards & Honors</h4>
                  <ul className="text-muted-foreground text-sm space-y-1.5 mt-2">
                    {awards.map((award) => (
                      <li key={award} className="flex gap-2">
                        <span className="text-primary shrink-0">•</span>
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span>Saskatoon, Saskatchewan, Canada</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contact" className="cosmic-button">
                Get in touch
              </a>
              <a
                href="/Resume_2026.pdf"
                className="cosmic-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View My Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {aboutCards.map((card) => (
              <div key={card.title} className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <card.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-semibold text-lg">{card.title}</h4>
                    <p className="text-muted-foreground">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
