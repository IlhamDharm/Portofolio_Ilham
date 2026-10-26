"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion, useScroll } from "motion/react"

export function PageLoader() {
  const [loading, setLoading] = useState(true)
  const reduceMotion = useReducedMotion()
  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), reduceMotion ? 350 : 1200)
    return () => window.clearTimeout(timer)
  }, [reduceMotion])
  return <AnimatePresence>{loading && <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0, y: "-100%" }} transition={{ duration: reduceMotion ? .15 : .65, ease: [0.76, 0, 0.24, 1] }} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f3f4ed] text-[#101312]"><div className="w-[min(78vw,360px)] text-center"><motion.p initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : .15 }} className="font-display text-5xl font-semibold tracking-[-.09em] sm:text-6xl">ilham</motion.p><p className="mt-4 text-[10px] font-semibold uppercase tracking-[.35em] text-[#68706a]">Portfolio loading</p><div className="mt-10 h-px overflow-hidden bg-[#101312]/15"><motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: reduceMotion ? .25 : 1, delay: .15, ease: "easeInOut" }} className="h-full origin-left bg-[#101312]" /></div></div></motion.div>}</AnimatePresence>
}

export function ScrollProgress() { const { scrollYProgress } = useScroll(); return <motion.div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-[#d7f34a]" style={{ scaleX: scrollYProgress }} /> }
