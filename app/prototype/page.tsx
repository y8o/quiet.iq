import type { Metadata } from "next"
import PrototypeCarousel from "@/components/prototype-carousel"

export const metadata: Metadata = {
  title: "Prototype - QuietIQ",
  description: "Interactive prototype showcasing the QuietIQ platform features and user interface.",
}

export default function PrototypePage() {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">Platform Prototype</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore our interactive prototype showcasing the key features and user interface of the QuietIQ platform.
          </p>
        </div>

        <PrototypeCarousel />
      </div>
    </div>
  )
}
