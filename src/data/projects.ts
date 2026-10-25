export type ProjectStatus = "Completed" | "In Progress" | "Concept" | "Coursework"

export type Project = {
  slug: string
  title: string
  category: string
  year: string
  status: ProjectStatus
  description: string
  longDescription: string
  goal: string
  implementation: string
  role: string
  learning: string
  tags: string[]
  color: string
  github?: string
  live?: string
  image?: string
  images?: string[]
}

export const projects: Project[] = [
  {
    slug: "repoinsight-ai",
    title: "RepoInsight AI",
    category: "AI & Computer Vision",
    year: "2026",
    status: "In Progress",
    description: "Eksperimen AI untuk membantu developer mendapatkan gambaran awal tentang struktur repository.",
    longDescription: "RepoInsight AI mengeksplorasi penggunaan AI untuk membantu memahami codebase. Repository dan demo publik tersedia, tetapi project ini masih dalam tahap pengembangan.",
    goal: "Mengeksplorasi bagaimana ringkasan berbasis AI dapat membantu developer memahami project baru.",
    implementation: "Project menggunakan Python berdasarkan bahasa utama repository. Detail fitur dan arsitektur dapat dilihat langsung pada repository.",
    role: "Development and experimentation",
    learning: "Mempelajari penerapan AI untuk developer tools dan pentingnya memberikan konteks yang jelas kepada pengguna.",
    tags: ["Python", "AI", "Developer Tools"],
    color: "#4338ca",
    github: "https://github.com/IlhamDharm/repoinsight-ai",
    live: "https://repoinsight-ai-psi.vercel.app/",
  },
  {
    slug: "safehike",
    title: "SafeHike",
    category: "Software Development",
    year: "2026",
    status: "In Progress",
    description: "Project outdoor yang mengeksplorasi cara membantu pendaki membuat persiapan perjalanan yang lebih aman.",
    longDescription: "SafeHike adalah project publik berbasis TypeScript yang berfokus pada pengalaman digital untuk aktivitas hiking. Implementasi dan status terbaru dapat diperiksa melalui repository dan demo yang tersedia.",
    goal: "Mengeksplorasi aplikasi yang dapat mendukung persiapan dan kesadaran keselamatan sebelum aktivitas outdoor.",
    implementation: "Repository menggunakan TypeScript. Detail implementasi dan fitur yang tersedia ditunjukkan pada source code project.",
    role: "Product development",
    learning: "Belajar menerjemahkan kebutuhan pengguna outdoor menjadi ide dan alur aplikasi.",
    tags: ["TypeScript", "Web App", "Outdoor Tech"],
    color: "#b45309",
    github: "https://github.com/IlhamDharm/SafeHike",
    live: "https://safehike.vercel.app/",
    image: "/projects/safehike/beranda.png",
    images: [
      "/projects/safehike/beranda.png",
      "/projects/safehike/katalog-gunung.png",
      "/projects/safehike/informasi-gunung.png",
      "/projects/safehike/informasi-peta-gunung.png",
    ],
  },
  {
    slug: "sewa-alat-outdoor",
    title: "Rimba",
    category: "Product Concept",
    year: "2026",
    status: "Concept",
    description: "Konsep bisnis penyewaan peralatan outdoor untuk kebutuhan pendaki dan aktivitas alam.",
    longDescription: "Rimba adalah konsep technopreneurship yang dikembangkan untuk mengeksplorasi ide marketplace penyewaan perlengkapan outdoor. Repository publik tersedia, sementara implementasi aplikasinya masih perlu dikembangkan lebih lanjut.",
    goal: "Menyusun konsep layanan yang memudahkan pengguna menemukan dan menyewa peralatan outdoor.",
    implementation: "Repository publik menggunakan HTML. Detail implementasi saat ini dapat dilihat pada source code dan demo yang tersedia.",
    role: "Concept and project development",
    learning: "Belajar menghubungkan ide bisnis, kebutuhan pengguna, dan kemungkinan implementasi digital.",
    tags: ["HTML", "Business Concept", "Outdoor Rental"],
    color: "#166534",
    github: "https://github.com/IlhamDharm/Sewa-Alat-Outdoor",
    live: "https://sewa-alat-outdoor-omega.vercel.app/",
    image: "/projects/rimba-homepage.png",
  },
  {
    slug: "ncs-polinema",
    title: "NCS POLINEMA",
    category: "Web Development",
    year: "2025",
    status: "Completed",
    description: "Website profil dan sistem informasi Laboratorium Network dan Cyber Security pada Jurusan Teknologi Informasi POLINEMA.",
    longDescription: "NCS POLINEMA adalah website profil dan sistem informasi Laboratorium Network dan Cyber Security. Website ini menyediakan informasi publik tentang laboratorium, arsip penelitian dan pengabdian, layanan, galeri, serta panel admin untuk mengelola konten.",
    goal: "Membangun pusat informasi digital yang membantu mahasiswa, dosen, dan pengunjung mengenal aktivitas serta layanan Laboratorium Network dan Cyber Security.",
    implementation: "Project dibuat menggunakan PHP native dengan pendekatan object-oriented, PostgreSQL melalui PDO PostgreSQL, Bootstrap 5.3, Bootstrap Icons, HTML, CSS, dan JavaScript. Sistem juga memiliki autentikasi session, CRUD data, prepared statements, serta dukungan bahasa Indonesia dan English.",
    role: "Full-stack web development",
    learning: "Mempelajari pengembangan sistem informasi berbasis PHP, pengelolaan database PostgreSQL, autentikasi session, dan pembuatan antarmuka publik yang responsif.",
    tags: ["PHP", "PostgreSQL", "Bootstrap", "PDO", "JavaScript"],
    color: "#0f4c5c",
    github: "https://github.com/IlhamDharm/Lab-NCS-POLINEMA",
    live: "https://ncspolinema.vercel.app/",
    image: "/projects/ncs/beranda.png",
    images: [
      "/projects/ncs/beranda.png",
      "/projects/ncs/profile.png",
      "/projects/ncs/arsip.png",
      "/projects/ncs/layanan.png",
      "/projects/ncs/galeri.png",
    ],
  },
  {
    slug: "mobile-development-course",
    title: "Mobile Development Learning",
    category: "Mobile Development",
    year: "2026",
    status: "Coursework",
    description: "Dokumentasi pembelajaran Flutter dan Dart melalui latihan UI, responsive design, navigation, state management, dan API.",
    longDescription: "Repository ini mendokumentasikan proses pembelajaran mata kuliah Mobile Development. Isinya mencakup latihan bertahap untuk memahami ekosistem Flutter, UI declarative, desain responsive, navigation, state management, dan integrasi API.",
    goal: "Membangun pemahaman dasar pengembangan aplikasi mobile berbasis Flutter.",
    implementation: "Repository menggunakan Dart dan Flutter dengan beberapa folder latihan berdasarkan materi perkuliahan.",
    role: "Student developer",
    learning: "Memahami struktur aplikasi Flutter, pola UI declarative, dan proses pengembangan mobile secara bertahap.",
    tags: ["Flutter", "Dart", "Responsive UI"],
    color: "#075985",
    github: "https://github.com/IlhamDharm/244107020220-mobile-course",
  },
  {
    slug: "machine-learning-coursework",
    title: "Machine Learning Coursework",
    category: "AI & Computer Vision",
    year: "2026",
    status: "Coursework",
    description: "Repository pembelajaran machine learning berbasis notebook untuk mendokumentasikan eksperimen dan materi perkuliahan.",
    longDescription: "Repository machine learning publik ini berisi pekerjaan pembelajaran berbasis Jupyter Notebook. Detail eksperimen dan hasil perlu dibaca langsung dari notebook terkait, sehingga portfolio ini tidak mengklaim hasil yang belum diverifikasi.",
    goal: "Membangun dasar pemahaman tentang machine learning melalui latihan dan eksperimen terarah.",
    implementation: "Repository menggunakan Jupyter Notebook sebagai format utama dengan bahasa yang tercatat sebagai Jupyter Notebook di GitHub.",
    role: "Student learner",
    learning: "Mendalami alur eksperimen machine learning dan cara mendokumentasikan proses belajar secara reproducible.",
    tags: ["Machine Learning", "Jupyter Notebook", "Python"],
    color: "#7c2d12",
    github: "https://github.com/IlhamDharm/244107020220-machine-learning",
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
