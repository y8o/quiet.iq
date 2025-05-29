import type { Metadata } from "next"
import { TrendingUp, Users, DollarSign, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "The Problem - QuietIQ",
  description:
    "Understanding the critical challenges of airport noise pollution and its impact on communities and the economy.",
}

export default function ProblemPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            The Problem: Noise Pollution
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Airport noise pollution affects millions of people worldwide, creating significant health, economic, and
            regulatory challenges that demand innovative solutions.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">6.2 Million</CardTitle>
              <CardDescription>People affected by airport noise in the US</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <DollarSign className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">$3.5 Billion</CardTitle>
              <CardDescription>Annual economic impact from noise pollution</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">45%</CardTitle>
              <CardDescription>Increase in noise complaints over the past decade</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Health & Economic Impacts */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Health & Economic Impacts</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Health Consequences</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Sleep disruption and insomnia</li>
                  <li>• Cardiovascular disease risk increase</li>
                  <li>• Cognitive impairment in children</li>
                  <li>• Stress-related mental health issues</li>
                  <li>• Hearing damage from prolonged exposure</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Economic Impact</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Property value depreciation (up to 20%)</li>
                  <li>• Healthcare costs from noise-related illnesses</li>
                  <li>• Lost productivity due to sleep disruption</li>
                  <li>• Legal costs from community lawsuits</li>
                  <li>• Airport operational restrictions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Noise Contour Growth Chart */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Noise Contour Growth</h2>
            <Card>
              <CardHeader>
                <CardTitle>Airport Noise Exposure Over Time</CardTitle>
                <CardDescription>Growth in 65+ DNL noise contour areas around major airports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-16 w-16 text-red-600 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400">Interactive Chart: Noise Contour Expansion</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">2010-2024 Growth Trends</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Challenges Accordion */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Key Challenges</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="regulatory">
              <AccordionTrigger className="text-left">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <span>Regulatory Gaps</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    Current noise regulations are outdated and fail to address modern aviation growth and community
                    needs.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• FAA noise standards haven't been updated since 1981</li>
                    <li>• Limited enforcement mechanisms for noise violations</li>
                    <li>• Inconsistent measurement and reporting standards</li>
                    <li>• Lack of real-time monitoring requirements</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="technology">
              <AccordionTrigger className="text-left">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                  <span>Technology Limitations</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>Existing noise monitoring systems are fragmented, expensive, and lack predictive capabilities.</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Legacy monitoring systems with limited coverage</li>
                    <li>• No integration between different data sources</li>
                    <li>• Reactive rather than predictive approach</li>
                    <li>• High costs for comprehensive monitoring networks</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="economic">
              <AccordionTrigger className="text-left">
                <div className="flex items-center space-x-3">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <span>Economic Barriers</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    High implementation costs and unclear ROI prevent widespread adoption of noise mitigation solutions.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Expensive traditional monitoring equipment</li>
                    <li>• Limited funding for community noise programs</li>
                    <li>• Unclear business models for noise solutions</li>
                    <li>• Competing priorities for airport investments</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
