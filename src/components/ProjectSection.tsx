import { ArrowRight, ExternalLink } from "lucide-react";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Dicom anonymizer",
    description: "A web application for anonymizing DICOM images",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind", "TypeScript", "DICOM"],
    demoURL: "#",
    githubURL: "https://github.com/baolinyang1/term-project-2025-team-2",
  },
  {
    id: 2,
    title: "Distributed Network Monitor",
    description: "A distributed network monitor for monitoring the network traffic of a network",
    image: "/projects/project2.png",
    tags: ["React", "Tailwind", "TypeScript", "Distributed System"],
    demoURL: "#",
    githubURL: "https://github.com/baolinyang1/distributed-network-monitoring?tab=readme-ov-file",
  },
  {
    id: 3,
    title: "Circuit Verifier",
    description: "A circuit verifier for verifying the correctness of a circuit",
    image: "/projects/project3.png",
    tags: ["React", "Tailwind", "TypeScript", "Circuit Design"],
    demoURL: "#",
    githubURL: "https://github.com/baolinyang1/circuit-verifier",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="conatiner mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefullt
          crafted with attention to detial, performance, and user experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any, key: any) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-warp gap-2 mb-4">
                  {project.tags.map((tag: any) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items center">
                  <div className="flex sapce-x-3">
                    <a
                      href={project.demoURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-foreground transition-colors duration-300 p-2"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-foreground transition-colors duration-300 p-2"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/baolinyang1"
            target="_blank"
            className="cosmic-button items-center gap-2 w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
