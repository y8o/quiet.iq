import type { Metadata } from "next"
import SolutionTabs from "@/components/solution-tabs"

export const metadata: Metadata = {
  title: "Our Solution - QuietIQ",
  description: "Comprehensive data-driven platform for airport noise monitoring, prediction, and management.",
}

export default function SolutionPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">Our Solution</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            QuietIQ provides a comprehensive, data-driven platform that transforms how we monitor, predict, and manage
            airport noise pollution.
          </p>
        </div>

        <SolutionTabs />
      </div>
    </div>
  )
}
