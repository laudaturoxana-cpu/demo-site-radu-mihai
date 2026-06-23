'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { faqItems } from '@/data/faq'

function FAQItem({ intrebare, raspuns }: { intrebare: string; raspuns: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-brand-surface last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-6 flex items-start justify-between gap-4 group"
        aria-expanded={open}
      >
        <h3 className="font-serif text-[18px] text-brand-graphite font-bold leading-snug group-hover:text-brand-green transition-colors">
          {intrebare}
        </h3>
        <span
          className={`shrink-0 w-6 h-6 rounded-full border border-brand-muted/30 flex items-center justify-center text-brand-muted transition-all duration-200 mt-0.5 ${
            open ? 'bg-brand-green border-brand-green text-white rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <line x1="5" y1="0" x2="5" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="0" y1="5" x2="10" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-6">
          <p className="font-sans text-[15px] text-brand-muted leading-relaxed max-w-prose">{raspuns}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <section className="bg-brand-cream pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-max max-w-3xl">
          <SectionLabel className="mb-6">Răspunsuri la obiecții</SectionLabel>
          <h1 className="font-serif text-h1 text-brand-graphite leading-tight">
            Întrebările pe care le ai, dar poate nu le-ai pus încă.
          </h1>
          <p className="font-sans text-body-lg text-brand-muted mt-5">
            Am adunat cele mai frecvente întrebări și obiecții pe care le primim. Dacă ceva nu e răspuns aici, trimite-ne un mesaj sau cere direct diagnosticul, că o să ajungem la ele.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface section-padding">
        <div className="container-max max-w-3xl">
          <div className="bg-white rounded-card shadow-card border border-black/5 px-8 divide-y-0">
            {faqItems.map((item) => (
              <FAQItem key={item.intrebare} intrebare={item.intrebare} raspuns={item.raspuns} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-cream section-padding">
        <div className="container-max text-center max-w-2xl">
          <h2 className="font-serif text-h2 text-brand-graphite mb-5">
            Ai o întrebare care nu apare mai sus?
          </h2>
          <p className="font-sans text-body-lg text-brand-muted mb-8">
            Diagnosticul durează 30 de minute și le răspundem pe toate live, în conversație directă.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">Cere o diagnoză gratuită</Button>
            <Button href="/pachete" variant="outline" size="lg">Pachete →</Button>
          </div>
        </div>
      </section>
    </>
  )
}
