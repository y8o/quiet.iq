"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, BarChart3, Building, FileText } from "lucide-react"
import InteractiveMap from "@/components/interactive-map"
import ForecastWidget from "@/components/forecast-widget"

export default function SolutionTabs() {
  return (
    <Tabs defaultValue="technical" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="technical">Technical Solution</TabsTrigger>
        <TabsTrigger value="business">Business Model</TabsTrigger>
        <TabsTrigger value="resources">Resources</TabsTrigger>
      </TabsList>

      <TabsContent value="technical" className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interactive Map */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Real-time Noise Monitoring</h3>
            <InteractiveMap />
          </div>

          {/* Forecast Widget */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Predictive Forecast</h3>
            <ForecastWidget />
          </div>
        </div>

        {/* Technical Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <MapPin className="h-8 w-8 text-primary-600 mb-2" />
              <CardTitle>Sensor Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Distributed IoT sensors for comprehensive noise monitoring with real-time data transmission.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BarChart3 className="h-8 w-8 text-secondary-600 mb-2" />
              <CardTitle>ML Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Advanced machine learning algorithms for pattern recognition and noise prediction.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-primary-600 mb-2" />
              <CardTitle>Automated Reporting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Compliance reports and community notifications generated automatically.
              </p>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="business" className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Business Model Canvas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Key Partners */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Key Partners</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Airport authorities</p>
                <p>• Sensor manufacturers</p>
                <p>• Government agencies</p>
                <p>• Community organizations</p>
              </CardContent>
            </Card>

            {/* Key Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Key Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Platform development</p>
                <p>• Data analytics</p>
                <p>• Customer support</p>
                <p>• Regulatory compliance</p>
              </CardContent>
            </Card>

            {/* Value Propositions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Value Propositions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Real-time monitoring</p>
                <p>• Predictive analytics</p>
                <p>• Regulatory compliance</p>
                <p>• Community engagement</p>
              </CardContent>
            </Card>

            {/* Customer Relationships */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Customer Relationships</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Dedicated support</p>
                <p>• Self-service portal</p>
                <p>• Community forums</p>
                <p>• Training programs</p>
              </CardContent>
            </Card>

            {/* Customer Segments */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Customer Segments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Airport operators</p>
                <p>• Government agencies</p>
                <p>• Environmental consultants</p>
                <p>• Community groups</p>
              </CardContent>
            </Card>

            {/* Key Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Key Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Technology platform</p>
                <p>• Data scientists</p>
                <p>• Sensor network</p>
                <p>• Regulatory expertise</p>
              </CardContent>
            </Card>

            {/* Channels */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Channels</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Direct sales</p>
                <p>• Partner networks</p>
                <p>• Online platform</p>
                <p>• Industry events</p>
              </CardContent>
            </Card>

            {/* Cost Structure */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cost Structure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• R&D expenses</p>
                <p>• Infrastructure costs</p>
                <p>• Personnel costs</p>
                <p>• Marketing expenses</p>
              </CardContent>
            </Card>

            {/* Revenue Streams */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Revenue Streams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• SaaS subscriptions</p>
                <p>• Hardware sales</p>
                <p>• Consulting services</p>
                <p>• Data licensing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="resources" className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* FAA Programs */}
          <Card>
            <CardHeader>
              <Building className="h-8 w-8 text-primary-600 mb-2" />
              <CardTitle>FAA Programs</CardTitle>
              <CardDescription>Federal aviation noise management initiatives</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold">Airport Noise Compatibility Planning (ANCP)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Federal program for noise mitigation around airports
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Voluntary Airport Low Emissions (VALE)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Funding for environmental improvements at airports
                </p>
              </div>
              <div>
                <h4 className="font-semibold">NextGen Environmental Review</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Modernization of air traffic control systems</p>
              </div>
            </CardContent>
          </Card>

          {/* Key Contractors */}
          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-secondary-600 mb-2" />
              <CardTitle>Key Contractors</CardTitle>
              <CardDescription>Industry partners and service providers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold">Brüel & Kjær</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Leading noise monitoring equipment manufacturer
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Harris Miller Miller & Hanson</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Environmental consulting and noise analysis</p>
              </div>
              <div>
                <h4 className="font-semibold">Landrum & Brown</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Aviation planning and environmental services</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Regulatory Framework</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• FAR Part 150 Noise Standards</p>
              <p>• NEPA Environmental Review</p>
              <p>• State and Local Ordinances</p>
              <p>• International Standards (ICAO)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Technology Standards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• IEC 61672 Sound Level Meters</p>
              <p>• ANSI S1.13 Measurement Standards</p>
              <p>• ISO 20906 Unattended Monitoring</p>
              <p>• IEEE 802.11 Wireless Standards</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Funding Sources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Airport Improvement Program (AIP)</p>
              <p>• Passenger Facility Charges (PFC)</p>
              <p>• State Environmental Grants</p>
              <p>• Private Investment</p>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}
