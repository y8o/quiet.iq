import type { Metadata } from "next"
import StakeholderMap from "@/components/stakeholder-map"

export const metadata: Metadata = {
  title: "Ecosystem - QuietIQ",
  description: "Understanding the stakeholder ecosystem and problem-solution mapping for airport noise management.",
}

export default function EcosystemPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">Ecosystem Overview</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Understanding the complex network of stakeholders and their relationships in the airport noise management
            ecosystem.
          </p>
        </div>

        <StakeholderMap />
      </div>
    </div>
  )
}
