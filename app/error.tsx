'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold text-accent mb-4">500</p>
        <h1 className="font-display text-2xl font-bold text-text-primary mb-3">
          Something went wrong
        </h1>
        <p className="text-text-secondary mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="inline-block px-6 py-3 text-sm font-medium bg-accent text-white hover:bg-accent-hover transition-colors clip-corner-sm"
        >
          Try Again
        </button>
      </div>
    </main>
  )
}
