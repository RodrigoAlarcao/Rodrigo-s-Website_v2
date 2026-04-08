'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { useLanguage } from '@/hooks/useLanguage'

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from('[data-contact-el]', {
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
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-36"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">

        {/* Section label */}
        <span
          data-contact-el
          className="block text-[var(--color-muted)] mb-12"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
          }}
        >
          Contact
        </span>

        {/* Heading */}
        <h2
          data-contact-el
          className="text-[var(--color-text)] tracking-tight mb-6 leading-[0.95]"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          {t.contact.heading}
        </h2>

        {/* Body */}
        <p
          data-contact-el
          className="text-[var(--color-dim)] max-w-[480px] mb-4 leading-relaxed"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
            whiteSpace: 'pre-line',
          }}
        >
          {t.contact.body}
        </p>

        <p
          data-contact-el
          className="text-[var(--color-dim)] max-w-[480px] mb-12 leading-relaxed"
          style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
        >
          {t.contact.subtext}
        </p>

        {/* CTAs */}
        <div data-contact-el className="flex flex-wrap gap-4">
          <a
            href={`mailto:${t.contact.email}`}
            className={[
              'inline-flex items-center px-6 py-3',
              'bg-[var(--color-text)] text-[var(--color-bg)]',
              'hover:opacity-80 transition-opacity duration-200',
            ].join(' ')}
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
          >
            {t.contact.email}
          </a>

          <a
            href={t.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              'inline-flex items-center px-6 py-3',
              'border border-[var(--color-warm)]',
              'text-[var(--color-dim)] hover:text-[var(--color-text)]',
              'hover:border-[var(--color-text)] transition-colors duration-200',
            ].join(' ')}
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
          >
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  )
}
