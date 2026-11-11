import { ArrowUpRight, Download } from "lucide-react"
import { profile } from "@/src/data/profile"

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-[#111112]/10 bg-[#F5F5F0] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1340px]">
        {/* Giant Editorial Header */}
        <div className="border-b border-[#111112]/10 pb-12">
          <h2 className="font-editorial text-5xl font-normal leading-none tracking-tight text-[#111112] sm:text-7xl lg:text-8xl xl:text-9xl">
            Let&apos;s build <span className="italic text-[#888888]">together</span>.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-[#555555] sm:text-lg">
            Available for full-stack software development internships and collaborative technical opportunities. Let&apos;s talk engineering.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-wider">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#111112] px-8 py-4 font-bold text-[#F5F5F0] shadow-xl transition-all hover:bg-[#D2FF00] hover:text-[#111112] hover:scale-105"
            >
              Send Direct Message <ArrowUpRight size={15} />
            </a>

            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#111112]/20 bg-white px-8 py-4 font-semibold text-[#111112] transition-colors hover:border-[#111112]"
            >
              Download CV / Resume <Download size={14} />
            </a>
          </div>
        </div>

        {/* 4 Connection Links Horizontal Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={`mailto:${profile.email}`}
            className="editorial-card group flex items-center justify-between rounded-3xl border border-[#111112]/10 bg-white p-6"
          >
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#888888]">
                EMAIL
              </span>
              <p className="mt-1 font-editorial text-lg font-semibold text-[#111112]">
                {profile.email}
              </p>
            </div>
            <ArrowUpRight size={16} className="text-[#888888] transition-transform group-hover:text-[#111112] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="editorial-card group flex items-center justify-between rounded-3xl border border-[#111112]/10 bg-white p-6"
          >
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#888888]">
                LINKEDIN
              </span>
              <p className="mt-1 font-editorial text-lg font-semibold text-[#111112]">
                /in/ilham-dharma
              </p>
            </div>
            <ArrowUpRight size={16} className="text-[#888888] transition-transform group-hover:text-[#111112] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="editorial-card group flex items-center justify-between rounded-3xl border border-[#111112]/10 bg-white p-6"
          >
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#888888]">
                GITHUB
              </span>
              <p className="mt-1 font-editorial text-lg font-semibold text-[#111112]">
                /IlhamDharm
              </p>
            </div>
            <ArrowUpRight size={16} className="text-[#888888] transition-transform group-hover:text-[#111112] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href={`https://wa.me/${profile.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="editorial-card group flex items-center justify-between rounded-3xl border border-[#111112]/10 bg-white p-6"
          >
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#888888]">
                WHATSAPP
              </span>
              <p className="mt-1 font-editorial text-lg font-semibold text-[#111112]">
                {profile.whatsappDisplay}
              </p>
            </div>
            <ArrowUpRight size={16} className="text-[#888888] transition-transform group-hover:text-[#111112] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-[#111112]/10 bg-[#F5F5F0] px-5 py-10 font-mono text-xs text-[#555555] sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1340px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 font-bold text-[#111112]">
          <span className="size-2 rounded-full bg-[#D2FF00] ring-1 ring-[#111112]" />
          <span>© 2026 ILHAM DHARMA ATMAJA</span>
        </div>
        <p className="text-[11px] text-[#888888]">
          BUILT WITH NEXT.JS 16 &amp; TAILWIND CSS
        </p>
      </div>
    </footer>
  )
}
