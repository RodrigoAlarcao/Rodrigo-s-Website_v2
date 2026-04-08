import { useEffect, useLayoutEffect } from 'react'

// SSR-safe version of useLayoutEffect — use this in all GSAP components.
// useLayoutEffect on the server causes a warning; this hook resolves to
// useEffect during SSR and useLayoutEffect in the browser.
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect
