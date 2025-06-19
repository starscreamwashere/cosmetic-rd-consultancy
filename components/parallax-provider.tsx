"use client"

import { type ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxProviderProps {
  children: ReactNode
}

export default function ParallaxProvider({ children }: ParallaxProviderProps) {
  return <div className="parallax-container">{children}</div>
}

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  backgroundImage?: string
  backgroundSpeed?: number
  fadeIn?: boolean
  scaleIn?: boolean
}

export function ParallaxSection({
  children,
  className = "",
  backgroundImage,
  backgroundSpeed = 0.5,
  fadeIn = false,
  scaleIn = false,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Transform values for background parallax
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", `${30 * backgroundSpeed}%`])

  // Optional fade/scale effects for content
  const opacity = fadeIn ? useTransform(scrollYProgress, [0, 0.2], [0, 1]) : 1
  const scale = scaleIn ? useTransform(scrollYProgress, [0, 0.2], [0.95, 1]) : 1

  return (
    <section ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      {/* Background with parallax effect */}
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            y: backgroundY,
          }}
          aria-hidden="true"
        />
      )}

      {/* Content with optional effects */}
      <motion.div
        className="relative z-10"
        style={{
          opacity: opacity,
          scale: scale,
        }}
      >
        {children}
      </motion.div>
    </section>
  )
}

interface ParallaxElementProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  fadeIn?: boolean
  scaleIn?: boolean
}

export function ParallaxElement({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
  delay = 0,
  fadeIn = false,
  scaleIn = false,
}: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Calculate movement based on direction and speed
  const distance = 50 * speed

  let x, y
  switch (direction) {
    case "up":
      y = useTransform(scrollYProgress, [0, 1], [distance, -distance])
      break
    case "down":
      y = useTransform(scrollYProgress, [0, 1], [-distance, distance])
      break
    case "left":
      x = useTransform(scrollYProgress, [0, 1], [distance, -distance])
      break
    case "right":
      x = useTransform(scrollYProgress, [0, 1], [-distance, distance])
      break
    default:
      break
  }

  const opacity = fadeIn ? useTransform(scrollYProgress, [0, 0.3], [0, 1]) : 1
  const scale = scaleIn ? useTransform(scrollYProgress, [0, 0.3], [0.9, 1]) : 1

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        x: x || 0,
        y: y || 0,
        opacity: opacity,
        scale: scale,
      }}
      initial={fadeIn || scaleIn ? { opacity: 0, scale: 0.9 } : undefined}
      whileInView={fadeIn || scaleIn ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxBackgroundProps {
  children?: ReactNode
  className?: string
  speed?: number
}

export function ParallaxBackground({ children, className = "", speed = 0.2 }: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Slower movement for backgrounds
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${30 * speed}%`])

  return (
    <motion.div
      ref={ref}
      className={`absolute inset-0 w-full h-full -z-10 ${className}`}
      style={{ y }}
      aria-hidden="true"
    >
      {children}
    </motion.div>
  )
}
