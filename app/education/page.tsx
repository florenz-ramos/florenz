"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface EducationItem {
  school: string;
  degree: string;
  year: string;
}

const educationHistory: EducationItem[] = [
  {
    school: "Navotas Polytechnic College",
    degree: "Bachelor of Science in Computer Science",
    year: "2019"
  },
  {
    school: "Tangos National High School",
    degree: "High School Graduate",
    year: "2015"
  },
  {
    school: "Tangos I Elementary School",
    degree: "Elementary Graduate",
    year: "2010"
  }
];

function EducationCard({ education }: { education: EducationItem }) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">{education.school}</CardTitle>
            <CardDescription className="text-lg">{education.degree}</CardDescription>
          </div>
          <span className="text-sm text-muted-foreground">{education.year}</span>
        </div>
      </CardHeader>
    </Card>
  );
}

export default function EducationPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Education</h1>
        <p className="text-xl text-muted-foreground mb-8">
          My academic journey and qualifications
        </p>

        <div className="mt-10">
          {educationHistory.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </div>
      </div>
    </div>
  );
} 