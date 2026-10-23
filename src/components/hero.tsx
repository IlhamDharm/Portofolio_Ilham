"use client"

import Image from "next/image"
import { ArrowDown, ArrowUpRight, Code2, ExternalLink, Mail } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { profile } from "@/src/data/profile"

export function Hero() {
  const reduceMotion = useReducedMotion()
  return <section id="top" className="relative min-h-[820px] overflow-hidden bg-[#11191d] px-6 pb-10 pt-28 text-white lg:min-h-screen lg:px-12 lg:pt-32">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_42%,rgba(71,105,108,.26),transparent_30%),linear-gradient(115deg,#11191d_0%,#172126_52%,#10171b_100%)]" />
    <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(92vw,1400px)] -translate-x-1/2 bg-white/15" />
    <div className="relative mx-auto grid min-h-[680px] max-w-[1500px] items-center gap-10 lg:grid-cols-[.95fr_1.35fr_.7fr] lg:gap-6">
      <motion.div initial={reduceMotion ? false : { opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7 }} className="self-center">
        <div className="mb-10 h-1 w-14 bg-cyan-200" />
        <p className="mb-5 max-w-xs text-xs font-semibold uppercase tracking-[.2em] text-cyan-100/70">{profile.role}</p>
        <h1 className="max-w-xl font-display text-[clamp(3rem,6.5vw,6.8rem)] font-semibold leading-[.92] tracking-[-.07em]">{profile.headline}</h1>
        <p className="mt-7 max-w-md text-sm leading-relaxed text-white/55">{profile.intro}</p>
        <div className="mt-9 flex flex-wrap items-center gap-3"><a href="#work" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm text-white transition-transform hover:-translate-y-1 hover:bg-blue-500">View projects <ArrowDown size={16} /></a><a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-3 text-sm text-white/80 transition-colors hover:border-white hover:text-white">Contact me <Mail size={16} /></a></div>
        <div className="mt-5 flex gap-4 text-xs text-white/60"><a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Code2 size={14} /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><ExternalLink size={14} /> LinkedIn</a></div>
      </motion.div>
      <motion.div initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: .8 }} className="relative order-first mx-auto h-[500px] w-full max-w-[430px] self-end sm:h-[600px] lg:order-none lg:h-[min(86vh,760px)] lg:max-w-[540px]">
        <div className="absolute bottom-0 left-1/2 h-[82%] w-[78%] -translate-x-1/2 rounded-t-[48%] rounded-b-[12%] border border-cyan-100/20 bg-[#d9c7a3] shadow-[0_25px_80px_rgba(0,0,0,.28)]" />
        <div className="absolute bottom-8 left-1/2 h-32 w-[78%] -translate-x-1/2 rounded-full bg-cyan-100/20 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-[96%] overflow-hidden">
          <Image src="/ilham-profile-final.png" alt="Ilham Dharma Atmaja" fill priority sizes="(max-width: 1024px) 430px, 34vw" className="origin-bottom scale-[1.22] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,.35)] saturate-[.82] contrast-[1.04]" />
        </div>
        <p className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[.2em] text-[#11191d]/60">Ilham / 2026</p>
      </motion.div>
      <motion.aside initial={reduceMotion ? false : { opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .3, duration: .7 }} className="max-w-xs self-center space-y-9 text-sm">
        <div><p className="mb-3 text-[10px] font-semibold uppercase tracking-[.24em] text-cyan-100/60">About me</p><p className="leading-relaxed text-white/60">{profile.about.split("\n\n")[0]}</p><a href="#about" className="mt-3 inline-flex items-center gap-2 text-xs text-white hover:text-cyan-200">Read more <ArrowUpRight size={13} /></a></div>
        <div><p className="mb-3 text-[10px] font-semibold uppercase tracking-[.24em] text-cyan-100/60">My work</p><p className="leading-relaxed text-white/60">Web applications, experiments, and projects built while learning full-stack development.</p><a href="#work" className="mt-3 inline-flex items-center gap-2 text-xs text-white hover:text-cyan-200">Browse projects <ArrowUpRight size={13} /></a></div>
        <div><p className="mb-3 text-[10px] font-semibold uppercase tracking-[.24em] text-cyan-100/60">Follow me</p><div className="flex gap-4 text-xs text-white/70"><a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a></div></div>
      </motion.aside>
    </div>
  </section>
}
