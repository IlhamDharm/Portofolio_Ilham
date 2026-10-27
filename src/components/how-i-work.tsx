"use client"

import { ArrowDown, Lightbulb, Rocket, Search, Wrench } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

const steps = [
  { number: "01", title: "Understand", description: "Memahami konteks, kebutuhan pengguna, dan masalah yang ingin diselesaikan.", icon: Search },
  { number: "02", title: "Structure", description: "Menyusun alur, data, dan fondasi teknis sebelum mulai membangun.", icon: Lightbulb },
  { number: "03", title: "Build", description: "Mengubah ide menjadi interface dan fitur yang dapat digunakan secara bertahap.", icon: Wrench },
  { number: "04", title: "Improve", description: "Menguji, memperbaiki, dan mendokumentasikan apa yang dipelajari dari prosesnya.", icon: Rocket },
]

export function HowIWork() {
  const reduceMotion = useReducedMotion()
  return <section className="relative overflow-hidden bg-[#f3f4ed] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-[1500px]"><div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]"><div><p className="text-xs font-semibold uppercase tracking-[.25em] text-[#66705e]">03 / Process</p><h2 className="mt-7 max-w-xl font-display text-[clamp(3.2rem,6vw,6.5rem)] font-semibold leading-[.82] tracking-[-.09em]">How I<br /><span className="text-[#66705e]">work.</span></h2><p className="mt-8 max-w-sm text-sm leading-relaxed text-[#68706a]">A clear process for moving from a user problem to a tested, documented solution.</p><a href="#work" className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-[#596624] hover:text-[#101312]">See the work <ArrowDown size={15} /></a></div><motion.div initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: false, amount: .2 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: .1 } } }} className="grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 sm:grid-cols-2">{steps.map(({ number, title, description, icon: Icon }) => <motion.article key={number} variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: .55 } } }} className="bg-white/55 p-6 transition-colors hover:bg-white lg:p-8"><div className="flex items-start justify-between"><span className="font-display text-4xl font-semibold tracking-[-.08em] text-[#d7f34a]">{number}</span><Icon size={20} className="text-[#66705e]" /></div><h3 className="mt-14 font-display text-3xl font-semibold tracking-[-.06em]">{title}</h3><p className="mt-4 text-sm leading-relaxed text-[#68706a]">{description}</p></motion.article>)}</motion.div></div></div></section>
}
