import type { Metadata } from "next"
import { ViewTransition } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Code2, ExternalLink } from "lucide-react"
import { notFound } from "next/navigation"
import { getProject, projects } from "@/src/data/projects"
import { ProjectSlideshow } from "@/src/components/project-slideshow"

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: "Project not found" }
  return {
    title: `${project.title} — Ilham Dharma Atmaja`,
    description: project.description,
  }
}

function DetailBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-[#111112]/10 bg-white p-6 sm:p-10 shadow-sm">
      <h2 className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-[#555555]">
        {title}
      </h2>
      <div className="text-sm leading-relaxed text-[#555555] sm:text-base">
        {children}
      </div>
    </section>
  )
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen bg-[#F5F5F0] px-5 py-8 text-[#111112] sm:px-8 lg:px-12 lg:py-12">
      <div className="mx-auto max-w-[1340px]">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs text-[#555555]">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-[#111112]"
          >
            <ArrowLeft size={13} /> On Track Archive
          </Link>
          <span className="text-[#888888]">/</span>
          <span className="font-bold text-[#111112]">{project.title}</span>
        </nav>

        {/* Header */}
        <header className="relative isolate mt-12 grid gap-8 border-b border-[#111112]/10 pb-12 lg:grid-cols-12 lg:items-end">
          {project.slug === "safehike" && (
            <div
              data-aifx="topo-lines"
              className="absolute inset-0 -z-10 pointer-events-none"
              aria-hidden="true"
            />
          )}
          <div className="lg:col-span-7">
            <div className="mb-4 flex flex-wrap items-center gap-2 font-mono text-xs text-[#555555]">
              <span className="font-bold text-[#111112]">{project.category}</span>
              <span>/</span>
              <span>{project.year}</span>
              <span>/</span>
              <span className="rounded-full bg-[#D2FF00] px-2.5 py-0.5 font-bold text-[#111112]">
                {project.status}
              </span>
            </div>
            <h1 className="font-editorial text-5xl font-normal tracking-tight text-[#111112] sm:text-6xl lg:text-7xl">
              {project.title}<span className="italic text-[#888888]">.</span>
            </h1>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-[#555555] sm:text-base">
              {project.description}
            </p>

            {project.proof && (
              <ul className="mt-4 space-y-1.5 font-mono text-xs text-[#555555]">
                {project.proof.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#D2FF00] ring-1 ring-[#111112]" />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-wider">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#111112] px-6 py-3 font-bold text-[#F5F5F0] shadow-md transition-all hover:bg-[#D2FF00] hover:text-[#111112]"
                >
                  Live Preview <ExternalLink size={13} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#111112]/20 bg-white px-5 py-3 font-semibold text-[#111112] transition-colors hover:border-[#111112]"
                >
                  <Code2 size={13} /> Repository
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Media / Screenshots Showcase */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-[#111112]/15 bg-white shadow-xl">
          {project.images ? (
            <ProjectSlideshow
              title={project.title}
              images={project.images}
              transitionName={`project-media-${project.slug}`}
            />
          ) : project.image ? (
            <ViewTransition name={`project-media-${project.slug}`} share="morph" default="none">
              <div className="relative aspect-[16/8] w-full overflow-hidden bg-[#EAEAE5]">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </ViewTransition>
          ) : (
            <div className="flex aspect-[16/8] items-center justify-center bg-[#EAEAE5] font-mono text-sm text-[#888888]">
              Visual showcase unavailable
            </div>
          )}
        </div>

        {/* Case Study Details */}
        <div className="mt-12 grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <aside className="space-y-6 md:sticky md:top-24 md:self-start">
            <div className="rounded-3xl border border-[#111112]/10 bg-white p-6 shadow-sm">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#888888]">Role &amp; Contribution</p>
              <p className="mt-2 text-sm font-semibold text-[#111112]">{project.role}</p>
            </div>

            <div className="rounded-3xl border border-[#111112]/10 bg-white p-6 shadow-sm">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#888888]">Engine Stack</p>
              <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-xs">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#F5F5F0] px-3 py-1 text-[#111112]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            <DetailBlock title="The Objective">{project.goal}</DetailBlock>
            <DetailBlock title="Architecture &amp; Implementation">{project.implementation}</DetailBlock>
            <DetailBlock title="Engineering Takeaways">{project.learning}</DetailBlock>

            <div className="pt-4 font-mono text-xs">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-1.5 font-bold text-[#111112] hover:underline"
              >
                ← Return to On Track Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
