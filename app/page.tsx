"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import CountUp from 'react-countup'
import { ArrowRight, Beaker, Leaf, Microscope, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import SmoothScrollSection, { SmoothScrollElement } from "@/components/smooth-scroll-section"
import ServicesImageGrid from "@/components/services-image-grid"

const backgroundImages = [
  "https://media.istockphoto.com/id/1961324209/photo/a-concept-where-various-creative-thoughts-are-formed-within-a-light-bulb-3d-rendering.jpg?s=612x612&w=0&k=20&c=-Q38F3crdoLowPm5dAAYBy1loLmCvJp3m_bFZvSWTo8=",
  "https://www.som.polimi.it/wp-content/uploads/2020/09/DiSalvio_Articolo_Innovation_1200x510.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVLqGASMUSkTAdxM10lNP1QXEqxpsX6U1hw&s",
  "https://sloanreview.mit.edu/wp-content/uploads/2019/03/GEN-Stetter-Innovation-1200x627-1200x627.jpg",
]

export default function HomePage() {
  const [bgIndex, setBgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      icon: Beaker,
      title: "Formulation Development",
      description: "Innovative formulation development from concept to market-ready products",
    },
    {
      icon: Microscope,
      title: "Innovation Strategy & Feasibility Assessment",
      description: "Advanced analysis and sourcing of cutting-edge cosmetic ingredients",
    },
    {
      icon: TrendingUp,
      title: "Technology Platform Development",
      description: "Seamless transition from lab-scale to commercial production",
    },
    {
      icon: Leaf,
      title: "Problem Solving & Scale up Support",
      description: "Traditional wisdom meets modern science in herbal product development",
    },
  ]

  return (
    <div className="min-h-screen bg-pearl">
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Overview */}
      <SmoothScrollSection className="py-20 bg-white/50" parallaxBg bgColor="rgba(255, 255, 255, 0.5)">
        <div className="container mx-auto px-4">
          <SmoothScrollElement>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal mb-6">Our Services</h2>
              <p className="text-lg text-charcoal/70 font-semibold leading-relaxed">
                End-to-End R&D Expertise for Launching Winning Products
              </p>
              <p className="text-lg text-charcoal/70 font-semibold leading-relaxed">
                Personal Care | Colour Cosmetics | Cosmaceuticals | Neutraceuticals | Home Care 
              </p>
            </div>
          </SmoothScrollElement>

          {/* Enhanced Image Grid Section */}
          <ServicesImageGrid />

          

          <SmoothScrollElement delay={0.2}>
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="border-sage  text-emerald-400 hover:bg-sage/5">
                <Link href="/services">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </SmoothScrollElement>
        </div>
      </SmoothScrollSection>

      {/* Why Choose Us */}
      <SmoothScrollSection className="py-20" parallaxBg bgColor="rgba(75, 114, 96, 0.05)">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <SmoothScrollElement>
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal mb-6">
                    Where Innovation Meets Excellence
                  </h2>
                  <p className="text-lg text-charcoal/70 font-semibold mb-8 leading-relaxed">
                    Innovation isn’t just what we do — it’s who we are. Our
globally acclaimed formulas embody the perfect harmony of
scientific precision and creative formulation, delivering
outstanding results time and again !
                  </p>
                  <div className="space-y-4">
                    {/* <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-charcoal/80"></p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-charcoal/80">
                        
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-charcoal/80"></p>
                    </div> */}
                  </div>
                  <div className="mt-8">
                    <Button asChild className="bg-sage hover:bg-sage/90 text-white">
                      <Link href="/about">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </SmoothScrollElement>

              <SmoothScrollElement delay={0.2} scale>
                <div className="relative overflow-hidden rounded-3xl">
                  {/* Background slideshow */}
                  {backgroundImages.map((img, i) => (
                    <div
                      key={i}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
                        i === bgIndex ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        backgroundImage: `url('${img}')`,
                        zIndex: 0,
                      }}
                    />
                  ))}
                  {/* Dark overlay */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/60 to-black/50 backdrop-blur-sm" />

                  {/* Stats content */}
                  <div className="aspect-square relative z-20 flex items-center justify-center p-8">
                    <div className="w-full h-full rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-emerald-400 mb-2">
  <CountUp end={18} duration={2} suffix="+" enableScrollSpy scrollSpyOnce />
</div>
<div className="text-white font-semibold mb-6">Years of Experience</div>

<div className="text-4xl font-bold text-emerald-400 mb-2">
  <CountUp end={100} duration={2.5} suffix="+" enableScrollSpy scrollSpyOnce />
</div>
<div className="text-white font-semibold mb-6">Products Developed</div>

<div className="text-4xl font-bold text-emerald-400 mb-2">
  <CountUp end={100} duration={2} suffix="%" enableScrollSpy scrollSpyOnce />
</div>
<div className="text-white font-semibold">Client Satisfaction</div>

                      </div>
                    </div>
                  </div>
                </div>
              </SmoothScrollElement>
            </div>
          </div>
        </div>
      </SmoothScrollSection>

      {/* CTA Section */}
      <SmoothScrollSection className="py-20" parallaxBg bgColor="rgba(232, 199, 200, 0.1)" scale>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal mb-6">Ready to Transform Your Ideas?</h2>
            <p className="text-xl text-charcoal/70 mb-8 font-semibold leading-relaxed">
              Let's collaborate to bring your vision to life with our proven expertise and innovative approach
              to product development
            </p>
            <Button asChild size="lg" className="bg-sage hover:bg-sage/90 text-white px-8 py-3">
              <Link href="/contact">
                Start Your Project Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </SmoothScrollSection>

      <Footer />
    </div>
  )
}
