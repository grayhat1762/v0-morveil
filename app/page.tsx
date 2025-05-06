"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Technology from "@/components/technology"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Preloader from "@/components/preloader"
import { preloadCriticalImages } from "@/utils/image-utils"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoaded(true)
    }, 3000)

    // Preload critical images
    preloadCriticalImages([
      "/images/morveil-logo.svg",
      "/images/innovation.png",
      "/images/partnership.png",
      "/images/analytics.png",
      "/images/security.png",
      "/images/advanced-ai.png",
      "/images/quantum-computing.png",
      "/images/neural-networks.png",
    ])

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const href = this.getAttribute("href")
        if (!href) return

        const target = document.querySelector(href)
        if (!target) return

        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth",
        })
      })
    })
  }, [])

  return (
    <main className="min-h-screen bg-morveil-black text-white">
      <Preloader />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Technology />
      <Contact />
      <Footer />
    </main>
  )
}
