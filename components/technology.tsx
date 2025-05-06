"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Technology() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const timeline = containerRef.current.querySelector(".timeline")
      if (!timeline) return

      const scrollPosition = window.scrollY
      const timelineTop = timeline.getBoundingClientRect().top + window.scrollY
      const timelineHeight = (timeline as HTMLElement).offsetHeight
      const windowHeight = window.innerHeight

      if (scrollPosition + windowHeight > timelineTop) {
        const progress = Math.min(1, (scrollPosition + windowHeight - timelineTop) / (timelineHeight + windowHeight))

        const progressLine = containerRef.current.querySelector(".progress-line") as HTMLElement
        if (progressLine) {
          progressLine.style.height = `${progress * 100}%`
        }

        // Add comet effect
        if (Math.random() < 0.05) {
          createComet()
        }
      }
    }

    const createComet = () => {
      if (!containerRef.current) return

      const timeline = containerRef.current.querySelector(".timeline")
      if (!timeline) return

      const comet = document.createElement("div")
      comet.classList.add("comet")

      // Random position along the timeline
      const timelineRect = timeline.getBoundingClientRect()
      const startY = Math.random() * timelineRect.height

      comet.style.top = `${startY}px`
      comet.style.left = `${timelineRect.left + window.scrollX}px`

      // Add to DOM
      document.body.appendChild(comet)

      // Animate
      setTimeout(() => {
        comet.style.transform = `translateX(${timelineRect.width * 2}px) translateY(${Math.random() * 100 - 50}px)`
        comet.style.opacity = "0"
      }, 10)

      // Remove after animation
      setTimeout(() => {
        document.body.removeChild(comet)
      }, 1000)
    }

    // Create initial particles
    const createParticles = () => {
      if (!containerRef.current) return

      const particlesContainer = containerRef.current.querySelector(".tech-particles")
      if (!particlesContainer) return

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div")
        particle.classList.add("tech-particle")

        // Random size
        const size = Math.random() * 4 + 2
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`

        // Random position
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`

        // Random opacity
        particle.style.opacity = `${Math.random() * 0.7 + 0.3}`

        // Random animation duration
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`

        particlesContainer.appendChild(particle)
      }
    }

    window.addEventListener("scroll", handleScroll)
    createParticles()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const technologies = [
    {
      title: "Advanced AI Models",
      description:
        "We develop advanced AI models capable of understanding, learning, and adapting to data efficiently. This technology powers automation, predictive analytics, and smarter decision-making.",
      align: "right",
      image: "/images/advanced-ai.png",
    },
    {
      title: "Quantum Computing",
      description:
        "Our Quantum Computing solutions deliver computational power far beyond classical systems, accelerating simulations and complex problem solving — essential for shaping the future of technology.",
      align: "left",
      image: "/images/quantum-computing.png",
    },
    {
      title: "Neural Networks",
      description:
        "Inspired by the human brain, our neural networks identify patterns and make intelligent predictions. They're key to our breakthroughs in image processing, voice recognition, and large-scale data modeling.",
      align: "right",
      image: "/images/neural-networks.png",
    },
  ]

  return (
    <section id="technology" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-10"></div>
      <div className="absolute inset-0 tech-particles"></div>

      <div className="container mx-auto px-8 md:px-12" ref={containerRef}>
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-reveal">Our Technology</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-reveal">
            At Morveil, we integrate cutting-edge innovations in Artificial Intelligence and next-generation computing.
            Our technology focuses on three core areas: Advanced AI Models, Quantum Computing, and Neural Networks.
          </p>
        </div>

        <div className="relative timeline">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-morveil-gray-light transform -translate-x-1/2"></div>
          <div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-morveil-red via-morveil-red to-morveil-red transform -translate-x-1/2 progress-line glow-timeline"
            style={{ height: "0%" }}
          ></div>

          <div className="space-y-32">
            {technologies.map((tech, index) => (
              <div key={index} className="relative">
                <div className="absolute left-1/2 top-1/2 w-8 h-8 bg-morveil-red rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 timeline-node">
                  <div className="absolute inset-2 bg-morveil-black rounded-full"></div>
                  <div className="absolute inset-0 bg-morveil-red rounded-full timeline-pulse"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {tech.align === "left" && (
                    <div className="md:block hidden">
                      <div className="w-full aspect-video rounded-xl glass overflow-hidden perspective-container fade-in-section">
                        <div className="w-full h-full bg-gradient-to-br from-morveil-black to-morveil-gray-light flex items-center justify-center perspective-element relative">
                          <Image
                            src={
                              tech.image ||
                              `/placeholder.svg?height=300&width=500&query=${encodeURIComponent(tech.title)}`
                            }
                            alt={tech.title}
                            width={500}
                            height={300}
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500 red-glow"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = `/placeholder.svg?height=300&width=500&query=${encodeURIComponent(tech.title)}`
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-morveil-black to-transparent opacity-30"></div>
                          <div className="absolute bottom-4 left-4 text-morveil-red text-xl font-bold z-10">
                            {tech.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className={`${tech.align === "right" ? "md:text-right md:pr-12" : "md:pl-12"} fade-in-section`}>
                    <div className="glass rounded-xl p-6 relative">
                      <div
                        className={`absolute ${tech.align === "right" ? "-right-3" : "-left-3"} top-1/2 w-6 h-6 bg-morveil-red rounded-full transform -translate-y-1/2 md:block hidden`}
                      ></div>
                      <h3 className="text-2xl font-bold mb-4 text-reveal">{tech.title}</h3>
                      <p className="text-gray-400 text-reveal">{tech.description}</p>
                      <div className="mt-4 pt-4 border-t border-morveil-gray-light">
                        <a
                          href="#"
                          className="text-morveil-red hover:text-white transition-colors flex items-center justify-start"
                        >
                          Learn more <ArrowRight size={16} className="ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {tech.align === "right" && (
                    <div className="md:block hidden">
                      <div className="w-full aspect-video rounded-xl glass overflow-hidden perspective-container fade-in-section">
                        <div className="w-full h-full bg-gradient-to-br from-morveil-black to-morveil-gray-light flex items-center justify-center perspective-element relative">
                          <Image
                            src={
                              tech.image ||
                              `/placeholder.svg?height=300&width=500&query=${encodeURIComponent(tech.title)}`
                            }
                            alt={tech.title}
                            width={500}
                            height={300}
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500 red-glow"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = `/placeholder.svg?height=300&width=500&query=${encodeURIComponent(tech.title)}`
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-morveil-black to-transparent opacity-30"></div>
                          <div className="absolute bottom-4 right-4 text-morveil-red text-xl font-bold z-10">
                            {tech.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mobile visualization (only shown on mobile) */}
                  {tech.align === "left" && (
                    <div className="md:hidden block mt-4">
                      <div className="w-full aspect-video rounded-xl glass overflow-hidden relative">
                        <Image
                          src={
                            tech.image ||
                            `/placeholder.svg?height=300&width=500&query=${encodeURIComponent(tech.title)}`
                          }
                          alt={tech.title}
                          width={400}
                          height={240}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-morveil-black to-transparent opacity-50"></div>
                        <div className="absolute bottom-2 left-2 text-morveil-red text-lg font-bold">{tech.title}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-morveil-red/5 rounded-full blur-3xl"></div>
    </section>
  )
}
