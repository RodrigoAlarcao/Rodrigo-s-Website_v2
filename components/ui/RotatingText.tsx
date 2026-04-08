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

/**
 * Cycles through words with a slide-up / slide-down GSAP loop.
 * PRD spec: y:30 → 0 → -30, opacity fade, duration 0.6s, repeatDelay 2.5s
 * prefers-reduced-motion: renders all words joined by " · " instead.
 */
export default function RotatingText({ words, className = '', style }: RotatingTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const wordRefs = useRef<HTMLSpanElement[]>([])
  const reducedMotion = useRef(false)

  // Detect preference once on mount
  useIsomorphicLayoutEffect(() => {
    reducedMotion.current =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    if (reducedMotion.current) return
    if (!containerRef.current || wordRefs.current.length === 0) return

    const els = wordRefs.current
    const count = els.length

    // Start: all hidden except first
    gsap.set(els, { opacity: 0, y: 30 })
    gsap.set(els[0], { opacity: 1, y: 0 })

    let current = 0

    function cycle() {
      const next = (current + 1) % count
      const tl = gsap.timeline({
        onComplete: () => {
          current = next
          // Schedule next cycle
          gsap.delayedCall(2.5, cycle)
        },
      })

      // Slide current word out (up)
      tl.to(els[current], {
        opacity: 0,
        y: -30,
        duration: 0.45,
        ease: 'power2.in',
      })
      // Slide next word in (from below)
      tl.fromTo(
        els[next],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
        '-=0.05'
      )
    }

    const delay = gsap.delayedCall(2.5, cycle)

    return () => {
      delay.kill()
      gsap.killTweensOf(els)
    }
  }, [words])

  // Reduced-motion: static list
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return (
      <span className={className} style={style}>
        {words.join(' · ')}
      </span>
    )
  }

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
          className={i === 0 ? 'inline-block' : 'absolute left-0 top-0 inline-block'}
          aria-hidden={i !== 0}
        >
          {word}
        </span>
      ))}
    </span>
  )
}
