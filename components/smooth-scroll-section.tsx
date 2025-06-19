"use client"

import { type ReactNode, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

interface SmoothScrollSectionProps {
  children: ReactNode
  className?: string
  fadeOut?: boolean
  popUp?: boolean
  scale?: boolean
  delay?: number
  parallaxBg?: boolean
  bgSpeed?: number
  bgImage?: string
  bgColor?: string
}

export default function SmoothScrollSection({
  children,
  className = "",
  fadeOut = true,
  popUp = true,
  scale = false,
  delay = 0,
  parallaxBg = false,
  bgSpeed = 0.2,
  bgImage,
  bgColor,
}: SmoothScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  // Track when section enters and exits viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Smooth out the scroll progress for more fluid animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Transform values for entering viewport (bottom to top)
  const yEnter = useTransform(smoothProgress, [0, 0.4], [100, 0])
  const opacityEnter = useTransform(smoothProgress, [0, 0.3], [0, 1])
  const scaleEnter = useTransform(smoothProgress, [0, 0.4], [0.8, 1])

  // Transform values for exiting viewport (top to bottom)
  const opacityExit = useTransform(smoothProgress, [0.7, 1], [1, 0])
  const yExit = useTransform(smoothProgress, [0.7, 1], [0, -50])

  // Parallax background effect
  const bgY = useTransform(smoothProgress, [0, 1], ["0%", `${30 * bgSpeed}%`])

  return (
    <section ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      {/* Optional parallax background */}
      {parallaxBg && (
        <motion.div
          className="absolute inset-0 w-full h-full -z-10"
          style={{
            y: bgY,
            backgroundImage: bgImage ? `url(${bgImage})` : undefined,
            backgroundColor: bgColor || undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
      )}

      {/* Content with scroll animations */}
      <motion.div
        className="relative z-10"
        style={{
          y: popUp ? yEnter : undefined,
          opacity: fadeOut ? opacityEnter : 1,
          scale: scale ? scaleEnter : 1,
        }}
        transition={{ delay }}
      >
        {/* Apply exit animations to children */}
        <motion.div
          style={{
            opacity: fadeOut ? opacityExit : 1,
            y: fadeOut ? yExit : 0,
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </section>
  )
}

// Individual element version for more granular control
interface SmoothScrollElementProps {
  children: ReactNode
  className?: string
  fadeOut?: boolean
  popUp?: boolean
  scale?: boolean
  delay?: number
  staggerIndex?: number
}

export function SmoothScrollElement({
  children,
  className = "",
  fadeOut = true,
  popUp = true,
  scale = false,
  delay = 0,
  staggerIndex = 0,
}: SmoothScrollElementProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const yEnter = useTransform(smoothProgress, [0, 0.4], [50, 0])
  const opacityEnter = useTransform(smoothProgress, [0, 0.3], [0, 1])
  const scaleEnter = useTransform(smoothProgress, [0, 0.4], [0.9, 1])

  const opacityExit = useTransform(smoothProgress, [0.7, 1], [1, 0])
  const yExit = useTransform(smoothProgress, [0.7, 1], [0, -30])

  // Calculate staggered delay
  const totalDelay = delay + staggerIndex * 0.1

  return (
    <motion.div
      ref={elementRef}
      className={className}
      style={{
        y: popUp ? yEnter : 0,
        opacity: fadeOut ? opacityEnter : 1,
        scale: scale ? scaleEnter : 1,
      }}
      transition={{
        delay: totalDelay,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <motion.div
        style={{
          opacity: fadeOut ? opacityExit : 1,
          y: fadeOut ? yExit : 0,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
