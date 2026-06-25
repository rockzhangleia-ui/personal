'use client'

import { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 60

export default function SciFiBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const frag = document.createDocumentFragment()
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const dot = document.createElement('div')
      dot.className = 'particle'
      dot.style.left = `${Math.random() * 100}%`
      dot.style.width = `${1 + Math.random() * 2}px`
      dot.style.height = dot.style.width
      dot.style.setProperty('--drift', `${(Math.random() - 0.5) * 100}px`)
      dot.style.animationDuration = `${15 + Math.random() * 25}s`
      dot.style.animationDelay = `${Math.random() * 15}s`
      dot.style.opacity = `${0.1 + Math.random() * 0.3}`
      frag.appendChild(dot)
    }
    container.appendChild(frag)

    return () => { container.innerHTML = '' }
  }, [])

  return <div ref={containerRef} className="particle-container" aria-hidden="true" />
}
