export default function IndexPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Hi! I&apos;m Florenz Ramos, a software developer passionate about creating elegant solutions to complex problems. This is my personal portfolio where I showcase my work and share my journey in software development.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">What I Do</h2>
          <p className="text-lg text-muted-foreground mb-6">
            I specialize in full-stack development, with a focus on modern web technologies. My expertise includes:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Building responsive web applications</li>
            <li>Developing scalable backend systems</li>
            <li>Creating intuitive user interfaces</li>
            <li>Implementing cloud solutions</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Let&apos;s Connect</h2>
          <p className="text-lg text-muted-foreground">
            Feel free to explore my portfolio and get in touch if you&apos;d like to collaborate or learn more about my work.
          </p>
        </div>
      </div>
    </div>
  )
}
