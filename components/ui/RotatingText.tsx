'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import type { CSSProperties } from 'react'

interface RotatingTextProps {
  words: string[]
  className?: string
  style?: CSSProperties
}

export default function RotatingText({ words, className = '', style }: RotatingTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const wordRefs = useRef<HTMLSpanElement[]>([])

  useIsomorphicLayoutEffect(() => {
    // Set initial state immediately — before paint — so no flash of all words
    const els = wordRefs.current
    if (els.length === 0) return
    gsap.set(els, { opacity: 0, y: 30, position: 'absolute', left: 0, top: 0 })
    gsap.set(els[0], { opacity: 1, y: 0, position: 'relative' })
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const els = wordRefs.current
    if (els.length === 0) return

    let current = 0
    let delayedCall: gsap.core.Tween

    function cycle() {
      const next = (current + 1) % els.length

      const tl = gsap.timeline({
        onComplete: () => {
          current = next
          delayedCall = gsap.delayedCall(2.5, cycle)
        },
      })

      // Out: absolute → slide up
      tl.set(els[current], { position: 'absolute' })
      tl.to(els[current], { opacity: 0, y: -30, duration: 0.45, ease: 'power2.in' }, 0)

      // In: relative (holds height) → slide from below
      tl.set(els[next], { position: 'relative', y: 30, opacity: 0 }, 0)
      tl.to(els[next], { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, 0.4)
    }

    delayedCall = gsap.delayedCall(2.5, cycle)

    return () => {
      delayedCall?.kill()
      gsap.killTweensOf(wordRefs.current)
    }
  }, [words])

  return (
    <span
      ref={containerRef}
      className={`relative inline-block ${className}`}
      style={{ minWidth: '14ch', ...style }}
      aria-label={words.join(', ')}
    >
      {words.map((word, i) => (
        <span
          key={word}
          ref={(el) => { if (el) wordRefs.current[i] = el }}
          className="inline-block"
          aria-hidden={i !== 0}
        >
          {word}
        </span>
      ))}
    </span>
  )
}
