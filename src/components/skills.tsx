"use client"

import * as simpleIcons from "simple-icons"
import { motion, useReducedMotion } from "motion/react"
import { skillGroups } from "@/src/data/skills"

function getIcon(icon?: string) {
  if (!icon) return undefined
  const exportName = `si${icon.charAt(0).toUpperCase()}${icon.slice(1)}` as keyof typeof simpleIcons
  return simpleIcons[exportName] as simpleIcons.SimpleIcon | undefined
}

export function Skills() {
  const reduceMotion = useReducedMotion()
  return <section id="skills" className="px-6 py-20 lg:px-10 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 flex items-end justify-between">
        <p className="text-xs font-semibold uppercase tracking-[.24em] text-blue-600">Skills & tools</p>
        <p className="hidden text-sm text-zinc-400 sm:block">What I use and continue to learn</p>
      </div>
      <motion.div initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: .15 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: .08 } } }} className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => <motion.article key={group.label} variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: .55, ease: "easeOut" } } }} className="bg-[#f6f6f3] p-6 transition-colors hover:bg-white lg:p-8">
          <p className="mb-10 font-display text-3xl tracking-[-.05em] text-zinc-300">{String(index + 1).padStart(2, "0")}</p>
          <h3 className="text-sm font-semibold">{group.label}</h3>
          <ul className="mt-5 space-y-3 text-sm text-zinc-500">{group.items.map((item) => { const icon = getIcon(item.icon); return <li key={item.name} className="flex items-center gap-3">{icon && <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0" fill={`#${icon.hex}`}><path d={icon.path} /></svg>}<span>{item.name}</span></li> })}</ul>
        </motion.article>)}
      </motion.div>
    </div>
  </section>
}
