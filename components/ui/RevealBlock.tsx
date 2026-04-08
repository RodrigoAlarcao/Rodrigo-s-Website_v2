'use client'

/**
 * RevealBlock — wraps children in overflow:hidden and slides them up into view.
 *
 * Usage:
 *   <RevealBlock><h2>Heading</h2></RevealBlock>          ← scroll-triggered
 *   <RevealBlock trigger="immediate" delay={0.3}>...</>  ← on mount
 *
 * The overflow:hidden is applied to the outer wrapper so the inner content
 * "appears" from below the baseline — classic editorial reveal.
 */

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import type { ReactNode, CSSProperties } from 'react'

gsap.registerPlugin(ScrollTrigger)

interface RevealBlockProps {
  children: ReactNode
  delay?: number
  duration?: number
  trigger?: 'scroll' | 'immediate'
  className?: string
  style?: CSSProperties
  /** How far below baseline the text starts. Default 105% */
  from?: number
}

export default function RevealBlock({
  children,
  delay = 0,
  duration = 0.85,
  trigger = 'scroll',
  className,
  style,
  from = 105,
}: RevealBlockProps) {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return

    const ctx = gsap.context(() => {
      const animProps = {
        y: `${from}%`,
        duration,
        ease: 'power3.out',
        delay,
      }

      if (trigger === 'scroll') {
        gsap.from(inner, {
          ...animProps,
          scrollTrigger: {
            trigger: outer,
            start: 'top 88%',
          },
        })
      } else {
        gsap.from(inner, animProps)
      }
    })

    return () => ctx.revert()
  }, [delay, duration, from, trigger])

  return (
    <div ref={outerRef} style={{ overflow: 'hidden', ...style }} className={className}>
      <div ref={innerRef}>{children}</div>
    </div>
  )
}
