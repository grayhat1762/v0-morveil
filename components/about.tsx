"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Use CSS animations and Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate counter numbers with CSS and JS
            const counterElements = document.querySelectorAll(".counter-number")
            counterElements.forEach((element) => {
              const target = Number.parseInt(element.getAttribute("data-value") || "0", 10)
              let count = 0
              const duration = 2000 // 2 seconds
              const frameDuration = 1000 / 60 // 60fps
              const totalFrames = Math.round(duration / frameDuration)
              const increment = target / totalFrames

              const updateCount = () => {
                count += increment
                if (count < target) {
                  element.textContent = Math.floor(count).toString()
                  requestAnimationFrame(updateCount)
                } else {
                  element.textContent = target.toString()
                }
              }

              requestAnimationFrame(updateCount)
            })

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 radial-gradient"></div>

      <div className="container mx-auto px-8 md:px-12" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-section">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-morveil-red/10 rounded-full blur-3xl"></div>

              <h2 className="text-3xl md:text-5xl font-bold mb-8 split-text-animation">About Morveil Technologies</h2>
              <p className="text-gray-300 text-lg mb-6 text-reveal">
                At Morveil Technologies, we believe in driving innovation that empowers organizations to thrive in the
                digital age. From cutting-edge artificial intelligence to secure system architecture, our team of
                experts delivers customized technology solutions that create real-world impact.
              </p>
              <p className="text-gray-300 text-lg mb-8 text-reveal">
                With a strong foundation in research, design, and development, we collaborate closely with our clients
                to turn bold ideas into actionable products. Our commitment to excellence, innovation, and trust has
                made us a partner of choice across industries and continents.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-12">
                {[
                  { value: 50, label: "Global Clients" },
                  { value: 100, label: "Projects Completed" },
                  { value: 25, label: "AI Experts" },
                ].map((stat, index) => (
                  <div key={index} className="text-center glass p-4 rounded-lg">
                    <h3 className="text-3xl font-bold text-morveil-red mb-2">
                      <span className="counter-number" data-value={stat.value}>
                        0
                      </span>
                      +
                    </h3>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative fade-in-section">
            <div className="absolute -inset-4 bg-morveil-red/10 rounded-3xl blur-xl"></div>

            <div className="glass rounded-2xl p-6 relative perspective-container">
              <div className="grid grid-cols-2 gap-4 perspective-element">
                <div className="aspect-square rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/innovation.png"
                    alt="Innovation"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    loading="eager"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/abstract-innovation.png"
                    }}
                  />
                  <div className="absolute inset-0 bg-morveil-red/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Innovation</span>
                  </div>
                </div>

                <div className="aspect-square rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/partnership.png"
                    alt="Partnership"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    loading="eager"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?key=bxohs"
                    }}
                  />
                  <div className="absolute inset-0 bg-morveil-red/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Partnership</span>
                  </div>
                </div>

                <div className="aspect-square rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/analytics.png"
                    alt="Analytics"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    loading="eager"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/data-analytics-dashboard.png"
                    }}
                  />
                  <div className="absolute inset-0 bg-morveil-red/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Analytics</span>
                  </div>
                </div>

                <div className="aspect-square rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/security.png"
                    alt="Security"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    loading="eager"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/digital-security-abstract.png"
                    }}
                  />
                  <div className="absolute inset-0 bg-morveil-red/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Security</span>
                  </div>
                </div>
              </div>

              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-morveil-red"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-morveil-red"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-morveil-red"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-morveil-red"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-morveil-red/5 rounded-full blur-3xl"></div>
    </section>
  )
}
