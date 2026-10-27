"use client"

import * as simpleIcons from "simple-icons"
import { motion, useReducedMotion } from "motion/react"
import type { SkillItem } from "@/src/data/skills"

const tools: SkillItem[] = [
  { name: "TypeScript", icon: "typescript" }, { name: "JavaScript", icon: "javascript" },
  { name: "Dart", icon: "dart" }, { name: "Python", icon: "python" },
  { name: "PHP", icon: "php" }, { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" }, { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Flutter", icon: "flutter" }, { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" }, { name: "VS Code", icon: "visualstudiocode" },
  { name: "Laravel", icon: "laravel" }, { name: "REST API", icon: "openapiinitiative" },
  { name: "Jupyter Notebook", icon: "jupyter" }, { name: "Database", icon: "database" },
]
const columnSpeeds = [27, 34, 30]

function getIcon(icon?: string) { if (!icon) return undefined; const exportName = `si${icon.charAt(0).toUpperCase()}${icon.slice(1)}` as keyof typeof simpleIcons; return simpleIcons[exportName] as simpleIcons.SimpleIcon | undefined }
function SpecialToolIcon({ name }: { name: string }) {
  if (name === "Database") return <svg aria-hidden="true" viewBox="0 0 48 48" className="size-8" fill="none" stroke="url(#db-gradient)" strokeWidth="2.6"><defs><linearGradient id="db-gradient" x1="8" y1="5" x2="40" y2="43" gradientUnits="userSpaceOnUse"><stop stopColor="#20D6E8" /><stop offset="1" stopColor="#315BDB" /></linearGradient></defs><ellipse cx="24" cy="10" rx="16" ry="6" /><path d="M8 10v27c0 3.4 7.2 6 16 6s16-2.6 16-6V10M8 19c0 3.4 7.2 6 16 6s16-2.6 16-6M8 28c0 3.4 7.2 6 16 6s16-2.6 16-6" /></svg>
  if (name === "VS Code") return <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6"><path fill="#28A8EA" d="M17.7 1.4a1.5 1.5 0 0 1 1.5.1l3.1 1.9c.4.2.6.7.6 1.1v15c0 .5-.2.9-.6 1.1l-3.1 1.9a1.5 1.5 0 0 1-1.7-.1L5.4 14.1 2.8 16a1.2 1.2 0 0 1-1.6-.1l-.8-.7a1.2 1.2 0 0 1 0-1.8L4.2 12 .4 8.6a1.2 1.2 0 0 1 0-1.8l.8-.7a1.2 1.2 0 0 1 1.6-.1l2.6 1.9L17.7 1.4Zm.1 5.1L9.1 12l8.7 5.5V6.5Z" /></svg>
  return null
}

function ToolCard({ name, icon }: { name: string; icon?: string }) {
  const brand = getIcon(icon)
  const isSpecial = name === "Database" || name === "VS Code"
  return <div title={name} className="flex min-h-[4.5rem] items-center gap-3 rounded-2xl border border-white/10 bg-white/[.035] px-4 py-3 text-white/85 shadow-[0_10px_30px_rgba(0,0,0,.12)] backdrop-blur-sm transition-colors hover:border-[#d7f34a]/40 hover:bg-white/[.07]"><span className="flex size-9 shrink-0 items-center justify-center" aria-label={`${name} logo`}>{isSpecial ? <SpecialToolIcon name={name} /> : brand ? <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill={`#${brand.hex}`}><path d={brand.path} /></svg> : <span className="text-[10px] font-bold text-[#d7f34a]">{name.slice(0, 2)}</span>}</span><span className="min-w-0 text-[11px] font-semibold uppercase leading-tight tracking-[.1em]">{name}</span></div>
}

function ToolColumn({ items, index, reduceMotion }: { items: typeof tools; index: number; reduceMotion: boolean }) {
  const repeated = [...items, ...items]
  return <div className={`tech-column-window ${reduceMotion ? "tech-column-static" : ""}`}><div className={`tech-column-track tech-column-${index + 1} ${reduceMotion ? "" : "tech-column-animated"}`} style={{ animationDuration: `${columnSpeeds[index]}s` }}>{repeated.map((tool, itemIndex) => <ToolCard key={`${tool.name}-${itemIndex}`} name={tool.name} icon={tool.icon} />)}</div></div>
}

export function TechMarquee() {
  const reduceMotion = useReducedMotion()
  const columns = [tools.filter((_, index) => index % 3 === 0), tools.filter((_, index) => index % 3 === 1), tools.filter((_, index) => index % 3 === 2)]
  return <section aria-label="A selection of tools used in this portfolio" className="relative overflow-hidden border-y border-white/10 bg-[#101312] px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-20"><span aria-hidden="true" className="absolute left-5 top-5 text-[9px] font-semibold uppercase tracking-[.24em] text-white/35 sm:left-8">Tech I use</span><div className="mx-auto grid h-[260px] max-w-5xl grid-cols-2 gap-3 overflow-hidden sm:h-[320px] sm:grid-cols-3 sm:gap-5">{columns.map((items, index) => <div key={index} className={index === 1 ? "hidden sm:block" : "block"}><ToolColumn items={items} index={index} reduceMotion={Boolean(reduceMotion)} /></div>)}</div><div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#101312] to-transparent" /><div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#101312] to-transparent" /></section>
}
