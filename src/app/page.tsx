import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { piloni } from '@/data/piloni'
import { pachete } from '@/data/pachete'
import { BRAND_NAME } from '@/constants/brand'

export const metadata: Metadata = {
  title: `${BRAND_NAME} — Infrastructură executivă externalizată pentru antreprenori`,
  description:
    'Nu un secretar, nu un consultant. Un om care coordonează, organizează și ține totul la locul lui — ca tu să te ocupi de ce contează cu adevărat.',
}

const probleme = [
  'Trimiți mai multe e-mailuri ca să afli stadiul unui dosar decât ca să câștigi un client nou.',
  'Ai trei tabele Excel cu aceeași informație și niciuna nu e la zi.',
  'Furnizorul te sună pentru că nimeni nu i-a confirmat comanda.',
  'Ședințele încep fără ordine de zi și se termină fără să știe nimeni ce urmează.',
  'Contabilul cere documente pe care le-ai trimis deja de două ori.',
  'Termene de contract expirate pe care le-ai descoperit prea târziu.',
]

const diferentiatori = [
  {
    nr: '01',
    titlu: 'Un om, nu un tool',
    descriere:
      'Nu software, nu automatizare fără cap. Un om real care înțelege contextul, pune întrebări și ia decizii operaționale.',
  },
  {
    nr: '02',
    titlu: 'Punct unic de coordonare',
    descriere:
      'Un singur interlocutor pentru toate: furnizori, echipă, contabilitate, parteneri. Fără să repeți contextul de trei ori.',
  },
  {
    nr: '03',
    titlu: 'Prezență acolo unde e nevoie',
    descriere:
      'Nu exclusiv remote. Acolo unde situația o cere, suntem și fizic — pentru că unele lucruri nu se rezolvă pe Zoom.',
  },
  {
    nr: '04',
    titlu: 'Activezi rapid, scalezi ușor',
    descriere:
      'Fără recrutare, perioadă de probă sau salariu fix. Intri în viteză, ajustezi volumul în funcție de nevoie.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-brand-cream pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background decoration */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none"
          aria-hidden="true"
        >
          <svg viewBox="0 0 400 600" className="w-full h-full">
            <line x1="50" y1="0" x2="350" y2="600" stroke="#2D6A4F" strokeWidth="1" />
            <line x1="150" y1="0" x2="450" y2="600" stroke="#2D6A4F" strokeWidth="1" />
            <line x1="0" y1="100" x2="400" y2="100" stroke="#2D6A4F" strokeWidth="1" />
            <line x1="0" y1="300" x2="400" y2="300" stroke="#2D6A4F" strokeWidth="1" />
            <line x1="0" y1="500" x2="400" y2="500" stroke="#2D6A4F" strokeWidth="1" />
          </svg>
        </div>

        <div className="container-max relative">
          <SectionLabel className="mb-6">Infrastructură executivă externalizată</SectionLabel>

          <h1 className="font-serif text-display text-brand-graphite max-w-3xl leading-tight">
            Afacerea ta are nevoie de cineva care să țină totul la locul lui.
          </h1>

          <p className="font-sans text-body-lg text-brand-muted mt-6 max-w-prose">
            Nu un secretar, nu un consultant, nu un software. Un om care coordonează furnizori, urmărește termene, organizează fluxul de lucru și e prezent fizic acolo unde e nevoie — ca tu să te gândești la ce contează, nu să cauți factura aia din noiembrie.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-10">
            <Button href="/contact" size="lg">
              Cere o diagnoză gratuită
            </Button>
            <Button href="/cum-functioneaza" variant="ghost" size="lg">
              Cum funcționează →
            </Button>
          </div>

          <p className="font-sans text-sm text-brand-muted mt-5 opacity-70">
            30 de minute. Fără presiune. Îți spunem sincer dacă are sens.
          </p>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="bg-brand-surface section-padding">
        <div className="container-max">
          <div className="max-w-prose mb-12">
            <SectionLabel className="mb-5">Recunoști situația?</SectionLabel>
            <h2 className="font-serif text-h2 text-brand-graphite">
              Lucruri care scapă printre degete. Zilnic.
            </h2>
            <p className="font-sans text-body-lg text-brand-muted mt-4">
              Nu e lipsă de voință și nici de organizare personală. E lipsă de infrastructură. Cineva trebuie să se ocupe de detaliile astea — și ăl mai scump mod de a le rezolva e să te ocupi tu.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {probleme.map((p, i) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-white rounded-card p-5 shadow-subtle border border-black/5"
              >
                <span className="font-serif text-brand-gold font-bold text-[18px] leading-none mt-0.5 shrink-0">
                  —
                </span>
                <span className="font-sans text-[15px] text-brand-graphite leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>

          <p className="font-serif text-h3 text-brand-green italic mt-10">
            &bdquo;Nu e haos. E lipsă de infrastructură executivă.&rdquo;
          </p>
        </div>
      </section>

      {/* SOLUȚIA */}
      <section className="bg-brand-cream section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel className="mb-5">Ce facem noi</SectionLabel>
              <h2 className="font-serif text-h2 text-brand-graphite">
                Un punct unic de coordonare, cu un om real în centru.
              </h2>
              <p className="font-sans text-body-lg text-brand-muted mt-5">
                Nu preluăm deciziile tale. Preluăm tot ce se întâmplă în jurul lor: documentele, furnizorii, termenele, comunicarea, urmărirea. Și te raportăm periodic, pe scurt, ce e rezolvat, ce e în curs și ce necesită atenția ta.
              </p>
              <p className="font-sans text-[15px] text-brand-muted mt-4">
                Rezultatul: câteva ore pe zi înapoiate, claritate în loc de haos administrativ și un partener care știe ce se întâmplă în firma ta la fel de bine ca tine.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/despre">Citește mai mult despre noi</Button>
                <Button href="/arii" variant="outline">Arii de intervenție</Button>
              </div>
            </div>

            {/* Placeholder vizual */}
            <div className="bg-brand-surface rounded-card p-10 aspect-square flex flex-col items-center justify-center border border-black/5 shadow-card">
              <div className="w-full max-w-xs">
                {/* Schema abstractă — structură de coordonare */}
                <svg viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-70">
                  {/* Central node */}
                  <circle cx="120" cy="100" r="18" fill="#2D6A4F" />
                  <text x="120" y="105" textAnchor="middle" fill="white" fontSize="10" fontFamily="serif">NE</text>
                  {/* Outer nodes */}
                  <circle cx="40" cy="40" r="12" fill="#EAF2EE" stroke="#2D6A4F" strokeWidth="1.5"/>
                  <circle cx="200" cy="40" r="12" fill="#EAF2EE" stroke="#2D6A4F" strokeWidth="1.5"/>
                  <circle cx="40" cy="160" r="12" fill="#EAF2EE" stroke="#2D6A4F" strokeWidth="1.5"/>
                  <circle cx="200" cy="160" r="12" fill="#EAF2EE" stroke="#2D6A4F" strokeWidth="1.5"/>
                  <circle cx="120" cy="20" r="12" fill="#EAF2EE" stroke="#C9A84C" strokeWidth="1.5"/>
                  {/* Labels */}
                  <text x="40" y="44" textAnchor="middle" fill="#2D6A4F" fontSize="7" fontFamily="sans-serif">Furnizori</text>
                  <text x="200" y="44" textAnchor="middle" fill="#2D6A4F" fontSize="7" fontFamily="sans-serif">Contabil</text>
                  <text x="40" y="164" textAnchor="middle" fill="#2D6A4F" fontSize="7" fontFamily="sans-serif">Echipă</text>
                  <text x="200" y="164" textAnchor="middle" fill="#2D6A4F" fontSize="7" fontFamily="sans-serif">Parteneri</text>
                  <text x="120" y="24" textAnchor="middle" fill="#C9A84C" fontSize="7" fontFamily="sans-serif">Tu</text>
                  {/* Connecting lines */}
                  <line x1="120" y1="82" x2="50" y2="48" stroke="#2D6A4F" strokeWidth="1" strokeDasharray="4 3" opacity="0.5"/>
                  <line x1="120" y1="82" x2="190" y2="48" stroke="#2D6A4F" strokeWidth="1" strokeDasharray="4 3" opacity="0.5"/>
                  <line x1="120" y1="118" x2="50" y2="152" stroke="#2D6A4F" strokeWidth="1" strokeDasharray="4 3" opacity="0.5"/>
                  <line x1="120" y1="118" x2="190" y2="152" stroke="#2D6A4F" strokeWidth="1" strokeDasharray="4 3" opacity="0.5"/>
                  <line x1="120" y1="82" x2="120" y2="32" stroke="#C9A84C" strokeWidth="1.5" opacity="0.6"/>
                </svg>
                <p className="font-sans text-[11px] text-brand-muted text-center mt-4 tracking-wide uppercase">
                  Coordonare centralizată
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEI 4 PILONI — preview */}
      <section className="bg-brand-dark section-padding">
        <div className="container-max">
          <SectionLabel light className="mb-6" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <h2 className="font-serif text-h2 text-white max-w-lg">
              Patru roluri. Un singur om.
            </h2>
            <Link
              href="/piloni"
              className="font-sans text-[13px] text-white/50 hover:text-white/80 transition-colors shrink-0"
            >
              Citește detaliile →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {piloni.map((pilon) => (
              <div
                key={pilon.nr}
                className="bg-white/5 border border-white/10 rounded-card p-6 hover:bg-white/8 transition-colors duration-200"
              >
                <span className="font-serif text-brand-gold font-bold text-[13px] tracking-widest block mb-3">
                  {pilon.nr}
                </span>
                <h3 className="font-serif text-[20px] text-white font-bold mb-2">{pilon.titlu}</h3>
                <p className="font-sans text-[13px] text-white/50 leading-relaxed">{pilon.subtitlu}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUM FUNCȚIONEAZĂ — 3 pași */}
      <section className="bg-brand-cream section-padding">
        <div className="container-max">
          <div className="max-w-prose mb-14">
            <SectionLabel className="mb-5">Procesul</SectionLabel>
            <h2 className="font-serif text-h2 text-brand-graphite">De la diagnoză la control în 30 de zile.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                nr: '01',
                titlu: 'Diagnosticul',
                sub: '30 min, gratuit',
                body: 'Ne cunoaștem. Îți pun câteva întrebări directe despre ce ocupă cel mai mult timp și ce scapă cel mai des. Nu e consultanță, e o conversație sinceră — după care îți spun ce aș face în locul tău.',
              },
              {
                nr: '02',
                titlu: 'Setup-ul',
                sub: 'Săptămânile 1–2',
                body: 'Audităm procesele existente, înțelegem cum lucrezi, ce sisteme folosești și ce arii acoperim. Stabilim canalele de comunicare, fluxul de raportare și primele priorități. Fără haos în tranziție.',
              },
              {
                nr: '03',
                titlu: 'Controlul',
                sub: 'Continuu, cu raport periodic',
                body: 'Operăm autonom în ariile agreate, cu un raport clar la finalul fiecărei luni. Nu aștepți să întrebi — îți trimitem noi. Și dacă apare ceva urgent, ești primul care știe.',
              },
            ].map((step) => (
              <div key={step.nr} className="flex flex-col">
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-serif text-brand-gold font-bold text-[28px] leading-none">{step.nr}</span>
                  <div className="h-px flex-1 bg-brand-gold/20" />
                </div>
                <h3 className="font-serif text-h3 text-brand-graphite mb-1">{step.titlu}</h3>
                <p className="font-sans text-[12px] font-semibold text-brand-green tracking-wide uppercase mb-3">{step.sub}</p>
                <p className="font-sans text-[15px] text-brand-muted leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button href="/cum-functioneaza" variant="outline">
              Cum arată primele 30 de zile →
            </Button>
          </div>
        </div>
      </section>

      {/* DIFERENTIATORI */}
      <section className="bg-brand-surface section-padding">
        <div className="container-max">
          <div className="max-w-prose mb-12">
            <SectionLabel className="mb-5">De ce noi</SectionLabel>
            <h2 className="font-serif text-h2 text-brand-graphite">
              Ce ne face diferiți față de orice alt serviciu administrativ.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {diferentiatori.map((d) => (
              <div key={d.nr} className="bg-white rounded-card p-7 shadow-card border border-black/5">
                <span className="font-serif text-brand-gold font-bold text-[13px] tracking-widest block mb-3">{d.nr}</span>
                <h3 className="font-serif text-h3 text-brand-graphite mb-3">{d.titlu}</h3>
                <p className="font-sans text-[15px] text-brand-muted leading-relaxed">{d.descriere}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACHETE — preview */}
      <section className="bg-brand-cream section-padding">
        <div className="container-max">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionLabel className="mb-5">Pachete</SectionLabel>
              <h2 className="font-serif text-h2 text-brand-graphite">Care ți se potrivește?</h2>
            </div>
            <Link href="/pachete" className="font-sans text-[13px] text-brand-muted hover:text-brand-graphite transition-colors shrink-0">
              Comparație completă →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pachete.map((pachet) => (
              <div
                key={pachet.slug}
                className={`rounded-card p-7 flex flex-col ${
                  pachet.highlight
                    ? 'bg-brand-green text-white shadow-elevated'
                    : 'bg-white border border-black/5 shadow-card'
                }`}
              >
                <span
                  className={`font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-2 ${
                    pachet.highlight ? 'text-white/60' : 'text-brand-muted'
                  }`}
                >
                  {pachet.highlight ? '★ Recomandat' : 'Pachet'}
                </span>
                <h3
                  className={`font-serif text-h3 font-bold mb-1 ${
                    pachet.highlight ? 'text-white' : 'text-brand-graphite'
                  }`}
                >
                  {pachet.titlu}
                </h3>
                <p
                  className={`font-sans text-[13px] mb-5 ${
                    pachet.highlight ? 'text-white/70' : 'text-brand-muted'
                  }`}
                >
                  {pachet.subtitlu}
                </p>
                <p
                  className={`font-sans text-[14px] leading-relaxed mb-6 flex-1 ${
                    pachet.highlight ? 'text-white/80' : 'text-brand-muted'
                  }`}
                >
                  {pachet.descriere}
                </p>
                <Button
                  href="/contact"
                  variant={pachet.highlight ? 'outline-light' : 'outline'}
                  className="mt-auto"
                >
                  {pachet.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PENTRU CINE — preview */}
      <section className="bg-brand-surface section-padding">
        <div className="container-max">
          <div className="max-w-prose mb-12">
            <SectionLabel className="mb-5">Potrivire</SectionLabel>
            <h2 className="font-serif text-h2 text-brand-graphite">E pentru tine dacă...</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="font-sans text-[12px] font-semibold text-brand-green tracking-[0.2em] uppercase mb-4">Da, are sens</p>
              <ul className="flex flex-col gap-3">
                {[
                  'Conduci o firmă cu 5–30 de angajați și tu ești cel care rezolvă tot ce e administrativ',
                  'Petreci mai mult de 2–3 ore pe zi pe e-mail, coordonare și urmărire',
                  'Ai crescut rapid și procesele interne nu au ținut pasul cu echipa',
                  'Vrei să delegi, dar nu ai budget pentru un angajat full-time dedicat',
                  'Ești obosit să repeți același context de trei ori unor oameni diferiți',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans text-[15px] text-brand-graphite">
                    <span className="text-brand-green font-bold mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-sans text-[12px] font-semibold text-brand-muted tracking-[0.2em] uppercase mb-4">Nu ne potrivim dacă</p>
              <ul className="flex flex-col gap-3">
                {[
                  'Cauți un serviciu de contabilitate sau consultanță fiscală',
                  'Ai nevoie de cineva full-time, prezent zilnic, integrat complet în echipă',
                  'Ești în faza de start-up fără procese definite (venim după ce există ceva de organizat)',
                  'Preferi să nu delegi și să controlezi fiecare detaliu personal',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans text-[15px] text-brand-muted">
                    <span className="text-brand-muted/50 font-bold mt-0.5 shrink-0">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <Button href="/pentru-cine" variant="outline">
              Citește mai mult despre potrivire →
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL placeholder */}
      <section className="bg-brand-dark section-padding">
        <div className="container-max max-w-3xl">
          <div className="text-center">
            <span className="font-serif text-brand-gold text-[60px] leading-none block -mb-4 opacity-60">&ldquo;</span>
            <blockquote className="font-serif text-h2 text-white leading-snug italic">
              [testimonial real — citat din experiența unui client, în propriile lui cuvinte]
            </blockquote>
            <div className="mt-8 font-sans text-[13px] text-white/40 tracking-wide uppercase">
              [Prenume Nume] · [Funcție], [Firma] ·{' '}
              <span className="italic normal-case not-italic text-white/20">⚠️ placeholder demo</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-brand-cream section-padding">
        <div className="container-max max-w-2xl text-center">
          <SectionLabel className="mb-6 justify-center">Primul pas</SectionLabel>
          <h2 className="font-serif text-h1 text-brand-graphite">
            30 de minute care schimbă perspectiva.
          </h2>
          <p className="font-sans text-body-lg text-brand-muted mt-5 max-w-prose mx-auto">
            Diagnosticul e gratuit și fără angajament. Îți pun câteva întrebări, ascult, și îți spun sincer — nici mai mult, nici mai puțin — dacă și cum putem ajuta.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              Cere o diagnoză gratuită
            </Button>
            <Button href="/faq" variant="ghost" size="lg">
              Întrebări frecvente
            </Button>
          </div>
        </div>
      </section>

      {/* SCHEMA MARKUP Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: BRAND_NAME,
            description:
              'Infrastructură executivă externalizată — coordonare, organizare și control administrativ pentru antreprenori și IMM-uri.',
            url: 'https://nexus-executiv.ro',
            areaServed: { '@type': 'Country', name: 'Romania' },
            serviceType: 'Business Administration Outsourcing',
            offers: {
              '@type': 'AggregateOffer',
              offerCount: 3,
              offers: [
                { '@type': 'Offer', name: 'Pachet Start' },
                { '@type': 'Offer', name: 'Pachet Business' },
                { '@type': 'Offer', name: 'Pachet Executive' },
              ],
            },
          }),
        }}
      />
    </>
  )
}
