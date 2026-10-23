"use client"

import { ArrowDownRight, MoveUpRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { profile } from "@/src/data/profile"

export function Hero() {
  const reduceMotion = useReducedMotion()
  return <section id="top" className="relative overflow-hidden px-6 pb-20 pt-36 lg:px-10 lg:pb-32 lg:pt-48">
    <div className="pointer-events-none absolute right-[-12%] top-20 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl" />
    <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
      <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.24em] text-blue-600"><span className="h-2 w-2 rounded-full bg-blue-600" />Available for select projects</p>
        <h1 className="max-w-4xl font-display text-[clamp(3.5rem,9vw,8.8rem)] font-medium leading-[.88] tracking-[-.09em]">Designing<br /><span className="text-blue-600">with intent.</span></h1>
      </motion.div>
      <motion.div initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25, duration: .7 }} className="max-w-sm lg:pb-2">
        <p className="text-lg leading-relaxed text-zinc-600">{profile.intro}</p>
        <div className="mt-10 flex items-center gap-5"><a href="#work" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm text-white transition-transform hover:-translate-y-1">View my work <MoveUpRight size={16} /></a><a href="#about" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-black">More about me <ArrowDownRight size={16} /></a></div>
      </motion.div>
    </div>
    <div className="mx-auto mt-24 max-w-7xl border-t border-black/10 pt-5 text-xs uppercase tracking-[.2em] text-zinc-400"><span>Scroll to explore</span><span className="float-right">01 — 04</span></div>
  </section>
}
