"use client"

import * as simpleIcons from "simple-icons"
import { useReducedMotion } from "motion/react"

const marqueeTools = [
  { name: "TypeScript", icon: "typescript" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Flutter", icon: "flutter" },
  { name: "Dart", icon: "dart" },
  { name: "Python", icon: "python" },
  { name: "PHP", icon: "php" },
  { name: "Laravel", icon: "laravel" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "VS Code", icon: "visualstudiocode" },
  { name: "REST API", icon: "openapiinitiative" },
  { name: "Jupyter", icon: "jupyter" },
  { name: "Vercel", icon: "vercel" },
]

const columnSpeeds = [28, 34, 30]

function getIcon(icon?: string) {
  if (!icon) return undefined
  const exportName = `si${icon.charAt(0).toUpperCase()}${icon.slice(1)}` as keyof typeof simpleIcons
  return simpleIcons[exportName] as simpleIcons.SimpleIcon | undefined
}

function ToolCard({ name, icon }: { name: string; icon?: string }) {
  const brand = getIcon(icon)
  return (
    <div
      title={name}
      className="flex min-h-[3.75rem] items-center gap-3 rounded-2xl border border-[#111112]/10 bg-white px-4 py-2 text-[#111112] shadow-sm transition-all hover:border-[#111112] hover:shadow-md"
    >
      <span className="flex size-7 shrink-0 items-center justify-center">
        {brand ? (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4.5" fill="currentColor">
            <path d={brand.path} />
          </svg>
        ) : (
          <span className="font-mono text-xs font-bold text-[#111112]">{name.slice(0, 2)}</span>
        )}
      </span>
      <span className="min-w-0 font-mono text-xs font-semibold uppercase tracking-wider text-[#111112]">
        {name}
      </span>
    </div>
  )
}

function ToolColumn({ items, index, reduceMotion }: { items: typeof marqueeTools; index: number; reduceMotion: boolean }) {
  const repeated = [...items, ...items]
  return (
    <div className={`tech-column-window ${reduceMotion ? "tech-column-static" : ""}`}>
      <div
        className={`tech-column-track tech-column-${index + 1} ${reduceMotion ? "" : "tech-column-animated"}`}
        style={{ animationDuration: `${columnSpeeds[index]}s` }}
      >
        {repeated.map((tool, itemIndex) => (
          <ToolCard key={`${tool.name}-${itemIndex}`} name={tool.name} icon={tool.icon} />
        ))}
      </div>
    </div>
  )
}

export function TechMarquee() {
  const reduceMotion = useReducedMotion()
  const columns = [
    marqueeTools.filter((_, index) => index % 3 === 0),
    marqueeTools.filter((_, index) => index % 3 === 1),
    marqueeTools.filter((_, index) => index % 3 === 2),
  ]

  return (
    <section aria-label="Ecosystem tools" className="relative overflow-hidden border-t border-[#111112]/10 bg-[#F5F5F0] px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1340px]">
        <div className="mb-6 font-mono text-xs font-bold uppercase tracking-wider text-[#111112]">
          Ecosystem &amp; Tooling
        </div>

        <div className="grid h-[230px] grid-cols-2 gap-3 overflow-hidden sm:h-[260px] sm:grid-cols-3 sm:gap-4">
          {columns.map((items, index) => (
            <div key={index} className={index === 1 ? "hidden sm:block" : "block"}>
              <ToolColumn items={items} index={index} reduceMotion={Boolean(reduceMotion)} />
            </div>
          ))}
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#F5F5F0] to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#F5F5F0] to-transparent" />
    </section>
  )
}
