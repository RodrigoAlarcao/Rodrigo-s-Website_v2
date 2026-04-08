import type { Metadata } from 'next'
import './globals.css'

// ── Fonts (self-hosted via @fontsource — no network access required at build time) ──
// Special Gothic Expanded One (Display / Headings) — weight 400 only
import '@fontsource/special-gothic-expanded-one'
// DM Sans (Body — fallback until Satoshi WOFF2 is placed in public/fonts/)
import '@fontsource/dm-sans/300.css'
import '@fontsource/dm-sans/300-italic.css'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/400-italic.css'
import '@fontsource/dm-sans/500.css'
import '@fontsource/dm-sans/700.css'
// IBM Plex Mono (Labels, tags, process numbers, metadata)
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/700.css'

/**
 * TO SWITCH TO SATOSHI when WOFF2 files are available:
 * 1. Download from fontshare.com/fonts/satoshi
 * 2. Place files in public/fonts/
 * 3. Add to globals.css @font-face blocks:
 *    --font-body: 'Satoshi', sans-serif; (replace DM Sans value)
 */

import SmoothScroll from '@/components/ui/SmoothScroll'
import { LanguageProvider } from '@/hooks/useLanguage'
import en from '@/messages/en.json'
import pt from '@/messages/pt.json'

export const metadata: Metadata = {
  title: 'Rodrigo Alarcão — Product Designer & Builder',
  description:
    'I take ideas from concept to MVP in weeks. Product design, methodology, and AI-assisted development.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rodrigoalarcao.pt'),
  openGraph: {
    title: 'Rodrigo Alarcão — Product Designer & Builder',
    description:
      'I take ideas from concept to MVP in weeks. Product design, methodology, and AI-assisted development.',
    url: 'https://rodrigoalarcao.pt',
    siteName: 'Rodrigo Alarcão',
    locale: 'en_US',
    type: 'website',
  },
}

const messages = { en, pt }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider messages={messages}>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  )
}
