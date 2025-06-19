"use client"

import {
  ArrowRight,
  Beaker,
  Microscope,
  TrendingUp,
  Zap,
  FileText,
  Search,
  PenTool,
  Wrench,
  Rocket,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { m } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SmoothScrollProvider from "@/components/smooth-scroll-provider"

export default function ServicesPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const backgroundImages = [
    "/services1.png",
    "/services2.png",
    "/services3.png",
  ]

  const services = [
    {
      icon: Beaker,
      title: "Formulation Development",
      description: "Complete product development from initial concept to market launch",
      features: [
        "Personal Care, Home Care & Color Cosmetics",
        "Natural, Organic and Sustainable Product Lines",
        "Herbal, Ayurvedic cosmetics",
        "Cosmeceuticals",
        "Nutraceuticals",
        "Raw Material Research & Ingredient Optimization",
      ],
    },
    {
      icon: Microscope,
      title: "Innovation Strategy & Feasibility Assessment",
      description: "Idea generation and viability",
      features: [
        "We specialize in generating breakthrough product ideas and assessing their technical, commercial, and regulatory viability to ensure successful innovation pipelines.We collaborate with you to co-create forward-looking innovation strategies and quarterly action plans, craft compelling product design briefs with clear performance and value propositions, and validate ideas with consumers early in the process. Our approach ensures you get it right from the start—while embedding sustainability at the core of your product strategy.",
      ],
    },
    {
      icon: TrendingUp,
      title: "Technology Platform Development",
      description: "Seamless transition from laboratory to commercial production",
      features: [
        "At the heart of our R&D lies a robust focus on Technology Platform Development — the foundation for scalable, efficient, and innovative product pipelines in the personal care industry. We partner with clients to conceptualize and build integrated technology platforms that streamline formulation development, accelerate time-to-market, and unlock novel consumer experiences.We develop and implement transformative technologies, enabling next-generation products through advanced formulation science, material innovation, and process engineering for a competitive edge.",
      ],
    },
    {
      icon: Zap,
      title: "Problem Solving & Scale up Support",
      description: "Cutting-edge innovation in cosmetic science and technology",
      features: [
        "We provide science-backed solutions to complex formulation, process, and product development challenges—bridging gaps from concept to commercialization.We provide end-to-end guidance for scaling formulations and processes from lab to pilot to commercial production—ensuring consistency, efficiency, and regulatory compliance at every stage.",
      ],
    },
  ]

  const process = [
    { title: "Define", icon: FileText, color: "bg-sage" },
    { title: "Discover", icon: Search, color: "bg-blue-500" },
    { title: "Design", icon: PenTool, color: "bg-violet-500" },
    { title: "Develop", icon: Wrench, color: "bg-teal-500" },
    { title: "Deploy", icon: Rocket, color: "bg-orange-400" },
  ]

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-pearl">
        <Navigation />

        {/* Hero Section with Background Image Rotator */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {backgroundImages.map((src, index) => (
              <m.img
                key={index}
                src={src}
                alt={`bg-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ))}
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                Our <span className="text-white">Services</span>
              </h1>
              <p className="text-xl text-white/80 font-semibold leading-relaxed max-w-3xl mx-auto">
                Comprehensive R&D solutions tailored to meet the evolving needs of the cosmetics industry, from innovative
                formulations to sustainable manufacturing practices
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mt-12 pb-20 lg:mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto space-y-16">
              {services.map((service, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <CardHeader className="p-8 lg:p-12">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center">
                          <service.icon className="h-8 w-8 text-sage" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl md:text-3xl font-bold text-charcoal">{service.title}</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-lg text-charcoal/70 font-semibold leading-relaxed mb-8">
                        {service.description}
                      </CardDescription>
                      <Button asChild className="bg-sage hover:bg-sage/90 text-white w-fit">
                        <Link href="/contact">
                          Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardHeader>
                    <CardContent className="p-8 lg:p-12 bg-gradient-to-br from-sage/5 to-rose/5">
                      <ul className="space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                            <span className="text-charcoal/80 font-semibold">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gear Style 5Ds Section */}
        <section className="py-20 bg-white/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal mb-6">5 Ds Innovation Process</h2>
              <p className="text-lg text-charcoal/70 font-semibold leading-relaxed max-w-3xl mx-auto">
                A systematic framework guiding you from concept to launch
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8 justify-items-center">
              {process.map((step, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative w-28 h-28 mx-auto">
                    <img
                      src="/gear-svgrepo-com.svg"
                      alt="Gear Background"
                      className="absolute inset-0 w-full h-full z-0 animate-spin-slow opacity-20"
                    />
                    <div className={`relative z-10 flex items-center justify-center w-full h-full rounded-full ${step.color}`}>
                      <step.icon className="text-white h-6 w-6" />
                    </div>
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-charcoal">{step.title}</h4>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal mb-6">Ready to Innovate Together?</h2>
              <p className="text-xl text-charcoal/70 font-semibold mb-8 leading-relaxed">
                Let's discuss how our expertise can bring your cosmetic product vision to life
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-sage hover:bg-sage/90 text-white px-8 py-3">
                  <Link href="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SmoothScrollProvider>
  )
}
