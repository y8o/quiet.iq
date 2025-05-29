import type { Metadata } from "next"
import RoadmapTimeline from "@/components/roadmap-timeline"
import RisksOpportunities from "@/components/risks-opportunities"

export const metadata: Metadata = {
  title: "Roadmap - QuietIQ",
  description: "Strategic roadmap, milestones, and risk assessment for the QuietIQ platform development.",
}

export default function RoadmapPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">Strategic Roadmap</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our 2-year development plan with key milestones, risks assessment, and growth opportunities.
          </p>
        </div>

        <div className="space-y-16">
          <RoadmapTimeline />
          <RisksOpportunities />
        </div>
      </div>
    </div>
  )
}
