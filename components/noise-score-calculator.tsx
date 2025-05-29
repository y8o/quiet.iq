"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function NoiseScoreCalculator() {
  const [dbLevel, setDbLevel] = useState("")
  const [result, setResult] = useState<{
    level: string
    color: string
    description: string
  } | null>(null)

  const calculateNoiseImpact = (db: number) => {
    if (db < 55) {
      return {
        level: "Low",
        color: "bg-green-100 text-green-800 border-green-200",
        description: "Minimal health impact. Suitable for residential areas.",
      }
    } else if (db < 65) {
      return {
        level: "Moderate",
        color: "bg-yellow-100 text-yellow-800 border-yellow-200",
        description: "Some annoyance possible. May affect sleep quality.",
      }
    } else {
      return {
        level: "High",
        color: "bg-red-100 text-red-800 border-red-200",
        description: "Significant health impact. May cause hearing damage and stress.",
      }
    }
  }

  const handleCalculate = () => {
    const db = Number.parseFloat(dbLevel)
    if (!isNaN(db) && db >= 0 && db <= 140) {
      setResult(calculateNoiseImpact(db))
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-lg">Noise Score Calculator</CardTitle>
        <CardDescription>Enter a decibel reading to assess health impact</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="db-input">Decibel Level (dB)</Label>
          <Input
            id="db-input"
            type="number"
            placeholder="Enter dB level"
            value={dbLevel}
            onChange={(e) => setDbLevel(e.target.value)}
            min="0"
            max="140"
          />
        </div>
        <Button onClick={handleCalculate} className="w-full">
          Calculate Impact
        </Button>
        {result && (
          <div className={`p-3 rounded-lg border ${result.color}`}>
            <div className="font-semibold">{result.level} Impact</div>
            <div className="text-sm mt-1">{result.description}</div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
