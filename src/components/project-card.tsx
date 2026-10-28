"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import type { Project } from "@/src/data/projects"

type ProjectCardProps = { project: Project; index?: number; featured?: boolean }

export function ProjectCard({ project, index = 0, featured = false }: ProjectCardProps) {
  const reduceMotion = useReducedMotion()
  const shortDescription = project.description.length > 150 ? `${project.description.slice(0, 150).trimEnd()}…` : project.description
  const projectHref = `/projects/${project.slug}`

  return <motion.article initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: .2 }} transition={{ duration: .6, delay: reduceMotion ? 0 : index * .08, ease: "easeOut" }} className={`group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/55 p-3 shadow-[0_14px_40px_rgba(16,19,18,.05)] transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-[#66705e]/40 hover:shadow-[0_28px_70px_rgba(16,19,18,.13)] sm:p-4 ${featured ? "md:col-span-2" : ""}`}>
    <Link href={projectHref} aria-label={`View ${project.title} case study`} className="block rounded-[1.5rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#66705e]">
      <div className={`relative isolate overflow-hidden rounded-[1.45rem] bg-[#202521] ${featured ? "aspect-[1.45/1] sm:aspect-[2.45/1]" : "aspect-[1.18/1] sm:aspect-[1.4/1]"}`} style={{ backgroundColor: project.color }}>
        {project.image ? <Image src={project.image} alt={`${project.title} project preview`} fill sizes={featured ? "(min-width: 768px) 100vw, 100vw" : "(min-width: 768px) 50vw, 100vw"} className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]" /> : <>
          <div className="absolute inset-0 opacity-80" style={{ background: `radial-gradient(circle at 75% 18%, rgba(215,243,74,.42), transparent 30%), linear-gradient(135deg, ${project.color}, #101312 115%)` }} />
          <div aria-hidden="true" className="absolute -right-[8%] top-[12%] aspect-square w-[42%] rounded-full border border-white/20 transition-transform duration-700 group-hover:scale-110"><div className="absolute inset-[12%] rounded-full border border-white/15" /><div className="absolute inset-[26%] rounded-full border border-white/10" /></div>
        </>}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101312]/70 via-transparent to-[#101312]/10 transition-opacity duration-500 group-hover:from-[#101312]/55" />
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-[#101312]/45 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.16em] text-white backdrop-blur-md sm:left-6 sm:top-6"><span className="size-1.5 rounded-full bg-[#d7f34a]" />{project.category}</div>
        <span aria-hidden="true" className="absolute bottom-4 right-4 flex size-11 items-center justify-center rounded-full bg-[#d7f34a] text-[#101312] shadow-lg transition-transform duration-300 group-hover:rotate-45 sm:bottom-6 sm:right-6"><ArrowUpRight size={18} /></span>
        {featured && <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.16em] text-white backdrop-blur-md sm:right-6 sm:top-6">Featured project</span>}
      </div>
    </Link>

    <div className="px-2 pb-2 pt-5 sm:px-3 sm:pb-3 sm:pt-7">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-[10px] font-semibold uppercase tracking-[.18em] text-[#7d857a]"><span>{String(index + 1).padStart(2, "0")} <span className="mx-1 text-black/25">/</span> {project.year}</span><span className="inline-flex items-center gap-2"><span className={`size-1.5 rounded-full ${project.status === "Completed" ? "bg-[#66705e]" : "bg-[#d7a832]"}`} />{project.status}</span></div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0"><h3 className={`font-display font-semibold leading-[.9] tracking-[-.075em] ${featured ? "text-5xl sm:text-8xl" : "text-4xl sm:text-6xl"}`}>{project.title}</h3><p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#68706a]">{shortDescription}</p></div>
        <Link href={projectHref} className="inline-flex shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[.14em] text-[#596624] transition-colors hover:text-[#101312] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#66705e]">Case study <ArrowUpRight size={14} /></Link>
      </div>
      {project.proof && <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-black/10 pt-4 text-[10px] font-semibold uppercase tracking-[.1em] text-[#899085]">{project.proof.slice(0, featured ? 3 : 2).map((item) => <span key={item} className="inline-flex items-center gap-2"><span className="size-1 rounded-full bg-[#a6b539]" />{item}</span>)}</div>}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-4"><div className="flex flex-wrap gap-2">{project.tags.slice(0, featured ? 4 : 3).map((tag) => <span key={tag} className="rounded-full border border-black/10 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[.1em] text-[#7d857a]">{tag}</span>)}</div><div className="flex items-center gap-4 text-xs font-semibold">{project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`} className="inline-flex items-center gap-1.5 text-[#7d857a] transition-colors hover:text-[#101312] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#66705e]"><Code2 size={14} /> GitHub</a>}{project.live && <a href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`} className="inline-flex items-center gap-1.5 text-[#7d857a] transition-colors hover:text-[#101312] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#66705e]"><ExternalLink size={14} /> Demo</a>}</div></div>
    </div>
  </motion.article>
}
