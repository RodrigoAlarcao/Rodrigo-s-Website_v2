'use client'

interface UnicornBackgroundProps {
  projectId: string | null
  className?: string
}

/**
 * V1: projectId is null — renders Sandstone fallback gradient.
 * When assets are ready: pass the Unicorn Studio projectId and
 * the live canvas replaces the gradient with zero refactoring.
 *
 * To activate: npm install unicornstudio-react (already installed)
 * then import { UnicornScene } from 'unicornstudio-react' and
 * render it in the `else` branch below.
 */
export default function UnicornBackground({ projectId, className = '' }: UnicornBackgroundProps) {
  if (!projectId) {
    // Fallback: subtle Sandstone radial gradient — atmospheric, not flat
    return (
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 ${className}`}
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 40%, var(--color-surface), var(--color-bg))',
        }}
      />
    )
  }

  // TODO: uncomment and implement when Unicorn Studio projectIds are available
  // return (
  //   <div aria-hidden className={`absolute inset-0 -z-10 ${className}`}>
  //     <UnicornScene
  //       projectId={projectId}
  //       dpi={1.5}
  //       lazyLoad
  //       style={{ width: '100%', height: '100%' }}
  //     />
  //   </div>
  // )
  return null
}
