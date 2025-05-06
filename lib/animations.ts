export const initHeroAnimation = async () => {
  const animeModule = await import("animejs")
  const anime = animeModule.default || animeModule

  // Logo animation
  anime({
    targets: ".logo-animation",
    scale: [0.9, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1500,
  })

  // Text animation
  anime({
    targets: ".hero-text .animate-item",
    translateY: [40, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: anime.stagger(100, { start: 300 }),
  })

  // Button animation
  anime({
    targets: ".hero-cta",
    translateY: [20, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 800,
    delay: 800,
  })
}

export const initParticleAnimation = async () => {
  const animeModule = await import("animejs")
  const anime = animeModule.default || animeModule

  const container = document.querySelector(".particles-container")
  if (!container) return

  // Create particles
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div")
    particle.classList.add("particle")

    // Random size between 2px and 6px
    const size = Math.random() * 4 + 2
    particle.style.width = `${size}px`
    particle.style.height = `${size}px`

    // Random position
    particle.style.left = `${Math.random() * 100}%`
    particle.style.top = `${Math.random() * 100}%`

    // Random opacity
    particle.style.opacity = `${Math.random() * 0.5 + 0.3}`

    container.appendChild(particle)
  }

  // Animate particles
  anime({
    targets: ".particle",
    translateX: () => anime.random(-50, 50),
    translateY: () => anime.random(-50, 50),
    scale: () => anime.random(0.5, 1.5),
    opacity: () => anime.random(0.2, 0.8),
    easing: "easeOutExpo",
    duration: () => anime.random(3000, 8000),
    delay: () => anime.random(0, 1000),
    loop: true,
    direction: "alternate",
  })
}

export const initScrollAnimation = async () => {
  const animeModule = await import("animejs")
  const anime = animeModule.default || animeModule

  anime({
    targets: ".fade-in-section",
    translateY: [50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: anime.stagger(200),
    autoplay: false,
  })

  const sections = document.querySelectorAll(".fade-in-section")

  const handleScroll = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (sectionTop < windowHeight * 0.8) {
        section.classList.add("visible")
        anime({
          targets: section,
          translateY: [50, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1000,
        })
      }
    })
  }

  window.addEventListener("scroll", handleScroll)
  handleScroll() // Initial check
}

export const initCardAnimation = async () => {
  const animeModule = await import("animejs")
  const anime = animeModule.default || animeModule

  const cards = document.querySelectorAll(".service-card")

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      anime({
        targets: card,
        scale: 1.05,
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)",
        duration: 300,
        easing: "easeOutExpo",
      })
    })

    card.addEventListener("mouseleave", () => {
      anime({
        targets: card,
        scale: 1,
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        duration: 300,
        easing: "easeOutExpo",
      })
    })
  })
}

export const initLogoAnimation = async () => {
  const animeModule = await import("animejs")
  const anime = animeModule.default || animeModule

  anime({
    targets: ".eye-animation",
    scale: [1, 1.1, 1],
    opacity: [0.8, 1, 0.8],
    easing: "easeInOutSine",
    duration: 3000,
    loop: true,
  })
}
