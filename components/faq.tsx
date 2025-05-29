import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const faqs = [
  {
    question: "How accurate is QuietIQ's noise monitoring?",
    answer:
      "Our system uses Class 1 sound level meters that meet IEC 61672 standards, providing accuracy within ±1.5 dB. Combined with our calibration protocols and quality assurance measures, we ensure reliable, legally defensible measurements.",
  },
  {
    question: "What airports can benefit from QuietIQ?",
    answer:
      "QuietIQ is designed for airports of all sizes, from small regional airports to major international hubs. Our scalable platform can accommodate single-runway facilities to complex multi-runway operations with varying noise management needs.",
  },
  {
    question: "How does the predictive forecasting work?",
    answer:
      "Our machine learning algorithms analyze historical noise data, weather patterns, flight schedules, and aircraft types to predict future noise levels. The system continuously learns and improves accuracy over time, typically achieving 85-90% prediction accuracy.",
  },
  {
    question: "Is QuietIQ compliant with FAA regulations?",
    answer:
      "Yes, QuietIQ is designed to meet all FAA Part 150 requirements and can generate compliant noise exposure maps and reports. Our system also supports NEPA documentation and other regulatory requirements.",
  },
  {
    question: "What is the typical implementation timeline?",
    answer:
      "Implementation typically takes 3-6 months depending on airport size and complexity. This includes sensor installation, system configuration, staff training, and initial data validation. We provide full support throughout the process.",
  },
  {
    question: "Can communities access the noise data?",
    answer:
      "Absolutely. We believe in transparency and provide community-facing dashboards where residents can view real-time noise levels, submit feedback, and access historical data. This helps build trust and improve community relations.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive support including 24/7 system monitoring, regular maintenance, software updates, training programs, and dedicated customer success management. Our team includes noise experts and technical specialists.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Our pricing is based on airport size, number of monitoring points, and feature requirements. We offer flexible subscription models including basic monitoring, advanced analytics, and full-service packages. Contact us for a customized quote.",
  },
]

export default function FAQ() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
