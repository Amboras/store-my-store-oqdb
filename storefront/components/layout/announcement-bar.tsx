'use client'

import { useState } from 'react'
import { X, Palette } from 'lucide-react'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-[#2C3E50] text-white">
      <div className="container-custom flex items-center justify-center gap-2.5 py-2.5 text-sm tracking-wide">
        <Palette className="h-3.5 w-3.5 opacity-80 flex-shrink-0" />
        <p className="text-center">
          Free shipping on orders over $75 &nbsp;&mdash;&nbsp; Professional-grade art supplies, delivered to your door
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:opacity-70 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
