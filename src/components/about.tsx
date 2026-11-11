import { Compass, Cpu, Layers } from "lucide-react"
import { profile } from "@/src/data/profile"

export function About() {
  return (
    <section id="overview" className="relative border-t border-[#111112]/10 bg-[#F5F5F0] px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1340px]">
        {/* Section Header */}
        <div>
          <h2 className="font-editorial text-4xl font-normal tracking-tight text-[#111112] sm:text-5xl lg:text-6xl">
            Engineering with <span className="italic">curiosity</span>, built to perform.
          </h2>
        </div>

        {/* 3 Pillar Editorial Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="editorial-card group relative flex flex-col justify-between rounded-3xl border border-[#111112]/10 bg-white p-8">
            <div>
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-[#F5F5F0] text-[#111112] transition-colors group-hover:bg-[#D2FF00]">
                  <Cpu size={22} />
                </span>
              </div>
              <h3 className="mt-8 font-editorial text-2xl font-semibold text-[#111112]">
                Informatics Engineering
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-[#555555]">
                Undergraduate student at Politeknik Negeri Malang focusing on modern software design patterns, scalable web architectures, and relational databases.
              </p>
            </div>
            <div className="mt-8 border-t border-[#111112]/10 pt-4 font-mono text-[11px] uppercase tracking-wider text-[#888888]">
              Academic Foundation
            </div>
          </div>

          {/* Card 2 */}
          <div className="editorial-card group relative flex flex-col justify-between rounded-3xl border border-[#111112]/10 bg-white p-8">
            <div>
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-[#F5F5F0] text-[#111112] transition-colors group-hover:bg-[#D2FF00]">
                  <Layers size={22} />
                </span>
              </div>
              <h3 className="mt-8 font-editorial text-2xl font-semibold text-[#111112]">
                Full-Stack Architecture
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-[#555555]">
                Crafting robust web applications with TypeScript, Next.js, PostgreSQL, and scalable APIs, with high attention to performance and UX.
              </p>
            </div>
            <div className="mt-8 border-t border-[#111112]/10 pt-4 font-mono text-[11px] uppercase tracking-wider text-[#888888]">
              Web &amp; Systems Craft
            </div>
          </div>

          {/* Card 3 */}
          <div className="editorial-card group relative flex flex-col justify-between rounded-3xl border border-[#111112]/10 bg-white p-8">
            <div>
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-[#F5F5F0] text-[#111112] transition-colors group-hover:bg-[#D2FF00]">
                  <Compass size={22} />
                </span>
              </div>
              <h3 className="mt-8 font-editorial text-2xl font-semibold text-[#111112]">
                Curiosity &amp; Impact
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-[#555555]">
                Developing purpose-driven tools like SafeHike for outdoor navigation and RawatRumah for home maintenance management.
              </p>
            </div>
            <div className="mt-8 border-t border-[#111112]/10 pt-4 font-mono text-[11px] uppercase tracking-wider text-[#888888]">
              Product Mindset
            </div>
          </div>
        </div>

        {/* Bio Strip */}
        <div className="mt-12 rounded-3xl border border-[#111112]/10 bg-white/60 p-8 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <h4 className="font-editorial text-2xl font-normal italic text-[#111112]">
                Continuous learning through building.
              </h4>
            </div>
            <div className="lg:col-span-8">
              <p className="text-sm leading-relaxed text-[#555555] sm:text-base">
                {profile.about}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
