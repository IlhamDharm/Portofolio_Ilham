"use client"

import * as simpleIcons from "simple-icons"
import { Code2, Layers, Terminal } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { expertiseGroups } from "@/src/data/skills"

function getIcon(icon?: string) {
  if (!icon) return undefined
  const exportName = `si${icon.charAt(0).toUpperCase()}${icon.slice(1)}` as keyof typeof simpleIcons
  return simpleIcons[exportName] as simpleIcons.SimpleIcon | undefined
}

export function Skills() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="expertise" className="relative border-t border-[#111112]/10 bg-[#F5F5F0] px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1340px]">
        {/* Section Header */}
        <div className="border-b border-[#111112]/10 pb-6">
          <h2 className="font-editorial text-4xl font-normal tracking-tight text-[#111112] sm:text-5xl">
            Technical Stack &amp; Tooling
          </h2>
        </div>

        {/* 3 Columns Editorial Specs Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {expertiseGroups.map((group, groupIdx) => {
            const IconComponent = groupIdx === 0 ? Code2 : groupIdx === 1 ? Layers : Terminal

            return (
              <motion.div
                key={group.id}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#111112]/15 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#111112] hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-[#F5F5F0] text-[#111112] transition-colors group-hover:bg-[#D2FF00]">
                      <IconComponent size={20} />
                    </span>
                  </div>

                  <h3 className="mt-6 font-editorial text-2xl font-semibold text-[#111112]">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#555555]">
                    {group.description}
                  </p>

                  {/* Badges Grid */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => {
                      const icon = getIcon(item.icon)
                      return (
                        <div
                          key={item.name}
                          title={item.detail || item.name}
                          className="flex items-center gap-2 rounded-full border border-[#111112]/10 bg-[#F5F5F0] px-3.5 py-1.5 font-mono text-xs text-[#111112] transition-colors hover:border-[#111112] hover:bg-[#111112] hover:text-[#F5F5F0]"
                        >
                          {icon && (
                            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-3.5 shrink-0" fill="currentColor">
                              <path d={icon.path} />
                            </svg>
                          )}
                          <span>{item.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="mt-8 border-t border-[#111112]/10 pt-4 font-mono text-[11px] uppercase tracking-wider text-[#888888]">
                  {group.items.length} verified technologies
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
