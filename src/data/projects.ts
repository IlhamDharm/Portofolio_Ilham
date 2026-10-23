export type Project = {
  slug: string
  title: string
  category: string
  year: string
  description: string
  longDescription: string
  tags: string[]
  color: string
  role: string
  outcome: string
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    slug: "portfolio-studio",
    title: "Portfolio Studio",
    category: "Web Development",
    year: "2024",
    description: "A focused portfolio experience that turns selected work into a clear, editorial story.",
    longDescription: "Portfolio Studio is a product-minded portfolio concept built around clarity. The experience gives each project enough room to explain its context, decisions, and craft without distracting from the work itself.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    color: "#1d4ed8",
    role: "Product design & development",
    outcome: "A flexible foundation for presenting work with confidence.",
    github: "https://github.com/",
  },
  {
    slug: "signal-dashboard",
    title: "Signal Dashboard",
    category: "Product Design",
    year: "2024",
    description: "A calm interface for making complex product signals easier to understand and act on.",
    longDescription: "Signal Dashboard explores how hierarchy, whitespace, and purposeful visual cues can make dense information feel approachable. The concept keeps the most important signals close while preserving the depth needed for exploration.",
    tags: ["UX Research", "UI Design", "Prototyping"],
    color: "#0f766e",
    role: "Research, UX & interface design",
    outcome: "A simpler path from raw information to useful decisions.",
    github: "https://github.com/",
  },
  {
    slug: "local-commerce",
    title: "Local Commerce",
    category: "Web Development",
    year: "2023",
    description: "A lightweight commerce direction designed around discovery, trust, and local context.",
    longDescription: "Local Commerce is a responsive storefront direction that treats browsing as a conversation with place. The visual system balances warm editorial moments with a practical purchase journey.",
    tags: ["React", "Responsive UI", "Design System"],
    color: "#9333ea",
    role: "Interface design & front-end development",
    outcome: "A commerce flow that feels personal without sacrificing utility.",
    github: "https://github.com/",
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
