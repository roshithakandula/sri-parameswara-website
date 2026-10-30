/** Shown briefly while a page's code is loading. */
export default function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center" role="status">
      <span
        className="h-9 w-9 animate-spin rounded-full border-4 border-gold-500/30 border-t-gold-500"
        aria-hidden="true"
      />
      <span className="sr-only">Loading page</span>
    </div>
  )
}
