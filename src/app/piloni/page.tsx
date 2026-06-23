import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { piloni } from '@/data/piloni'

export const metadata: Metadata = {
  title: 'Cei 4 piloni',
  description:
    'Liantul, Navigatorul, Administratorul Executiv și Managerul de Colaborare — cele patru roluri prin care coordonăm infrastructura executivă a afacerii tale.',
}

export default function PiloniPage() {
  return (
    <>
      <section className="bg-brand-cream pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-max max-w-3xl">
          <SectionLabel className="mb-6">Structura de intervenție</SectionLabel>
          <h1 className="font-serif text-h1 text-brand-graphite leading-tight">
            Patru roluri. Unul din ele e mereu cel de care ai nevoie acum.
          </h1>
          <p className="font-sans text-body-lg text-brand-muted mt-5">
            Nu toate firmele au același blocaj. Uneori problema e că nimeni nu leagă entitățile. Alteori e că lipsește cineva care vede imaginea de ansamblu. Sau că administrativul pur și simplu nu e ținut sub control. Cei 4 piloni acoperă toate aceste nevoi — activat în proporțiile potrivite pentru situația ta.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface section-padding">
        <div className="container-max">
          <div className="space-y-10">
            {piloni.map((pilon, i) => (
              <div
                key={pilon.nr}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-start ${
                  i % 2 === 1 ? 'md:[direction:rtl]' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-serif text-brand-gold font-bold text-[32px] leading-none">{pilon.nr}</span>
                    <div className="h-px flex-1 bg-brand-gold/20" />
                  </div>
                  <h2 className="font-serif text-h2 text-brand-graphite mb-2">{pilon.titlu}</h2>
                  <p className="font-sans text-[13px] font-semibold text-brand-green tracking-wide uppercase mb-5">{pilon.subtitlu}</p>
                  <p className="font-sans text-[15px] text-brand-muted leading-relaxed mb-6">{pilon.descriere}</p>
                </div>

                <div className={`${i % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                  <div className="bg-white rounded-card shadow-card border border-black/5 p-7">
                    <p className="font-sans text-[11px] font-semibold text-brand-muted tracking-[0.18em] uppercase mb-4">
                      Exemple de activități
                    </p>
                    <ul className="space-y-3">
                      {pilon.detalii.map((d, j) => (
                        <li key={j} className="flex items-start gap-3 font-sans text-[14px] text-brand-graphite">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW THEY WORK TOGETHER */}
      <section className="bg-brand-dark section-padding">
        <div className="container-max max-w-3xl">
          <h2 className="font-serif text-h2 text-white mb-6">Nu e un meniu à la carte. E un sistem.</h2>
          <p className="font-sans text-body-lg text-white/70 leading-relaxed mb-4">
            Cei 4 piloni nu funcționează independent. Un liant fără navigator execută fără să prioritizeze. Un administrator executiv fără managerul de colaborare ține ordinea internă, dar nu coordonează parteneriatele externe.
          </p>
          <p className="font-sans text-[15px] text-white/60 leading-relaxed mb-4">
            În funcție de pachetul ales și de nevoile specifice ale firmei tale, activăm pilonii și ponderea lor. Un client Start are nevoie poate de 70% Administrator Executiv și 30% Liant. Un client Executive lucrează cu toate cele 4 în echilibru.
          </p>
          <p className="font-sans text-[15px] text-white/60 leading-relaxed">
            Cum arată în cazul tău specific — aflăm în diagnoză.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream section-padding">
        <div className="container-max text-center max-w-2xl">
          <h2 className="font-serif text-h2 text-brand-graphite mb-5">Care pilon lipsește la tine?</h2>
          <p className="font-sans text-body-lg text-brand-muted mb-8">
            30 de minute de diagnoză și îți spunem exact unde e blocajul și ce am face.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">Cere o diagnoză</Button>
            <Button href="/arii" variant="outline" size="lg">Arii executive →</Button>
          </div>
        </div>
      </section>
    </>
  )
}
