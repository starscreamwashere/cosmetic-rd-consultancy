"use client"

import type React from "react"

import { useState } from "react"
import { Upload, Send, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null as File | null,
  })
  const [dragActive, setDragActive] = useState(false)
  const [uploadError, setUploadError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.resume) {
      setUploadError("Please upload your resume")
      return
    }
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const validateFile = (file: File): boolean => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]
    const maxSize = 5 * 1024 * 1024 // 5MB

    if (!allowedTypes.includes(file.type)) {
      setUploadError("Please upload only DOC, DOCX, or PDF files")
      return false
    }

    if (file.size > maxSize) {
      setUploadError("File size must be below 5MB")
      return false
    }

    setUploadError("")
    return true
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && validateFile(file)) {
      setFormData((prev) => ({ ...prev, resume: file }))
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const file = e.dataTransfer.files?.[0]
    if (file && validateFile(file)) {
      setFormData((prev) => ({ ...prev, resume: file }))
    }
  }

  return (
    <div className="min-h-screen bg-pearl">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Career Content */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-6xl font-extrabold text-charcoal mb-8 tracking-tight">
                    <span className="text-sage">CAREER</span>
                  </h1>

                  <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">Join Us</h2>

                  <div className="space-y-6 text-lg font-semibold text-charcoal/80 leading-relaxed">
                    <p>
                      We're always on the lookout for talented and imaginative R&D professionals at every stage of their
                      journey. At The Green Tint, we offer a collaborative, inclusive, and sustainability-focused work
                      environment where both people and the planet matter.
                    </p>

                    <p>
                      Our work spans a wide range of challenges with FMCG companies of all sizes-providing rich,
                      hands-on experience and rapid professional growth. We deeply value practical expertise and the
                      insights gained through real-world problem-solving.
                    </p>

                    <p>
                      If you're passionate about innovation and ready to make an impact, we'd love to hear from you.
                      Let's explore the possibilities together.
                    </p>

                    <div className="bg-gradient-to-r from-sage/10 to-rose/10 rounded-lg p-6 mt-8">
                      <p className="text-charcoal font-medium">
                        Calling all R&D thinkers-whether you're just starting out or bring years of hands-on expertise!
                       Drop us a message.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Career Benefits */}
                
              </div>

              {/* Right Column - Resume Form */}
              <div className="lg:sticky lg:top-24">
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="p-8 pb-6">
                    <CardTitle className="text-2xl font-bold text-charcoal">Apply Now</CardTitle>
                    <CardDescription className="text-charcoal/70 font-semibold">
                      Submit your resume and we'll get back to you soon
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-charcoal">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="border-sage/20 focus:border-sage"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-charcoal">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="border-sage/20 focus:border-sage"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-charcoal">
                          Phone *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="border-sage/20 focus:border-sage"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-charcoal">Resume Upload *</Label>
                        <div
                          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                            dragActive ? "border-sage bg-sage/5" : "border-sage/20 hover:border-sage/40"
                          }`}
                          onDragEnter={handleDrag}
                          onDragLeave={handleDrag}
                          onDragOver={handleDrag}
                          onDrop={handleDrop}
                        >
                          {formData.resume ? (
                            <div className="flex items-center justify-center gap-2 text-sage">
                              <FileText className="h-5 w-5" />
                              <span className="font-medium">{formData.resume.name}</span>
                            </div>
                          ) : (
                            <div className="space-y-2">
                              <Upload className="h-8 w-8 text-sage/60 mx-auto" />
                              <p className="text-charcoal/70">
                                Drag and drop your resume here, or{" "}
                                <label className="text-sage cursor-pointer hover:underline">
                                  browse files
                                  <input
                                    type="file"
                                    className="hidden"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                  />
                                </label>
                              </p>
                            </div>
                          )}
                        </div>
                        {uploadError && <p className="text-red-500 text-sm">{uploadError}</p>}
                      </div>

                      <Button type="submit" className="w-full bg-rose hover:bg-rose/90 text-charcoal font-medium py-3">
                        Send Resume <Send className="ml-2 h-4 w-4" />
                      </Button>

                      <p className="text-xs text-charcoal/60 text-center leading-relaxed">
                        *Please upload your resume in DOC or PDF format and it must be below 5MB size.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
