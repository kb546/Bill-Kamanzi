import Link from 'next/link'

type ButtonProps = {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  external?: boolean
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  external,
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-6 py-3 font-medium text-sm transition-colors duration-200 clip-corner-sm'

  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover',
    secondary: 'border border-border-strong text-text-primary hover:border-accent hover:text-accent',
    ghost: 'text-text-secondary hover:text-text-primary',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
