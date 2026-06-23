import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Pentru cine',
  description:
    'Profilul clientului potrivit și situațiile în care colaborarea are sens, sau nu.',
}

const pentruCine = [
  {
    titlu: 'Conduci o firmă cu 5–30 de angajați',
    corp: 'Ai depășit faza de start-up, există procese, există o echipă, dar tu tot mai ești cel care rezolvă detaliile administrative. Nu mai e scalabil.',
  },
  {
    titlu: 'Petreci prea mult timp în operațional',
    corp: 'Dacă mai mult de 2–3 ore pe zi merg pe e-mail, urmăriri, coordonare și tot ce „trebuie rezolvat", e clar că ceva trebuie schimbat.',
  },
  {
    titlu: 'Ai crescut rapid și nu ai ținut pasul intern',
    corp: 'Creșterea rapidă e frumoasă și dificilă în același timp. Echipa s-a mărit, volumul a crescut, dar procesele interne sunt tot cele de acum doi ani.',
  },
  {
    titlu: 'Vrei să delegi, dar nu ai budget pentru full-time',
    corp: 'Un office manager intern costă salariu + beneficii + risc de recrutare. Noi suntem o alternativă mai agilă și mai previzibilă din punct de vedere financiar.',
  },
  {
    titlu: 'Ești obosit să repeți contextul',
    corp: 'Ai mai mulți oameni care lucrează la lucruri diferite și tu ești cel care face legătura între ei. Asta nu e o problemă de oameni, e o problemă de structură.',
  },
  {
    titlu: 'Vrei claritate, nu mai multă informație',
    corp: 'Nu ai nevoie de mai multe rapoarte. Ai nevoie de cineva care filtrează, prioritizează și îți spune direct ce necesită atenția ta.',
  },
]

const nuPentruCine = [
  {
    titlu: 'Cauți servicii de contabilitate',
    corp: 'Nu suntem contabili și nu facem contabilitate. Lucrăm în jurul contabilității, nu în loc de ea. Dacă asta cauți, te putem îndruma spre parteneri de-ai noștri.',
  },
  {
    titlu: 'Ai nevoie de cineva full-time, integrat complet',
    corp: 'Dacă ai nevoie de un om prezent zilnic în birou, parte din cultura echipei, implicat în toate, atunci recrutarea e varianta potrivită. Nu noi.',
  },
  {
    titlu: 'Ești în faza pre-procese',
    corp: 'Dacă încă nu există nimic de organizat, nicio echipă, niciun flux de lucru, nicio activitate repetitivă, nu avem ce coordona. Venim după ce există ceva de pus în ordine.',
  },
  {
    titlu: 'Preferi să controlezi personal fiecare detaliu',
    corp: 'Colaborarea noastră funcționează pe baza delegării reale. Dacă nu ești pregătit să lași unele lucruri să se întâmple fără tine în buclă, nu vom produce rezultate și vom pierde amândoi timpul.',
  },
]

export default function PentruCinePage() {
  return (
    <>
      <section className="bg-brand-cream pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-max max-w-3xl">
          <SectionLabel className="mb-6">Potrivire</SectionLabel>
          <h1 className="font-serif text-h1 text-brand-graphite leading-tight">
            Nu suntem pentru toată lumea. Și e bine să știm asta din start.
          </h1>
          <p className="font-sans text-body-lg text-brand-muted mt-5">
            Un parteneriat care nu se potrivește e o pierdere pentru amândoi. Suntem direct cu privire la ce funcționează și ce nu, tocmai ca să nu pierdem timp cu ceva care nu are sens.
          </p>
        </div>
      </section>

      {/* PENTRU CINE DA */}
      <section className="bg-brand-surface section-padding">
        <div className="container-max">
          <div className="max-w-prose mb-10">
            <SectionLabel className="mb-5">Da, are sens</SectionLabel>
            <h2 className="font-serif text-h2 text-brand-graphite">E pentru tine dacă...</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pentruCine.map((item) => (
              <div
                key={item.titlu}
                className="bg-white rounded-card p-6 shadow-card border border-black/5 border-l-4 border-l-brand-green"
              >
                <h3 className="font-serif text-[18px] text-brand-graphite font-bold mb-3">{item.titlu}</h3>
                <p className="font-sans text-[14px] text-brand-muted leading-relaxed">{item.corp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NU PENTRU CINE */}
      <section className="bg-brand-cream section-padding">
        <div className="container-max">
          <div className="max-w-prose mb-10">
            <SectionLabel className="mb-5">Nu ne potrivim dacă</SectionLabel>
            <h2 className="font-serif text-h2 text-brand-graphite">
              E la fel de important să știi când nu suntem varianta potrivită.
            </h2>
            <p className="font-sans text-[15px] text-brand-muted mt-4">
              Preferăm să-ți spunem noi decât să descoperim după două luni că nu funcționează.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {nuPentruCine.map((item) => (
              <div
                key={item.titlu}
                className="bg-brand-surface rounded-card p-6 border border-black/5 border-l-4 border-l-brand-muted/30"
              >
                <h3 className="font-serif text-[18px] text-brand-graphite font-bold mb-3">{item.titlu}</h3>
                <p className="font-sans text-[14px] text-brand-muted leading-relaxed">{item.corp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL placeholder */}
      <section className="bg-brand-dark section-padding">
        <div className="container-max max-w-3xl">
          <p className="font-serif text-brand-gold text-[48px] leading-none mb-4 opacity-60">&ldquo;</p>
          <blockquote className="font-serif text-h2 text-white leading-snug italic mb-6">
            [testimonial real, citat specific de la un client care se potrivește profilului]
          </blockquote>
          <p className="font-sans text-[13px] text-white/40 tracking-wide uppercase">
            [Prenume Nume] · [Funcție], [Firma] ·{' '}
            <span className="italic normal-case text-white/20">⚠️ placeholder demo</span>
          </p>
        </div>
      </section>

      {/* AUTOCALIFICARE */}
      <section className="bg-brand-surface section-padding">
        <div className="container-max max-w-2xl">
          <SectionLabel className="mb-6">Primul pas</SectionLabel>
          <h2 className="font-serif text-h2 text-brand-graphite mb-5">
            Dacă te-ai regăsit mai sus, diagnosticul e gratuit.
          </h2>
          <p className="font-sans text-body-lg text-brand-muted mb-4">
            30 de minute în care îți pun câteva întrebări directe. La final îți spun sincer dacă și cum putem ajuta, sau dacă nu suntem varianta potrivită pentru tine acum.
          </p>
          <p className="font-sans text-[15px] text-brand-muted mb-8">
            Fără presiune, fără pitch. O conversație.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" size="lg">Cere o diagnoză gratuită</Button>
            <Button href="/faq" variant="outline" size="lg">Întrebări frecvente →</Button>
          </div>
        </div>
      </section>
    </>
  )
}
