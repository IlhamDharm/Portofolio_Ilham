export type SkillItem = { name: string; icon?: string; detail?: string }

export type SkillCategory = {
  id: string
  title: string
  description: string
  items: SkillItem[]
}

export const expertiseGroups: SkillCategory[] = [
  {
    id: "software-dev",
    title: "Software & Core Languages",
    description: "Core typed languages used for clean application logic, algorithms, and backend scripting.",
    items: [
      { name: "TypeScript", icon: "typescript", detail: "Typed scalable web development" },
      { name: "JavaScript", icon: "javascript", detail: "Modern ES6+ frontend scripting" },
      { name: "Dart", icon: "dart", detail: "Mobile development and declarative logic" },
      { name: "Python", icon: "python", detail: "Scripting, tooling & AI experimentation" },
      { name: "PHP", icon: "php", detail: "Object-oriented architectures & PDO" },
    ],
  },
  {
    id: "full-stack",
    title: "Full-Stack Web Technologies",
    description: "Modern frameworks and architectures for high-performance interfaces, backend APIs, and databases.",
    items: [
      { name: "React", icon: "react", detail: "Component-driven user interfaces" },
      { name: "Next.js", icon: "nextdotjs", detail: "Server-side rendering, App Router & Turbopack" },
      { name: "Tailwind CSS", icon: "tailwindcss", detail: "Utility-first design systems" },
      { name: "Flutter", icon: "flutter", detail: "Cross-platform mobile applications" },
      { name: "Laravel", icon: "laravel", detail: "MVC web framework & routing" },
      { name: "PostgreSQL", icon: "postgresql", detail: "Relational database modeling" },
      { name: "REST API", icon: "openapiinitiative", detail: "Endpoint contracts & integration" },
    ],
  },
  {
    id: "tools-workflow",
    title: "Engineering Pit-Crew & Tooling",
    description: "Development environments, version control, and cloud platforms for fast delivery.",
    items: [
      { name: "Git", icon: "git", detail: "Distributed version control" },
      { name: "GitHub", icon: "github", detail: "CI/CD basics, code reviews & collaboration" },
      { name: "VS Code", icon: "visualstudiocode", detail: "Configured developer environment" },
      { name: "Jupyter", icon: "jupyter", detail: "Interactive computing and AI workflows" },
      { name: "Vercel", icon: "vercel", detail: "Cloud serverless deployment" },
    ],
  },
]

export const skillGroups = [
  { label: "Programming Languages", items: expertiseGroups[0].items },
  { label: "Frontend & Full-Stack", items: expertiseGroups[1].items },
  { label: "Tools and Platforms", items: expertiseGroups[2].items },
]
