"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  url?:string;
  role: string;
}

const projects: ProjectItem[] = [
  
  {
    title: "Company Website (Avision PH)",
    description: "A comprehensive system for managing customer to check data of the company and what is the product, this website features ordering system.",
    technologies: ["Wordpress"],
    url: "https://www.avisionph.com/",
    role: "Lead Developer"
  },
  {
    title: "Company Website (Level Five)",
    description: "A comprehensive system for managing customer to check data of the company and what is the product, this website features ordering system.",
    technologies: ["Wordpress"],
    url: "http://level5.com.ph",
    role: "Lead Developer"
  },
  {
    title: "Company Website (Lynx Industrial)",
    description: "A comprehensive system for managing customer to check data of the company and what is the product, this website features ordering system.",
    technologies: ["Shopify"],
    url: "https://www.lynxindustrialcorp.com",
    role: "Lead Developer"
  },
  {
    title: "Human Resources Information System",
    description: "A specialized tool for automated Attendance System with Payroll Management.",
    technologies: ["C#", ".NET Core"],
    role: "Developer"
  },
  {
    title: "Student Information System (SIS)",
    description: "A comprehensive system for managing student data, academic records, and administrative processes at the Polytechnic University of the Philippines. Features include student enrollment, grade management, and academic tracking.",
    technologies: [".NET Core 9", "C#", "SQL Server", "JavaScript", "HTML5", "CSS3", "Bootstrap", "AdminLTE"],
    role: "Lead Developer"
  },
  {
    title: "Academic Management Information System (AMIS)",
    description: "An integrated platform for managing academic operations, faculty information, and curriculum planning. The system streamlines administrative tasks and enhances communication between faculty and administration.",
    technologies: [".NET Core 9", "C#", "SQL Server", "JavaScript", "HTML5", "CSS3", "Bootstrap", "AdminLTE"],
    role: "Lead Developer"
  },
  {
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and TypeScript, showcasing my professional experience, projects, and skills. Features a clean design with dark mode support and responsive layouts.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Shadcn UI"],
    role: "Developer"
  },
  {
    title: "Image Redaction System",
    description: "A specialized tool for automated image processing and redaction, ensuring privacy and security in document management.",
    technologies: ["C#", ".NET Core", "Image Processing Libraries"],
    role: "Developer"
  }
  
];

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
            <CardDescription className="text-lg text-muted-foreground mt-1">
              {project.role}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-muted-foreground">
          {project.description}
        </p>
        <a className="mb-4 text-blue-800" target="_blank" href={project.url}>{project.url}</a>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Showcasing my key projects and technical achievements
        </p>

        <div className="mt-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
} 