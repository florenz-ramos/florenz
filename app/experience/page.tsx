"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills?: string[];
}

const softwareExperiences: ExperienceItem[] = [
  {
    title: "Computer Programmer III",
    company: "Polytechnic University of the Philippines",
    period: "2023 - Present",
    description: [
      "Led the development of the Student Information System (SIS) and Academic Management Information System (AMIS)",
      "Designed and implemented RESTful APIs using .NET Core 9 for system integration",
      "Developed full-stack solutions with modern web technologies and best practices",
      "Collaborated with stakeholders to gather requirements and deliver high-quality software solutions",
    ],
    skills: [".NET Core 9", "C#", "RESTful APIs", "SQL Server", "JavaScript", "HTML5", "CSS3", "Bootstrap", "AdminLTE"],
  },
  {
    title: "Software Developer",
    company: "CloudManila Philippines Inc.",
    period: "Mar 2021 - Apr 2023",
    description: [
      "Creating web application using Angular and .NET CORE",
      "Maintaining web application in Vue JS",
      "Creating web application using ASP. NET CORE MVC",
    ],
    skills: ["Angular", "Vue.js", "ASP.NET Core MVC", ".NET Core", "JavaScript", "TypeScript", "C#"],
  },
  {
    title: "Software Developer",
    company: "TRUE BPO INC.",
    period: "Jun 2019 - Feb 2021",
    description: [
      "Develop coding systems and validation application",
      "Developed software for checking file",
      "Creating web application using ASP. NET CORE MVC",
      "Other desktop and web application for specific purposes",
    ],
    skills: ["ASP.NET Core MVC", ".NET Core", "C#", "Desktop Applications", "Web Development"],
  },
];

const teachingExperiences: ExperienceItem[] = [
  {
    title: "Professor",
    company: "College of Saint Amatiel",
    period: "2024 - Present",
    description: [
      "Teaching computer science and programming fundamentals to undergraduate students",
      "Developed comprehensive curriculum and learning materials",
      "Mentored students in software development projects",
    ],
    skills: ["Computer Science", "Programming", "Education", "Mentoring"],
  },
];

function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">{experience.title}</CardTitle>
            <CardDescription className="text-lg">{experience.company}</CardDescription>
          </div>
          <span className="text-sm text-muted-foreground">{experience.period}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-6 mb-4">
          {experience.description.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
        {experience.skills && (
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function ExperiencePage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
        <p className="text-xl text-muted-foreground mb-8">
          My journey as a Software Developer and Educator
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Software Development</h2>
          {softwareExperiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Teaching Experience</h2>
          {teachingExperiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
} 