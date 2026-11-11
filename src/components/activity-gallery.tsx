"use client"

import Image from "next/image"
import { Camera } from "lucide-react"

const activities = [
  {
    src: "/activities/activity-02.jpeg",
    label: "Golden Hour Above the Clouds",
    tag: "SUNSET",
  },
  {
    src: "/activities/activity-03.jpeg",
    label: "Puncak Arjuno 3,339 MDPL",
    tag: "SUMMIT",
  },
  {
    src: "/activities/activity-04.png",
    label: "Heritage & Memorial Walk",
    tag: "CAMPUS & CULTURE",
  },
  {
    src: "/activities/activity-05.jpeg",
    label: "Summit Ridge with Merah Putih",
    tag: "HIGH POINT",
  },
  {
    src: "/activities/activity-06.jpeg",
    label: "Misty Alpine Pass",
    tag: "ADVENTURE",
  },
  {
    src: "/activities/activity-07.jpeg",
    label: "Alpine Forest Trail",
    tag: "NATURE",
  },
]

export function ActivityGallery() {
  const repeatedActivities = [...activities, ...activities]

  return (
    <section
      id="off-track"
      className="relative overflow-hidden border-t border-[#111112]/10 bg-[#111112] py-24 text-[#F5F5F0] lg:py-28"
    >
      <div className="mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D2FF00]">
              OFF-TRACK ARCHIVE
            </span>
            <h2 className="mt-2 font-editorial text-4xl font-normal tracking-tight text-white sm:text-5xl">
              Moments <span className="italic text-[#888888]">beyond</span> the screen.
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#888888]">
            <span className="size-2 rounded-full bg-[#D2FF00] animate-pulse" />
            <span>PAUSE ON HOVER · 6 EXPEDITION MEMORIES</span>
          </div>
        </div>
      </div>

      {/* ── Infinite Gliding Filmstrip Marquee ── */}
      <div className="photo-marquee-container relative mt-12 w-full overflow-hidden py-4">
        {/* Left & Right Smooth Gradient Masks */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#111112] to-transparent sm:w-32 lg:w-48"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#111112] to-transparent sm:w-32 lg:w-48"
        />

        {/* Marquee Gliding Track */}
        <div className="photo-marquee-track px-4 sm:px-8">
          {repeatedActivities.map((activity, idx) => (
            <div
              key={`${activity.src}-${idx}`}
              className="dark-editorial-card group relative w-72 shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-[#18181A] p-3 shadow-2xl transition-all duration-300 hover:border-white/30 hover:scale-[1.02] sm:w-80"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#090B10]">
                <Image
                  src={activity.src}
                  alt={activity.label}
                  fill
                  sizes="(max-width: 640px) 288px, 320px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Ambient Bottom Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Top Corner Badge */}
                <div className="absolute left-3.5 top-3.5">
                  <span className="rounded-full bg-black/60 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {activity.tag}
                  </span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5">
                  <p className="font-editorial text-base font-semibold leading-snug text-white drop-shadow">
                    {activity.label}
                  </p>
                </div>
              </div>

              {/* Bottom Card Meta */}
              <div className="flex items-center justify-between px-2 pt-3 font-mono text-[10px] text-[#888888]">
                <span>ARCHIVE CAPTURE</span>
                <Camera size={13} className="text-[#D2FF00]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
