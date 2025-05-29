"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ToggleLeft, ToggleRight } from "lucide-react"

export default function InteractiveMap() {
  const [showRealtime, setShowRealtime] = useState(true)
  const [showForecast, setShowForecast] = useState(false)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Airport Noise Heatmap</span>
          <MapPin className="h-5 w-5 text-primary-600" />
        </CardTitle>
        <div className="flex space-x-4">
          <Button
            variant={showRealtime ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setShowRealtime(!showRealtime)
              if (!showRealtime) setShowForecast(false)
            }}
          >
            {showRealtime ? <ToggleRight className="h-4 w-4 mr-1" /> : <ToggleLeft className="h-4 w-4 mr-1" />}
            Real-time
          </Button>
          <Button
            variant={showForecast ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setShowForecast(!showForecast)
              if (!showForecast) setShowRealtime(false)
            }}
          >
            {showForecast ? <ToggleRight className="h-4 w-4 mr-1" /> : <ToggleLeft className="h-4 w-4 mr-1" />}
            Forecast
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg relative overflow-hidden">
          {/* Mock map with noise contours */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="relative">
                {/* Airport icon */}
                <div className="w-8 h-8 bg-gray-800 dark:bg-gray-200 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white dark:text-gray-800 text-xs font-bold">✈</span>
                </div>

                {/* Noise contours */}
                {showRealtime && (
                  <>
                    <div className="absolute -top-2 -left-8 w-16 h-12 bg-red-200 dark:bg-red-800/30 rounded-full opacity-60"></div>
                    <div className="absolute -top-4 -left-12 w-24 h-16 bg-orange-200 dark:bg-orange-800/30 rounded-full opacity-40"></div>
                    <div className="absolute -top-6 -left-16 w-32 h-20 bg-yellow-200 dark:bg-yellow-800/30 rounded-full opacity-30"></div>
                  </>
                )}

                {showForecast && (
                  <>
                    <div className="absolute -top-3 -left-10 w-20 h-14 bg-purple-200 dark:bg-purple-800/30 rounded-full opacity-60"></div>
                    <div className="absolute -top-5 -left-14 w-28 h-18 bg-blue-200 dark:bg-blue-800/30 rounded-full opacity-40"></div>
                    <div className="absolute -top-7 -left-18 w-36 h-22 bg-cyan-200 dark:bg-cyan-800/30 rounded-full opacity-30"></div>
                  </>
                )}
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-8">
                {showRealtime && "Real-time Noise Levels"}
                {showForecast && "Predicted Noise Patterns"}
                {!showRealtime && !showForecast && "Select a view mode"}
              </p>
            </div>
          </div>

          {/* Legend */}
          <div className="absolute bottom-2 left-2 bg-white dark:bg-gray-800 rounded p-2 text-xs">
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-3 h-3 bg-red-300 rounded"></div>
              <span>{">"} 65 dB</span>
            </div>
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-3 h-3 bg-orange-300 rounded"></div>
              <span>60-65 dB</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-300 rounded"></div>
              <span>55-60 dB</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
