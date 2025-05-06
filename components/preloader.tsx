"use client"

import { useEffect, useState } from "react"

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10
        if (newProgress >= 100) {
          clearInterval(loadingInterval)
          setTimeout(() => {
            setLoaded(true)
          }, 500)
          return 100
        }
        return newProgress
      })
    }, 200)

    return () => clearInterval(loadingInterval)
  }, [])

  useEffect(() => {
    if (loaded) {
      document.body.style.overflow = "auto"

      // Initialize animations after preloader is done using CSS classes
      const initPageAnimations = () => {
        try {
          // Add animation classes to elements
          document.querySelectorAll(".stagger-reveal").forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("animate-fade-in")
            }, 100 * index)
          })

          document.querySelectorAll(".logo-animation").forEach((el) => {
            el.classList.add("animate-scale-in")
          })

          // Initialize parallax text effect
          const handleMouseMove = (e) => {
            const parallaxTexts = document.querySelectorAll(".parallax-text")
            parallaxTexts.forEach((text) => {
              const speed = Number.parseFloat(text.getAttribute("data-speed") || "0.1")
              const x = (window.innerWidth / 2 - e.clientX) * speed
              const y = (window.innerHeight / 2 - e.clientY) * speed
              text.style.transform = `translate(${x}px, ${y}px)`
            })
          }

          window.addEventListener("mousemove", handleMouseMove)

          // Create and animate particles with CSS
          const particlesContainer = document.querySelector(".particles-container")
          if (particlesContainer) {
            for (let i = 0; i < 100; i++) {
              const particle = document.createElement("div")
              particle.classList.add("particle")

              // Random size between 1px and 5px
              const size = Math.random() * 4 + 1
              particle.style.width = `${size}px`
              particle.style.height = `${size}px`

              // Random position
              particle.style.left = `${Math.random() * 100}%`
              particle.style.top = `${Math.random() * 100}%`

              // Random opacity
              particle.style.opacity = `${Math.random() * 0.5 + 0.3}`

              // Add animation with random delay
              particle.style.animation = `float ${5 + Math.random() * 5}s ease-in-out infinite`
              particle.style.animationDelay = `${Math.random() * 2}s`

              particlesContainer.appendChild(particle)
            }
          }

          // Initialize magnetic buttons
          const magneticButtons = document.querySelectorAll(".magnetic-button")
          magneticButtons.forEach((button) => {
            button.addEventListener("mousemove", (e) => {
              const rect = (button as HTMLElement).getBoundingClientRect()
              const x = e.clientX - rect.left - rect.width / 2
              const y = e.clientY - rect.top - rect.height / 2

              button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
            })

            button.addEventListener("mouseleave", () => {
              button.style.transform = "translate(0, 0)"
            })
          })

          // Initialize cursor follower
          const cursorFollower = document.createElement("div")
          cursorFollower.classList.add("cursor-follower")
          document.body.appendChild(cursorFollower)

          document.addEventListener("mousemove", (e) => {
            cursorFollower.style.left = `${e.clientX}px`
            cursorFollower.style.top = `${e.clientY}px`
          })

          document.addEventListener("mousedown", () => {
            cursorFollower.classList.add("active")
          })

          document.addEventListener("mouseup", () => {
            cursorFollower.classList.remove("active")
          })

          // Initialize scroll animations with Intersection Observer
          const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -100px 0px",
          }

          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible")
                observer.unobserve(entry.target)

                // Add animation classes based on element type
                if (entry.target.classList.contains("text-reveal")) {
                  entry.target.classList.add("animate-text-reveal")
                }

                if (entry.target.classList.contains("split-text-animation")) {
                  entry.target.classList.add("animate-split-text")
                }

                if (entry.target.classList.contains("fade-in-section")) {
                  entry.target.classList.add("animate-fade-in")
                }
              }
            })
          }, observerOptions)

          document.querySelectorAll(".text-reveal, .fade-in-section, .split-text-animation").forEach((el) => {
            observer.observe(el)
          })

          // Split text into characters for text animations
          document.querySelectorAll(".text-reveal, .split-text-animation").forEach((element) => {
            const text = element.innerHTML
            let splitText = ""

            for (let i = 0; i < text.length; i++) {
              if (text[i] === " ") {
                splitText += " "
              } else {
                splitText += `<span class="char" style="transition-delay: ${i * 30}ms">${text[i]}</span>`
              }
            }

            element.innerHTML = splitText
          })
        } catch (error) {
          console.error("Error initializing animations:", error)
        }
      }

      initPageAnimations()
    } else {
      document.body.style.overflow = "hidden"
    }
  }, [loaded])

  return (
    <div className={`preloader ${loaded ? "loaded" : ""}`}>
      <div className="flex flex-col items-center">
        <div className="preloader-logo">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#C41E1E"
              strokeWidth="2"
              strokeDasharray="251.2"
              strokeDashoffset="251.2"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="251.2"
                to="0"
                dur="2s"
                fill="freeze"
                calcMode="spline"
                keySplines="0.42 0 0.58 1"
              />
            </circle>
            <path
              d="M50 10 L90 50 L50 90 L10 50 Z"
              fill="none"
              stroke="#C41E1E"
              strokeWidth="2"
              strokeDasharray="226.3"
              strokeDashoffset="226.3"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="226.3"
                to="0"
                dur="2s"
                fill="freeze"
                calcMode="spline"
                keySplines="0.42 0 0.58 1"
                begin="0.5s"
              />
            </path>
            <text x="50" y="55" textAnchor="middle" fill="#C41E1E" fontSize="12" opacity="0">
              MORVEIL
              <animate attributeName="opacity" from="0" to="1" dur="1s" fill="freeze" begin="1.5s" />
            </text>
          </svg>
        </div>
        <div className="mt-8 preloader-progress">
          <div className="preloader-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="mt-4 text-sm text-gray-400">{Math.round(progress)}%</div>
      </div>
    </div>
  )
}
