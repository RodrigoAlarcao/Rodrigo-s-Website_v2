'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { useLanguage } from '@/hooks/useLanguage'
import RevealBlock from '@/components/ui/RevealBlock'

gsap.registerPlugin(ScrollTrigger)

/**
 * Methodology — horizontal scroll section.
 *
 * The inner wrapper is pinned by GSAP while the user scrolls.
 * The track translates left, revealing each step.
 * On mobile (< 768px) falls back to a vertical stacked list.
 */
export default function MethodologySection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // Mobile: no horizontal scroll
    if (window.matchMedia('(max-width: 767px)').matches) return

    const wrapper = wrapperRef.current
    const track = trackRef.current
    if (!wrapper || !track) return

    const ctx = gsap.context(() => {
      const getDistance = () => track.scrollWidth - wrapper.offsetWidth

      const st = gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          id: 'method-h-scroll',
          trigger: wrapper,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      })

      // Stagger-reveal each step card as it enters the viewport during scroll
      track.querySelectorAll<HTMLElement>('[data-step-card]').forEach((card) => {
        gsap.from(card.querySelectorAll('[data-step-el]'), {
          opacity: 0,
          y: 30,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            containerAnimation: st,
            start: 'left 85%',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="process"
      ref={sectionRef}
      className="bg-[var(--color-surface)]"
    >
      {/* ── Desktop: pinned horizontal scroll ── */}
      <div
        ref={wrapperRef}
        className="hidden md:flex flex-col justify-center h-screen overflow-hidden"
      >
        {/* Fixed header row */}
        <div className="flex items-end justify-between px-10 xl:px-16 mb-16 shrink-0">
          <span
            className="text-[var(--color-muted)]"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em' }}
          >
            Methodology
          </span>
          <p
            className="text-[var(--color-dim)] max-w-[360px] text-right leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', whiteSpace: 'pre-line' }}
          >
            {t.methodology.intro}
          </p>
        </div>

        {/* Scrolling track */}
        <div
          ref={trackRef}
          className="flex gap-6 pl-10 xl:pl-16"
          style={{ willChange: 'transform' }}
        >
          {t.methodology.steps.map((step, i) => (
            <div
              key={step.number}
              data-step-card
              className="shrink-0 w-[min(480px,70vw)] border border-[var(--color-warm)] p-10 xl:p-12 flex flex-col justify-between"
              style={{ minHeight: '320px' }}
            >
              {/* Number — large decorative */}
              <span
                data-step-el
                className="block text-[var(--color-warm)] leading-none select-none"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(5rem, 8vw, 8rem)', fontWeight: 700 }}
              >
                {step.number}
              </span>

              <div>
                <h3
                  data-step-el
                  className="text-[var(--color-text)] tracking-tight mb-4"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2vw, 2rem)' }}
                >
                  {step.title}
                </h3>
                <p
                  data-step-el
                  className="text-[var(--color-dim)] leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
                >
                  {step.body}
                </p>
              </div>
            </div>
          ))}

          {/* End spacer */}
          <div className="shrink-0 w-[10vw]" aria-hidden />
        </div>
      </div>

      {/* ── Mobile: vertical stacked ── */}
      <div className="md:hidden py-24 px-6">
        <span
          className="block text-[var(--color-muted)] mb-4"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em' }}
        >
          Methodology
        </span>
        <p
          className="text-[var(--color-dim)] mb-12 leading-relaxed"
          style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', whiteSpace: 'pre-line' }}
        >
          {t.methodology.intro}
        </p>

        <div className="space-y-px bg-[var(--color-warm)]">
          {t.methodology.steps.map((step) => (
            <div
              key={step.number}
              className="bg-[var(--color-surface)] p-8"
            >
              <span
                className="block text-[var(--color-muted)] mb-4 leading-none"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '3rem', fontWeight: 700 }}
              >
                {step.number}
              </span>
              <h3
                className="text-[var(--color-text)] mb-3 tracking-tight"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem' }}
              >
                {step.title}
              </h3>
              <p
                className="text-[var(--color-dim)] leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
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
