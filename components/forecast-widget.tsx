"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, TrendingUp } from "lucide-react"

export default function ForecastWidget() {
  const [selectedDate, setSelectedDate] = useState("2024-01-15")
  const [showChart, setShowChart] = useState(false)

  const mockData = [
    { hour: "00:00", noise: 45 },
    { hour: "06:00", noise: 55 },
    { hour: "12:00", noise: 68 },
    { hour: "18:00", noise: 72 },
    { hour: "23:59", noise: 48 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Noise Forecast</span>
          <Calendar className="h-5 w-5 text-secondary-600" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex space-x-2">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
          />
          <Button onClick={() => setShowChart(true)}>Generate Forecast</Button>
        </div>

        {showChart && (
          <div className="space-y-4">
            <h4 className="font-semibold">Hourly Noise Forecast - {selectedDate}</h4>
            <div className="h-48 bg-gradient-to-t from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-lg p-4">
              <div className="h-full flex items-end justify-between space-x-2">
                {mockData.map((point, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    <div
                      className="bg-secondary-500 rounded-t"
                      style={{
                        height: `${(point.noise / 80) * 100}%`,
                        width: "20px",
                      }}
                    ></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">{point.hour}</span>
                    <span className="text-xs font-semibold">{point.noise}dB</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <TrendingUp className="h-4 w-4" />
              <span>Peak noise expected at 18:00 (72 dB)</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
