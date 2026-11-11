"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react"
import { projects } from "@/src/data/projects"
import { ProjectCard } from "@/src/components/project-card"

const categories = ["All", "Web App", "AI & ML", "Outdoor Tech", "Concept"]

export function ProjectFilter() {
  const [activeTab, setActiveTab] = useState("All")

  const safeHike = projects.find((p) => p.slug === "safehike") || projects[0]
  const otherProjects = projects.filter((p) => p.slug !== safeHike.slug)

  const filteredProjects = otherProjects.filter((p) => {
    if (activeTab === "All") return true
    if (activeTab === "Web App") return p.category.includes("Maintenance") || p.category.includes("Web")
    if (activeTab === "AI & ML") return p.category.includes("AI") || p.tags.includes("Python")
    if (activeTab === "Outdoor Tech") return p.tags.includes("Outdoor Tech") || p.tags.includes("Outdoor Rental")
    if (activeTab === "Concept") return p.status === "Concept"
    return true
  })

  return (
    <div className="space-y-16">
      {/* ── 1. PRIMARY EDITORIAL HERO SHOWCASE: SAFEHike (Featured Platform) ── */}
      <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-[#111112]/15 bg-white p-7 sm:p-12 lg:p-16 shadow-xl">
        {/* Topo Lines — Mountain Topography Metaphor for SafeHike */}
        <div
          data-aifx="topo-lines"
          className="absolute inset-0 -z-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Accent Glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 size-96 rounded-full bg-[#D2FF00]/25 blur-[120px] -z-10" />

        {/* Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#111112]/10 pb-6 font-mono text-xs uppercase tracking-widest text-[#555555]">
          <div className="flex items-center gap-2">
            <span className="flex size-2 rounded-full bg-[#D2FF00] ring-2 ring-[#111112]" />
            <span className="font-bold text-[#111112]">FEATURED PROJECT</span>
          </div>
          <div>
            <span className="rounded-full bg-[#111112] px-3 py-1 text-[11px] text-[#F5F5F0]">IN PROGRESS</span>
          </div>
        </div>

        {/* Center Split: Text Specs & Large Visual Device */}
        <div className="mt-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <h3 className="font-editorial text-5xl font-normal tracking-tight text-[#111112] sm:text-6xl lg:text-7xl">
              SafeHike<span className="italic text-[#888888]">.</span>
            </h3>

            <p className="mt-3 font-mono text-xs font-bold uppercase tracking-widest text-[#555555]">
              Hiking Safety &amp; Interactive Navigation
            </p>

            <p className="mt-6 text-sm leading-relaxed text-[#555555]">
              {safeHike.longDescription || safeHike.description}
            </p>

            {/* Proof Badges */}
            {safeHike.proof && (
              <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
                {safeHike.proof.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#111112]/15 bg-[#F5F5F0] px-3 py-1 text-[#111112]"
                  >
                    <span className="size-1.5 rounded-full bg-[#D2FF00] ring-1 ring-[#111112]" />
                    {item}
                  </span>
                ))}
              </div>
            )}

            {/* Tech Tags */}
            <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-[11px] text-[#555555]">
              {safeHike.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-[#F5F5F0] px-2.5 py-1">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider">
              <Link
                href={`/projects/${safeHike.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#D2FF00] px-6 py-3.5 font-bold text-[#111112] shadow-md transition-transform hover:scale-105 hover:bg-[#E0FF33]"
              >
                View Case Study <ArrowUpRight size={15} />
              </Link>

              {safeHike.live && (
                <a
                  href={safeHike.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#111112]/20 px-5 py-3.5 font-semibold text-[#111112] transition-colors hover:border-[#111112] hover:bg-[#111112] hover:text-[#F5F5F0]"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
              )}

              {safeHike.github && (
                <a
                  href={safeHike.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#111112]/20 px-4 py-3.5 text-[#555555] transition-colors hover:border-[#111112] hover:text-[#111112]"
                  title="Source Code"
                >
                  <Code2 size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: High-Impact Screenshot Mockup */}
          <div className="lg:col-span-7">
            <Link
              href={`/projects/${safeHike.slug}`}
              className="group relative block aspect-[16/10] overflow-hidden rounded-3xl border border-[#111112]/20 bg-[#EAEAE5] shadow-2xl"
            >
              <Image
                src="/projects/safehike/beranda.png"
                alt="SafeHike application preview"
                fill
                sizes="(max-width: 1024px) 100vw, 750px"
                priority
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-mono">
                <span>SafeHike Interface Preview</span>
                <span className="flex items-center gap-1 font-bold text-[#D2FF00]">
                  Inspect Project <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* ── 2. ON TRACK ARCHIVE GRID (OTHER PROJECTS) ── */}
      <div>
        {/* Sub Header & Filter Bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-b border-[#111112]/10 pb-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-editorial text-3xl font-normal text-[#111112]">
              Additional Engineering Builds
            </h3>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 rounded-full border border-[#111112]/15 bg-white p-1.5 font-mono text-xs">
            {categories.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 py-1.5 transition-all ${
                  activeTab === tab
                    ? "bg-[#111112] font-semibold text-[#F5F5F0]"
                    : "text-[#555555] hover:text-[#111112]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
