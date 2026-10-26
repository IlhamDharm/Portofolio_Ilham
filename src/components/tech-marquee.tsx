"use client"

import * as simpleIcons from "simple-icons"
import { motion, useReducedMotion } from "motion/react"
import { skillGroups } from "@/src/data/skills"

const tools = Array.from(new Map(skillGroups.flatMap((group) => group.items).filter((item) => item.icon).map((item) => [item.name, item])).values())

function getIcon(icon?: string) { if (!icon) return undefined; const exportName = `si${icon.charAt(0).toUpperCase()}${icon.slice(1)}` as keyof typeof simpleIcons; return simpleIcons[exportName] as simpleIcons.SimpleIcon | undefined }
function getFallback(name: string) { return name === "VS Code" ? "VS" : name === "REST API" ? "API" : name.charAt(0) }

function ToolItem({ name, icon }: { name: string; icon?: string }) {
  const brand = getIcon(icon)
  return <motion.span whileHover={{ scale: 1.08, color: "#ffffff" }} className="inline-flex shrink-0 items-center gap-3 text-[#d7f34a] transition-colors"><span className="flex size-7 items-center justify-center">{brand ? <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill={`#${brand.hex}`}><path d={brand.path} /></svg> : <span className="text-[10px] font-bold">{getFallback(name)}</span>}</span><span className="text-xs font-semibold uppercase tracking-[.2em]">{name}</span></motion.span>
}

function ToolSequence() { return <div className="tech-marquee-sequence flex shrink-0 items-center gap-8 pr-8">{tools.map((tool) => <span key={tool.name} className="flex shrink-0 items-center gap-8"><ToolItem name={tool.name} icon={tool.icon} /><span aria-hidden="true" className="text-[10px] text-white/30">•</span></span>)}</div> }

export function TechMarquee() {
  const reduceMotion = useReducedMotion()
  return <section aria-label="Tools used in this portfolio" className="overflow-hidden border-y border-white/10 bg-[#101312] py-5 text-[#d7f34a]"><div className={`tech-marquee-track ${reduceMotion ? "tech-marquee-static" : ""}`}><ToolSequence /><div aria-hidden="true"><ToolSequence /></div></div></section>
}
