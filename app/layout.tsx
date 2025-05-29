import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "QuietIQ - Data-Driven Noise Pollution Platform",
  description:
    "Revolutionary platform for monitoring and predicting airport noise pollution using advanced data analytics and machine learning.",
  keywords: "noise pollution, airport noise, data analytics, environmental monitoring, QuietIQ",
  authors: [{ name: "QuietIQ Team" }],
  openGraph: {
    title: "QuietIQ - Data-Driven Noise Pollution Platform",
    description:
      "Revolutionary platform for monitoring and predicting airport noise pollution using advanced data analytics and machine learning.",
    type: "website",
    url: "https://quietiq.github.io",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuietIQ Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuietIQ - Data-Driven Noise Pollution Platform",
    description:
      "Revolutionary platform for monitoring and predicting airport noise pollution using advanced data analytics and machine learning.",
    images: ["/og-image.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
