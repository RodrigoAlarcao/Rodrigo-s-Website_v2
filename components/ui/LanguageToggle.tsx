'use client'

import { useLanguage } from '@/hooks/useLanguage'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className="flex items-center gap-1.5"
      style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em' }}
    >
      <button
        onClick={() => setLang('en')}
        className={[
          'transition-colors duration-200 uppercase',
          lang === 'en'
            ? 'text-[var(--color-text)] font-bold'
            : 'text-[var(--color-muted)] hover:text-[var(--color-dim)]',
        ].join(' ')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <span className="text-[var(--color-border)] select-none">/</span>
      <button
        onClick={() => setLang('pt')}
        className={[
          'transition-colors duration-200 uppercase',
          lang === 'pt'
            ? 'text-[var(--color-text)] font-bold'
            : 'text-[var(--color-muted)] hover:text-[var(--color-dim)]',
        ].join(' ')}
        aria-pressed={lang === 'pt'}
      >
        PT
      </button>
    </div>
  )
}
