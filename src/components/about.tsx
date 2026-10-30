import { ArrowUpRight } from "lucide-react"
import { profile } from "@/src/data/profile"

const focusAreas = ["Software development", "AI & computer vision", "Mobile applications", "Useful digital products"]

export function About() {
  const paragraphs = profile.about.split("\n\n")

  return (
    <section id="about" className="bg-[#f3f4ed] px-5 py-24 text-[#171a17] sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex items-center justify-between border-b border-black/15 pb-5">
          <p className="text-xs font-semibold uppercase tracking-[.25em] text-[#66705e]">01 / About</p>
          <span className="text-[10px] uppercase tracking-[.18em] text-[#899085]">A little about how I work</span>
        </div>

        <div className="grid gap-10 pt-10 lg:grid-cols-[1.35fr_.65fr] lg:gap-16 lg:pt-14">
          <h2 className="max-w-5xl font-display text-[clamp(3.5rem,9vw,9rem)] font-semibold leading-[.79] tracking-[-.1em]">
            Learning by
            <br />
            <span className="text-[#66705e]">building.</span>
          </h2>
          <div className="hidden lg:block" aria-hidden="true" />
        </div>

        <div className="mt-14 grid gap-14 border-t border-black/15 pt-8 lg:mt-20 lg:grid-cols-[.55fr_1.45fr] lg:gap-16 lg:pt-10">
          <div className="flex items-start gap-3 text-xs font-semibold uppercase tracking-[.2em] text-[#66705e]">
            <span className="font-mono text-[#a0a698]">01</span>
            <span>The approach</span>
          </div>
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {paragraphs.map((paragraph, index) => (
              <p key={paragraph} className={`max-w-xl text-base leading-[1.85] sm:text-lg ${index === 0 ? "text-[#343a34]" : "text-[#697067]"}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-black/15 pt-8 lg:mt-20 lg:pt-10">
          <div className="mb-8 flex items-start justify-between gap-6">
            <div className="flex items-start gap-3 text-xs font-semibold uppercase tracking-[.2em] text-[#66705e]">
              <span className="font-mono text-[#a0a698]">02</span>
              <span>Areas of focus</span>
            </div>
            <p className="hidden max-w-xs text-right text-sm leading-relaxed text-[#899085] sm:block">What I am exploring and building with right now.</p>
          </div>
          <ul className="grid border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((item, index) => (
              <li key={item} className="group flex min-h-28 items-start justify-between gap-4 border-b border-black/10 py-5 sm:min-h-32 sm:px-5 sm:first:pl-0 sm:nth-[2]:border-l sm:nth-[2]:border-black/10 lg:border-b-0 lg:border-l lg:first:border-l-0 lg:first:pl-0">
                <div>
                  <span className="mb-5 block font-mono text-[10px] text-[#899085]">0{index + 1}</span>
                  <span className="text-sm font-medium text-[#343a34] transition-colors group-hover:text-[#66705e] sm:text-base">{item}</span>
                </div>
                <ArrowUpRight size={15} className="mt-1 shrink-0 text-[#a0a698] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function AboutLink() {
  return (
    <a href="#about" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-[#66705e]">
      More about me <ArrowUpRight size={15} />
    </a>
  )
}
