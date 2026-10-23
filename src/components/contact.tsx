import { ArrowUpRight, Code2, ExternalLink, Mail, MessageCircle } from "lucide-react"
import { profile } from "@/src/data/profile"

export function Contact() {
  return <section id="contact" className="bg-black px-6 py-24 text-white lg:px-10 lg:py-32">
    <div className="mx-auto max-w-7xl">
      <p className="text-xs font-semibold uppercase tracking-[.24em] text-blue-400">Contact</p>
      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_.7fr] lg:items-end">
        <h2 className="max-w-3xl font-display text-5xl leading-[.95] tracking-[-.07em] md:text-8xl">Let&apos;s Build<br /><span className="text-blue-400">Something Useful.</span></h2>
        <div>
          <p className="mb-7 max-w-sm leading-relaxed text-zinc-400">Saya terbuka untuk kesempatan magang, kolaborasi proyek, dan pengalaman baru di bidang software development.</p>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 border-b border-white/40 pb-2 text-sm hover:border-white">{profile.email} <ArrowUpRight size={15} /></a>
          <div className="mt-8 flex flex-wrap gap-5 text-sm text-zinc-400"><a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><MessageCircle size={16} /> WhatsApp</a><a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Code2 size={16} /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><ExternalLink size={16} /> LinkedIn</a></div><a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 border-b border-white/40 pb-2 text-sm text-zinc-300 hover:border-white hover:text-white"><MessageCircle size={15} /> {profile.whatsappDisplay}</a>
        </div>
      </div>
    </div>
  </section>
}

export function Footer() {
  return <footer className="bg-black px-6 pb-8 text-zinc-500 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/15 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between"><span>© 2026 {profile.name} · {profile.location}</span><div className="flex gap-5"><a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a><a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a><a href={`mailto:${profile.email}`} className="hover:text-white"><Mail size={14} /></a></div></div></footer>
}
