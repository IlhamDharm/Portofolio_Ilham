"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

const activities = [
  { src: "/activities/activity-01.jpeg", label: "01 / In the moment", className: "-rotate-6 lg:translate-y-14" },
  { src: "/activities/activity-02.jpeg", label: "02 / Personal archive", className: "rotate-3 lg:-translate-y-3" },
  { src: "/activities/activity-03.jpeg", label: "03 / Daily life", className: "-rotate-2 lg:translate-y-1" },
  { src: "/activities/activity-04.png", label: "04 / Outside the screen", className: "rotate-6 lg:translate-y-16" },
]

export function ActivityGallery() {
  const reduceMotion = useReducedMotion()
  return <section id="activities" className="overflow-hidden bg-[#f3f4ed] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"><div className="mx-auto max-w-[1500px]"><div className="text-center"><p className="mb-6 text-xs font-semibold uppercase tracking-[.25em] text-[#66705e]">06 / Beyond the code</p><h2 className="mx-auto max-w-3xl font-display text-[clamp(3.6rem,8vw,9rem)] font-semibold leading-[.78] tracking-[-.1em]">What&apos;s up<br /><span className="text-[#66705e]">in my world.</span></h2><p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-[#68706a]">A few moments, places, and activities that keep me curious beyond the screen.</p></div><div className="relative mx-auto mt-20 flex min-h-[480px] max-w-6xl items-center justify-center sm:min-h-[620px] lg:mt-28">{activities.map((activity, index) => <motion.div key={activity.src} initial={reduceMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: .25 }} transition={{ duration: .65, delay: reduceMotion ? 0 : index * .1 }} whileHover={reduceMotion ? undefined : { y: -14, rotate: 0, scale: 1.04, zIndex: 20 }} className={`absolute w-[52%] max-w-[250px] overflow-hidden rounded-[2rem] border-[6px] border-[#f3f4ed] bg-white shadow-[0_22px_50px_rgba(16,19,18,.18)] transition-shadow hover:z-20 hover:shadow-[0_30px_70px_rgba(16,19,18,.28)] sm:max-w-[310px] lg:max-w-[350px] ${activity.className} ${index === 0 ? "-translate-x-[82%] sm:-translate-x-[85%]" : index === 1 ? "-translate-x-[27%] -translate-y-12 sm:-translate-x-[35%] sm:-translate-y-20" : index === 2 ? "translate-x-[27%] -translate-y-8 sm:translate-x-[35%] sm:-translate-y-16" : "translate-x-[82%] sm:translate-x-[85%]"}`}><div className="relative aspect-[.78/1]"><Image src={activity.src} alt={activity.label} fill sizes="(max-width: 640px) 52vw, 350px" className="object-cover" /></div></motion.div>)}</div><div className="mt-4 flex justify-end border-t border-black/15 pt-6"><a href="#contact" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.12em] text-[#596624] hover:text-[#101312]">Let&apos;s connect <ArrowUpRight size={15} /></a></div></div></section>
}
