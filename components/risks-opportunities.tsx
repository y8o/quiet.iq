import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, TrendingUp, Shield, Zap } from "lucide-react"

const risks = [
  {
    title: "Regulatory Changes",
    description: "Potential changes in FAA noise regulations could impact platform requirements",
    impact: "Medium",
    mitigation: "Maintain close relationships with regulatory bodies and build flexible architecture",
  },
  {
    title: "Technology Competition",
    description: "Large tech companies entering the environmental monitoring space",
    impact: "High",
    mitigation: "Focus on specialized airport noise expertise and strong customer relationships",
  },
  {
    title: "Economic Downturn",
    description: "Reduced airport capital expenditure during economic uncertainty",
    impact: "Medium",
    mitigation: "Develop cost-effective solutions and flexible pricing models",
  },
  {
    title: "Data Privacy Concerns",
    description: "Increasing scrutiny on data collection and privacy regulations",
    impact: "Low",
    mitigation: "Implement privacy-by-design principles and transparent data practices",
  },
]

const opportunities = [
  {
    title: "Climate Change Focus",
    description: "Increased attention on environmental monitoring and sustainability",
    impact: "High",
    potential: "Expand into broader environmental monitoring markets",
  },
  {
    title: "Smart City Initiatives",
    description: "Growing investment in smart city infrastructure and IoT deployments",
    impact: "High",
    potential: "Partner with smart city vendors and expand to urban noise monitoring",
  },
  {
    title: "International Expansion",
    description: "Global airports seeking modern noise management solutions",
    impact: "Medium",
    potential: "Enter European and Asian markets with localized solutions",
  },
  {
    title: "AI/ML Advancement",
    description: "Rapid improvements in AI capabilities for predictive analytics",
    impact: "Medium",
    potential: "Develop advanced predictive models and automated decision systems",
  },
]

export default function RisksOpportunities() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Risks */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
          <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
          Risk Assessment
        </h2>

        <div className="space-y-4">
          {risks.map((risk, index) => (
            <Card key={index} className="border-l-4 border-red-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{risk.title}</CardTitle>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      risk.impact === "High"
                        ? "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
                        : risk.impact === "Medium"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300"
                          : "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                    }`}
                  >
                    {risk.impact} Impact
                  </span>
                </div>
                <CardDescription>{risk.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-2">
                  <Shield className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Mitigation:</span> {risk.mitigation}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Opportunities */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
          <TrendingUp className="h-8 w-8 text-green-500 mr-3" />
          Growth Opportunities
        </h2>

        <div className="space-y-4">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="border-l-4 border-green-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      opportunity.impact === "High"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                        : "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
                    }`}
                  >
                    {opportunity.impact} Potential
                  </span>
                </div>
                <CardDescription>{opportunity.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-2">
                  <Zap className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Potential:</span> {opportunity.potential}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
