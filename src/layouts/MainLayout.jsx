import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AnnouncementBar from '../components/AnnouncementBar'
import BackToTop from '../components/BackToTop'
import ErrorBoundary from '../components/ErrorBoundary'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PageLoader from '../components/PageLoader'
import ScrollToTop from '../components/ScrollToTop'

/** Wraps every page with the skip link, announcement bar, navigation and footer. */
export default function MainLayout() {
  const { pathname } = useLocation()

  return (
    <>
      <a
        href="#main-content"
        className="on-dark sr-only z-50 rounded-full bg-gold-500 px-5 py-3 font-semibold text-navy-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>

      <ScrollToTop />
      <AnnouncementBar />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <ErrorBoundary resetKey={pathname}>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
