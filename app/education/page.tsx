"use client";

export default function EducationPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Education</h1>
        <p className="text-xl text-muted-foreground mb-8">
          My academic journey and qualifications
        </p>
        <div className="space-y-6">
          <div className="prose max-w-none dark:prose-invert">
            <section className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h2 className="text-2xl font-bold">Your University Name</h2>
                <p className="text-muted-foreground">Degree • Year - Year</p>
                <p className="mt-2">
                  Brief description of your studies, achievements, and relevant coursework.
                </p>
              </div>
              {/* Add more education entries as needed */}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 