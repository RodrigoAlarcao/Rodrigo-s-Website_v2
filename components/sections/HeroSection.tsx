'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { useLanguage } from '@/hooks/useLanguage'
import RotatingText from '@/components/ui/RotatingText'
import UnicornBackground from '@/components/ui/UnicornBackground'

/**
 * Hero section — PRD section 3.3 + animation spec 4.1
 *
 * Layout:
 *   - Full viewport height
 *   - UnicornBackground (fallback Sandstone gradient in V1)
 *   - Name (H1 display, clamp scale)
 *   - Rotating title: designer · builder · methodologist
 *   - Statement paragraph
 *
 * Animations (GSAP timeline, entrance):
 *   1. Name:      y:60 → 0, opacity 0→1, 0.9s, power3.out
 *   2. Title row: y:40 → 0, opacity 0→1, 0.7s, power3.out, +0.15s
 *   3. Statement: y:30 → 0, opacity 0→1, 0.8s, power3.out, +0.12s
 */
export default function HeroSection() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const titleRowRef = useRef<HTMLDivElement>(null)
  const statementRef = useRef<HTMLParagraphElement>(null)

  useIsomorphicLayoutEffect(() => {
    // Skip animation if reduced motion is preferred
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })

      tl.from(nameRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      })
        .from(
          titleRowRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.6'
        )
        .from(
          statementRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5'
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background — Sandstone gradient fallback (V1). Swap projectId when Unicorn Studio assets are ready. */}
      <UnicornBackground projectId={null} />

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 w-full pt-24 pb-16">

        {/* Name */}
        <h1
          ref={nameRef}
          className="text-[var(--color-text)] leading-[0.95] tracking-tight mb-6"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(4rem, 8vw, 7rem)',
          }}
        >
          {t.hero.name}
        </h1>

        {/* Rotating title row */}
        <div
          ref={titleRowRef}
          className="flex items-center gap-3 mb-10"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {/* Label chip */}
          <span
            className="text-[var(--color-muted)] select-none"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
            }}
          >
            —
          </span>

          <RotatingText
            words={t.hero.rotating}
            className="text-[var(--color-text)] font-light italic"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            }}
          />
        </div>

        {/* Statement */}
        <p
          ref={statementRef}
          className="text-[var(--color-dim)] leading-relaxed max-w-[560px]"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
            whiteSpace: 'pre-line',
          }}
        >
          {t.hero.statement}
        </p>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div
          className="w-px h-12 bg-[var(--color-border)]"
          style={{
            animation: 'heroScrollPulse 2s ease-in-out infinite',
          }}
        />
      </div>

    </section>
  )
}
