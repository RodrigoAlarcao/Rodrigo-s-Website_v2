'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { useLanguage } from '@/hooks/useLanguage'
import ProjectCard from '@/components/ui/ProjectCard'

gsap.registerPlugin(ScrollTrigger)

export default function WorkSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from('[data-work-card]', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-work-grid]',
          start: 'top 75%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-24 md:py-36"
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
          Work
        </span>

        {/* Project grid */}
        <div
          data-work-grid
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {t.work.projects.map((project) => (
            <div key={project.slug} data-work-card>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
