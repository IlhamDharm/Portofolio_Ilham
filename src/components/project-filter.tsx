"use client"

import { Search, SlidersHorizontal } from "lucide-react"
import { useMemo, useState } from "react"
import { projects } from "@/src/data/projects"
import { ProjectCard } from "@/src/components/project-card"

const filters = ["All", ...Array.from(new Set(projects.map((project) => project.category)))]
const featuredSlug = "ncs-polinema"

export function ProjectFilter() {
  const [filter, setFilter] = useState("All"); const [query, setQuery] = useState("")
  const filtered = useMemo(() => projects.filter((project) => (filter === "All" || project.category === filter) && `${project.title} ${project.description} ${project.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase())), [filter, query])
  const ordered = useMemo(() => [...filtered].sort((a, b) => Number(b.slug === featuredSlug) - Number(a.slug === featuredSlug)), [filtered])
  const showFeatured = filter === "All" && query.trim() === "" && ordered[0]?.slug === featuredSlug
  return <div><div className="mb-12 flex flex-col gap-5 border-y border-black/15 py-5 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-2 overflow-x-auto" role="group" aria-label="Filter projects"><SlidersHorizontal size={15} className="mr-2 shrink-0 text-[#7d857a]" />{filters.map((item) => <button key={item} type="button" onClick={() => setFilter(item)} aria-pressed={filter === item} className={`whitespace-nowrap px-3 py-2 text-xs font-semibold uppercase tracking-[.12em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#66705e] ${filter === item ? "bg-[#101312] text-white" : "text-[#7d857a] hover:text-[#101312]"}`}>{item}</button>)}</div><label className="flex items-center gap-2 border-b border-black/15 pb-2 text-sm text-[#7d857a] focus-within:border-black"><Search size={15} /><span className="sr-only">Search projects</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects" className="w-full bg-transparent outline-none placeholder:text-[#9ca39a] sm:w-40" /></label></div>{ordered.length ? <div className="grid gap-16 md:grid-cols-2">{ordered.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} featured={showFeatured && index === 0} />)}</div> : <div className="border border-dashed border-black/15 py-20 text-center text-[#68706a]">No projects found. Try another search.</div>}</div>
}
