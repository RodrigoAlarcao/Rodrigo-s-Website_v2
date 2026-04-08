'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

export type Lang = 'en' | 'pt'

// Minimal type — extend as messages grow
export type Messages = Record<string, any>

const LanguageContext = createContext<{
  lang: Lang
  t: Messages
  setLang: (l: Lang) => void
}>({
  lang: 'en',
  t: {},
  setLang: () => {},
})

export function LanguageProvider({
  children,
  messages,
}: {
  children: ReactNode
  messages: { en: Messages; pt: Messages }
}) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved === 'en' || saved === 'pt') setLangState(saved)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, t: messages[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
