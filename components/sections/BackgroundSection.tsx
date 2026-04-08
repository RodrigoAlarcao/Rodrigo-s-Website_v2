'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { useLanguage } from '@/hooks/useLanguage'
import RevealBlock from '@/components/ui/RevealBlock'

gsap.registerPlugin(ScrollTrigger)

type TimelineEntry = {
  kind: 'work' | 'edu'
  title: string
  subtitle: string
  period: string
  detail?: string
}

function sortKey(period: string): number {
  if (/present/i.test(period) || /presente/i.test(period)) return 9999
  const match = period.match(/(\d{4})\s*[–—-]/)
  return match ? parseInt(match[1]) : 0
}

export default function BackgroundSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  // Merge roles + education into one timeline, sorted most-recent-first
  const timeline: TimelineEntry[] = [
    ...t.background.roles.map((r: any) => ({
      kind: 'work' as const,
      title: r.title,
      subtitle: `${r.company} · ${r.location}`,
      period: r.period,
    })),
    ...t.background.education.map((e: any) => ({
      kind: 'edu' as const,
      title: e.degree,
      subtitle: e.school,
      period: e.year,
      detail: e.grade,
    })),
  ].sort((a, b) => sortKey(b.period) - sortKey(a.period))

  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      // Draw the center line from top to bottom
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 80%',
          scrub: 1,
        },
      })

      // Each entry slides in from its side
      document.querySelectorAll('[data-timeline-left]').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          x: -40,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%' },
        })
      })
      document.querySelectorAll('[data-timeline-right]').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          x: 40,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%' },
        })
      })
      // Dots pop in
      document.querySelectorAll('[data-timeline-dot]').forEach((el) => {
        gsap.from(el, {
          scale: 0,
          duration: 0.4,
          ease: 'back.out(2)',
          scrollTrigger: { trigger: el, start: 'top 82%' },
        })
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

        <span
          className="block text-[var(--color-muted)] mb-16"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em' }}
        >
          Background
        </span>

        {/* ── Desktop timeline ── */}
        <div className="hidden md:block relative">

          {/* Center vertical line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-warm)] -translate-x-1/2"
            aria-hidden
          />

          <div className="space-y-12">
            {timeline.map((entry, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={i} className="relative grid grid-cols-[1fr_2px_1fr] gap-0 items-center min-h-[80px]">

                  {/* Left slot */}
                  <div className="pr-10 xl:pr-16 text-right">
                    {isLeft && (
                      <div data-timeline-left>
                        <TimelineCard entry={entry} />
                      </div>
                    )}
                  </div>

                  {/* Dot on the center line */}
                  <div className="flex justify-center">
                    <div
                      data-timeline-dot
                      className="w-3 h-3 rounded-full border-2 border-[var(--color-text)] bg-[var(--color-surface)] z-10"
                    />
                  </div>

                  {/* Right slot */}
                  <div className="pl-10 xl:pl-16">
                    {!isLeft && (
                      <div data-timeline-right>
                        <TimelineCard entry={entry} />
                      </div>
                    )}
                  </div>

                </div>
              )
            })}
          </div>
        </div>

        {/* ── Mobile: vertical list ── */}
        <div className="md:hidden space-y-0 border-l border-[var(--color-warm)] pl-6">
          {timeline.map((entry, i) => (
            <div key={i} className="relative pb-10 last:pb-0">
              {/* Dot */}
              <div
                className="absolute -left-[27px] w-3 h-3 rounded-full border-2 border-[var(--color-text)] bg-[var(--color-surface)]"
                aria-hidden
              />
              <TimelineCard entry={entry} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function TimelineCard({ entry }: { entry: TimelineEntry }) {
  return (
    <div>
      {/* Kind tag */}
      <span
        className="block text-[var(--color-muted)] mb-1"
        style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' }}
      >
        {entry.kind === 'work' ? 'Experience' : 'Education'}
      </span>

      <p
        className="text-[var(--color-text)] mb-0.5"
        style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '1rem' }}
      >
        {entry.title}
      </p>
      <p
        className="text-[var(--color-dim)]"
        style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
      >
        {entry.subtitle}
        {entry.detail && (
          <span className="text-[var(--color-muted)]"> · {entry.detail}</span>
        )}
      </p>
      <span
        className="block mt-1 text-[var(--color-muted)]"
        style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em' }}
      >
        {entry.period}
      </span>
    </div>
  )
}
