import Link from 'next/link'

interface Project {
  slug: string
  name: string
  type: string
  stack: string[]
  status: string
  tagline: string
  description: string
  url: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={[
        'group block p-8 md:p-10',
        'bg-[var(--color-surface)] border border-[var(--color-warm)]',
        'transition-colors duration-300 hover:bg-[var(--color-warm)]',
      ].join(' ')}
    >
      {/* Status */}
      <span
        className="block text-[var(--color-muted)] mb-6"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        {project.status}
      </span>

      {/* Name */}
      <h3
        className="text-[var(--color-text)] tracking-tight mb-2 group-hover:opacity-80 transition-opacity duration-300"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
        }}
      >
        {project.name}
      </h3>

      {/* Type */}
      <p
        className="text-[var(--color-dim)] mb-6"
        style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
      >
        {project.type}
      </p>

      {/* Tagline */}
      <p
        className="text-[var(--color-text)] font-light italic mb-8 leading-snug"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
        }}
      >
        {project.tagline}
      </p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-[var(--color-dim)] border border-[var(--color-warm)] group-hover:border-[var(--color-warm)]"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <div
        className="mt-8 text-[var(--color-muted)] group-hover:text-[var(--color-text)] transition-colors duration-300"
        style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}
        aria-hidden
      >
        View case study →
      </div>
    </Link>
  )
}
