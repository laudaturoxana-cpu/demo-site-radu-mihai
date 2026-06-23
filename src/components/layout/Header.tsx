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
  { href: '/faq', label: 'FAQ' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-white/92 backdrop-blur-md shadow-subtle border-b border-black/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-max flex items-center justify-between h-16 md:h-[72px]">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigare principală">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 rounded-lg font-sans text-[13px] font-medium transition-all duration-150 ${
                  pathname === link.href
                    ? 'text-brand-green bg-brand-green-light'
                    : 'text-brand-graphite/70 hover:text-brand-graphite hover:bg-brand-surface'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-green" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" size="sm" className="shadow-green">
              Cere o diagnoză →
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-brand-surface transition-colors gap-1.5"
            aria-label={mobileOpen ? 'Închide meniu' : 'Deschide meniu'}
            aria-expanded={mobileOpen}
          >
            <span
              className="block w-5 h-[1.5px] bg-brand-graphite transition-all duration-300 origin-center"
              style={{ transform: mobileOpen ? 'rotate(45deg) translate(0, 5px)' : undefined }}
            />
            <span
              className={`block w-5 h-[1.5px] bg-brand-graphite transition-all duration-200 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`}
            />
            <span
              className="block w-5 h-[1.5px] bg-brand-graphite transition-all duration-300 origin-center"
              style={{ transform: mobileOpen ? 'rotate(-45deg) translate(0, -5px)' : undefined }}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 bg-white shadow-elevated transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-20 pb-8 px-6">
            <nav className="flex flex-col gap-1 flex-1" aria-label="Navigare mobilă">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3.5 rounded-card font-sans text-[15px] font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-brand-green bg-brand-green-light font-semibold'
                      : 'text-brand-graphite hover:bg-brand-surface'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="pt-6 border-t border-brand-surface">
              <Button href="/contact" className="w-full justify-center">
                Cere o diagnoză →
              </Button>
              <p className="font-sans text-[11px] text-brand-muted text-center mt-3">30 min · gratuit · fără angajament</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
