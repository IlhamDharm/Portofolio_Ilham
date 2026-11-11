"use client"

import Image from "next/image"
import { Camera } from "lucide-react"

const activities = [
  { src: "/activities/activity-01.jpeg", label: "Field Exploration & Moments", aspect: "aspect-[4/5]" },
  { src: "/activities/activity-02.jpeg", label: "Campus & Creative Archive", aspect: "aspect-[4/5]" },
  { src: "/activities/activity-03.jpeg", label: "Everyday Focus & Life", aspect: "aspect-[4/5]" },
  { src: "/activities/activity-04.png", label: "Outdoor & Off-Screen", aspect: "aspect-[4/5]" },
]

export function ActivityGallery() {
  return (
    <section id="off-track" className="relative border-t border-[#111112]/10 bg-[#111112] px-5 py-24 text-[#F5F5F0] sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1340px]">
        {/* Section Header */}
        <div className="border-b border-white/10 pb-6">
          <h2 className="font-editorial text-4xl font-normal tracking-tight text-white sm:text-5xl">
            Moments <span className="italic text-[#888888]">beyond</span> the screen.
          </h2>
        </div>

        {/* 4 Photo Columns Grid (Like Lando's Photography Journal) */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity) => (
            <div
              key={activity.src}
              className="dark-editorial-card group relative overflow-hidden rounded-3xl border border-white/10 bg-[#18181A] p-3 shadow-lg"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#090B10]">
                <Image
                  src={activity.src}
                  alt={activity.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 right-3 font-mono text-[11px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {activity.label}
                </div>
              </div>
              <div className="flex items-center justify-between px-2 pt-3 font-mono text-[10px] text-[#888888]">
                <span>ARCHIVE</span>
                <Camera size={13} className="text-[#D2FF00]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
