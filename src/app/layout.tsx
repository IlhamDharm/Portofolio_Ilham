import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })
export const metadata: Metadata = { metadataBase: new URL("https://ilham-portfolio.vercel.app"), title: { default: "Ilham Dharma Atmaja", template: "%s | Ilham Dharma Atmaja" }, description: "Portfolio of Ilham Dharma Atmaja.", keywords: ["Ilham Dharma Atmaja", "portfolio", "product designer", "developer"], openGraph: { title: "Ilham Dharma Atmaja", description: "Product designer and developer.", type: "website" } }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${geist.variable} ${geistMono.variable}`}>{children}</body></html> }
