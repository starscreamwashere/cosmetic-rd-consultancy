"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

interface HeroSectionProps {
  className?: string
}

export default function HeroSection({ className }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isContentVisible, setIsContentVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const backgroundImages = [
    "/hero1.png",
    "/hero2.png",
    "/hero3.png",
  ]

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const opacityExit = useTransform(smoothProgress, [0.3, 1], [1, 0])
  const yExit = useTransform(smoothProgress, [0.3, 1], [0, -100])
  const scaleExit = useTransform(smoothProgress, [0.3, 1], [1, 0.8])
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    setTimeout(() => setIsContentVisible(true), 300)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <section
      ref={sectionRef}
      className={cn("relative w-full h-screen overflow-hidden flex items-center justify-center", className)}
    >
      {/* Background Images */}
      <motion.div className="absolute inset-0 w-full h-full" style={{ y: backgroundY }}>
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000",
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            )}
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden="true"
          />
        ))}
      </motion.div>

      {/* Sage Color Overlay */}
      <motion.div
        className="absolute inset-0 bg-sage/60 z-[4] mix-blend-multiply pointer-events-none"
        aria-hidden="true"
      />

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70 z-[5]"
        style={{ y: backgroundY }}
        aria-hidden="true"
      />

      {/* Radial Gradient Overlay */}
      <motion.div className="absolute inset-0 pointer-events-none z-[6]" aria-hidden="true">
        <div
          className="w-full h-full bg-black opacity-60"
          style={{
            maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center"
        style={{ opacity: opacityExit, y: yExit, scale: scaleExit }}
      >
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isContentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight drop-shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isContentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Innovating Beauty & Personal Care
        
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={isContentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            Leading R&D consulting services specializing in innovative formulations, sustainable ingredients, and
            cutting-edge technology
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isContentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-sage hover:bg-sage/90 text-white px-8 py-6 text-lg">
                <Link href="/services">
                  Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Blurs */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-rose/20 rounded-full blur-3xl"
        style={{
          y: useTransform(smoothProgress, [0, 1], ["0%", "200%"]),
          opacity: useTransform(smoothProgress, [0, 0.5], [0.7, 0]),
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-sage/20 rounded-full blur-3xl"
        style={{
          y: useTransform(smoothProgress, [0, 1], ["0%", "-150%"]),
          opacity: useTransform(smoothProgress, [0, 0.5], [0.7, 0]),
        }}
        aria-hidden="true"
      />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{ opacity: useTransform(smoothProgress, [0, 0.3], [1, 0]) }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <p className="text-white/60 text-sm mt-2 font-light">Scroll to explore</p>
      </motion.div>
    </section>
  )
}
