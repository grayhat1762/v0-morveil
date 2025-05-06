"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = ["home", "services", "about", "technology", "contact"]
      const scrollPosition = window.scrollY + 300

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-dark py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-8 md:px-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 stagger-reveal">
            <div className="relative w-10 h-10 logo-animation">
              <Image
                src="/images/morveil-logo.svg"
                alt="Morveil Technologies"
                width={40}
                height={40}
                className="red-glow"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = "none"
                  const parent = target.parentElement
                  if (parent) {
                    const fallback = document.createElement("div")
                    fallback.className = "w-10 h-10 bg-morveil-red rounded-full flex items-center justify-center"
                    fallback.textContent = "M"
                    parent.appendChild(fallback)
                  }
                }}
              />
            </div>
            <span className="text-xl font-bold text-morveil-white nav-logo-text">Morveil</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {["home", "services", "about", "technology", "contact"].map((item, index) => (
              <Link
                key={item}
                href={`#${item}`}
                className={`relative px-4 py-2 text-morveil-white hover:text-morveil-red transition-colors nav-item ${
                  activeSection === item ? "text-morveil-red" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="nav-item-text">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                <span className="nav-item-hover"></span>
                {activeSection === item && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-morveil-red nav-item-active"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-morveil-white z-50 relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 top-3" : "rotate-0 top-1"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                } top-3`}
              ></span>
              <span
                className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 top-3" : "rotate-0 top-5"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-95 z-40 transform transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 py-20">
          {["home", "services", "about", "technology", "contact"].map((item, index) => (
            <Link
              key={item}
              href={`#${item}`}
              className={`text-2xl font-bold ${
                activeSection === item ? "text-morveil-red" : "text-white"
              } hover:text-morveil-red transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
