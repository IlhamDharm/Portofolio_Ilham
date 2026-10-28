"use client"

import { Search, SlidersHorizontal, X } from "lucide-react"
import { useMemo, useState } from "react"
import { projects } from "@/src/data/projects"
import { ProjectCard } from "@/src/components/project-card"

const filters = ["All", ...Array.from(new Set(projects.map((project) => project.category)))]
const featuredSlug = "ncs-polinema"

export function ProjectFilter() {
  const [filter, setFilter] = useState("All")
  const [query, setQuery] = useState("")
  const activeSearch = query.trim()
  const filtered = useMemo(() => projects.filter((project) => {
    const matchesCategory = filter === "All" || project.category === filter
    const searchable = `${project.title} ${project.description} ${project.longDescription} ${project.category} ${project.year} ${project.status} ${project.tags.join(" ")}`.toLowerCase()
    return matchesCategory && searchable.includes(activeSearch.toLowerCase())
  }), [filter, activeSearch])
  const ordered = useMemo(() => [...filtered].sort((a, b) => Number(b.slug === featuredSlug) - Number(a.slug === featuredSlug)), [filtered])
  const showFeatured = filter === "All" && activeSearch === "" && ordered[0]?.slug === featuredSlug
  const hasActiveFilters = filter !== "All" || activeSearch !== ""
  const clearFilters = () => { setFilter("All"); setQuery("") }

  return <div>
    <div className="mb-8 border-y border-black/15 py-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <SlidersHorizontal aria-hidden="true" size={15} className="shrink-0 text-[#7d857a]" />
          <div className="flex min-w-0 items-center gap-1 overflow-x-auto pb-1" role="group" aria-label="Filter projects by category">
            {filters.map((item) => <button key={item} type="button" onClick={() => setFilter(item)} aria-pressed={filter === item} className={`shrink-0 rounded-full px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[.12em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#66705e] ${filter === item ? "bg-[#101312] text-white" : "text-[#7d857a] hover:bg-black/5 hover:text-[#101312]"}`}>{item}</button>)}
          </div>
        </div>
        <label className="flex w-full items-center gap-3 rounded-full border border-black/10 bg-white/45 px-4 py-2.5 text-sm text-[#7d857a] transition-colors focus-within:border-[#66705e]/60 lg:max-w-xs">
          <Search aria-hidden="true" size={15} className="shrink-0" />
          <span className="sr-only">Search projects</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects, tools, year…" className="min-w-0 flex-1 bg-transparent text-xs text-[#101312] outline-none placeholder:text-[#9ca39a]" />
          {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="rounded-full p-1 text-[#7d857a] transition-colors hover:bg-black/5 hover:text-[#101312] focus-visible:outline-2 focus-visible:outline-[#66705e]"><X size={13} /></button>}
        </label>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[.14em] text-[#899085]" aria-live="polite">
        <p>{ordered.length} {ordered.length === 1 ? "project" : "projects"}{hasActiveFilters ? " found" : " selected"}{filter !== "All" ? ` · ${filter}` : ""}</p>
        {hasActiveFilters && <button type="button" onClick={clearFilters} className="inline-flex items-center gap-1.5 text-[#596624] transition-colors hover:text-[#101312] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#66705e]"><X size={12} /> Clear filters</button>}
      </div>
    </div>
    {ordered.length ? <div className="grid gap-8 md:grid-cols-2 md:gap-10">{ordered.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} featured={showFeatured && index === 0} />)}</div> : <div className="rounded-[2rem] border border-dashed border-black/15 bg-white/30 px-6 py-20 text-center"><span className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#d7f34a]/35 text-[#596624]"><Search size={18} /></span><p className="mt-5 font-display text-2xl font-semibold tracking-[-.04em]">No projects found</p><p className="mt-2 text-sm text-[#68706a]">Try another keyword or clear the selected filters.</p><button type="button" onClick={clearFilters} className="mt-6 rounded-full bg-[#101312] px-5 py-3 text-[10px] font-semibold uppercase tracking-[.14em] text-white transition-colors hover:bg-[#596624] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#66705e]">Show all projects</button></div>}
  </div>
}
