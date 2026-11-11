"use client"

import Image from "next/image"
import { ArrowDownRight, Download } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { profile } from "@/src/data/profile"

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="top" className="relative isolate min-h-[92vh] overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pt-36">
      {/* Topo Lines — render inside a container with className="relative isolate" */}
      <div
        data-aifx="topo-lines"
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Speed Accent Glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-96 rounded-full bg-[#D2FF00]/15 blur-[120px] -z-10" />

      <div className="relative z-10 mx-auto max-w-[1340px]">
        {/* ── Top Racing Telemetry Status Bar ── */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#111112]/10 pb-4 font-mono text-xs uppercase tracking-widest text-[#555555]">
          <div className="flex items-center gap-2">
            <span className="flex size-2 rounded-full bg-[#D2FF00] ring-4 ring-[#D2FF00]/20" />
            <span className="text-[#111112] font-bold">STATUS: ON TRACK</span>
            <span className="text-[#888888]">/ INTERNSHIP 2026</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-[#888888]">
            <span>INDONESIA · GMT+7</span>
            <span>POLITEKNIK NEGERI MALANG</span>
          </div>
        </div>

        {/* ── Hero Split Layout: Asymmetrical Editorial Tension ── */}
        <div className="mt-12 grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Massive Editorial Typography */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-8"
          >
            {/* Tagline micro */}
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#555555]">
              Full-Stack Software Engineer
            </p>

            {/* Editorial Serif Giant Heading */}
            <h1 className="mt-4 font-editorial text-5xl font-normal leading-[0.95] tracking-tight text-[#111112] sm:text-7xl lg:text-8xl xl:text-9xl">
              Building software with <span className="italic">speed</span> &amp;{" "}
              <span className="relative inline-block font-semibold">
                precision
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-[#D2FF00] -z-10" />
              </span>
              .
            </h1>

            {/* Bio paragraph with clean Mona-style sans */}
            <p className="mt-8 max-w-xl text-base leading-relaxed text-[#555555] sm:text-lg">
              Informatics Engineering student focused on building fast, scalable full-stack web applications and software systems with modern developer tooling.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-wider">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#111112] px-7 py-4 font-bold text-[#F5F5F0] transition-transform hover:scale-105 hover:bg-[#111112]/90"
              >
                Explore On Track <ArrowDownRight size={16} className="text-[#D2FF00]" />
              </a>

              <a
                href={profile.cv}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#111112]/20 bg-transparent px-7 py-4 font-semibold text-[#111112] transition-colors hover:border-[#111112] hover:bg-[#111112] hover:text-[#F5F5F0]"
              >
                Curriculum Vitae <Download size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Editorial Portrait with F1 Tag Details */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-5 xl:col-span-4"
          >
            <div className="group relative overflow-hidden rounded-3xl border border-[#111112]/15 bg-white shadow-2xl">
              {/* Portrait Image */}
              <div className="relative aspect-[3/3.8] overflow-hidden bg-[#EAEAE5]">
                <Image
                  src="/ilham-profile-final.png"
                  alt="Ilham Dharma Atmaja"
                  fill
                  priority
                  sizes="(max-width: 1024px) 400px, 420px"
                  className="object-cover object-bottom transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Neon Lime Corner Accent Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/40 bg-white/80 p-3.5 backdrop-blur-md">
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#555555]">
                      CORE FOCUS
                    </span>
                    <p className="font-editorial text-sm font-semibold italic text-[#111112]">
                      Full-Stack Development
                    </p>
                  </div>
                  <span className="flex size-2.5 rounded-full bg-[#D2FF00] ring-4 ring-[#111112]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom Career Metric Strips (Lando Norris Stats Bar) ── */}
        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-[#111112]/10 pt-8 sm:grid-cols-4">
          <div className="border-l-2 border-[#D2FF00] pl-4">
            <span className="font-mono text-2xl font-bold text-[#111112] sm:text-3xl">05</span>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[#555555]">Projects Shipped</p>
          </div>
          <div className="border-l-2 border-[#111112]/20 pl-4">
            <span className="font-mono text-2xl font-bold text-[#111112] sm:text-3xl">21</span>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[#555555]">Public Repositories</p>
          </div>
          <div className="border-l-2 border-[#111112]/20 pl-4">
            <span className="font-editorial text-2xl font-semibold italic text-[#111112] sm:text-3xl">Polinema</span>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[#555555]">Informatics Engineering</p>
          </div>
          <div className="border-l-2 border-[#111112]/20 pl-4">
            <span className="font-mono text-2xl font-bold text-[#111112] sm:text-3xl">Malang</span>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[#555555]">Based in Indonesia</p>
          </div>
        </div>
      </div>
    </section>
  )
}
