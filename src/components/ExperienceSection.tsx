import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "AI Flood Model Developer",
    company: "Global Institute for Water Security",
    period: "Apr 2026 – Aug 2026",
    status: "Ongoing",
    tags: ["PyTorch", "CNN", "ConvLSTM", "HPC", "Geospatial"],
    highlights: [
      "Research, design, develop, and train CNN and ConvLSTM models for flood inundation prediction using large-scale geospatial and hydrodynamic datasets, achieving 97% accuracy.",
      "Built PyTorch-based training pipelines and conducted large-scale experiments on GPUs in HPC systems, reducing error range to 5cm–15cm, well below the expected outcome.",
    ],
  },
  {
    title: "Full Stack Web & AI Developer",
    company: "Octyde",
    period: "Jan 2026 – Aug 2026",
    tags: ["Svelte", "Node.js", "MapLibre GL", "YOLO", "PyTorch", "RKNN"],
    highlights: [
      "Developed a full-stack agricultural management system using Svelte and Node.js for real-time farm monitoring, along with an Android app for field operations.",
      "Debugged 50+ bugs and built interactive geospatial dashboards with MapLibre GL to visualize livestock locations, heatmaps, and farm activity data, improving user satisfaction by 20%.",
      "Designed and implemented RESTful APIs for device data processing, alarm handling, and real-time status updates, reducing page response time by 50% and improving data refresh latency by 2x.",
      "Developed a real-time jump-rope counting system using YOLO-based pose estimation with a 20% performance upgrade; applied model quantization (INT8) and deployed on Rockchip RK3588 via RKNN Toolkit, cutting inference time by 40%.",
    ],
  },
  {
    title: "Full-Stack Web & AI Developer & Scrum Master",
    company: "Roamlii",
    period: "Jul 2025 – Dec 2025",
    tags: ["Python", "React", "Next.js", "GCP", "LLM"],
    highlights: [
      "Utilized Python, React, and Next.js to build scalable features and a responsive website deployed on GCP, reducing page load times by 35%.",
      "Led and developed the Roamer AI system integrating LLM with trip planning, achieving 99.9% uptime across test and production environments.",
      "Led Scrum meetings, coordinated task assignments to boost collaboration, and conducted testing.",
    ],
  },
  {
    title: "DICOM Anonymizer (Group Project)",
    company: "Luxsonic Technologies",
    period: "Jan 2025 – Apr 2025",
    tags: ["React", "TypeScript", "Docker", "Jest", "Playwright", "Power BI"],
    highlights: [
      "Collaborated with a team of 9 to develop a DICOM anonymizer progressive web application using React, TypeScript, and Docker.",
      "Used Jest and Playwright for testing, achieving 97% test coverage for the system.",
      "Applied agile development, built metrics reports in Power BI, and met with stakeholders biweekly.",
    ],
  },
  {
    title: "Undergraduate AI Research Intern",
    company: "University of Saskatchewan",
    period: "May 2024 – Aug 2025",
    tags: ["Python", "Docker", "Next.js", "VS Code", "LLM", "Neural Networks"],
    highlights: [
      "Built an AI agent–based bug localization system using Python and Docker with a Next.js frontend, leading to an IEEE publication.",
      "Developed a Knowledge Bridge VS Code extension with an LLM-powered chat interface for contextual knowledge sharing, cutting multi-domain team communication overhead by over 50%.",
      "Invented and implemented a new convolutional neural network, boosting performance by 10%; engineered LLM APIs to cut response time by over 50%.",
      "Developed real-time AI-assisted code clone detection as a VS Code extension, upgrading software quality by reducing 80% of code clones.",
    ],
  },
  {
    title: "Mobile App Developer Intern",
    company: "All Canadian Grains",
    period: "Sep 2024 – Apr 2025",
    tags: ["React Native", "C#", "MySQL", "LLM"],
    highlights: [
      "Collaborated in a team of 5 to develop a weather app for farmers with a responsive mobile interface using React Native and an LLM bot.",
      "Implemented the backend using C# and configured MySQL connections, supporting management of 20,000+ weather and crop-related data records from stations across the globe.",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          3+ years of hands-on experience across full-stack development, AI
          research, and team leadership — from production web apps to published
          research.
        </p>

        <div className="relative space-y-8 pl-8 sm:pl-0">
          <div className="absolute left-[11px] sm:left-6 top-2 bottom-2 w-px bg-primary/20" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative sm:pl-14">
              <div className="absolute left-[-21px] sm:left-4 top-6 z-10">
                <div className="p-2 rounded-full bg-background border-2 border-primary/30">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>
              </div>

              <div className="gradient-border p-6 card-hover text-left">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  {exp.status && (
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/20 text-primary">
                      {exp.status}
                    </span>
                  )}
                </div>
                <p className="text-primary font-medium mb-1">{exp.company}</p>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-3.5 w-3.5 shrink-0" />
                  <span>{exp.period}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
