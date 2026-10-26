import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { PageLoader, ScrollProgress } from "@/src/components/page-loader"

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })
export const metadata: Metadata = { metadataBase: new URL("https://ilham-portfolio.vercel.app"), title: { default: "Ilham Dharma Atmaja", template: "%s | Ilham Dharma Atmaja" }, description: "Portfolio of Ilham Dharma Atmaja, an IT student targeting full-stack developer and software developer internships.", keywords: ["Ilham Dharma Atmaja", "portfolio", "software developer intern", "full-stack developer intern", "mobile development", "artificial intelligence", "computer vision"], openGraph: { title: "Ilham Dharma Atmaja — Software Developer Intern", description: "IT student learning software development through projects, experiments, and coursework.", type: "website" } }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${geist.variable} ${geistMono.variable}`}><PageLoader /><ScrollProgress />{children}</body></html> }
