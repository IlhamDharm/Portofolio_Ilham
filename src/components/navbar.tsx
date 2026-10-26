"use client"

import { Download, Menu, X } from "lucide-react"
import { useState } from "react"
import { profile } from "@/src/data/profile"

const links = [{ label: "About", href: "#about" }, { label: "Work", href: "#work" }, { label: "Contact", href: "#contact" }]

export function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"><nav className="mx-auto flex max-w-[1500px] items-center justify-between rounded-full border border-white/10 bg-[#101312]/85 px-5 py-3 text-white shadow-2xl backdrop-blur-xl" aria-label="Main navigation"><a href="#top" className="font-display text-lg font-semibold tracking-[-.06em]" onClick={() => setOpen(false)}>ilham</a><div className="hidden items-center gap-8 text-xs uppercase tracking-[.15em] text-white/55 md:flex">{links.map((link) => <a key={link.href} href={link.href} className="transition-colors hover:text-white">{link.label}</a>)}<a href={profile.cv} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-white/70 transition-colors hover:text-white">CV <Download size={13} /></a><a href={`mailto:${profile.email}`} className="rounded-full bg-[#d7f34a] px-4 py-2.5 font-semibold tracking-normal text-[#101312] transition-transform hover:-translate-y-0.5">Let&apos;s talk</a></div><button className="rounded-full p-2 text-white md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={19} /> : <Menu size={19} />}</button></nav>{open && <div className="mx-auto mt-2 max-w-[1500px] rounded-3xl border border-white/10 bg-[#101312] px-6 pb-5 pt-3 text-white shadow-2xl md:hidden">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 text-sm text-white/70 hover:text-white">{link.label}</a>)}<a href={profile.cv} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="flex items-center gap-2 border-b border-white/10 py-4 text-sm text-white/70 hover:text-white">View CV <Download size={14} /></a><a href={`mailto:${profile.email}`} className="mt-4 block rounded-full bg-[#d7f34a] px-4 py-3 text-center text-sm font-semibold text-[#101312]">Let&apos;s talk</a></div>}</header>
}
