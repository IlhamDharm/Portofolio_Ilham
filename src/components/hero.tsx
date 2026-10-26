"use client"

import Image from "next/image"
import { ArrowDown, Code2, Download, MapPin, Mail } from "lucide-react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { profile } from "@/src/data/profile"
import { AmbientBackground } from "@/src/components/ambient-background"

export function Hero() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const portraitY = useTransform(scrollY, [0, 900], [0, reduceMotion ? 0 : -36], { clamp: false })
  return <section id="top" className="relative min-h-screen overflow-hidden bg-[#101312] px-5 pb-8 pt-28 text-[#f3f4ed] sm:px-8 lg:px-12 lg:pt-32">
    <AmbientBackground />
    <div className="relative z-10 mx-auto flex min-h-[calc(100vh-9rem)] max-w-[1500px] flex-col justify-between">
      <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="mb-8 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[.28em] text-[#d7f34a]"><span className="size-2 rounded-full bg-[#d7f34a]" /> Open to software development internships</div>
          <h1 className="max-w-5xl font-display text-[clamp(4.3rem,12vw,11.5rem)] font-semibold leading-[.78] tracking-[-.1em]">{profile.name.split(" ").map((part, i) => <span key={part} className="block">{part}{i === 0 && <span className="text-[#d7f34a]">.</span>}</span>)}</h1>
          <div className="mt-10 flex max-w-xl flex-col gap-7 sm:flex-row sm:items-end"><p className="max-w-sm text-sm leading-relaxed text-white/55">{profile.intro}</p><div className="flex flex-wrap items-center gap-5"><a href="#work" className="group inline-flex shrink-0 items-center gap-3 text-xs font-semibold uppercase tracking-[.16em] text-[#d7f34a]">Explore work <span className="flex size-10 items-center justify-center rounded-full border border-[#d7f34a]/40 transition-transform group-hover:rotate-45"><ArrowDown size={15} /></span></a><a href={profile.cv} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-white/70 transition-colors hover:text-white">View CV <Download size={14} /></a></div></div>
        </motion.div>
        <motion.div initial={reduceMotion ? false : { opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .15, duration: .8 }} className="relative mx-auto h-[420px] w-full max-w-[510px] lg:h-[620px] lg:max-w-none">
          <motion.div style={{ y: portraitY }} className="absolute inset-0">
            <div className="absolute bottom-0 left-1/2 h-[88%] w-[76%] -translate-x-1/2 rounded-t-[48%] border border-[#d7f34a]/30 bg-[#d7f34a] shadow-[0_0_100px_rgba(215,243,74,.15)]" />
            <div className="absolute inset-x-0 bottom-0 h-[104%] overflow-hidden"><Image src="/ilham-profile-final.png" alt="Ilham Dharma Atmaja" fill priority sizes="(max-width: 1024px) 510px, 40vw" className="origin-bottom scale-[1.18] object-contain object-bottom drop-shadow-[0_24px_35px_rgba(0,0,0,.5)]" /></div>
          </motion.div>
          <div className="absolute bottom-5 left-4 text-[10px] font-semibold uppercase tracking-[.22em] text-[#101312]/60">Portrait / 01</div>
        </motion.div>
      </div>
      <div className="mt-14 grid gap-7 border-t border-white/15 pt-5 text-xs text-white/50 sm:grid-cols-3"><div><span className="mb-2 block uppercase tracking-[.2em] text-white/30">Role</span><span className="text-white/80">{profile.role}</span></div><div><span className="mb-2 block uppercase tracking-[.2em] text-white/30">Based in</span><span className="inline-flex items-center gap-2 text-white/80"><MapPin size={13} className="text-[#d7f34a]" /> {profile.location}</span></div><div className="flex gap-5 sm:justify-end"><a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Code2 size={14} /> GitHub</a><a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-white"><Mail size={14} /> Email</a></div></div>
    </div>
  </section>
}
