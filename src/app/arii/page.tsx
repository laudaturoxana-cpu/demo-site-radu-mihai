import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { arii } from '@/data/arii'

export const metadata: Metadata = {
  title: 'Arii executive',
  description:
    'Cele 10 zone de intervenție executivă, activate selectiv în funcție de nevoile specifice ale fiecărui client.',
}

export default function AriiPage() {
  return (
    <>
      <section className="bg-brand-cream pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-max max-w-3xl">
          <SectionLabel className="mb-6">Zone de intervenție</SectionLabel>
          <h1 className="font-serif text-h1 text-brand-graphite leading-tight">
            10 arii. Nu le acoperim pe toate deodată.
          </h1>
          <p className="font-sans text-body-lg text-brand-muted mt-5">
            Nu există un pachet standard care funcționează la fel pentru orice firmă. Identificăm împreună care arii au cel mai mare impact în situația ta și le activăm în ordinea potrivită. Restul pot veni mai târziu, dacă e nevoie.
          </p>
          <p className="font-sans text-sm text-brand-muted/60 mt-3 italic">
            ⚠️ Exemplele de mai jos sunt reprezentative — sunt adaptate și completate în funcție de specificul fiecărui client.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {arii.map((arie) => (
              <div
                key={arie.nr}
                className="bg-white rounded-card shadow-card border border-black/5 p-7 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-serif text-brand-gold font-bold text-[20px] leading-none">{arie.nr}</span>
                </div>
                <h2 className="font-serif text-h3 text-brand-graphite font-bold mb-3">{arie.titlu}</h2>
                <p className="font-sans text-[14px] text-brand-muted leading-relaxed mb-5 flex-1">{arie.descriere}</p>
                <div>
                  <p className="font-sans text-[11px] font-semibold text-brand-muted tracking-[0.18em] uppercase mb-3">
                    Exemple de activități
                  </p>
                  <ul className="space-y-2">
                    {arie.exemple.map((ex, i) => (
                      <li key={i} className="flex items-start gap-2.5 font-sans text-[13px] text-brand-graphite/70">
                        <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 shrink-0" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-green section-padding">
        <div className="container-max text-center max-w-2xl">
          <h2 className="font-serif text-h2 text-white mb-5">Care arie lipsește cel mai tare?</h2>
          <p className="font-sans text-body-lg text-white/80 mb-8">
            Nu trebuie să știi dinainte. În diagnoză identificăm împreună unde e cel mai mare gol și cu ce începem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="outline-light" size="lg">Cere o diagnoză gratuită</Button>
            <Button href="/pachete" variant="outline-light" size="lg">Vezi pachetele →</Button>
          </div>
        </div>
      </section>
    </>
  )
}
