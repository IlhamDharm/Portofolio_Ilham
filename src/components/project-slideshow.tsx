"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

export function ProjectSlideshow({ title, images }: { title: string; images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const hasMultipleImages = images.length > 1

  useEffect(() => {
    if (!hasMultipleImages) return
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, 4000)
    return () => window.clearInterval(timer)
  }, [hasMultipleImages, images.length])

  const showPrevious = () => setActiveIndex((current) => (current - 1 + images.length) % images.length)
  const showNext = () => setActiveIndex((current) => (current + 1) % images.length)

  return <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-zinc-200">
    {images.map((image, index) => <Image key={image} src={image} alt={`${title} screenshot ${index + 1}`} fill sizes="100vw" priority={index === 0} className={`object-cover transition-opacity duration-700 ${index === activeIndex ? "opacity-100" : "opacity-0"}`} />)}
    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15" />
    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white sm:p-8"><div><p className="text-xs uppercase tracking-[.2em] text-white/75">Project overview</p><p className="mt-2 text-sm text-white/80">{activeIndex + 1} / {images.length} screens</p></div><div className="flex items-center gap-2"><button type="button" onClick={showPrevious} aria-label="Previous screenshot" className="rounded-full bg-white/90 p-2 text-black transition hover:bg-white focus-visible:outline-2 focus-visible:outline-white"><ChevronLeft size={18} /></button><button type="button" onClick={showNext} aria-label="Next screenshot" className="rounded-full bg-white/90 p-2 text-black transition hover:bg-white focus-visible:outline-2 focus-visible:outline-white"><ChevronRight size={18} /></button></div></div>
    <div className="absolute top-5 left-1/2 flex -translate-x-1/2 gap-2" role="tablist" aria-label={`${title} screenshots`}>{images.map((image, index) => <button key={image} type="button" role="tab" aria-selected={activeIndex === index} aria-label={`Show screenshot ${index + 1}`} onClick={() => setActiveIndex(index)} className={`h-1.5 rounded-full transition-all ${activeIndex === index ? "w-8 bg-white" : "w-1.5 bg-white/60"}`} />)}</div>
  </div>
}
