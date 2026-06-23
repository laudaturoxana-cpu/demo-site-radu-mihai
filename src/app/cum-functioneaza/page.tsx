import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Cum funcționează',
  description:
    'Modelul punct unic de coordonare, procesul de onboarding în 30 de zile și cum arată o colaborare lunară.',
}

const saptamani = [
  {
    interval: 'Ziua 1–3',
    titlu: 'Diagnosticul',
    culoare: 'border-brand-gold',
    pași: [
      'Apel de 30 minute — gratuit, fără angajament',
      'Înțelegem ce ocupă cel mai mult timp și ce scapă cel mai des',
      'Identificăm ariile unde intervenția are cel mai mare impact',
      'Îți spunem sincer dacă și cum putem ajuta',
    ],
  },
  {
    interval: 'Săptămânile 1–2',
    titlu: 'Audit și setup',
    culoare: 'border-brand-green',
    pași: [
      'Audităm procesele și documentele existente',
      'Înțelegem ce sisteme folosești (email, CRM, drive, etc.)',
      'Stabilim canalele de comunicare și protocoalele de lucru',
      'Identificăm primele 3–5 priorități de rezolvat imediat',
    ],
  },
  {
    interval: 'Săptămâna 3',
    titlu: 'Preluare treptată',
    culoare: 'border-brand-green',
    pași: [
      'Preluăm responsabilitatea ariilor agreate, cu tine în buclă',
      'Primești acces la sistemul nostru de urmărire și raportare',
      'Rezolvăm primele probleme reale — nu test-drive, ci execuție',
      'Ajustăm în timp real ce e nevoie pe baza feedback-ului tău',
    ],
  },
  {
    interval: 'Luna 1 — final',
    titlu: 'Raport și calibrare',
    culoare: 'border-brand-gold',
    pași: [
      'Raport complet: ce am rezolvat, ce e în curs, ce necesită atenția ta',
      'Ședință de calibrare — ajustăm ariile și volumul de lucru',
      'Stabilim ritmul de lucru pentru lunile următoare',
      'De la luna 2: funcționare autonomă cu raportare periodică',
    ],
  },
]

export default function CumFunctioneazaPage() {
  return (
    <>
      <section className="bg-brand-cream pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-max max-w-3xl">
          <SectionLabel className="mb-6">Modelul de lucru</SectionLabel>
          <h1 className="font-serif text-h1 text-brand-graphite leading-tight">
            Un punct unic de coordonare. Fără haos în tranziție.
          </h1>
          <p className="font-sans text-body-lg text-brand-muted mt-5">
            Știm că cel mai mare risc al oricărei schimbări administrative e că lucrurile se înrăutățesc înainte să se îmbunătățească. De aceea am construit un proces de onboarding care produce rezultate vizibile din prima lună.
          </p>
        </div>
      </section>

      {/* PRIMELE 30 ZILE */}
      <section className="bg-brand-surface section-padding">
        <div className="container-max">
          <div className="max-w-prose mb-12">
            <SectionLabel className="mb-5">Primele 30 de zile</SectionLabel>
            <h2 className="font-serif text-h2 text-brand-graphite">De la diagnoză la control.</h2>
          </div>

          <div className="space-y-6">
            {saptamani.map((etapa, i) => (
              <div
                key={i}
                className={`bg-white rounded-card shadow-card border-l-4 ${etapa.culoare} p-7`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-48 shrink-0">
                    <p className="font-sans text-[11px] font-semibold text-brand-muted tracking-[0.18em] uppercase mb-1">
                      {etapa.interval}
                    </p>
                    <h3 className="font-serif text-h3 text-brand-graphite font-bold">{etapa.titlu}</h3>
                  </div>
                  <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {etapa.pași.map((pas, j) => (
                      <li key={j} className="flex items-start gap-2.5 font-sans text-[14px] text-brand-muted">
                        <span className="text-brand-green font-bold mt-0.5 shrink-0">✓</span>
                        {pas}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODELUL DE COORDONARE */}
      <section className="bg-brand-cream section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionLabel className="mb-6">Punctul unic de coordonare</SectionLabel>
              <h2 className="font-serif text-h2 text-brand-graphite mb-5">
                Nu mai repeți contextul de trei ori.
              </h2>
              <p className="font-sans text-[15px] text-brand-muted leading-relaxed mb-4">
                Modelul nostru are un singur principiu central: <strong className="text-brand-graphite">un singur interlocutor</strong> care știe totul. Nu două persoane pentru două arii. Nu un e-mail chain cu cinci oameni în copie. Un om care știe ce vrei, ce ai nevoie și ce se întâmplă.
              </p>
              <p className="font-sans text-[15px] text-brand-muted leading-relaxed mb-4">
                Ăsta e interlocutorul tău. El coordonează tot ce e în spate — furnizori, documente, comunicare, termene — și te raportează periodic ce e de știut.
              </p>
              <p className="font-sans text-[15px] text-brand-muted leading-relaxed">
                Tu comunici cu un singur om. El se ocupă de restul.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  titlu: 'Cum comunicăm',
                  corp: 'Canalul preferat de tine — email, WhatsApp, telefon. Noi ne adaptăm la ce funcționează în firma ta, nu invers.',
                },
                {
                  titlu: 'Timp de răspuns',
                  corp: 'Definit în contract, în funcție de pachet. 2–24 de ore lucrătoare pentru solicitări normale; escaladare imediată pentru urgențe.',
                },
                {
                  titlu: 'Raportare',
                  corp: 'Raport scurt, clar, lunar (sau săptămânal la Executive). Ce s-a rezolvat, ce e în curs, ce necesită decizia ta. În limbaj de antreprenor, nu de consultant.',
                },
                {
                  titlu: 'Urgențe',
                  corp: 'Există un protocol clar pentru situații urgente. Nu te lasă nimeni cu un dosar blocat pentru că „nu era în program".',
                },
              ].map((item) => (
                <div key={item.titlu} className="bg-brand-surface rounded-card p-5 border border-black/5">
                  <h3 className="font-serif text-[16px] text-brand-graphite font-bold mb-2">{item.titlu}</h3>
                  <p className="font-sans text-[14px] text-brand-muted leading-relaxed">{item.corp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DELEGAREA */}
      <section className="bg-brand-dark section-padding">
        <div className="container-max max-w-3xl">
          <h2 className="font-serif text-h2 text-white mb-6">Delegarea nu e abandon. E știință.</h2>
          <p className="font-sans text-body-lg text-white/70 leading-relaxed mb-5">
            Mulți antreprenori se tem că dacă deleagă pierd controlul. Exact invers. Cu infrastructura potrivită, ai mai mult control decât înainte — pentru că totul e urmărit, documentat și raportat.
          </p>
          <p className="font-sans text-[15px] text-white/60 leading-relaxed mb-5">
            Controlul nu înseamnă că faci tu fiecare lucru. Înseamnă că știi exact ce se întâmplă și că ai pe cineva care răspunde dacă ceva nu merge.
          </p>
          <p className="font-sans text-[15px] text-white/60 leading-relaxed">
            Ăsta e modelul nostru. Nu te scoatem din buclă. Îți eliberăm mâinile ca să te ocupi de lucrurile pe care le faci cel mai bine.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-cream section-padding">
        <div className="container-max text-center max-w-2xl">
          <h2 className="font-serif text-h2 text-brand-graphite mb-5">Gata să vedem cum arată în cazul tău?</h2>
          <p className="font-sans text-body-lg text-brand-muted mb-8">
            Diagnosticul durează 30 de minute și e gratuit. Pornim de la situația ta concretă.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">Cere o diagnoză</Button>
            <Button href="/piloni" variant="outline" size="lg">Cei 4 piloni →</Button>
          </div>
        </div>
      </section>
    </>
  )
}
