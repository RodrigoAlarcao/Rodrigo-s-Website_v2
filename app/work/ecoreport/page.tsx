import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'

export const metadata: Metadata = {
  title: 'EcoReport — Rodrigo Alarcão',
  description:
    'Environmental reporting platform. First AI-assisted project. End-to-end product design.',
}

const stack = ['Next.js', 'Cursor AI']

export default function EcoReportPage() {
  return (
    <>
      <Nav />

      <main className="pt-24">

        {/* Header */}
        <section className="py-16 md:py-24 border-b border-[var(--color-warm)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">

            {/* Back */}
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-200 mb-12"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              ← Work
            </Link>

            {/* Meta row */}
            <div className="flex flex-wrap gap-3 mb-6">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-[var(--color-warm)] text-[var(--color-dim)]"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <h1
              className="text-[var(--color-text)] tracking-tight mb-4 leading-[0.95]"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              EcoReport
            </h1>

            <p
              className="text-[var(--color-dim)] mb-8"
              style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem' }}
            >
              Environmental Reporting Platform · Live — January 2026
            </p>

            <p
              className="text-[var(--color-text)] font-light italic max-w-[560px] leading-relaxed mb-10"
              style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.125rem, 1.8vw, 1.375rem)' }}
            >
              First AI-assisted project. The beginning of the shift from designer to builder.
            </p>

            <a
              href="https://ecoreport.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--color-text)] hover:opacity-70 transition-opacity duration-200"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.06em' }}
            >
              ecoreport.pt →
            </a>

          </div>
        </section>

        {/* Content */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">

          {/* Timeline highlight */}
          <section className="py-16 border-b border-[var(--color-warm)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Role', value: 'End-to-end product design' },
                { label: 'Team', value: 'Co-founded with technical partner' },
                { label: 'Tools', value: 'Figma + Next.js + Cursor AI' },
              ].map((item) => (
                <div key={item.label}>
                  <span
                    className="block text-[var(--color-muted)] mb-2"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase' }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-[var(--color-text)]"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', fontWeight: 500 }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Case study body */}
          <div className="py-16 max-w-[720px] space-y-12">

            <CaseSection label="Overview">
              A platform for environmental reporting — helping organizations manage and submit their sustainability data. Co-founded with a technical partner. My role: end-to-end product design and user experience.
            </CaseSection>

            <CaseSection label="Problem">
              Environmental reporting is complex, fragmented, and often done in spreadsheets. Organizations struggle with compliance requirements and lack proper tooling for structured data collection and submission.
            </CaseSection>

            <CaseSection label="Solution">
              A web application that guides users through the reporting process step by step. Clear information architecture, validation at every stage, and a dashboard that makes complex data understandable.
            </CaseSection>

            <CaseSection label="Process">
              <>
                <p className="mb-4">This was my first real collaboration with AI tools. Used Cursor AI alongside a backend engineer.</p>
                <p className="mb-4">I designed the product from research to final UI, learned to work with code directly, and started building the bridge between design and development.</p>
                <p>The website and web application are both live — a complete MVP with functional workflows.</p>
              </>
            </CaseSection>

            <CaseSection label="Result">
              Platform is live. No active partnerships yet, but the product is complete and functional. More importantly: this project taught me that the gap between design and code is smaller than the industry assumes — and that AI makes it possible to cross it.
            </CaseSection>

          </div>
        </div>

      </main>
    </>
  )
}

function CaseSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <span
        className="block text-[var(--color-muted)] mb-4"
        style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase' }}
      >
        {label}
      </span>
      <div
        className="text-[var(--color-dim)] leading-relaxed"
        style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}
      >
        {children}
      </div>
    </div>
  )
}
