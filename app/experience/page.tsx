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
    title: "Software Developer",
    company: "Your Current Company",
    period: "2020 - Present",
    description: [
      "Developed and maintained full-stack web applications using modern technologies",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Implemented responsive and accessible user interfaces",
    ],
    skills: ["React", "Next.js", "TypeScript", "Node.js", "SQL"],
  },
];

const teachingExperiences: ExperienceItem[] = [
  {
    title: "Professor",
    company: "Private School Name",
    period: "2018 - Present",
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