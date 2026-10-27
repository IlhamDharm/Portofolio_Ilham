"use client"

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react"
import { useEffect } from "react"

const particles = [
  { left: "16%", top: "22%", depth: 1 }, { left: "28%", top: "72%", depth: 2 }, { left: "58%", top: "16%", depth: 3 }, { left: "76%", top: "35%", depth: 1 }, { left: "87%", top: "74%", depth: 2 }, { left: "45%", top: "88%", depth: 3 },
]

export function AmbientBackground() {
  const reduceMotion = useReducedMotion(); const { scrollY } = useScroll()
  const pointerX = useMotionValue(50); const pointerY = useMotionValue(50)
  const smoothX = useSpring(pointerX, { stiffness: 55, damping: 22, mass: .65 }); const smoothY = useSpring(pointerY, { stiffness: 55, damping: 22, mass: .65 })
  const normalizedX = useTransform(smoothX, [0, 100], [-1, 1]); const normalizedY = useTransform(smoothY, [0, 100], [-1, 1])
  const gridY = useTransform(scrollY, [0, 900], [0, 130], { clamp: false }); const backY = useTransform(scrollY, [0, 900], [0, -45], { clamp: false }); const frontY = useTransform(scrollY, [0, 900], [0, -95], { clamp: false })
  const contourX = useTransform(normalizedX, [-1, 1], [24, -24]); const contourRotate = useTransform(normalizedX, [-1, 1], [-1.5, 1.5])
  const cursorBackX = useTransform(normalizedX, [-1, 1], [-48, 48]); const cursorBackRotateX = useTransform(normalizedY, [-1, 1], [5, -5]); const cursorBackRotateY = useTransform(normalizedX, [-1, 1], [-7, 7])
  const cursorFrontX = useTransform(normalizedX, [-1, 1], [62, -62]); const cursorFrontY = useTransform(normalizedY, [-1, 1], [32, -32]); const cursorFrontRotateX = useTransform(normalizedY, [-1, 1], [-7, 7]); const cursorFrontRotateY = useTransform(normalizedX, [-1, 1], [9, -9])
  const cursorMidX = useTransform(normalizedX, [-1, 1], [-30, 30]); const cursorMidY = useTransform(normalizedY, [-1, 1], [-20, 20]); const frontCombinedY = useTransform([frontY, cursorFrontY], ([scroll, cursor]) => Number(scroll) + Number(cursor)); const midCombinedY = useTransform([frontY, cursorMidY], ([scroll, cursor]) => Number(scroll) + Number(cursor)); const particleX = useTransform(normalizedX, [-1, 1], [-9, 9]); const particleY = useTransform(normalizedY, [-1, 1], [-7, 7])
  useEffect(() => { if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return; const handlePointerMove = (event: PointerEvent) => { pointerX.set((event.clientX / window.innerWidth) * 100); pointerY.set((event.clientY / window.innerHeight) * 100) }; window.addEventListener("pointermove", handlePointerMove, { passive: true }); return () => window.removeEventListener("pointermove", handlePointerMove) }, [pointerX, pointerY, reduceMotion])

  return <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden [perspective:900px]">
    <motion.div style={reduceMotion ? undefined : { x: contourX, y: gridY, rotate: contourRotate }} className="ambient-topography absolute -inset-[12%]" />
    <motion.div style={reduceMotion ? undefined : { x: cursorBackX, y: backY, rotateX: cursorBackRotateX, rotateY: cursorBackRotateY }} className="ambient-orb ambient-orb-back absolute -left-40 top-10 size-[34rem] rounded-full bg-[#3f8f86]/25 blur-[85px]" />
    <motion.div style={reduceMotion ? undefined : { x: cursorFrontX, y: frontCombinedY, rotateX: cursorFrontRotateX, rotateY: cursorFrontRotateY }} className="ambient-orb ambient-orb-front absolute -right-44 bottom-0 size-[38rem] rounded-full bg-[#d7f34a]/20 blur-[75px]" />
    <motion.div style={reduceMotion ? undefined : { x: cursorMidX, y: midCombinedY }} className="ambient-orb absolute left-[40%] top-[20%] size-52 rounded-full bg-[#8cf0c8]/15 blur-[60px]" />
    {particles.map((particle, index) => <motion.span key={index} style={{ left: particle.left, top: particle.top, x: reduceMotion ? 0 : particleX, y: reduceMotion ? 0 : particleY }} className="ambient-particle absolute size-1 rounded-full bg-[#d7f34a]" />)}
    <motion.div style={reduceMotion ? undefined : { left: smoothX, top: smoothY }} className={`ambient-cursor-spotlight absolute -ml-44 -mt-44 size-[30rem] rounded-full bg-[#d7f34a]/[.2] blur-3xl ${reduceMotion ? "opacity-0" : ""}`} />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,rgba(16,19,18,.08)_58%,rgba(16,19,18,.38)_100%)]" />
  </div>
}
