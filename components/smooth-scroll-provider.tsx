"use client"

import { type ReactNode, useEffect } from "react"
import { useRouter } from "next/navigation"
import { domAnimation, LazyMotion } from "framer-motion"

interface SmoothScrollProviderProps {
  children: ReactNode
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const router = useRouter()

  // Reset scroll position when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }

    // Create a MutationObserver to detect route changes
    const observer = new MutationObserver(() => {
      const currentPath = window.location.pathname
      if (currentPath !== lastPath.current) {
        lastPath.current = currentPath
        handleRouteChange()
      }
    })

    const lastPath = { current: window.location.pathname }

    // Start observing the document body for changes
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
    }
  }, [router])

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="smooth-scroll-container">{children}</div>
    </LazyMotion>
  )
}
