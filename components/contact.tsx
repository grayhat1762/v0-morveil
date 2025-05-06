"use client"

import { useEffect, useRef } from "react"
import { Send, Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const initAnimation = async () => {
      const animeModule = await import("animejs")
      const anime = animeModule.default || animeModule

      // Animate form inputs on focus
      const inputs = document.querySelectorAll(".form-input")
      inputs.forEach((input) => {
        input.addEventListener("focus", () => {
          anime({
            targets: input,
            scale: [1, 1.02],
            boxShadow: ["0 0 0 rgba(196, 30, 30, 0)", "0 0 10px rgba(196, 30, 30, 0.3)"],
            duration: 300,
            easing: "easeOutQuad",
          })
        })

        input.addEventListener("blur", () => {
          anime({
            targets: input,
            scale: [1.02, 1],
            boxShadow: ["0 0 10px rgba(196, 30, 30, 0.3)", "0 0 0 rgba(196, 30, 30, 0)"],
            duration: 300,
            easing: "easeOutQuad",
          })
        })
      })
    }

    initAnimation()
  }, [])

  return (
    <section id="contact" className="py-20 relative overflow-hidden diagonal-section">
      <div className="absolute inset-0 bg-morveil-gray-light opacity-30"></div>
      <div className="absolute inset-0 grid-lines opacity-10"></div>

      <div className="container mx-auto px-8 md:px-12 relative z-10">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-reveal">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-reveal">
            Ready to transform your business with cutting-edge AI solutions? Our team of experts is here to help you
            navigate the future of technology. Whether you have a specific project in mind or just want to explore the
            possibilities, we'd love to hear from you. Reach out today and let's start building something extraordinary
            together.
          </p>
        </div>

        <div className="max-w-3xl mx-auto fade-in-section">
          <div className="glass rounded-xl p-8 relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-morveil-red/20 to-transparent rounded-xl blur"></div>
            <div className="relative">
              <form ref={formRef} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    className="form-input w-full px-4 py-3 rounded-lg bg-morveil-gray border border-morveil-gray-light focus:border-morveil-red focus:outline-none focus:ring-1 focus:ring-morveil-red transition-all duration-300"
                    placeholder="Your name"
                  />
                  <input
                    type="email"
                    className="form-input w-full px-4 py-3 rounded-lg bg-morveil-gray border border-morveil-gray-light focus:border-morveil-red focus:outline-none focus:ring-1 focus:ring-morveil-red transition-all duration-300"
                    placeholder="Your email"
                  />
                </div>
                <textarea
                  rows={5}
                  className="form-input w-full px-4 py-3 rounded-lg bg-morveil-gray border border-morveil-gray-light focus:border-morveil-red focus:outline-none focus:ring-1 focus:ring-morveil-red transition-all duration-300"
                  placeholder="Your message"
                ></textarea>
                <button type="submit" className="w-full px-6 py-3 rounded-lg magnetic-button">
                  <span className="relative inline-block overflow-hidden rounded-lg w-full">
                    <span className="absolute inset-0 bg-gradient-to-r from-morveil-red to-morveil-darkred"></span>
                    <span className="relative z-10 block px-4 py-2 text-white font-medium flex items-center justify-center">
                      Send Message <Send size={18} className="ml-2" />
                    </span>
                  </span>
                </button>
              </form>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-4 md:space-y-0">
            <a
              href="mailto:info@morveil.com"
              className="flex items-center text-morveil-white hover:text-morveil-red transition-colors"
            >
              <Mail className="mr-2" size={18} /> info@morveil.com
            </a>
            <a
              href="tel:+33123456789"
              className="flex items-center text-morveil-white hover:text-morveil-red transition-colors"
            >
              <Phone className="mr-2" size={18} /> +33 1 23 45 67 89
            </a>
            <div className="flex items-center text-morveil-white">
              <MapPin className="mr-2" size={18} /> 64 Rue de Saintonge, 75003 Paris
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-morveil-red/5 rounded-full blur-3xl"></div>
    </section>
  )
}
