'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { useLanguage } from '@/hooks/useLanguage'

gsap.registerPlugin(ScrollTrigger)

export default function MethodologySection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      // Intro
      gsap.from('[data-method-intro]', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-method-intro]',
          start: 'top 80%',
        },
      })

      // Steps — staggered
      gsap.from('[data-method-step]', {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-method-steps]',
          start: 'top 75%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 md:py-36 bg-[var(--color-surface)]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">

        {/* Section label */}
        <span
          className="block text-[var(--color-muted)] mb-12"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
          }}
        >
          Methodology
        </span>

        {/* Intro */}
        <p
          data-method-intro
          className="text-[var(--color-text)] max-w-[560px] mb-16 leading-relaxed"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
            whiteSpace: 'pre-line',
          }}
        >
          {t.methodology.intro}
        </p>

        {/* Steps grid */}
        <div
          data-method-steps
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-warm)]"
        >
          {t.methodology.steps.map((step) => (
            <div
              key={step.number}
              data-method-step
              className="bg-[var(--color-surface)] p-8 md:p-10"
            >
              {/* Step number */}
              <span
                className="block text-[var(--color-muted)] mb-4"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                }}
              >
                {step.number}
              </span>

              {/* Step title */}
              <h3
                className="text-[var(--color-text)] mb-4 tracking-tight"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                }}
              >
                {step.title}
              </h3>

              {/* Step body */}
              <p
                className="text-[var(--color-dim)] leading-relaxed"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
