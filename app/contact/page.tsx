import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import FAQ from "@/components/faq"

export const metadata: Metadata = {
  title: "Contact - QuietIQ",
  description: "Get in touch with the QuietIQ team. Contact us for partnerships, demos, or general inquiries.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to transform your airport's noise management? Get in touch with our team to learn more about QuietIQ.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactForm />
          <FAQ />
        </div>
      </div>
    </div>
  )
}
