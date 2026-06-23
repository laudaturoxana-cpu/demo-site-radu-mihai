import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost' | 'outline-light'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  'aria-label'?: string
}

const base = 'inline-flex items-center justify-center font-sans font-semibold rounded-btn transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green'

const variants = {
  primary:       'bg-brand-green text-white hover:bg-[#235A41] active:bg-[#1a4430]',
  outline:       'border border-brand-green text-brand-green hover:bg-brand-green-light active:bg-[#d5e9e0]',
  ghost:         'text-brand-green hover:bg-brand-green-light',
  'outline-light':'border border-white/60 text-white hover:bg-white/10',
}

const sizes = {
  sm: 'px-5 py-2.5 text-[13px] tracking-wide',
  md: 'px-7 py-3.5 text-[14px] tracking-wide',
  lg: 'px-9 py-4 text-[15px] tracking-wide',
}

export function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  type = 'button',
  disabled = false,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
