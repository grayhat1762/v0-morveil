"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { getPlaceholderImage } from "@/utils/image-utils"

interface OptimizedImageProps extends Omit<ImageProps, "onError"> {
  fallbackText?: string
}

export default function OptimizedImage({ src, alt, width, height, fallbackText, ...props }: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Convert width and height to numbers for placeholder
  const w = typeof width === "number" ? width : 100
  const h = typeof height === "number" ? height : 100

  useEffect(() => {
    // Reset states when src changes
    setIsLoading(true)
    setHasError(false)

    // Set the image source
    if (typeof src === "string") {
      setImgSrc(src)
    } else {
      // Handle StaticImageData or other non-string sources
      setImgSrc(src as unknown as string)
    }
  }, [src])

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
    // Use placeholder with the alt text or fallback text
    setImgSrc(getPlaceholderImage(w, h, fallbackText || (alt as string)))
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  if (hasError && !imgSrc) {
    // Render a simple fallback if everything fails
    return (
      <div
        className="flex items-center justify-center bg-morveil-gray text-morveil-red"
        style={{ width: w, height: h }}
      >
        {fallbackText || alt}
      </div>
    )
  }

  return (
    <>
      {isLoading && <div className="absolute inset-0 bg-morveil-gray animate-pulse" style={{ width, height }} />}
      <Image
        src={imgSrc || getPlaceholderImage(w, h, alt as string)}
        alt={alt}
        width={width}
        height={height}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </>
  )
}
