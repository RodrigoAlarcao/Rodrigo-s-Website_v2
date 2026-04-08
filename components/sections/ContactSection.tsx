'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { useLanguage } from '@/hooks/useLanguage'
import RevealBlock from '@/components/ui/RevealBlock'

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from('[data-contact-body]', {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '[data-contact-body]', start: 'top 85%' },
      })
      gsap.from('[data-contact-cta]', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: '[data-contact-cta]', start: 'top 88%' },
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

        <span
          className="block text-[var(--color-muted)] mb-12"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em' }}
        >
          Contact
        </span>

        {/* Big heading with line reveal */}
        <RevealBlock className="mb-8">
          <h2
            className="text-[var(--color-text)] tracking-tight leading-[0.95]"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            }}
          >
            {t.contact.heading}
          </h2>
        </RevealBlock>

        <p
          data-contact-body
          className="text-[var(--color-dim)] max-w-[480px] mb-3 leading-relaxed"
          style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.4vw, 1.125rem)', whiteSpace: 'pre-line' }}
        >
          {t.contact.body}
        </p>

        <p
          data-contact-body
          className="text-[var(--color-dim)] max-w-[480px] mb-12 leading-relaxed"
          style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
        >
          {t.contact.subtext}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            data-contact-cta
            href={`mailto:${t.contact.email}`}
            className="inline-flex items-center px-6 py-3 bg-[var(--color-text)] text-[var(--color-bg)] hover:opacity-80 transition-opacity duration-200"
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
          >
            {t.contact.email}
          </a>

          <a
            data-contact-cta
            href={t.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-[var(--color-warm)] text-[var(--color-dim)] hover:text-[var(--color-text)] hover:border-[var(--color-text)] transition-colors duration-200"
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
          >
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  )
}
