export default function AboutPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Hello! I&apos;m Florenz Ramos, a passionate software developer with a keen interest in building innovative solutions. I specialize in full-stack development, with expertise in modern web technologies and cloud platforms.
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          My journey in software development began during my university years, where I discovered my love for coding and problem-solving. Since then, I&apos;ve been continuously learning and growing, staying up-to-date with the latest technologies and best practices.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">My Approach</h2>
          <p className="text-lg text-muted-foreground">
            I believe in writing clean, maintainable code and building user-friendly applications. My focus is on creating solutions that not only meet technical requirements but also provide an excellent user experience.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
            <li>Backend: Node.js, Python, Java</li>
            <li>Databases: PostgreSQL, MongoDB</li>
            <li>Cloud: AWS, Google Cloud Platform</li>
            <li>Tools: Git, Docker, CI/CD</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Beyond Coding</h2>
          <p className="text-lg text-muted-foreground">
            When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I&apos;m always eager to learn and take on new challenges.
          </p>
        </div>
      </div>
    </div>
  );
} 