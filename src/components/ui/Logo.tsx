import Link from 'next/link'
import { BRAND_NAME } from '@/constants/brand'

interface LogoProps {
  variant?: 'dark' | 'light'
  className?: string
}

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const greenColor = variant === 'light' ? '#FAF9F7' : '#2D6A4F'
  const textColor = variant === 'light' ? '#FAF9F7' : '#1C1C1C'
  const mutedColor = variant === 'light' ? 'rgba(250,249,247,0.7)' : '#6B6560'

  return (
    <Link href="/" aria-label={`${BRAND_NAME}, Acasă`} className={`inline-flex items-center gap-3 ${className}`}>
      {/* Lettermark */}
      <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="0" y="0" width="3" height="36" fill={greenColor} />
        <rect x="14" y="0" width="3" height="36" fill={greenColor} />
        <line x1="3" y1="2" x2="14" y2="34" stroke={greenColor} strokeWidth="3" strokeLinecap="round" />
      </svg>
      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span
          className="font-serif font-bold tracking-widest uppercase text-[13px]"
          style={{ color: textColor, letterSpacing: '0.18em' }}
        >
          {BRAND_NAME.split(' ')[0]}
        </span>
        <span
          className="font-sans text-[9px] tracking-[0.22em] uppercase mt-0.5"
          style={{ color: mutedColor }}
        >
          {BRAND_NAME.split(' ')[1] || ''}
        </span>
      </span>
    </Link>
  )
}
