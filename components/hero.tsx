"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      const elements = containerRef.current.querySelectorAll(".parallax")
      elements.forEach((el) => {
        const speed = Number.parseFloat(el.getAttribute("data-speed") || "1")
        const htmlEl = el as HTMLElement
        htmlEl.style.transform = `translate(${x * 40 * speed}px, ${y * 40 * speed}px) rotate(${x * y * 10}deg)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" ref={containerRef}>
      {/* Background particles */}
      <div className="absolute inset-0 particles-container"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-lines opacity-20"></div>

      {/* Radial gradient */}
      <div className="absolute inset-0 radial-gradient"></div>

      {/* Noise texture */}
      <div className="noise-bg"></div>

      {/* Content */}
      <div className="container mx-auto px-8 md:px-12 py-24 pt-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-12 mb-12 lg:mb-0">
            <div className="relative">
              <div
                className="absolute -top-10 -left-10 w-40 h-40 bg-morveil-red/10 rounded-full blur-3xl parallax"
                data-speed="0.5"
              ></div>
              <div
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-morveil-red/20 rounded-full blur-3xl parallax"
                data-speed="0.3"
              ></div>

              <div className="mb-4 stagger-reveal">
                <span className="inline-block px-3 py-1 rounded-full glass text-sm text-morveil-red font-medium">
                  Pioneering AI Technology
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 hero-text">
                <span className="block parallax-text" data-speed="0.2">
                  Redefining
                </span>
                <span className="block text-gradient parallax-text high-contrast" data-speed="0.3">
                  The Future
                </span>
                <span className="block parallax-text" data-speed="0.4">
                  With Advanced AI
                </span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 max-w-lg stagger-reveal parallax-text" data-speed="0.1">
                Unlock the power of next-gen AI with Morveil. We create intelligent, data-driven solutions that help you
                stay ahead of the curve, optimize performance, and turn complex challenges into clear, actionable
                insights. Whether you're scaling your business, transforming operations, or innovating for the future —
                Morveil empowers you to move faster, smarter, and bolder.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative perspective-container">
              <div className="absolute -inset-10 bg-morveil-red/10 rounded-full blur-3xl animate-pulse"></div>

              <div className="relative w-64 h-64 md:w-80 md:h-80 perspective-element">
                {/* 3D rotating logo */}
                <div className="absolute inset-0 flex items-center justify-center logo-animation">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/images/morveil-logo.svg"
                        alt="Morveil Technologies"
                        width={320}
                        height={320}
                        className="red-glow parallax animate-float"
                        data-speed="0.2"
                        priority
                        onError={(e) => {
                          console.error("Image failed to load:", e)
                          // Fallback to a simple div with the company name if image fails
                          const target = e.target as HTMLImageElement
                          target.style.display = "none"
                          const parent = target.parentElement
                          if (parent) {
                            const fallback = document.createElement("div")
                            fallback.className = "text-4xl font-bold text-morveil-red"
                            fallback.textContent = "M"
                            parent.appendChild(fallback)
                          }
                        }}
                      />
                    </div>

                    {/* Animated circles */}
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 border-2 border-morveil-red/30 rounded-full animate-spin-slow"></div>
                      <div
                        className="absolute inset-4 border border-morveil-red/20 rounded-full animate-spin-slow"
                        style={{ animationDirection: "reverse" }}
                      ></div>
                      <div
                        className="absolute inset-8 border border-morveil-red/10 rounded-full animate-spin-slow"
                        style={{ animationDuration: "12s" }}
                      ></div>
                    </div>

                    {/* Particles around logo */}
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-morveil-red rounded-full"
                        style={{
                          top: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
                          left: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
                          animationDelay: `${i * 0.2}s`,
                          opacity: 0.7,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Spinning Arrow - Repositioned to bottom center, text removed */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
        <a href="#contact" className="spinning-arrow-container">
          <div className="spinning-arrow">
            <div className="arrow-body"></div>
            <div className="arrow-head"></div>
            <div className="arrow-glow"></div>
          </div>
        </a>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-morveil-black to-transparent"></div>

      {/* Diagonal divider */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-morveil-black clip-path-polygon"></div>
    </section>
  )
}
