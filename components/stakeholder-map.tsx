"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Users, Shield, Plane, Home, Briefcase } from "lucide-react"

interface Stakeholder {
  id: string
  name: string
  icon: React.ReactNode
  position: { x: number; y: number }
  description: string
  role: string
}

const stakeholders: Stakeholder[] = [
  {
    id: "airports",
    name: "Airport Operators",
    icon: <Plane className="h-6 w-6" />,
    position: { x: 50, y: 30 },
    description: "Manage airport operations and noise compliance",
    role: "Primary customer - need compliance tools and community relations support",
  },
  {
    id: "communities",
    name: "Local Communities",
    icon: <Home className="h-6 w-6" />,
    position: { x: 20, y: 70 },
    description: "Residents affected by airport noise",
    role: "End beneficiaries - need transparency and noise reduction",
  },
  {
    id: "regulators",
    name: "Government Agencies",
    icon: <Shield className="h-6 w-6" />,
    position: { x: 80, y: 70 },
    description: "FAA, EPA, and local authorities",
    role: "Regulatory oversight - need compliance monitoring and reporting",
  },
  {
    id: "consultants",
    name: "Environmental Consultants",
    icon: <Briefcase className="h-6 w-6" />,
    position: { x: 50, y: 80 },
    description: "Provide noise assessment services",
    role: "Service providers - need advanced tools and data analytics",
  },
  {
    id: "airlines",
    name: "Airlines",
    icon: <Building className="h-6 w-6" />,
    position: { x: 80, y: 30 },
    description: "Aircraft operators and fleet managers",
    role: "Stakeholders - need operational efficiency and compliance data",
  },
  {
    id: "advocacy",
    name: "Advocacy Groups",
    icon: <Users className="h-6 w-6" />,
    position: { x: 20, y: 30 },
    description: "Community and environmental organizations",
    role: "Watchdogs - need access to real-time data and transparency",
  },
]

export default function StakeholderMap() {
  const [selectedStakeholder, setSelectedStakeholder] = useState<Stakeholder | null>(null)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Stakeholder Map */}
      <Card>
        <CardHeader>
          <CardTitle>Stakeholder Network</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-96 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg overflow-hidden">
            {stakeholders.map((stakeholder) => (
              <div
                key={stakeholder.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{
                  left: `${stakeholder.position.x}%`,
                  top: `${stakeholder.position.y}%`,
                }}
                onClick={() => setSelectedStakeholder(stakeholder)}
              >
                <div className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border-2 border-primary-200 dark:border-primary-700 group-hover:border-primary-500 transition-colors">
                  <div className="text-primary-600 dark:text-primary-400">{stakeholder.icon}</div>
                </div>
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {stakeholder.name}
                </div>
              </div>
            ))}

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
                </marker>
              </defs>
              {/* Airport to Communities */}
              <line
                x1="50%"
                y1="30%"
                x2="20%"
                y2="70%"
                stroke="#94a3b8"
                strokeWidth="2"
                opacity="0.5"
                markerEnd="url(#arrowhead)"
              />
              {/* Airport to Regulators */}
              <line
                x1="50%"
                y1="30%"
                x2="80%"
                y2="70%"
                stroke="#94a3b8"
                strokeWidth="2"
                opacity="0.5"
                markerEnd="url(#arrowhead)"
              />
              {/* Communities to Advocacy */}
              <line
                x1="20%"
                y1="70%"
                x2="20%"
                y2="30%"
                stroke="#94a3b8"
                strokeWidth="2"
                opacity="0.5"
                markerEnd="url(#arrowhead)"
              />
            </svg>
          </div>
        </CardContent>
      </Card>

      {/* Problem-Solution Map */}
      <Card>
        <CardHeader>
          <CardTitle>Problem-Solution Mapping</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Problems</h4>
                <ul className="text-sm text-red-700 dark:text-red-400 space-y-1">
                  <li>• Fragmented monitoring systems</li>
                  <li>• Reactive noise management</li>
                  <li>• Limited community transparency</li>
                  <li>• Compliance reporting burden</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">QuietIQ Solutions</h4>
                <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
                  <li>• Integrated monitoring platform</li>
                  <li>• Predictive noise analytics</li>
                  <li>• Real-time community dashboard</li>
                  <li>• Automated compliance reporting</li>
                </ul>
              </div>
            </div>

            {selectedStakeholder && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-blue-600 dark:text-blue-400">{selectedStakeholder.icon}</div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300">{selectedStakeholder.name}</h4>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-400 mb-2">{selectedStakeholder.description}</p>
                <p className="text-sm text-blue-600 dark:text-blue-300 font-medium">{selectedStakeholder.role}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
