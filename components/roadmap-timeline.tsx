"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Circle, Clock } from "lucide-react"

interface Milestone {
  id: string
  title: string
  description: string
  quarter: string
  year: number
  status: "completed" | "in-progress" | "planned"
  deliverables: string[]
}

const milestones: Milestone[] = [
  {
    id: "q1-2024",
    title: "MVP Development",
    description: "Core platform development and initial prototype",
    quarter: "Q1",
    year: 2024,
    status: "completed",
    deliverables: [
      "Real-time monitoring dashboard",
      "Basic sensor integration",
      "User authentication system",
      "Initial data visualization",
    ],
  },
  {
    id: "q2-2024",
    title: "Pilot Program Launch",
    description: "Deploy pilot program with select airport partners",
    quarter: "Q2",
    year: 2024,
    status: "in-progress",
    deliverables: [
      "Pilot deployment at 2 airports",
      "Community feedback integration",
      "Performance optimization",
      "Initial customer validation",
    ],
  },
  {
    id: "q3-2024",
    title: "AI Integration",
    description: "Implement machine learning for predictive analytics",
    quarter: "Q3",
    year: 2024,
    status: "planned",
    deliverables: [
      "Predictive noise modeling",
      "Weather correlation analysis",
      "Flight pattern integration",
      "Automated alert system",
    ],
  },
  {
    id: "q4-2024",
    title: "Platform Scaling",
    description: "Scale infrastructure and expand customer base",
    quarter: "Q4",
    year: 2024,
    status: "planned",
    deliverables: [
      "Cloud infrastructure scaling",
      "10 additional airport deployments",
      "Mobile application launch",
      "API marketplace development",
    ],
  },
  {
    id: "q1-2025",
    title: "Regulatory Compliance",
    description: "Full FAA compliance and certification processes",
    quarter: "Q1",
    year: 2025,
    status: "planned",
    deliverables: [
      "FAA Part 150 compliance",
      "Automated reporting system",
      "Regulatory dashboard",
      "Compliance certification",
    ],
  },
  {
    id: "q2-2025",
    title: "Market Expansion",
    description: "Expand to international markets and new verticals",
    quarter: "Q2",
    year: 2025,
    status: "planned",
    deliverables: [
      "International market entry",
      "ICAO standards compliance",
      "Industrial noise monitoring",
      "Partnership network expansion",
    ],
  },
]

export default function RoadmapTimeline() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-6 w-6 text-green-500" />
      case "in-progress":
        return <Clock className="h-6 w-6 text-yellow-500" />
      default:
        return <Circle className="h-6 w-6 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-500 bg-green-50 dark:bg-green-900/20"
      case "in-progress":
        return "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20"
      default:
        return "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Development Timeline</h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={milestone.id} className="relative flex items-start space-x-6">
              {/* Timeline dot */}
              <div className="relative z-10 flex items-center justify-center">{getStatusIcon(milestone.status)}</div>

              {/* Content */}
              <Card className={`flex-1 ${getStatusColor(milestone.status)}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{milestone.title}</CardTitle>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {milestone.quarter} {milestone.year}
                    </span>
                  </div>
                  <CardDescription className="text-base">{milestone.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Deliverables:</h4>
                    <ul className="space-y-1">
                      {milestone.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 dark:text-gray-400">
                          <div className="h-1.5 w-1.5 bg-primary-500 rounded-full mr-3"></div>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
