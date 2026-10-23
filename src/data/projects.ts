export type Project = {
  slug: string
  title: string
  category: string
  year: string
  description: string
  longDescription: string
  tags: string[]
  color: string
  role: string
  outcome: string
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    slug: "portfolio-studio",
    title: "Portfolio Studio",
    category: "Web Development",
    year: "2024",
    description: "A portfolio website for presenting projects, skills, and contact information in one place.",
    longDescription: "Portfolio Studio is a portfolio website built to make project work easier to browse. It brings the introduction, selected projects, skills, and contact links into a simple responsive layout.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    color: "#1d4ed8",
    role: "Product design & development",
    outcome: "A responsive place to present projects and skills.",
  },
  {
    slug: "signal-dashboard",
    title: "Signal Dashboard",
    category: "Product Design",
    year: "2024",
    description: "A dashboard concept for viewing important product metrics without losing the underlying detail.",
    longDescription: "Signal Dashboard is a UI exploration focused on presenting product metrics in a clearer hierarchy. The layout keeps key signals visible first while allowing users to inspect more detail when needed.",
    tags: ["UX Research", "UI Design", "Prototyping"],
    color: "#0f766e",
    role: "Research, UX & interface design",
    outcome: "A clearer way to scan metrics and inspect supporting detail.",
  },
  {
    slug: "local-commerce",
    title: "Local Commerce",
    category: "Web Development",
    year: "2023",
    description: "A responsive storefront concept for browsing and buying products from local businesses.",
    longDescription: "Local Commerce is a responsive storefront concept with product discovery, product details, and a straightforward purchase flow. The project explores how a local business can present its products clearly across screen sizes.",
    tags: ["React", "Responsive UI", "Design System"],
    color: "#9333ea",
    role: "Interface design & front-end development",
    outcome: "A straightforward browsing and purchase flow for local products.",
  },
  {
    slug: "sewa-alat-outdoor",
    title: "Sewa Alat Outdoor",
    category: "Web Development",
    year: "2026",
    description: "Admin panel untuk mengelola alat, data penyewaan, dan status pengembalian dalam satu dashboard.",
    longDescription: "Sewa Alat Outdoor adalah aplikasi administrasi untuk membantu bisnis rental mengelola daftar alat, data pelanggan, transaksi penyewaan, dan status pengembalian dalam satu tempat.",
    tags: ["Next.js", "Admin Panel", "Rental Management"],
    color: "#166534",
    role: "Product design & development",
    outcome: "A focused digital workspace for running outdoor equipment rentals.",
    live: "https://sewa-alat-outdoor-omega.vercel.app/",
  },
  {
    slug: "repoinsight-ai",
    title: "RepoInsight AI",
    category: "Product Development",
    year: "2026",
    description: "Tool yang membantu developer memahami struktur repository dan mendapatkan ringkasan awal dari codebase.",
    longDescription: "RepoInsight AI adalah eksperimen aplikasi yang membantu developer mendapatkan gambaran awal tentang struktur repository. Project ini mengeksplorasi bagaimana AI dapat digunakan untuk merangkum konteks codebase dan mempercepat proses memahami project baru.",
    tags: ["AI Product", "Developer Tools", "Web App"],
    color: "#4338ca",
    role: "Product design & development",
    outcome: "A clearer starting point for exploring and understanding codebases.",
    live: "https://repoinsight-ai-psi.vercel.app/",
  },
  {
    slug: "safehike",
    title: "SafeHike",
    category: "Product Design",
    year: "2026",
    description: "Aplikasi konsep untuk membantu pendaki memeriksa persiapan perjalanan dan informasi keselamatan sebelum berangkat.",
    longDescription: "SafeHike adalah konsep aplikasi yang membantu pendaki menyiapkan perjalanan dengan memeriksa kebutuhan dasar, kondisi jalur, dan informasi keselamatan sebelum berangkat.",
    tags: ["UX Design", "Outdoor Tech", "Responsive UI"],
    color: "#b45309",
    role: "Product design & development",
    outcome: "A safety-minded experience for planning and enjoying hikes responsibly.",
    live: "https://safehike.vercel.app/",
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
