'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function MobileCta() {
  const pathname = usePathname()
  if (pathname === '/contact') return null

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-green border-t border-brand-green shadow-elevated safe-area-bottom">
      <div className="flex items-center justify-between px-5 py-3.5">
        <div>
          <p className="font-sans font-semibold text-white text-[14px] leading-tight">Diagnoză gratuită</p>
          <p className="font-sans text-white/65 text-[12px]">30 min · fără angajament</p>
        </div>
        <Link
          href="/contact"
          className="bg-white text-brand-green font-sans font-semibold text-[13px] px-5 py-2.5 rounded-btn hover:bg-brand-cream transition-colors duration-150 shrink-0"
        >
          Cere acum →
        </Link>
      </div>
    </div>
  )
}
