import Image from "next/image"
import { MapPin } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="relative border-t border-[#111112]/10 bg-[#F5F5F0] px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1340px]">
        {/* Section Header */}
        <div className="border-b border-[#111112]/10 pb-6">
          <h2 className="font-editorial text-4xl font-normal tracking-tight text-[#111112] sm:text-5xl">
            Education
          </h2>
        </div>

        {/* Education Editorial Box */}
        <div className="mt-10 rounded-3xl border border-[#111112]/15 bg-white p-8 shadow-sm sm:p-12">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              {/* Official Polinema Logo */}
              <div className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#111112]/10 bg-[#F5F5F0] p-1.5 shadow-sm sm:size-20">
                <Image
                  src="/polinema-logo.png"
                  alt="Logo Politeknik Negeri Malang"
                  fill
                  sizes="80px"
                  className="object-contain p-1"
                />
              </div>

              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#888888]">
                  SARJANA TERAPAN (D4)
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#111112] sm:text-3xl">
                  Politeknik Negeri Malang
                </h3>
                <p className="mt-1 font-mono text-xs text-[#555555]">
                  Jurusan Teknologi Informasi · Teknik Informatika
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="flex items-center gap-1.5 rounded-full border border-[#111112]/15 bg-[#F5F5F0] px-4 py-1.5 text-[#111112]">
                <MapPin size={13} className="text-[#111112]" /> Malang, Indonesia
              </span>
              <span className="rounded-full bg-[#D2FF00] px-4 py-1.5 font-bold text-[#111112]">
                ONGOING
              </span>
            </div>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-[#555555] sm:text-base">
            Actively pursuing a bachelor&apos;s degree in Informatics Engineering with extensive coursework in data structures, algorithms, object-oriented design, web systems, database architectures, and applied computer vision.
          </p>

          {/* Core Modules Pills */}
          <div className="mt-8 flex flex-wrap gap-2 border-t border-[#111112]/10 pt-6 font-mono text-xs">
            <span className="rounded-full bg-[#F5F5F0] px-3.5 py-1.5 text-[#111112]">
              Data Structures &amp; Algorithms
            </span>
            <span className="rounded-full bg-[#F5F5F0] px-3.5 py-1.5 text-[#111112]">
              Object-Oriented Programming (Java / PHP)
            </span>
            <span className="rounded-full bg-[#F5F5F0] px-3.5 py-1.5 text-[#111112]">
              Database Management (PostgreSQL / MySQL)
            </span>
            <span className="rounded-full bg-[#F5F5F0] px-3.5 py-1.5 text-[#111112]">
              Full-Stack Web Architecture
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
