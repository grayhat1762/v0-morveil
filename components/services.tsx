"use client"

import { useEffect, useRef } from "react"
import { Shield, Brain, Code, BarChart3, ArrowRight } from "lucide-react"

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const cards = containerRef.current.querySelectorAll(".service-card")

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        const distance = Math.sqrt(x * x + y * y)

        // Only apply effect if mouse is close to the card
        if (distance < 300) {
          const intensity = 1 - distance / 300
          const htmlEl = card as HTMLElement
          htmlEl.style.transform = `perspective(1000px) rotateX(${y * 0.01 * intensity}deg) rotateY(${-x * 0.01 * intensity}deg) scale(${1 + 0.05 * intensity})`
          htmlEl.style.boxShadow = `0 ${10 * intensity}px ${30 * intensity}px rgba(0, 0, 0, 0.4), 0 0 ${10 * intensity}px rgba(196, 30, 30, ${0.5 * intensity})`
        } else {
          const htmlEl = card as HTMLElement
          htmlEl.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)"
          htmlEl.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)"
        }
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const services = [
    {
      icon: Brain,
      title: "AI Solutions",
      description:
        "Empower your business with cutting-edge AI models tailored to solve real-world problems. From automation to intelligent predictions, we deliver scalable AI systems that drive efficiency and innovation.",
      delay: 0,
    },
    {
      icon: Code,
      title: "Custom Development",
      description:
        "Build future-ready digital solutions that align with your unique goals. Our team designs, develops, and deploys custom software with precision, speed, and a deep focus on user experience.",
      delay: 100,
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Stay protected with enterprise-grade security solutions. We help detect threats, prevent breaches, and secure your digital infrastructure through advanced, AI-driven defense mechanisms.",
      delay: 200,
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description:
        "Turn your data into a powerful asset. We uncover deep insights through advanced analytics and visualization tools — helping you make smarter, faster, and more impactful decisions.",
      delay: 300,
    },
  ]

  return (
    <section id="services" className="py-20 relative overflow-hidden diagonal-section">
      <div className="absolute inset-0 bg-morveil-gray-light opacity-30"></div>
      <div className="absolute inset-0 grid-lines opacity-10"></div>

      <div className="container mx-auto px-8 md:px-12 relative z-10" ref={containerRef}>
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-reveal">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-reveal">
            Discover how Morveil empowers your business through tailored technology solutions — from smart AI
            integrations to fortified cybersecurity, precision-built software, and data-driven strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card glass rounded-xl p-6 transition-all duration-300 fade-in-section"
              style={{ transitionDelay: `${service.delay}ms` }}
            >
              <div className="hexagon w-16 h-16 bg-morveil-red/20 flex items-center justify-center mb-6">
                <service.icon className="text-morveil-red" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
              <div className="mt-6 pt-4 border-t border-morveil-gray-light">
                <a href="#" className="text-morveil-red hover:text-white transition-colors flex items-center">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee text */}
        <div className="mt-20 overflow-hidden">
          <div className="marquee py-4">
            <div className="marquee-content text-6xl font-bold text-morveil-red/10">
              AI SOLUTIONS • CUSTOM DEVELOPMENT • CYBERSECURITY • DATA ANALYTICS • AI SOLUTIONS • CUSTOM DEVELOPMENT •
              CYBERSECURITY • DATA ANALYTICS •
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-morveil-red/5 rounded-full blur-3xl"></div>
    </section>
  )
}
