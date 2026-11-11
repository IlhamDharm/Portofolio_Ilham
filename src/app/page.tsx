import type { Metadata } from "next"
import { Navbar } from "@/src/components/navbar"
import { Hero } from "@/src/components/hero"
import { About } from "@/src/components/about"
import { Skills } from "@/src/components/skills"
import { ProjectFilter } from "@/src/components/project-filter"
import { Education } from "@/src/components/education"
import { GithubActivity } from "@/src/components/github-activity"
import { ActivityGallery } from "@/src/components/activity-gallery"
import { TechMarquee } from "@/src/components/tech-marquee"
import { Contact, Footer } from "@/src/components/contact"
import { profile } from "@/src/data/profile"

export const metadata: Metadata = {
  title: "Ilham Dharma Atmaja — Software Engineer",
  description: "Portfolio of Ilham Dharma Atmaja, Informatics Engineering student building high-performance web applications and software systems.",
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F5F5F0] text-[#111112]">
        <Hero />
        <TechMarquee />
        <About />

        {/* ── ON TRACK PROJECTS SECTION ── */}
        <section id="projects" className="relative border-t border-[#111112]/10 bg-[#F5F5F0] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1340px]">
            {/* Section Header */}
            <div className="mb-14">
              <h2 className="font-editorial text-5xl font-normal tracking-tight text-[#111112] sm:text-6xl lg:text-7xl">
                Selected Works<span className="italic text-[#888888]">.</span>
              </h2>
            </div>

            {/* Filter & Showcase */}
            <ProjectFilter />
          </div>
        </section>

        <GithubActivity profileUrl={profile.github} />
        <Skills />
        <Education />
        <ActivityGallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
