import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * On every page change: scroll to the top and move keyboard/screen-reader
 * focus to the main content. Does nothing on the very first page load.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (hash) return // let the browser handle in-page anchors
    window.scrollTo(0, 0)
    document.getElementById('main-content')?.focus({ preventScroll: true })
  }, [pathname, hash])

  return null
}
