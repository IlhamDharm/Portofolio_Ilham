import { NextResponse } from "next/server"

const USERNAME = "IlhamDharm"
const GITHUB_API = "https://api.github.com"
const GITHUB_GRAPHQL = "https://api.github.com/graphql"
const REQUEST_TIMEOUT = 8_000

export type GithubContribution = { date: string; count: number; color: string; level: number }
export type GithubCommit = { repository: string; message: string; sha: string; url: string; date: string }

type GraphqlResponse = { data?: { user?: { contributionsCollection?: { contributionCalendar?: { totalContributions: number; weeks: { contributionDays: { date: string; contributionCount: number; color: string; contributionLevel: string }[] }[] } } } }; errors?: { message?: string }[] }
type SearchResponse = { items?: { repository?: { full_name?: string }; commit?: { message?: string; author?: { date?: string }; committer?: { date?: string } }; sha?: string; html_url?: string }[] }

function levelFromGithub(level: string) { return ["NONE", "FIRST_QUARTILE", "SECOND_QUARTILE", "THIRD_QUARTILE", "FOURTH_QUARTILE"].indexOf(level) }
function jsonError(status: number) { return NextResponse.json({ status: "error", message: "GitHub activity is temporarily unavailable." }, { status, headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" } }) }
async function githubFetch(url: string, init: RequestInit = {}) { const token = process.env.GITHUB_TOKEN; if (!token) throw new Error("missing_token"); const controller = new AbortController(); const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT); try { return await fetch(url, { ...init, signal: controller.signal, headers: { Accept: "application/vnd.github+json", Authorization: `Bearer ${token}`, "X-GitHub-Api-Version": "2026-03-10", ...init.headers } }) } finally { clearTimeout(timeout) } }

async function getCalendar() {
  const today = new Date(); const from = new Date(today); from.setUTCFullYear(from.getUTCFullYear() - 1)
  const query = `query Contributions($login: String!, $from: DateTime!, $to: DateTime!) { user(login: $login) { contributionsCollection(from: $from, to: $to) { contributionCalendar { totalContributions weeks { contributionDays { date contributionCount color contributionLevel } } } } } }`
  const response = await githubFetch(GITHUB_GRAPHQL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ query, variables: { login: USERNAME, from: from.toISOString(), to: today.toISOString() } }) })
  if (!response.ok) throw new Error("graphql_http")
  const body = await response.json() as GraphqlResponse; if (body.errors?.length || !body.data?.user?.contributionsCollection?.contributionCalendar) throw new Error("graphql_response")
  const calendar = body.data.user.contributionsCollection.contributionCalendar
  return { total: calendar.totalContributions, from: from.toISOString(), to: today.toISOString(), weeks: calendar.weeks.map((week) => week.contributionDays.map((day) => ({ date: day.date, count: day.contributionCount, color: day.color, level: Math.max(0, levelFromGithub(day.contributionLevel)) }))) }
}

async function getCommits() {
  const query = encodeURIComponent(`author:${USERNAME}`); const response = await githubFetch(`${GITHUB_API}/search/commits?q=${query}&sort=committer-date&order=desc&per_page=100`, { headers: { Accept: "application/vnd.github+json" } })
  if (!response.ok) throw new Error(response.status === 403 || response.status === 429 ? "rate_limited" : "rest_http")
  const body = await response.json() as SearchResponse; if (!Array.isArray(body.items)) throw new Error("rest_response")
  return body.items.slice(0, 6).flatMap((item) => { const repository = item.repository?.full_name; const sha = item.sha; const url = item.html_url; if (!repository || !sha || !url) return []; const message = item.commit?.message?.split("\n")[0]?.trim(); const date = item.commit?.committer?.date || item.commit?.author?.date; if (!message || !date) return []; return [{ repository, message, sha, url, date }] })
}

export async function GET(request: Request) {
  if (!process.env.GITHUB_TOKEN) return jsonError(503)
  const refresh = new URL(request.url).searchParams.has("refresh")
  const [calendarResult, commitsResult] = await Promise.allSettled([getCalendar(), getCommits()]); const calendar = calendarResult.status === "fulfilled" ? calendarResult.value : null; const commits = commitsResult.status === "fulfilled" ? commitsResult.value : []; if (!calendar && !commits.length) return jsonError(502)
  return NextResponse.json({ status: calendar && commits.length ? "ok" : "partial", calendar, commits }, { headers: { "Cache-Control": refresh ? "no-store" : "public, s-maxage=300, stale-while-revalidate=600" } })
}
