"use client";

import { Badge } from "@/components/ui/badge";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    name: "Portfolio Website",
    description: "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a responsive design and dark mode support.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    link: "https://github.com/yourusername/portfolio",
  },
  {
    name: "Project Management App",
    description: "A full-stack project management application with real-time updates and team collaboration features.",
    technologies: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    link: "https://github.com/yourusername/project-management",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-lg border p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold">{project.name}</h2>
      <p className="text-muted-foreground mt-2">
        {project.description}
      </p>
      <div className="mt-4 flex gap-2 flex-wrap">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
      {project.link && (
        <a 
          href={project.link}
          className="absolute inset-0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.name} project details`}
        >
          <span className="sr-only">View project details</span>
        </a>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-xl text-muted-foreground mb-8">
          A selection of my recent projects and work
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
} 