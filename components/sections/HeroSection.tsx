'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { useLanguage } from '@/hooks/useLanguage'
import RotatingText from '@/components/ui/RotatingText'
import UnicornBackground from '@/components/ui/UnicornBackground'
import RevealBlock from '@/components/ui/RevealBlock'

export default function HeroSection() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLElement>(null)
  const titleRowRef = useRef<HTMLDivElement>(null)
  const statementRef = useRef<HTMLParagraphElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 })

      // Title row and statement fade+slide in after RevealBlock handles the name
      tl.from(titleRowRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      }, 0.75)
        .from(statementRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
        }, 1.0)
        .from(scrollIndicatorRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        }, 1.4)
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <UnicornBackground projectId={null} />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 w-full pt-24 pb-16">

        {/* Name — line reveal */}
        <RevealBlock trigger="immediate" delay={0.1} duration={1.0} className="mb-6">
          <h1
            className="text-[var(--color-text)] leading-[0.95] tracking-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            }}
          >
            {t.hero.name}
          </h1>
        </RevealBlock>

        {/* Rotating title row */}
        <div
          ref={titleRowRef}
          className="flex items-center gap-3 mb-10"
        >
          <span
            className="text-[var(--color-muted)] select-none"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em' }}
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
      <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div
          className="w-px h-12 bg-[var(--color-warm)]"
          style={{ animation: 'heroScrollPulse 2s ease-in-out infinite' }}
        />
      </div>
    </section>
  )
}
