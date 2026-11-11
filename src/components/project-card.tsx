import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react"
import type { Project } from "@/src/data/projects"

export function ProjectCard({
  project,
  isFeatured = false,
}: {
  project: Project
  isFeatured?: boolean
  index?: number
}) {
  return (
    <article
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#111112]/15 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#111112] hover:shadow-xl ${
        isFeatured ? "lg:col-span-2" : ""
      }`}
    >
      <div>
        {/* Image Display */}
        <Link
          href={`/projects/${project.slug}`}
          className="relative block aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#EAEAE5]"
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes={isFeatured ? "(max-width: 1024px) 100vw, 800px" : "(max-width: 768px) 100vw, 500px"}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full flex-col justify-between p-6">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">
                {project.tags.join(" · ")}
              </span>
              <span className="font-editorial text-3xl font-normal italic text-[#111112] group-hover:text-[#555555]">
                {project.title}
              </span>
              <span className="font-mono text-[10px] text-[#888888]">
                Inspect Case Study →
              </span>
            </div>
          )}

          {/* Clean Status Badge on image corner */}
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] font-semibold uppercase text-[#111112] shadow-sm backdrop-blur-md">
            {project.status}
          </span>
        </Link>

        {/* Content Details */}
        <div className="mt-5">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-editorial text-2xl font-semibold text-[#111112] transition-colors group-hover:underline">
              <Link href={`/projects/${project.slug}`}>
                {project.title}
              </Link>
            </h3>
            <span className="font-mono text-xs text-[#888888]">{project.year}</span>
          </div>

          <p className="mt-1 font-mono text-xs text-[#555555]">
            {project.category}
          </p>

          <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-[#555555]">
            {project.description}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px]">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#111112]/10 bg-[#F5F5F0] px-3 py-1 text-[#555555]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Action Bar */}
      <div className="mt-8 flex items-center justify-between border-t border-[#111112]/10 pt-4 font-mono text-xs">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 font-semibold text-[#111112] transition-colors hover:text-[#555555]"
        >
          View Case Study <ArrowUpRight size={14} />
        </Link>

        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub Repository"
              className="rounded-full p-1.5 text-[#555555] transition-colors hover:bg-black/5 hover:text-[#111112]"
            >
              <Code2 size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              title="Live Demo"
              className="rounded-full p-1.5 text-[#555555] transition-colors hover:bg-black/5 hover:text-[#111112]"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
