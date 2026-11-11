import type { Metadata } from "next"
import Script from "next/script"
import { Geist, Geist_Mono, Newsreader } from "next/font/google"
import "./globals.css"
import { PageLoader, ScrollProgress } from "@/src/components/page-loader"

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ilham-portfolio.vercel.app"),
  title: {
    default: "Ilham Dharma Atmaja — Software Engineer",
    template: "%s | Ilham Dharma Atmaja",
  },
  description:
    "Portfolio of Ilham Dharma Atmaja, Informatics Engineering student specializing in full-stack software development and digital experiences.",
  keywords: [
    "Ilham Dharma Atmaja",
    "software engineer",
    "full-stack developer",
    "portfolio",
    "polinema",
    "next.js",
    "typescript",
  ],
  openGraph: {
    title: "Ilham Dharma Atmaja — Software Engineer",
    description: "Building software with speed and precision.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} ${newsreader.variable}`}>
        <Script
          src="https://cdn.aidesigner.ai/effects/runtime/v1.js"
          strategy="afterInteractive"
        />
        <PageLoader />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
