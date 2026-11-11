"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion, useScroll } from "motion/react"

export function PageLoader() {
  const [loading, setLoading] = useState(true)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), reduceMotion ? 200 : 700)
    return () => window.clearTimeout(timer)
  }, [reduceMotion])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: reduceMotion ? 0.15 : 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111112] text-[#F5F5F0]"
        >
          <div className="w-[min(80vw,380px)] text-center">
            {/* Tag Badge */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] tracking-widest text-[#D2FF00]"
            >
              <span className="size-1.5 rounded-full bg-[#D2FF00] animate-ping" />
              PORTFOLIO · 2026
            </motion.div>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduceMotion ? 0 : 0.15 }}
              className="mt-6 font-editorial text-4xl font-normal italic tracking-tight sm:text-5xl"
            >
              Ilham Dharma
            </motion.p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[#888888]">
              Software Engineer · Portfolio
            </p>

            <div className="mt-8 h-[2px] w-full overflow-hidden bg-white/10">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: reduceMotion ? 0.2 : 0.6, delay: 0.1, ease: "easeInOut" }}
                className="h-full origin-left bg-[#D2FF00]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[#D2FF00] shadow-[0_0_12px_rgba(210,255,0,0.8)]"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
