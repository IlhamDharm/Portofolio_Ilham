"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import type { Project } from "@/src/data/projects"

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const reduceMotion = useReducedMotion()
  return <motion.article initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .55, delay: reduceMotion ? 0 : index * .08, ease: "easeOut" }} className="group">
    <Link href={`/projects/${project.slug}`} className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
      <div className="relative aspect-[1.2/1] overflow-hidden rounded-2xl transition-transform duration-500 group-hover:-translate-y-1 sm:aspect-[1.55/1]" style={{ backgroundColor: project.color }}>
        {project.image ? <Image src={project.image} alt={`${project.title} homepage preview`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" /> : <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 70% 20%, white, transparent 35%)" }} />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/20" />
        <div className="relative flex h-full flex-col justify-between p-6 text-white sm:p-8"><div className="flex justify-between gap-4 text-xs uppercase tracking-[.18em] text-white/80"><span>{project.category}</span><span>{project.year}</span></div><div><p className="mb-4 max-w-lg text-sm leading-relaxed text-white/85">{project.description}</p><h3 className="font-display text-4xl tracking-[-.06em] sm:text-5xl">{project.title}</h3></div><span className="absolute bottom-6 right-6 rounded-full bg-white p-3 text-black transition-transform group-hover:rotate-45 sm:bottom-8 sm:right-8"><ArrowUpRight size={18} /></span></div>
      </div>
    </Link>
    <div className="mt-4 flex flex-wrap items-center gap-2"><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{project.status}</span>{project.tags.map((tag) => <span key={tag} className="rounded-full border border-black/10 px-3 py-1 text-xs text-zinc-500">{tag}</span>)}</div>
    <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium"><Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1 hover:text-blue-600">View details <ArrowUpRight size={14} /></Link>{project.github && <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-zinc-500 hover:text-black"><Code2 size={14} /> Source code</a>}{project.live && <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-zinc-500 hover:text-black"><ExternalLink size={14} /> Live demo</a>}</div>
   </motion.article>
 }
