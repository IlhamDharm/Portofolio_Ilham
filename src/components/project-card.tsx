"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import type { Project } from "@/src/data/projects"

type ProjectCardProps = { project: Project; index?: number; featured?: boolean }

export function ProjectCard({ project, index = 0, featured = false }: ProjectCardProps) {
  const reduceMotion = useReducedMotion()
  const shortDescription = project.description.length > 105 ? `${project.description.slice(0, 105).trimEnd()}…` : project.description
  return <motion.article initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .55, delay: reduceMotion ? 0 : index * .08, ease: "easeOut" }} className={`group ${featured ? "md:col-span-2" : ""}`}>
    <Link href={`/projects/${project.slug}`} className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#66705e]"><div className={`relative overflow-hidden bg-[#202521] transition-transform duration-500 group-hover:-translate-y-1 ${featured ? "aspect-[1.7/1] sm:aspect-[2.35/1]" : "aspect-[1.18/1] sm:aspect-[1.4/1]"}`} style={{ backgroundColor: project.color }}>
      {project.image ? <Image src={project.image} alt={`${project.title} homepage preview`} fill sizes={featured ? "100vw" : "(min-width: 768px) 50vw, 100vw"} className="object-cover transition-transform duration-700 group-hover:scale-105" /> : <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 70% 20%, white, transparent 35%)" }} />}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" /><div className="absolute inset-0 bg-[#d7f34a]/0 transition-colors duration-500 group-hover:bg-[#d7f34a]/10" />
      <div className="relative flex h-full flex-col justify-between p-5 text-white sm:p-8"><div className="flex items-start justify-between gap-4"><div><span className="mb-2 block text-[10px] font-semibold uppercase tracking-[.2em] text-[#d7f34a]">{featured ? "Featured case study" : `Selected project ${String(index + 1).padStart(2, "0")}`}</span><span className="text-[10px] font-semibold uppercase tracking-[.2em] text-white/70">{project.category}</span></div><span className="text-[10px] font-semibold uppercase tracking-[.2em] text-white/70">{project.year}</span></div><div className={featured ? "max-w-3xl" : "max-w-lg"}><p className="mb-3 max-w-xl text-sm leading-relaxed text-white/75">{shortDescription}</p><h3 className={`font-display font-semibold tracking-[-.07em] ${featured ? "text-5xl sm:text-8xl" : "text-4xl sm:text-6xl"}`}>{project.title}</h3></div><span className="absolute bottom-5 right-5 flex size-11 items-center justify-center rounded-full bg-[#d7f34a] text-[#101312] transition-transform duration-300 group-hover:rotate-45 sm:bottom-8 sm:right-8"><ArrowUpRight size={18} /></span><span className="absolute bottom-6 right-20 hidden text-[10px] font-semibold uppercase tracking-[.18em] text-[#d7f34a] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block sm:right-24">View case study</span></div>
    </div></Link>
    <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2"><span className="bg-[#d7f34a] px-3 py-1 text-[10px] font-semibold uppercase tracking-[.12em] text-[#596624]">{project.status}</span><span className="mr-1 text-[10px] font-semibold uppercase tracking-[.12em] text-[#7d857a]">{project.category}</span>{project.tags.slice(0, featured ? 5 : 3).map((tag) => <span key={tag} className="border border-black/15 px-3 py-1 text-[10px] uppercase tracking-[.1em] text-[#7d857a]">{tag}</span>)}</div>
    <div className="mt-4 flex flex-wrap gap-5 text-xs font-semibold"><Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1 hover:text-[#66705e]">View case study <ArrowUpRight size={14} /></Link>{project.github && <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[#7d857a] hover:text-black"><Code2 size={14} /> GitHub</a>}{project.live && <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[#7d857a] hover:text-black"><ExternalLink size={14} /> Live demo</a>}</div>
  </motion.article>
}
