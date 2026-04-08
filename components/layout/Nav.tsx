'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { useLanguage } from '@/hooks/useLanguage'
import LanguageToggle from '@/components/ui/LanguageToggle'

gsap.registerPlugin(ScrollTrigger)

const SECTION_IDS = ['about', 'process', 'work', 'contact']

export default function Nav() {
  const { t } = useLanguage()
  const navRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState<string | null>(null)

  // Entrance animation
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        delay: 0.1,
      })
    }, navRef)
    return () => ctx.revert()
  }, [])

  // Sticky backdrop on scroll
  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const trigger = ScrollTrigger.create({
      start: 'top+=80 top',
      onEnter: () => nav.setAttribute('data-scrolled', 'true'),
      onLeaveBack: () => nav.removeAttribute('data-scrolled'),
    })
    return () => trigger.kill()
  }, [])

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    // Clear active when scrolled back to top (hero)
    const heroObs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(null) },
      { threshold: 0.5 }
    )
    const hero = document.getElementById('hero')
    if (hero) heroObs.observe(hero)

    return () => {
      observers.forEach((o) => o.disconnect())
      heroObs.disconnect()
    }
  }, [])

  const links = [
    { href: '#about',   id: 'about',   label: t.nav.about },
    { href: '#process', id: 'process', label: t.nav.process },
    { href: '#work',    id: 'work',    label: t.nav.work },
    { href: '#contact', id: 'contact', label: t.nav.contact },
  ]

  return (
    <header
      ref={navRef}
      className={[
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-300',
        'data-[scrolled]:bg-[var(--color-bg)]/90 data-[scrolled]:backdrop-blur-md',
        'data-[scrolled]:border-b data-[scrolled]:border-[var(--color-border)]',
      ].join(' ')}
    >
      <nav className="max-w-[1200px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-[var(--color-text)] text-lg tracking-tight hover:opacity-70 transition-opacity duration-200"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          RA
        </Link>

        {/* Links + toggle */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8">
            {links.map(({ href, id, label }) => {
              const isActive = active === id
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={[
                      'relative text-sm transition-colors duration-200',
                      'after:absolute after:bottom-[-3px] after:left-0 after:right-0',
                      'after:h-px after:bg-[var(--color-text)]',
                      'after:transition-transform after:duration-300 after:origin-left',
                      isActive
                        ? 'text-[var(--color-text)] after:scale-x-100'
                        : 'text-[var(--color-dim)] hover:text-[var(--color-text)] after:scale-x-0 hover:after:scale-x-100',
                    ].join(' ')}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>

          <LanguageToggle />
        </div>

      </nav>
    </header>
  )
}
