"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "thegreentint24@gmail.com",
      description: "",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91-9769911134",
      description: "",
    },
  ]

  return (
    <div className="min-h-screen bg-pearl">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-charcoal mb-6 tracking-tight">
              Let's <span className="text-sage font-extrabold">Connect</span>
            </h1>
            <p className="text-xl text-charcoal/70 font-bold leading-relaxed">Book a call with Us</p>
          </div>
        </div>
      </section>

      {/* Contact Information - Centered */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Get in Touch Section - Centered */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-6">Get in Touch</h2>
              <p className="text-lg text-charcoal/70 font-semibold leading-relaxed mb-8 max-w-2xl mx-auto">
                Whether you're looking to develop a new product, improve an existing formulation, or explore innovative
                technologies, our team is ready to help you achieve your goals.
              </p>
            </div>

            {/* Contact Cards - Centered */}
            <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-sm bg-white/60 backdrop-blur-sm text-center">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mb-4">
                        <info.icon className="h-6 w-6 text-sage" />
                      </div>
                      <h3 className="font-medium text-charcoal mb-1">{info.title}</h3>
                      <p className="text-sage font-medium mb-1">{info.details}</p>
                      <p className="text-sm text-charcoal/60">{info.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Office Hours - Centered */}
            <div className="max-w-md mx-auto mb-12">
              <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-charcoal mb-4">Office Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-charcoal/70 font-semibold">Monday - Friday</span>
                      <span className="text-charcoal font-semibold">9:00 AM - 6:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal/70"></span>
                      <span className="text-charcoal"></span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal/70"></span>
                      <span className="text-charcoal"></span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Response Time Guarantee - Centered */}
            <div className="max-w-lg mx-auto">
              <div className="bg-gradient-to-r from-sage/10 to-rose/10 rounded-lg p-6 text-center">
                <h3 className="font-bold text-charcoal mb-2">Quick Response Guarantee</h3>
                <p className="text-charcoal/70 text-sm font-semibold leading-relaxed">
                  We understand that time is crucial in product development. Our team commits to responding to all
                  inquiries at the earliest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
