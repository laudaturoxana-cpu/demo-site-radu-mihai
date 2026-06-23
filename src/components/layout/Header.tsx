'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { href: '/despre', label: 'Despre' },
  { href: '/cum-functioneaza', label: 'Cum funcționează' },
  { href: '/piloni', label: 'Piloni' },
  { href: '/pachete', label: 'Pachete' },
  { href: '/faq', label: 'Întrebări frecvente' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-brand-cream/95 backdrop-blur-sm shadow-subtle border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max flex items-center justify-between h-16 md:h-18">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navigare principală">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-[13px] font-medium transition-colors duration-150 ${
                pathname === link.href
                  ? 'text-brand-green'
                  : 'text-brand-graphite/75 hover:text-brand-graphite'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" size="sm">
            Cere o diagnoză
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -mr-2 text-brand-graphite"
          aria-label={mobileOpen ? 'Închide meniu' : 'Deschide meniu'}
          aria-expanded={mobileOpen}
        >
          <span className="block w-5 h-px bg-current mb-1.5 transition-all" style={{ transform: mobileOpen ? 'rotate(45deg) translate(2px,4px)' : undefined }} />
          <span className={`block w-5 h-px bg-current mb-1.5 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className="block w-5 h-px bg-current transition-all" style={{ transform: mobileOpen ? 'rotate(-45deg) translate(2px,-4px)' : undefined }} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-black/5 bg-brand-cream/98 backdrop-blur-sm">
          <nav className="container-max py-5 flex flex-col gap-1" aria-label="Navigare mobilă">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 font-sans text-[15px] border-b border-black/5 last:border-0 ${
                  pathname === link.href ? 'text-brand-green font-semibold' : 'text-brand-graphite'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button href="/contact" className="w-full justify-center">
                Cere o diagnoză
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
