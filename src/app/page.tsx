import type { Metadata } from "next"
import { Navbar } from "@/src/components/navbar"
import { Hero } from "@/src/components/hero"
import { About } from "@/src/components/about"
import { Skills } from "@/src/components/skills"
import { ProjectFilter } from "@/src/components/project-filter"
import { Contact, Footer } from "@/src/components/contact"

export const metadata: Metadata = { title: "Ilham Dharma Atmaja — Product designer & developer", description: "Portfolio of Ilham Dharma Atmaja, a product designer and developer creating thoughtful digital experiences." }
export default function Home() { return <><Navbar /><main><Hero /><About /><Skills /><section id="work" className="bg-[#e9e9e5] px-6 py-20 lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl"><div className="mb-12 flex items-end justify-between"><p className="text-xs font-semibold uppercase tracking-[.24em] text-blue-600">03 / Selected work</p><p className="hidden max-w-xs text-right text-sm text-zinc-500 sm:block">A selection of ideas, products, and digital experiences.</p></div><ProjectFilter /></div></section><Contact /></main><Footer /></> }
