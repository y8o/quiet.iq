import Link from "next/link"
import { ArrowRight, BarChart3, TrendingUp, FileText, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ContactModal from "@/components/contact-modal"
import NoiseScoreCalculator from "@/components/noise-score-calculator"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Award className="h-6 w-6 text-primary-600" />
                <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                  Honorable Mention – Honeywell VP Pitch
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">QuietIQ</h1>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                Data-Driven Noise Pollution Platform
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                Revolutionary platform for monitoring and predicting airport noise pollution using advanced data
                analytics and machine learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ContactModal
                  trigger={
                    <Button size="lg" className="text-lg px-8">
                      Get Your Noise Report
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  }
                />
                <Button variant="outline" size="lg" asChild>
                  <Link href="#learn-more">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
                <div className="h-64 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400">Airport Noise Waveform Visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive noise monitoring and prediction capabilities designed for communities, regulators, and
              aviation stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <CardTitle>Real-time Data</CardTitle>
                <CardDescription>
                  Live noise monitoring with advanced sensor networks and data visualization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Monitor noise levels in real-time with our distributed sensor network and interactive dashboards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-secondary-600 mx-auto mb-4" />
                <CardTitle>Predictive Forecast</CardTitle>
                <CardDescription>AI-powered noise prediction models for proactive planning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Leverage machine learning to predict future noise patterns and plan accordingly.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <FileText className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <CardTitle>Noise Reports</CardTitle>
                <CardDescription>
                  Comprehensive reports for regulatory compliance and community engagement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Generate detailed reports for stakeholders with actionable insights and recommendations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Noise Calculator Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">Assess Noise Impact</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Use our noise score calculator to understand the health impact of different decibel levels in your
                environment.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-green-500 rounded-full mr-3"></div>
                  Below 55 dB: Low impact, suitable for residential areas
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-yellow-500 rounded-full mr-3"></div>
                  55-65 dB: Moderate impact, some annoyance possible
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-red-500 rounded-full mr-3"></div>
                  Above 65 dB: High impact, significant health concerns
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <NoiseScoreCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Project Abstract Section */}
      <section id="learn-more" className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">Project Abstract</h2>
          </div>

          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              QuietIQ addresses the critical challenge of airport noise pollution through an innovative data-driven
              platform. Our solution combines real-time monitoring, predictive analytics, and comprehensive reporting to
              serve communities, regulators, and aviation stakeholders.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The platform leverages advanced machine learning algorithms to predict noise patterns, enabling proactive
              mitigation strategies. With a focus on regulatory compliance and community engagement, QuietIQ transforms
              how we understand and manage airport noise impacts.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Through extensive customer discovery and technical validation, we've developed a scalable solution that
              addresses real market needs while creating sustainable value for all stakeholders in the aviation
              ecosystem.
            </p>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/problem">
                Explore the Problem
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
