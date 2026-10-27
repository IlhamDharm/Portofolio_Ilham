"use client"

import * as simpleIcons from "simple-icons"
import { motion, useReducedMotion } from "motion/react"
import { skillGroups } from "@/src/data/skills"
import { SectionGlow } from "@/src/components/section-glow"

function getIcon(icon?: string) { if (!icon) return undefined; const exportName = `si${icon.charAt(0).toUpperCase()}${icon.slice(1)}` as keyof typeof simpleIcons; return simpleIcons[exportName] as simpleIcons.SimpleIcon | undefined }

export function Skills() {
  const reduceMotion = useReducedMotion()
  return <section id="skills" className="relative overflow-hidden bg-[#d7f34a] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><SectionGlow /><div className="relative z-10 mx-auto max-w-[1500px]"><div className="mb-14 flex items-end justify-between gap-6"><div><p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-[#596624]">02 / Toolkit</p><h2 className="font-display text-[clamp(3rem,7vw,7rem)] font-semibold leading-[.8] tracking-[-.09em]">The stack<br /><span className="text-[#596624]">behind it.</span></h2></div><p className="hidden max-w-xs text-right text-sm leading-relaxed text-[#596624] sm:block">Tools I use, explore, and bring into each new project.</p></div><motion.div initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: false, amount: .2 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: .08 } } }} className="grid gap-px overflow-hidden rounded-3xl border border-[#101312]/15 bg-[#101312]/15 sm:grid-cols-2 lg:grid-cols-3">{skillGroups.map((group, index) => <motion.article key={group.label} variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: .55, ease: "easeOut" } } }} whileHover={reduceMotion ? undefined : { y: -6, backgroundColor: "#e5ff54" }} className="bg-[#d7f34a] p-6 transition-shadow hover:shadow-[0_18px_35px_rgba(16,19,18,.12)] lg:p-8"><p className="mb-14 font-display text-5xl font-semibold tracking-[-.08em] text-[#596624]/40">{String(index + 1).padStart(2, "0")}</p><h3 className="text-sm font-semibold uppercase tracking-[.12em]">{group.label}</h3><ul className="mt-6 space-y-3 text-sm text-[#596624]">{group.items.map((item) => { const icon = getIcon(item.icon); return <li key={item.name} className="flex items-center gap-3">{icon && <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 shrink-0" fill={`#${icon.hex}`}><path d={icon.path} /></svg>}<span>{item.name}</span></li> })}</ul></motion.article>)}</motion.div></div></section>
}
