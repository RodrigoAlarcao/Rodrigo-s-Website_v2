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
      // Each paragraph slides up and fades individually
      t.about.body.forEach((_: any, i: number) => {
        gsap.from(`[data-about-para="${i}"]`, {
          opacity: 0,
          y: 24,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `[data-about-para="${i}"]`,
            start: 'top 88%',
          },
        })
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

        <span
          className="block text-[var(--color-muted)] mb-12"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em' }}
        >
          About
        </span>

        <div className="max-w-[680px] space-y-6">
          {t.about.body.map((para: string, i: number) => (
            <p
              key={i}
              data-about-para={i}
              className="text-[var(--color-text)] leading-relaxed"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
                fontWeight: i === 0 ? 500 : 400,
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
