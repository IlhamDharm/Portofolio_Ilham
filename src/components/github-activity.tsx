"use client"

import { ArrowUpRight, RotateCcw } from "lucide-react"
import { useCallback, useEffect, useMemo, useState } from "react"

type GithubContribution = { date: string; count: number; color: string; level: number }
type GithubCommit = { repository: string; message: string; sha: string; url: string; date: string }
type GithubPayload = {
  status: "ok" | "partial" | "error"
  message?: string
  calendar?: { total: number; from: string; to: string; weeks: GithubContribution[][] } | null
  commits: GithubCommit[]
}

const monthFormatter = new Intl.DateTimeFormat("en-US", { month: "short" })
const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" })
const commitDateFormatter = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" })

// Lando Norris Telemetry Colors: Monotone Black to Electric Neon Lime
function levelClass(level: number) {
  return [
    "bg-[#111112]/5 border border-black/5",
    "bg-[#111112]/25",
    "bg-[#111112]/60",
    "bg-[#D2FF00]/80 border border-[#111112]/30",
    "bg-[#D2FF00] shadow-[0_0_8px_rgba(210,255,0,0.8)] border border-[#111112]",
  ][Math.min(level, 4)]
}

export function GithubActivity({ profileUrl }: { profileUrl: string }) {
  const [payload, setPayload] = useState<GithubPayload | null>(null)
  const [loading, setLoading] = useState(true)

  const loadActivity = useCallback(() => {
    const controller = new AbortController()
    setLoading(true)
    fetch(`/api/github?refresh=${Date.now()}`, { signal: controller.signal, cache: "no-store" })
      .then(async (response) => {
        const data = (await response.json()) as GithubPayload
        if (!response.ok || data.status === "error") throw new Error("github_unavailable")
        setPayload(data)
      })
      .catch(() => setPayload({ status: "error", commits: [] }))
      .finally(() => setLoading(false))
    return controller
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    fetch(`/api/github?refresh=${Date.now()}`, { signal: controller.signal, cache: "no-store" })
      .then(async (response) => {
        const data = (await response.json()) as GithubPayload
        if (!response.ok || data.status === "error") throw new Error("github_unavailable")
        setPayload(data)
      })
      .catch(() => setPayload({ status: "error", commits: [] }))
      .finally(() => setLoading(false))
    return () => controller.abort()
  }, [])

  const calendar = payload?.calendar
  const cells = useMemo(() => calendar?.weeks.flat() ?? [], [calendar])
  const weeks = calendar?.weeks ?? []
  const firstDate = cells[0]?.date
  const lastDate = cells.at(-1)?.date

  return (
    <section id="telemetry" className="relative border-t border-[#111112]/10 bg-[#F5F5F0] px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1340px]">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-[#111112]/10 pb-6 md:flex-row md:items-end">
          <div>
            <h2 className="mt-2 font-editorial text-4xl font-normal tracking-tight text-[#111112] sm:text-5xl">
              Codebase Activity &amp; Live Stream
            </h2>
          </div>
          <div>
            <a
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#111112] hover:underline"
            >
              github.com/IlhamDharm <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Telemetry Calendar Box */}
        <div className="mt-10 rounded-3xl border border-[#111112]/15 bg-white p-6 shadow-sm sm:p-8">
          {loading ? (
            <div className="flex min-h-48 items-center justify-center font-mono text-xs text-[#555555]">
              <span className="mr-3 size-2 animate-ping rounded-full bg-[#D2FF00]" />
              STREAMING GITHUB TELEMETRY...
            </div>
          ) : calendar ? (
            <div className="overflow-x-auto">
              <div className="min-w-[720px]">
                <div className="mb-4 flex items-center justify-between font-mono text-xs text-[#555555]">
                  <span>
                    <strong className="text-[#111112]">{calendar.total.toLocaleString()}</strong> contributions recorded in the last year
                  </span>
                  <span className="text-[#888888]">
                    {firstDate && lastDate
                      ? `${monthFormatter.format(new Date(firstDate))} — ${monthFormatter.format(new Date(lastDate))}`
                      : ""}
                  </span>
                </div>

                {/* Grid */}
                <div className="flex gap-2">
                  <div className="flex w-6 flex-col justify-between py-4 font-mono text-[10px] text-[#888888]">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                  </div>
                  <div className="flex flex-1 gap-1">
                    {weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="flex flex-col gap-1">
                        {week.map((cell) => (
                          <div
                            key={cell.date}
                            title={`${cell.count} commit${cell.count === 1 ? "" : "s"} on ${dayFormatter.format(new Date(cell.date))}`}
                            className={`size-3 rounded-[3px] transition-transform hover:scale-125 sm:size-3.5 ${levelClass(cell.level)}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-5 flex items-center justify-between font-mono text-[11px] text-[#888888]">
                  <span>Hover telemetry squares to inspect detail</span>
                  <div className="flex items-center gap-1.5">
                    <span>Less</span>
                    <span className="size-2.5 rounded-[2px] bg-black/5" />
                    <span className="size-2.5 rounded-[2px] bg-[#111112]/25" />
                    <span className="size-2.5 rounded-[2px] bg-[#111112]/60" />
                    <span className="size-2.5 rounded-[2px] bg-[#D2FF00]/80" />
                    <span className="size-2.5 rounded-[2px] bg-[#D2FF00]" />
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex min-h-48 flex-col items-center justify-center gap-3 text-center">
              <p className="font-mono text-xs text-[#555555]">
                Telemetry data cached or unavailable temporarily.
              </p>
              <button
                type="button"
                onClick={loadActivity}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#111112]/20 bg-[#F5F5F0] px-4 py-2 font-mono text-xs text-[#111112] hover:bg-[#111112] hover:text-white"
              >
                <RotateCcw size={13} /> Refresh Stream
              </button>
            </div>
          )}
        </div>

        {/* Recent Commits Log (Like Race Pit Stop Telemetry) */}
        <div className="mt-12">
          <div className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-[#111112]">
            Recent Commit Log
          </div>

          {loading ? (
            <p className="font-mono text-xs text-[#888888]">Loading commit stream...</p>
          ) : payload?.commits?.length ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {payload.commits.map((commit) => (
                <a
                  key={commit.sha}
                  href={commit.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col justify-between rounded-2xl border border-[#111112]/10 bg-white p-5 transition-all hover:border-[#111112] hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-mono text-xs font-bold text-[#111112]">
                      {commit.repository.split("/").pop()}
                    </span>
                    <ArrowUpRight size={14} className="shrink-0 text-[#888888] transition-transform group-hover:text-[#111112]" />
                  </div>
                  <p className="mt-2 line-clamp-1 text-xs text-[#555555]">
                    {commit.message}
                  </p>
                  <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-[#888888]">
                    <span>{commit.sha.slice(0, 7)}</span>
                    <span>{commitDateFormatter.format(new Date(commit.date))}</span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="font-mono text-xs text-[#888888]">No recent public commits recorded.</p>
          )}
        </div>
      </div>
    </section>
  )
}
