"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"

interface ServiceImage {
  src: string
  alt: string
  title: string
  description: string
  category: string
}

export default function ServicesImageGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Parallax effect for the entire section
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  const serviceImages: ServiceImage[] = [
    {
      src: "/formDev.png",
      alt: "Advanced laboratory equipment for cosmetic formulation research and development",
      title: "Formulation Development",
      description: "State-of-the-art facilities for precision formulation",
      category: "Research",
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/62460a56418af8236d4f3fee/2d154569-4e7e-4fa2-a9f3-904153d9e960/pexels-kindel-media-7688336.jpg?format=1500w",
      alt: "Sustainable cosmetic ingredients and natural product formulation",
      title: "Innovation Strategy",
      description: "Eco-friendly ingredients and sustainable practices",
      category: "Sustainability",
    },
    {
      src: "https://img.cosmeticsandtoiletries.com/files/base/allured/all/image/2022/09/dreamstime_s_250390798.6317b48caba75.png?auto=format%2Ccompress&q=70&rect=0%2C41%2C800%2C449&w=700",
      alt: "Cosmetic product testing and quality control processes",
      title: "Technology Platform Development",
      description: "Rigorous testing for safety and efficacy",
      category: "Testing",
    },
    {
      src: "https://www.bhagwatipharma.com/wp-content/uploads/2018/08/lotion-and-shampoo.jpg",
      alt: "Innovative cosmetic product development and formulation science",
      title: "Scale up Support",
      description: "Cutting-edge formulation and product development",
      category: "Innovation",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 60,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.div ref={containerRef} className="mb-16" style={{ y }}>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {serviceImages.map((image, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
            {/* Image Container */}
            <div className="aspect-[4/5] overflow-hidden relative">
              {/* Optimized Image with Next.js Image component */}
              <motion.div
                className="w-full h-full relative"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.6, ease: "easeOut" },
                }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-all duration-700 group-hover:grayscale-0 grayscale-[20%]"
                  loading="lazy"
                  quality={85}
                />
              </motion.div>

              {/* Gradient Overlay */}
              {/* Stronger Non-Linear Bottom Gradient */}
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500" />


              {/* Category Badge */}
              {/* <motion.div
                className="absolute top-4 left-4 px-3 py-1 bg-sage/90 backdrop-blur-sm rounded-full text-white text-xs font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
              >
                {image.category}
              </motion.div> */}

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <motion.h3
                  className="text-lg font-semibold mb-2 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
                >
                  {image.title}
                </motion.h3>
                <motion.p
                  className="text-white/90 text-sm font-semibold  leading-relaxed transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 0, y: 20 } : { opacity: 0, y: 20 }}
                >
                  {image.description}
                </motion.p>
              </div>

              {/* Decorative Corner Element */}
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 border-2 border-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-full h-full border-2 border-white/60 rounded-full scale-50 group-hover:scale-75 transition-transform duration-300" />
              </motion.div>
            </div>

            {/* Hover Effect Overlay */}
            <motion.div
              className="absolute inset-0 bg-sage/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Info Section */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-extrabold text-charcoal mb-4">Excellence in Every Detail</h3>
          <p className="text-charcoal/70 font-semibold leading-relaxed">
            Our comprehensive approach combines cutting-edge technology with sustainable practices, ensuring that every
            product we develop meets the highest standards of quality, safety, and environmental responsibility.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
