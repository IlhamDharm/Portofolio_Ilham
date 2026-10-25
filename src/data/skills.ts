export type SkillItem = { name: string; icon?: string }

export const skillGroups: { label: string; items: SkillItem[] }[] = [
  { label: "Programming Languages", items: [{ name: "TypeScript", icon: "typescript" }, { name: "JavaScript", icon: "javascript" }, { name: "Dart", icon: "dart" }, { name: "Python", icon: "python" }, { name: "PHP", icon: "php" }] },
  { label: "Frontend Development", items: [{ name: "React", icon: "react" }, { name: "Next.js", icon: "nextdotjs" }, { name: "Tailwind CSS", icon: "tailwindcss" }, { name: "Responsive UI" }] },
  { label: "Mobile Development", items: [{ name: "Flutter", icon: "flutter" }, { name: "Dart", icon: "dart" }, { name: "Declarative UI" }, { name: "State Management" }] },
  { label: "Tools and Platforms", items: [{ name: "Git", icon: "git" }, { name: "GitHub", icon: "github" }, { name: "VS Code", icon: "visualstudiocode" }, { name: "REST API" }] },
  { label: "AI & Computer Vision", items: [{ name: "Machine Learning" }, { name: "Jupyter Notebook", icon: "jupyter" }, { name: "Image Processing" }] },
  { label: "Currently Exploring", items: [{ name: "Backend Development" }, { name: "Databases" }, { name: "Artificial Intelligence" }] },
]
