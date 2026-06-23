import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { pachete } from '@/data/pachete'

export const metadata: Metadata = {
  title: 'Pachete',
  description:
    'Start, Business, Executive, trei niveluri de infrastructură executivă externalizată. Alege ce ți se potrivește.',
}

const comparatie = [
  { label: 'Ore de suport lunar', start: '~20h', business: '~40h', executive: 'Nelimitat (în scop)' },
  { label: 'Arii acoperite', start: '3', business: '6', executive: 'Toate 10' },
  { label: 'Prezență fizică', start: 'Nu', business: 'Opțional', executive: 'Da' },
  { label: 'Raport lunar', start: 'Rezumat scurt', business: 'Detaliat', executive: 'Săptămânal + lunar' },
  { label: 'Timp de răspuns', start: '24h', business: '4h', executive: '2h' },
  { label: 'Onboarding', start: '1 săptămână', business: '2 săptămâni', executive: '2–3 săptămâni' },
  { label: 'Preț', start: 'La cerere', business: 'La cerere', executive: 'La cerere' },
]

export default function PachetePage() {
  return (
    <>
      <section className="bg-brand-cream pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-max max-w-3xl">
          <SectionLabel className="mb-6">Pachete de colaborare</SectionLabel>
          <h1 className="font-serif text-h1 text-brand-graphite leading-tight">
            Nu plătești pentru ce nu ai nevoie.
          </h1>
          <p className="font-sans text-body-lg text-brand-muted mt-5">
            Trei niveluri de colaborare, gândite pentru trei stadii diferite ale aceleași probleme. Diagnosticul ne ajută să stabilim de unde pornim, și de acolo, scalăm în funcție de nevoie.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="bg-brand-surface section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {pachete.map((pachet) => (
              <div
                key={pachet.slug}
                className={`rounded-card flex flex-col ${
                  pachet.highlight
                    ? 'bg-brand-green text-white shadow-elevated ring-2 ring-brand-green ring-offset-4'
                    : 'bg-white border border-black/5 shadow-card'
                }`}
              >
                {pachet.highlight && (
                  <div className="bg-brand-gold/20 rounded-t-card px-7 py-2.5">
                    <p className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold">
                      ★ Cel mai ales
                    </p>
                  </div>
                )}
                <div className="p-7 flex flex-col flex-1">
                  <h2
                    className={`font-serif text-h2 font-bold mb-1 ${
                      pachet.highlight ? 'text-white' : 'text-brand-graphite'
                    }`}
                  >
                    {pachet.titlu}
                  </h2>
                  <p
                    className={`font-sans text-[13px] mb-5 ${
                      pachet.highlight ? 'text-white/70' : 'text-brand-muted'
                    }`}
                  >
                    {pachet.subtitlu}
                  </p>

                  <p
                    className={`font-sans text-[14px] leading-relaxed mb-6 ${
                      pachet.highlight ? 'text-white/80' : 'text-brand-muted'
                    }`}
                  >
                    {pachet.descriere}
                  </p>

                  <div
                    className={`text-[12px] font-sans mb-6 p-4 rounded-btn ${
                      pachet.highlight ? 'bg-white/10' : 'bg-brand-surface'
                    }`}
                  >
                    <p
                      className={`font-semibold tracking-wide uppercase text-[10px] mb-2 ${
                        pachet.highlight ? 'text-white/50' : 'text-brand-muted'
                      }`}
                    >
                      Potrivit pentru
                    </p>
                    <p className={pachet.highlight ? 'text-white/80' : 'text-brand-graphite'}>
                      {pachet.pentruCine}
                    </p>
                  </div>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {pachet.caracteristici.map((c) => (
                      <li key={c.label} className="flex items-center justify-between gap-4">
                        <span
                          className={`font-sans text-[13px] ${
                            pachet.highlight ? 'text-white/60' : 'text-brand-muted'
                          }`}
                        >
                          {c.label}
                        </span>
                        <span
                          className={`font-sans text-[13px] font-semibold text-right ${
                            pachet.highlight ? 'text-white' : 'text-brand-graphite'
                          }`}
                        >
                          {c.valoare}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/contact"
                    variant={pachet.highlight ? 'outline-light' : 'primary'}
                    className="mt-auto w-full justify-center"
                  >
                    {pachet.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABEL COMPARATIV */}
      <section className="bg-brand-cream section-padding">
        <div className="container-max">
          <div className="max-w-prose mb-10">
            <SectionLabel className="mb-5">Comparație completă</SectionLabel>
            <h2 className="font-serif text-h2 text-brand-graphite">Tot ce e diferit, în același loc.</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-brand-surface">
                  <th className="text-left py-4 pr-6 font-sans text-[12px] font-semibold text-brand-muted tracking-[0.15em] uppercase w-1/3">
                    Caracteristică
                  </th>
                  {pachete.map((p) => (
                    <th
                      key={p.slug}
                      className={`text-center py-4 px-4 font-serif text-[16px] font-bold ${
                        p.highlight ? 'text-brand-green' : 'text-brand-graphite'
                      }`}
                    >
                      {p.titlu}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparatie.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-brand-surface ${i % 2 === 0 ? '' : 'bg-brand-surface/40'}`}
                  >
                    <td className="py-4 pr-6 font-sans text-[14px] text-brand-muted">{row.label}</td>
                    <td className="py-4 px-4 text-center font-sans text-[14px] text-brand-graphite">{row.start}</td>
                    <td className="py-4 px-4 text-center font-sans text-[14px] font-semibold text-brand-green">{row.business}</td>
                    <td className="py-4 px-4 text-center font-sans text-[14px] text-brand-graphite">{row.executive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ scurt */}
      <section className="bg-brand-surface section-padding">
        <div className="container-max max-w-3xl">
          <h2 className="font-serif text-h2 text-brand-graphite mb-8">Întrebări despre pachete</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Pot schimba pachetul după ce am început?',
                a: 'Da. Scala în sus oricând, scala în jos cu 30 de zile preaviz. Nu există penalități dacă nevoile tale s-au schimbat.',
              },
              {
                q: 'Ce înseamnă „ore nelimitate" la Executive?',
                a: 'Înseamnă că nu numărăm orele pentru activitățile din scop. Există un scop de intervenție agreat, în acel scop, lucrăm fără contor de ore.',
              },
              {
                q: 'Cum e stabilit prețul?',
                a: 'Prețul e calculat în funcție de volum și complexitate, ariile acoperite, dimensiunea firmei, fluxul de lucru. Îl stabilim după diagnoză, nu dintr-un catalog fix.',
              },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-card p-6 shadow-subtle border border-black/5">
                <h3 className="font-serif text-[18px] text-brand-graphite font-bold mb-3">{item.q}</h3>
                <p className="font-sans text-[14px] text-brand-muted leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-cream section-padding">
        <div className="container-max text-center max-w-2xl">
          <h2 className="font-serif text-h2 text-brand-graphite mb-5">Nu ești sigur cu ce pachet?</h2>
          <p className="font-sans text-body-lg text-brand-muted mb-8">
            Nu trebuie să decizi acum. Diagnosticul e primul pas, și după el e clar care variantă are sens.
          </p>
          <Button href="/contact" size="lg">Cere o diagnoză gratuită</Button>
        </div>
      </section>
    </>
  )
}
