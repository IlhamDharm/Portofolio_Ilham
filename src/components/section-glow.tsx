"use client"

import { motion, useReducedMotion } from "motion/react"

export function SectionGlow({ tone = "lime" }: { tone?: "lime" | "teal" }) {
  const reduceMotion = useReducedMotion()
  const color = tone === "teal" ? "bg-[#3f8f86]/20" : "bg-[#d7f34a]/20"
  return <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden"><motion.div animate={reduceMotion ? undefined : { x: ["-8%", "10%", "-8%"], y: ["0%", "8%", "0%"], scale: [1, 1.15, 1] }} transition={reduceMotion ? undefined : { duration: 16, repeat: Infinity, ease: "easeInOut" }} className={`absolute -left-32 -top-32 size-[30rem] rounded-full ${color} blur-[100px]`} /><motion.div animate={reduceMotion ? undefined : { x: ["8%", "-10%", "8%"], y: ["0%", "-8%", "0%"], scale: [1.1, .95, 1.1] }} transition={reduceMotion ? undefined : { duration: 19, repeat: Infinity, ease: "easeInOut" }} className={`absolute -bottom-48 -right-32 size-[34rem] rounded-full ${tone === "teal" ? "bg-[#d7f34a]/10" : "bg-[#3f8f86]/10"} blur-[110px]`} /></div>
}
