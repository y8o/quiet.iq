import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Mail, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Team - QuietIQ",
  description:
    "Meet the QuietIQ team - experienced professionals dedicated to solving airport noise pollution challenges.",
}

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former aerospace engineer with 10+ years in aviation environmental compliance. Led noise mitigation projects at major airports.",
    image: "/placeholder.svg?height=200&width=200",
    linkedin: "#",
    email: "sarah@quietiq.com",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Data scientist and ML engineer specializing in environmental monitoring systems. Previously at Google Cloud IoT.",
    image: "/placeholder.svg?height=200&width=200",
    linkedin: "#",
    email: "michael@quietiq.com",
  },
  {
    name: "Dr. Emily Watson",
    role: "Head of Research",
    bio: "PhD in Environmental Engineering with expertise in acoustic modeling and noise prediction algorithms.",
    image: "/placeholder.svg?height=200&width=200",
    linkedin: "#",
    email: "emily@quietiq.com",
  },
  {
    name: "James Park",
    role: "VP of Business Development",
    bio: "Former airport operations manager with deep industry connections and regulatory expertise.",
    image: "/placeholder.svg?height=200&width=200",
    linkedin: "#",
    email: "james@quietiq.com",
  },
]

const advisors = [
  {
    name: "Dr. Andrea Cherman",
    role: "Technical Advisor",
    bio: "Professor of Environmental Engineering, leading researcher in airport noise modeling and mitigation strategies.",
    affiliation: "Stanford University",
  },
  {
    name: "Wayne Smith",
    role: "Industry Advisor",
    bio: "Former FAA Regional Administrator with 25+ years in aviation regulation and environmental compliance.",
    affiliation: "Former FAA",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">Our Team</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Meet the experienced professionals behind QuietIQ, dedicated to revolutionizing airport noise management
            through innovative technology.
          </p>
        </div>

        {/* Team Members */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Core Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-gray-200 dark:border-gray-700 group-hover:border-primary-500 transition-colors"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary-600 dark:text-primary-400 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.linkedin}
                      className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Advisors & Mentors</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <Card key={index} className="border-l-4 border-secondary-500">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Award className="h-6 w-6 text-secondary-600" />
                    <div>
                      <CardTitle className="text-xl">{advisor.name}</CardTitle>
                      <CardDescription className="text-secondary-600 dark:text-secondary-400 font-medium">
                        {advisor.role}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{advisor.bio}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 font-medium">{advisor.affiliation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Culture */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            We're committed to creating a quieter, healthier world through innovative technology and data-driven
            solutions. Our diverse team brings together expertise in aerospace engineering, data science, environmental
            research, and business development to tackle one of aviation's most persistent challenges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Pushing the boundaries of environmental monitoring technology
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Impact</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creating measurable improvements in community quality of life
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Integrity</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Transparent, ethical practices in all our stakeholder relationships
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
