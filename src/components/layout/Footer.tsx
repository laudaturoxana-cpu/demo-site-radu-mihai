import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { BRAND_NAME, BRAND_TAGLINE, CONTACT_EMAIL, CONTACT_PHONE } from '@/constants/brand'

const footerLinks = [
  {
    titlu: 'Site',
    links: [
      { href: '/', label: 'Acasă' },
      { href: '/despre', label: 'Despre proiect' },
      { href: '/cum-functioneaza', label: 'Cum funcționează' },
      { href: '/piloni', label: 'Cei 4 piloni' },
    ],
  },
  {
    titlu: 'Servicii',
    links: [
      { href: '/arii', label: 'Arii executive' },
      { href: '/pachete', label: 'Pachete' },
      { href: '/pentru-cine', label: 'Pentru cine' },
      { href: '/faq', label: 'Întrebări frecvente' },
    ],
  },
  {
    titlu: 'Contact',
    links: [
      { href: '/contact', label: 'Cere o diagnoză' },
      { href: `mailto:${CONTACT_EMAIL}`, label: CONTACT_EMAIL },
      { href: `tel:${CONTACT_PHONE.replace(/\s/g, '')}`, label: CONTACT_PHONE },
    ],
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white/80">
      {/* CTA band */}
      <div className="bg-brand-green">
        <div className="container-max py-14 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-h3 text-white font-bold leading-snug">
              30 de minute. Fără presiune.
            </p>
            <p className="font-sans text-white/80 mt-1 text-[15px]">
              Diagnosticul e gratuit. Îți spunem sincer dacă are sens.
            </p>
          </div>
          <Button href="/contact" variant="outline-light" size="lg" className="whitespace-nowrap shrink-0">
            Cere o diagnoză
          </Button>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-max py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="md:col-span-2">
            <Logo variant="light" />
            <p className="font-sans text-[13px] text-white/50 mt-4 leading-relaxed max-w-xs">
              {BRAND_TAGLINE}. Un punct unic de coordonare executivă pentru antreprenori și IMM-uri.
            </p>
          </div>

          {/* Nav cols */}
          {footerLinks.map((col) => (
            <div key={col.titlu}>
              <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
                {col.titlu}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-[13px] text-white/60 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-[12px] text-white/30">
            © {year} {BRAND_NAME}. Toate drepturile rezervate.
          </p>
          {/* ⚠️ DEMO */}
          <p className="font-sans text-[11px] text-white/20 italic">
            ⚠️ &quot;{BRAND_NAME}&quot; este un nume provizoriu de demo, va fi înlocuit cu numele final al brandului.
          </p>
        </div>
      </div>
    </footer>
  )
}
