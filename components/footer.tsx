"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Linkedin, Instagram, ArrowRight, MapPin } from "lucide-react"

export default function Footer() {
  useEffect(() => {
    // Use CSS animation instead of anime.js to avoid compatibility issues
    const footerLogo = document.querySelector(".footer-logo")
    if (footerLogo) {
      footerLogo.classList.add("animate-pulse")
    }
  }, [])

  return (
    <footer className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-10"></div>
      <div className="absolute inset-0 radial-gradient"></div>

      <div className="container mx-auto px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="relative w-10 h-10 footer-logo">
                <Image
                  src="/images/morveil-logo.svg"
                  alt="Morveil Technologies"
                  width={40}
                  height={40}
                  className="red-glow"
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
              <span className="text-xl font-bold text-morveil-white">Morveil</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Pioneering AI solutions that empower businesses to innovate, optimize, and transform in the digital age.
            </p>
            <div className="flex items-center text-gray-400 mb-6">
              <MapPin size={16} className="mr-2 text-morveil-red" />
              <span>64 Rue de Saintonge, 75003 Paris</span>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-morveil-red/20 transition-colors"
              >
                <Twitter size={18} className="text-morveil-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-morveil-red/20 transition-colors"
              >
                <Github size={18} className="text-morveil-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-morveil-red/20 transition-colors"
              >
                <Linkedin size={18} className="text-morveil-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-morveil-red/20 transition-colors"
              >
                <Instagram size={18} className="text-morveil-white" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {["About Us", "Careers", "Blog", "Press"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-morveil-red transition-colors flex items-center">
                    <ArrowRight size={12} className="mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {["AI Solutions", "Custom Development", "Cybersecurity", "Data Analytics"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-morveil-red transition-colors flex items-center">
                    <ArrowRight size={12} className="mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              {["Terms of Service", "Privacy Policy", "Cookie Policy", "GDPR"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-morveil-red transition-colors flex items-center">
                    <ArrowRight size={12} className="mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md bg-morveil-gray border border-morveil-gray-light focus:border-morveil-red focus:outline-none focus:ring-1 focus:ring-morveil-red"
              />
              <button className="px-4 py-2 rounded-r-md bg-morveil-red text-white">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-morveil-gray-light pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Morveil Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Support", "Contact", "FAQ"].map((item) => (
              <Link key={item} href="#" className="text-gray-400 hover:text-morveil-red transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-morveil-red/5 rounded-full blur-3xl"></div>
    </footer>
  )
}
