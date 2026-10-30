import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { getPrefersReducedMotion } from '../hooks/useReducedMotion'

/** Round button, bottom-right, that appears after scrolling down. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({ top: 0, behavior: getPrefersReducedMotion() ? 'auto' : 'smooth' })
      }
      className="on-dark fixed bottom-5 right-5 z-30 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold-500 bg-navy-950 text-gold-300 shadow-lg transition-colors hover:bg-navy-800"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
