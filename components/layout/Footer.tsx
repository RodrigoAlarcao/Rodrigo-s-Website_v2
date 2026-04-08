'use client'

import { useLanguage } from '@/hooks/useLanguage'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer
      className="py-8 border-t border-[var(--color-warm)]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <span
          className="text-[var(--color-muted)]"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.06em',
          }}
        >
          {t.footer.copy}
        </span>
        <span
          className="text-[var(--color-muted)] italic"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
          }}
        >
          {t.footer.tagline}
        </span>
      </div>
    </footer>
  )
}
