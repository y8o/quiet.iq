"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface PrototypeSlide {
  id: string
  title: string
  description: string
  image: string
  features: string[]
}

const slides: PrototypeSlide[] = [
  {
    id: "dashboard",
    title: "Real-time Dashboard",
    description: "Comprehensive overview of noise levels across multiple monitoring stations",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Live noise level indicators",
      "Interactive map with sensor locations",
      "Alert notifications for threshold breaches",
      "Historical trend analysis",
    ],
  },
  {
    id: "analytics",
    title: "Predictive Analytics",
    description: "Machine learning-powered forecasting and pattern recognition",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Hourly noise predictions",
      "Weather correlation analysis",
      "Flight schedule integration",
      "Seasonal pattern identification",
    ],
  },
  {
    id: "reporting",
    title: "Automated Reporting",
    description: "Generate compliance reports and community notifications automatically",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "FAA compliance reports",
      "Community impact summaries",
      "Customizable report templates",
      "Scheduled report delivery",
    ],
  },
  {
    id: "mobile",
    title: "Mobile Application",
    description: "Access noise data and receive alerts on-the-go",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Push notifications for noise events",
      "Location-based noise readings",
      "Community feedback submission",
      "Offline data synchronization",
    ],
  },
]

export default function PrototypeCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div className="space-y-8">
      {/* Main Carousel */}
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative bg-gray-100 dark:bg-gray-800">
              <img
                src={currentSlideData.image || "/placeholder.svg"}
                alt={currentSlideData.title}
                className="w-full h-96 lg:h-full object-cover cursor-pointer"
                onClick={() => setLightboxOpen(true)}
              />
              <Button
                variant="secondary"
                size="sm"
                className="absolute top-4 right-4"
                onClick={() => setLightboxOpen(true)}
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col justify-center">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{currentSlideData.title}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{currentSlideData.description}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Features:</h3>
                <ul className="space-y-2">
                  {currentSlideData.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                      <div className="h-2 w-2 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <Button variant="outline" onClick={prevSlide}>
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>

                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        index === currentSlide ? "bg-primary-500" : "bg-gray-300 dark:bg-gray-600"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>

                <Button variant="outline" onClick={nextSlide}>
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Slide Thumbnails */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {slides.map((slide, index) => (
          <Card
            key={slide.id}
            className={`cursor-pointer transition-all ${
              index === currentSlide ? "ring-2 ring-primary-500" : "hover:shadow-md"
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <CardContent className="p-4">
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                className="w-full h-24 object-cover rounded mb-2"
              />
              <h4 className="font-semibold text-sm text-gray-900 dark:text-white">{slide.title}</h4>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl">
          <div className="relative">
            <img
              src={currentSlideData.image || "/placeholder.svg"}
              alt={currentSlideData.title}
              className="w-full h-auto rounded-lg"
            />
            <Button
              variant="secondary"
              size="sm"
              className="absolute top-4 right-4"
              onClick={() => setLightboxOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{currentSlideData.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{currentSlideData.description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
