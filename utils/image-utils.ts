/**
 * Utility functions for handling images
 */

// Check if an image exists at the given URL
export const checkImageExists = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: "HEAD" })
    return response.ok
  } catch (error) {
    console.error("Error checking image:", error)
    return false
  }
}

// Get a placeholder image URL
export const getPlaceholderImage = (width: number, height: number, text: string): string => {
  return `/placeholder.svg?height=${height}&width=${width}&query=${encodeURIComponent(text)}`
}

// Preload critical images
export const preloadCriticalImages = (imagePaths: string[]): void => {
  imagePaths.forEach((path) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "image"
    link.href = path
    document.head.appendChild(link)
  })
}
