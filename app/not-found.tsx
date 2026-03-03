import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold text-accent mb-4">404</p>
        <h1 className="font-display text-2xl font-bold text-text-primary mb-3">
          Page not found
        </h1>
        <p className="text-text-secondary mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 text-sm font-medium bg-accent text-white hover:bg-accent-hover transition-colors clip-corner-sm"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
