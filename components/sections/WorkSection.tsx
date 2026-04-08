'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { useLanguage } from '@/hooks/useLanguage'
import ProjectCard from '@/components/ui/ProjectCard'
import RevealBlock from '@/components/ui/RevealBlock'

gsap.registerPlugin(ScrollTrigger)

export default function WorkSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      // Personal project cards
      gsap.from('[data-personal-card]', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: '[data-personal-grid]', start: 'top 78%' },
      })

      // Professional items — stagger from left
      gsap.from('[data-pro-item]', {
        opacity: 0,
        x: -20,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '[data-pro-list]', start: 'top 80%' },
      })

      // Explorations fade
      gsap.from('[data-exp-block]', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: '[data-exp-block]', start: 'top 82%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const work = t.work

  return (
    <section id="work" ref={sectionRef} className="py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">

        {/* Section label */}
        <span
          className="block text-[var(--color-muted)] mb-16"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em' }}
        >
          Work
        </span>

        {/* ── Personal ── */}
        <div className="mb-20">
          <RevealBlock className="mb-8">
            <h2
              className="text-[var(--color-text)] tracking-tight"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.375rem, 2vw, 1.75rem)' }}
            >
              {work.personal.label}
            </h2>
          </RevealBlock>

          <div data-personal-grid className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {work.personal.projects.map((project) => (
              <div key={project.slug} data-personal-card>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Professional ── */}
        <div className="mb-20">
          <RevealBlock className="mb-2">
            <h2
              className="text-[var(--color-text)] tracking-tight"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.375rem, 2vw, 1.75rem)' }}
            >
              {work.professional.label}
            </h2>
          </RevealBlock>
          <p
            className="text-[var(--color-muted)] mb-10"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em' }}
          >
            {work.professional.company} · {work.professional.period}
          </p>

          <div data-pro-list className="divide-y divide-[var(--color-warm)]">
            {work.professional.items.map((item, i) => (
              <div
                key={i}
                data-pro-item
                className="py-6 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 group"
              >
                <div className="flex-1">
                  <p
                    className="text-[var(--color-text)] mb-1 group-hover:opacity-70 transition-opacity duration-200"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '1rem' }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-[var(--color-dim)] leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                  >
                    {item.description}
                  </p>
                </div>
                <span
                  className="text-[var(--color-muted)] shrink-0 sm:text-right"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em', textTransform: 'uppercase' }}
                >
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Explorations ── */}
        <div data-exp-block>
          <RevealBlock className="mb-8">
            <h2
              className="text-[var(--color-text)] tracking-tight"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.375rem, 2vw, 1.75rem)' }}
            >
              {work.explorations.label}
            </h2>
          </RevealBlock>

          {work.explorations.items.length === 0 ? (
            <div className="border border-dashed border-[var(--color-warm)] p-10 md:p-14">
              <p
                className="text-[var(--color-muted)] italic"
                style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}
              >
                {work.explorations.placeholder}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {work.explorations.items.map((item: any, i: number) => (
                <div key={i} className="border border-[var(--color-warm)] p-6">
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>{item.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
