import Link from "next/link"
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react"
import type { Project } from "@/src/data/projects"

export function ProjectCard({ project }: { project: Project }) {
  return <article className="group">
    <Link href={`/projects/${project.slug}`} className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
      <div className="relative aspect-[1.2/1] overflow-hidden rounded-2xl p-6 transition-transform duration-500 group-hover:-translate-y-1 sm:p-8" style={{ backgroundColor: project.color }}>
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 70% 20%, white, transparent 35%)" }} />
        <div className="relative flex h-full flex-col justify-between text-white"><div className="flex justify-between gap-4 text-xs uppercase tracking-[.15em] text-white/70"><span>{project.category}</span><span>{project.year}</span></div><div><p className="mb-4 max-w-sm text-sm leading-relaxed text-white/80">{project.description}</p><h3 className="font-display text-4xl tracking-[-.06em] sm:text-5xl">{project.title}</h3></div><span className="absolute bottom-0 right-0 rounded-full bg-white p-3 text-black transition-transform group-hover:rotate-45"><ArrowUpRight size={18} /></span></div>
      </div>
    </Link>
    <div className="mt-4 flex flex-wrap items-center gap-2"><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{project.status}</span>{project.tags.map((tag) => <span key={tag} className="rounded-full border border-black/10 px-3 py-1 text-xs text-zinc-500">{tag}</span>)}</div>
    <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium"><Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1 hover:text-blue-600">View details <ArrowUpRight size={14} /></Link>{project.github && <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-zinc-500 hover:text-black"><Code2 size={14} /> Source code</a>}{project.live && <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-zinc-500 hover:text-black"><ExternalLink size={14} /> Live demo</a>}</div>
  </article>
}
