import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'

export const metadata: Metadata = {
  title: 'Palco Democrático — Rodrigo Alarcão',
  description:
    'Civic participation platform built solo in 10 days. Next.js + Supabase + Claude Code.',
}

const stack = ['Next.js', 'Supabase', 'Claude Code']

export default function PalcoDemocraticoPage() {
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
              Palco Democrático
            </h1>

            <p
              className="text-[var(--color-dim)] mb-8"
              style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem' }}
            >
              Civic Participation Platform · Live — March 2026
            </p>

            <p
              className="text-[var(--color-text)] font-light italic max-w-[560px] leading-relaxed mb-10"
              style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.125rem, 1.8vw, 1.375rem)' }}
            >
              Built solo in 10 days. No technical co-founder. No handoff to a developer.
            </p>

            <a
              href="https://palcodemocratico.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--color-text)] hover:opacity-70 transition-opacity duration-200"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.06em' }}
            >
              palcodemocratico.pt →
            </a>

          </div>
        </section>

        {/* Content */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">

          {/* Timeline highlight */}
          <section className="py-16 border-b border-[var(--color-warm)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Timeline', value: '10 days' },
                { label: 'Team', value: 'Solo' },
                { label: 'Method', value: 'VIBE-PRD → Foundation → Build' },
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
              A digital space for civic participation. Citizens can propose ideas, discuss community issues, and vote on what matters. Built to make democracy more accessible — not more complicated.
            </CaseSection>

            <CaseSection label="Problem">
              Civic participation in Portugal mostly happens through formal processes that most people never engage with. There was no simple, modern platform for citizens to propose and discuss ideas at a community level.
            </CaseSection>

            <CaseSection label="Solution">
              A platform where anyone can create a proposal, join a discussion, and vote. Clean interface, clear flows, zero friction. Designed and built to feel as simple as posting on social media — but with democratic purpose.
            </CaseSection>

            <CaseSection label="Process">
              <>
                <p className="mb-4">The project followed my full methodology:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    'VIBE-PRD defined the emotional direction before any code',
                    'FOUNDATION set the technical stack and patterns',
                    'DECISION FRAMEWORK confirmed the right architecture',
                    'Claude Code handled the implementation with me guiding every decision',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[var(--color-muted)]" aria-hidden>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>Built with Next.js and Supabase. Authentication, database, real-time features — all shipped in under two weeks.</p>
              </>
            </CaseSection>

            <CaseSection label="Result">
              Launched with positive public feedback. The platform is live and growing. Proved that a single designer with the right methodology and AI tools can ship a real product — not a prototype, a product.
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
