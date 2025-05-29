"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Download, CheckCircle } from "lucide-react"

interface ContactModalProps {
  trigger: React.ReactNode
}

export default function ContactModal({ trigger }: ContactModalProps) {
  const [formData, setFormData] = useState({
    address: "",
    email: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.address.trim()) {
      newErrors.address = "Address is required"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Store in localStorage
      const submissions = JSON.parse(localStorage.getItem("quietiq-submissions") || "[]")
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
      })
      localStorage.setItem("quietiq-submissions", JSON.stringify(submissions))

      setIsSubmitted(true)
    }
  }

  const resetForm = () => {
    setFormData({ address: "", email: "" })
    setIsSubmitted(false)
    setErrors({})
  }

  return (
    <Dialog onOpenChange={(open) => !open && resetForm()}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Get Your Noise Report</DialogTitle>
          <DialogDescription>
            Enter your address and email to generate a personalized noise pollution report for your area.
          </DialogDescription>
        </DialogHeader>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="123 Main St, City, State"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className={errors.address ? "border-red-500" : ""}
              />
              {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            <Button type="submit" className="w-full">
              Generate Report
            </Button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
            <div>
              <h3 className="text-lg font-semibold">Report Generated!</h3>
              <p className="text-gray-600 dark:text-gray-400">Your personalized noise report is ready for download.</p>
            </div>
            <Button asChild className="w-full">
              <a href="/sample-noise-report.pdf" download>
                <Download className="h-4 w-4 mr-2" />
                Download Your Report
              </a>
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
