"use client"

import { ArrowUp, Download, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { profile } from "@/src/data/profile"

const links: { label: string; href: string; badge?: string }[] = [
  { label: "Overview", href: "#top" },
  { label: "On Track", href: "#projects" },
  { label: "Telemetry", href: "#telemetry" },
  { label: "Expertise", href: "#expertise" },
  { label: "Off Track", href: "#off-track" },
  { label: "Contact", href: "#contact" },
]

const sectionIds = ["top", "projects", "telemetry", "expertise", "off-track", "contact"]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("top")
  const [scrolled, setScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: "-30% 0px -60% 0px" },
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8">
        <nav
          className={`mx-auto flex max-w-[1340px] items-center justify-between rounded-full border px-6 py-3.5 transition-all duration-300 ${
            scrolled
              ? "border-[#111112]/15 bg-[#F5F5F0]/90 shadow-xl backdrop-blur-xl"
              : "border-transparent bg-[#F5F5F0]/60 backdrop-blur-md"
          }`}
          aria-label="Main navigation"
        >
          {/* ── Brand Logo: ILHAM DHARMA in Editorial Serif ── */}
          <a
            href="#top"
            className="group flex items-center gap-2.5 font-editorial text-lg tracking-tight text-[#111112]"
            onClick={() => setOpen(false)}
          >
            <span className="font-semibold italic">Ilham Dharma</span>
            <span className="flex size-2 rounded-full bg-[#D2FF00] ring-2 ring-[#111112]" />
          </a>

          {/* ── Desktop Nav Links (Lando Norris Editorial Style) ── */}
          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`group relative flex items-center gap-1.5 rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-all ${
                    isActive
                      ? "text-[#111112] font-semibold"
                      : "text-[#555555] hover:text-[#111112]"
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="rounded-full bg-[#D2FF00] px-1.5 py-0.2 font-mono text-[9px] font-bold text-[#111112]">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 z-[-1] rounded-full border border-[#111112]/15 bg-[#111112]/5"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* ── Right CTA: High-Voltage Neon Lime Button ── */}
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#111112]/20 px-4 py-2 font-mono text-xs uppercase tracking-wider text-[#111112] transition-colors hover:border-[#111112] hover:bg-[#111112] hover:text-[#F5F5F0]"
            >
              CV <Download size={12} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-[#D2FF00] px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-[#111112] shadow-[0_0_15px_rgba(210,255,0,0.5)] transition-all hover:bg-[#E0FF33] hover:shadow-[0_0_25px_rgba(210,255,0,0.8)] hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="flex size-9 items-center justify-center rounded-full border border-[#111112]/20 bg-white/50 text-[#111112] lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {/* ── Mobile Menu Dropdown & Backdrop ── */}
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[-1] bg-[#111112]/60 backdrop-blur-md lg:hidden"
                onClick={() => setOpen(false)}
                aria-hidden="true"
              />
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="mx-auto mt-2 max-w-[1340px] rounded-3xl border border-[#111112]/15 bg-[#F5F5F0] p-6 shadow-2xl lg:hidden"
              >
                <div className="flex flex-col gap-1.5">
                  {links.map((link) => {
                    const isActive = activeSection === link.href.slice(1)
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between rounded-2xl px-5 py-3 font-mono text-xs uppercase tracking-wider transition-colors ${
                          isActive
                            ? "bg-[#D2FF00] font-bold text-[#111112]"
                            : "text-[#555555] hover:bg-black/5 hover:text-[#111112]"
                        }`}
                      >
                        <span>{link.label}</span>
                        {link.badge && (
                          <span className="font-mono text-[10px] opacity-70">
                            #{link.badge}
                          </span>
                        )}
                      </a>
                    )
                  })}
                </div>

                <div className="mt-5 flex flex-col gap-2.5 border-t border-[#111112]/10 pt-5">
                  <a
                    href={profile.cv}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-full border border-[#111112]/20 py-3 font-mono text-xs uppercase tracking-wider text-[#111112]"
                  >
                    Download CV <Download size={13} />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center justify-center rounded-full bg-[#D2FF00] py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#111112] shadow-md"
                  >
                    Get In Touch
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* ── Back to Top Floating Button ── */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.a
            href="#top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 flex size-11 items-center justify-center rounded-full border border-[#111112]/15 bg-[#F5F5F0] text-[#111112] shadow-2xl backdrop-blur-md transition-all hover:bg-[#D2FF00] hover:shadow-[0_0_20px_rgba(210,255,0,0.6)]"
          >
            <ArrowUp size={16} />
          </motion.a>
        )}
      </AnimatePresence>
    </>
  )
}
