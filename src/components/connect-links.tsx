"use client"

import * as simpleIcons from "simple-icons"
import { Mail } from "lucide-react"
import { motion } from "motion/react"
import { profile } from "@/src/data/profile"

type ConnectItem = { label: string; href: string; icon?: string; external?: boolean }
const items: ConnectItem[] = [
  { label: "GitHub", href: profile.github, icon: "github", external: true },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin", external: true },
  { label: "WhatsApp", href: `https://wa.me/${profile.whatsapp}`, icon: "whatsapp", external: true },
  { label: "Email", href: `mailto:${profile.email}` },
]
function getIcon(name?: string) { if (!name) return undefined; const key = `si${name.charAt(0).toUpperCase()}${name.slice(1)}` as keyof typeof simpleIcons; return simpleIcons[key] as simpleIcons.SimpleIcon | undefined }

export function ConnectLinks({ compact = false, socialOnly = false, dark = false }: { compact?: boolean; socialOnly?: boolean; dark?: boolean }) { const visibleItems = socialOnly ? items.filter((item) => item.label !== "Email") : items; return <div className="flex flex-wrap gap-3">{visibleItems.map((item) => { const icon = getIcon(item.icon); return <motion.a key={item.label} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} aria-label={item.label} title={item.label} whileHover={{ y: -4 }} whileTap={{ scale: .96 }} className={`group flex items-center gap-3 border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${dark ? "border-white/20 bg-white/[.04] text-white hover:border-[#d7f34a] hover:bg-[#d7f34a] hover:text-[#101312] focus-visible:outline-[#d7f34a]" : "border-[#101312]/15 bg-white/45 text-[#101312] hover:border-[#d7f34a] hover:bg-[#d7f34a] focus-visible:outline-[#66705e]"} ${compact ? "size-12 justify-center rounded-2xl" : "rounded-2xl px-4 py-3"}`}>{icon ? <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="currentColor"><path d={icon.path} /></svg> : <Mail aria-hidden="true" size={19} />} {!compact && <span className="text-xs font-semibold uppercase tracking-[.12em]">{item.label}</span>}<span className="sr-only">{item.label}</span></motion.a> })}</div> }
