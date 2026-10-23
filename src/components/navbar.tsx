"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import { profile } from "@/src/data/profile"

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#11191d]/90 text-white backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10" aria-label="Main navigation">
        <a href="#top" className="font-display text-lg font-semibold tracking-[-0.04em]" onClick={() => setOpen(false)}>
          {profile.brand.slice(0, -1)}<span className="text-cyan-300">.</span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-zinc-500 md:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="transition-colors hover:text-white">{link.label}</a>)}
          <a href={`mailto:${profile.email}`} className="rounded-full bg-cyan-200 px-4 py-2 text-[#11191d] transition-transform hover:-translate-y-0.5">Let&apos;s talk</a>
        </div>
        <button className="rounded-full p-2 text-white md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {open && <div className="border-t border-white/10 bg-[#11191d] px-6 pb-5 pt-3 text-white md:hidden">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-3 text-sm text-white/70 hover:text-white">{link.label}</a>)}<a href={`mailto:${profile.email}`} className="mt-2 block rounded-full bg-cyan-200 px-4 py-3 text-center text-sm text-[#11191d]">Let&apos;s talk</a></div>}
    </header>
  )
}
