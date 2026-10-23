import { skillGroups } from "@/src/data/skills"

export function Skills() {
  return <section id="skills" className="px-6 py-20 lg:px-10 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 flex items-end justify-between">
        <p className="text-xs font-semibold uppercase tracking-[.24em] text-blue-600">Skills & tools</p>
        <p className="hidden text-sm text-zinc-400 sm:block">What I use and continue to learn</p>
      </div>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => <article key={group.label} className="bg-[#f6f6f3] p-6 transition-colors hover:bg-white lg:p-8">
          <p className="mb-10 font-display text-3xl tracking-[-.05em] text-zinc-300">{String(index + 1).padStart(2, "0")}</p>
          <h3 className="text-sm font-semibold">{group.label}</h3>
          <ul className="mt-5 space-y-2 text-sm text-zinc-500">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>)}
      </div>
    </div>
  </section>
}
