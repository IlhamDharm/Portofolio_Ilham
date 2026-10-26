import type { Metadata } from "next"
import { Navbar } from "@/src/components/navbar"
import { Hero } from "@/src/components/hero"
import { About } from "@/src/components/about"
import { Skills } from "@/src/components/skills"
import { ProjectFilter } from "@/src/components/project-filter"
import { Contact, Footer } from "@/src/components/contact"
import { ActivityGallery } from "@/src/components/activity-gallery"
import { TechMarquee } from "@/src/components/tech-marquee"
import { HowIWork } from "@/src/components/how-i-work"
import { GithubActivity } from "@/src/components/github-activity"
import { profile } from "@/src/data/profile"

export const metadata: Metadata = { title: "Ilham Dharma Atmaja — Software Developer", description: "Portfolio of Ilham Dharma Atmaja, an IT student building useful software through projects and experiments." }
export default function Home() { return <><Navbar /><main><Hero /><TechMarquee /><About /><Skills /><HowIWork /><GithubActivity profileUrl={profile.github} /><section id="work" className="bg-[#f3f4ed] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"><div className="mx-auto max-w-[1500px]"><div className="mb-14 grid gap-8 lg:grid-cols-[.5fr_1.5fr] lg:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.25em] text-[#66705e]">04 / Selected work</p><p className="mt-7 font-display text-7xl font-semibold leading-none tracking-[-.1em] text-[#d7f34a] sm:text-9xl">06</p></div><div><h2 className="font-display text-[clamp(3rem,7vw,7rem)] font-semibold leading-[.82] tracking-[-.09em]">Things I&apos;ve<br /><span className="text-[#66705e]">built.</span></h2><p className="mt-7 max-w-md text-sm leading-relaxed text-[#68706a]">Coursework, experiments, and concepts shaped by curiosity and a desire to make useful digital experiences.</p></div></div><ProjectFilter /></div></section><ActivityGallery /><Contact /></main><Footer /></> }
