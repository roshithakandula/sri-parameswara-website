import { Component } from 'react'

/**
 * Catches unexpected errors inside a page so the visitor sees a friendly
 * message instead of a blank screen. Resets when `resetKey` changes
 * (the layout passes the current URL path).
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidUpdate(prevProps) {
    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
      this.setState({ hasError: false })
    }
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div className="container-page section-space text-center" role="alert">
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <p className="mx-auto mt-4 max-w-md text-ink-500">
          This page could not be displayed. Please reload the page or try again in a moment.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-navy-900 bg-navy-900 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-800"
        >
          Reload page
        </button>
      </div>
    )
  }
}
