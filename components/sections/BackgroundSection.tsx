'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { useLanguage } from '@/hooks/useLanguage'

gsap.registerPlugin(ScrollTrigger)

export default function BackgroundSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from('[data-bg-row]', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
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
      id="background"
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
          Background
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Experience */}
          <div>
            <h3
              className="text-[var(--color-text)] mb-8 tracking-tight"
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem' }}
            >
              Experience
            </h3>

            <div className="space-y-8">
              {t.background.roles.map((role, i) => (
                <div
                  key={i}
                  data-bg-row
                  className="flex justify-between items-start gap-4 pb-8 border-b border-[var(--color-warm)] last:border-0 last:pb-0"
                >
                  <div>
                    <p
                      className="text-[var(--color-text)] mb-1"
                      style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                    >
                      {role.title}
                    </p>
                    <p
                      className="text-[var(--color-dim)]"
                      style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
                    >
                      {role.company} · {role.location}
                    </p>
                  </div>
                  <span
                    className="text-[var(--color-muted)] shrink-0"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {role.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3
              className="text-[var(--color-text)] mb-8 tracking-tight"
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem' }}
            >
              Education
            </h3>

            <div className="space-y-8">
              {t.background.education.map((edu, i) => (
                <div
                  key={i}
                  data-bg-row
                  className="pb-8 border-b border-[var(--color-warm)] last:border-0 last:pb-0"
                >
                  <p
                    className="text-[var(--color-text)] mb-1"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                  >
                    {edu.degree}
                  </p>
                  <p
                    className="text-[var(--color-dim)]"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
                  >
                    {edu.school}
                    {edu.grade && (
                      <span className="text-[var(--color-muted)]"> · {edu.grade}</span>
                    )}
                  </p>
                  <span
                    className="text-[var(--color-muted)] mt-1 block"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.06em' }}
                  >
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
