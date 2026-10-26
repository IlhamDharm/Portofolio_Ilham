"use client"

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react"
import { useEffect, useState } from "react"

const particles = [
  { left: "16%", top: "22%", depth: 1 }, { left: "28%", top: "72%", depth: 2 }, { left: "58%", top: "16%", depth: 3 }, { left: "76%", top: "35%", depth: 1 }, { left: "87%", top: "74%", depth: 2 }, { left: "45%", top: "88%", depth: 3 },
]

export function AmbientBackground() {
  const reduceMotion = useReducedMotion(); const { scrollY } = useScroll(); const [pointer, setPointer] = useState({ x: 50, y: 50 })
  const smoothX = useSpring(pointer.x, { stiffness: 70, damping: 24, mass: .5 }); const smoothY = useSpring(pointer.y, { stiffness: 70, damping: 24, mass: .5 })
  const gridY = useTransform(scrollY, [0, 900], [0, 130], { clamp: false }); const backY = useTransform(scrollY, [0, 900], [0, -45], { clamp: false }); const frontY = useTransform(scrollY, [0, 900], [0, -95], { clamp: false })
  const cursorBackX = useTransform(smoothX, [0, 100], [-35, 35]); const cursorBackRotateX = useTransform(smoothY, [0, 100], [3, -3]); const cursorBackRotateY = useTransform(smoothX, [0, 100], [-5, 5])
  const cursorFrontX = useTransform(smoothX, [0, 100], [45, -45]); const cursorFrontRotateX = useTransform(smoothY, [0, 100], [-5, 5]); const cursorFrontRotateY = useTransform(smoothX, [0, 100], [6, -6])
  const cursorMidX = useTransform(smoothX, [0, 100], [-20, 20]); const particleX = useTransform(smoothX, [0, 100], [-5, 5]); const particleY = useTransform(smoothY, [0, 100], [-4, 4])

  useEffect(() => { if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return; const handlePointerMove = (event: PointerEvent) => setPointer({ x: (event.clientX / window.innerWidth) * 100, y: (event.clientY / window.innerHeight) * 100 }); window.addEventListener("pointermove", handlePointerMove, { passive: true }); return () => window.removeEventListener("pointermove", handlePointerMove) }, [reduceMotion])

  return <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden [perspective:900px]">
    <motion.div style={reduceMotion ? undefined : { y: gridY }} className="ambient-grid-3d absolute -inset-[35%]" />
    <motion.div style={reduceMotion ? undefined : { x: cursorBackX, y: backY, rotateX: cursorBackRotateX, rotateY: cursorBackRotateY }} className="ambient-orb ambient-orb-back absolute -left-40 top-10 size-[34rem] rounded-full bg-[#3f8f86]/25 blur-[85px]" />
    <motion.div style={reduceMotion ? undefined : { x: cursorFrontX, y: frontY, rotateX: cursorFrontRotateX, rotateY: cursorFrontRotateY }} className="ambient-orb ambient-orb-front absolute -right-44 bottom-0 size-[38rem] rounded-full bg-[#d7f34a]/20 blur-[75px]" />
    <motion.div style={reduceMotion ? undefined : { x: cursorMidX, y: frontY }} className="ambient-orb absolute left-[40%] top-[20%] size-52 rounded-full bg-[#8cf0c8]/15 blur-[60px]" />
    {particles.map((particle, index) => <motion.span key={index} style={{ left: particle.left, top: particle.top, x: reduceMotion ? 0 : particleX, y: reduceMotion ? 0 : particleY }} className="ambient-particle absolute size-1 rounded-full bg-[#d7f34a]" />)}
    <motion.div style={reduceMotion ? undefined : { left: smoothX, top: smoothY }} className={`absolute -ml-44 -mt-44 size-[30rem] rounded-full bg-[#d7f34a]/[.16] blur-3xl ${reduceMotion ? "opacity-0" : ""}`} />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,rgba(16,19,18,.08)_58%,rgba(16,19,18,.38)_100%)]" />
  </div>
}
