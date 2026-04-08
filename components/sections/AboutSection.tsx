'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { useLanguage } from '@/hooks/useLanguage'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from('[data-about-para]', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-36"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">

        {/* Section label */}
        <span
          data-about-para
          className="block text-[var(--color-muted)] mb-12"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
          }}
        >
          About
        </span>

        {/* Body paragraphs — left-aligned, max 680px */}
        <div className="max-w-[680px] space-y-6">
          {t.about.body.map((para, i) => (
            <p
              key={i}
              data-about-para
              className="text-[var(--color-text)] leading-relaxed"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
              }}
            >
              {para}
            </p>
          ))}
        </div>

      </div>
    </section>
  )
}
