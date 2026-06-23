import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Animate } from '@/components/ui/Animate'
import { piloni } from '@/data/piloni'
import { pachete } from '@/data/pachete'
import { BRAND_NAME } from '@/constants/brand'

export const metadata: Metadata = {
  title: `${BRAND_NAME} — Infrastructură executivă externalizată pentru antreprenori`,
  description:
    'Nu un secretar, nu un consultant. Un om care coordonează, organizează și ține totul la locul lui — ca tu să te ocupi de ce contează cu adevărat.',
}

const probleme = [
  'Trimiți 12 emailuri ca să afli stadiul unui dosar.',
  'Ai trei tabele Excel cu aceeași informație și niciuna nu e la zi.',
  'Furnizorul te sună pentru că nimeni nu i-a confirmat comanda.',
  'Ședințele se termină fără să știe nimeni ce urmează.',
  'Contabilul cere documente pe care le-ai trimis deja de două ori.',
  'Termene de contract expirate pe care le-ai descoperit prea târziu.',
]

const stats = [
  { valoare: '30', unitate: 'min', label: 'Diagnosticul gratuit' },
  { valoare: '10', unitate: 'arii', label: 'De intervenție' },
  { valoare: '3', unitate: 'pachete', label: 'Start → Executive' },
  { valoare: '1', unitate: 'om', label: 'Punct unic de contact' },
]

const diferentiatori = [
  {
    nr: '01',
    titlu: 'Un om, nu un tool',
    descriere: 'Nu software, nu automatizare fără cap. Un om real care înțelege contextul, pune întrebări și ia decizii operaționale fără să aștepte instrucțiuni.',
  },
  {
    nr: '02',
    titlu: 'Punct unic de coordonare',
    descriere: 'Un singur interlocutor pentru furnizori, echipă, contabilitate, parteneri. Fără să repeți contextul de trei ori și fără să faci tu legătura.',
  },
  {
    nr: '03',
    titlu: 'Prezență acolo unde e nevoie',
    descriere: 'Nu exclusiv remote. La pachetele Business și Executive, suntem și fizic — pentru că unele lucruri nu se rezolvă pe Zoom.',
  },
  {
    nr: '04',
    titlu: 'Activezi rapid, scalezi ușor',
    descriere: 'Fără recrutare, perioadă de probă sau salariu fix. Intri în viteză, ajustezi volumul în funcție de nevoie, ieși fără complicații.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[92vh] md:min-h-[88vh] flex items-center bg-brand-cream overflow-hidden">
        {/* Dot grid background */}
        <div className="absolute inset-0 dot-bg opacity-60 pointer-events-none" aria-hidden="true" />

        {/* Decorative shape top-right */}
        <div
          className="absolute -top-20 -right-20 w-64 h-64 md:w-96 md:h-96 rounded-full opacity-[0.07] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2D6A4F 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-72 rounded-full opacity-[0.05] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="container-max relative w-full py-24 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — copy */}
            <div>
              <Animate>
                <div className="inline-flex items-center gap-2.5 bg-brand-green-light border border-brand-green/20 rounded-full px-4 py-2 mb-7">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse-slow" />
                  <span className="font-sans text-[12px] font-semibold text-brand-green tracking-wide uppercase">
                    Infrastructură executivă · România
                  </span>
                </div>
              </Animate>

              <Animate delay={80}>
                <h1 className="font-serif text-display text-brand-graphite leading-[1.07]">
                  Afacerea ta are nevoie de cineva care să{' '}
                  <span className="text-gradient-green">țină totul la locul lui.</span>
                </h1>
              </Animate>

              <Animate delay={160}>
                <p className="font-sans text-body-lg text-brand-muted mt-6 max-w-[520px]">
                  Nu un secretar, nu un consultant. Un om care coordonează furnizori, urmărește termene, organizează fluxul de lucru și e prezent acolo unde e nevoie — ca tu să te gândești la ce contează.
                </p>
              </Animate>

              <Animate delay={240}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-9">
                  <Button href="/contact" size="lg" className="shadow-green w-full sm:w-auto justify-center">
                    Cere o diagnoză gratuită →
                  </Button>
                  <Button href="/cum-functioneaza" variant="ghost" size="lg" className="w-full sm:w-auto justify-center">
                    Cum funcționează
                  </Button>
                </div>
                <p className="font-sans text-sm text-brand-muted/60 mt-4">
                  30 de minute · Gratuit · Fără angajament
                </p>
              </Animate>
            </div>

            {/* Right — diagram vizual */}
            <Animate delay={200} direction="left" className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Card central */}
                <div className="bg-white rounded-xl2 shadow-elevated border border-black/5 p-7 relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-brand-green flex items-center justify-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="3" fill="white" />
                        <line x1="8" y1="1" x2="8" y2="4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="8" y1="12" x2="8" y2="15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="1" y1="8" x2="4" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="12" y1="8" x2="15" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-serif font-bold text-brand-graphite text-[15px]">Punct unic de coordonare</p>
                      <p className="font-sans text-[12px] text-brand-muted">Toate firele, un singur om</p>
                    </div>
                  </div>

                  {/* Mini status items */}
                  {[
                    { label: 'Furnizori coordonați', color: 'bg-brand-green' },
                    { label: 'Termene urmărite', color: 'bg-brand-gold' },
                    { label: 'Documente organizate', color: 'bg-brand-green' },
                    { label: 'Raport lunar trimis', color: 'bg-brand-green' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 py-2.5 border-b border-brand-surface last:border-0">
                      <div className={`w-2 h-2 rounded-full ${item.color} shrink-0`} />
                      <span className="font-sans text-[13px] text-brand-graphite flex-1">{item.label}</span>
                      <span className="font-sans text-[11px] text-brand-green font-semibold">✓</span>
                    </div>
                  ))}
                </div>

                {/* Floating badge TU */}
                <div className="absolute -top-4 -right-4 bg-brand-gold text-white font-serif font-bold text-[12px] px-4 py-2 rounded-full shadow-card tracking-wide uppercase">
                  Tu — liber
                </div>

                {/* Floating mini card bottom-left */}
                <div className="absolute -bottom-5 -left-5 bg-brand-graphite text-white rounded-xl px-4 py-3 shadow-elevated">
                  <p className="font-sans text-[11px] text-white/50 mb-0.5">Răspuns la</p>
                  <p className="font-serif text-[20px] font-bold text-white leading-none">2h</p>
                  <p className="font-sans text-[10px] text-white/50 mt-0.5">în program</p>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* ═══════ STATS STRIP ═══════ */}
      <section className="bg-green-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-10 pointer-events-none" aria-hidden="true" />
        <div className="container-max relative py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <Animate key={i} delay={i * 80}>
                <div className="text-center md:text-left">
                  <div className="flex items-baseline gap-1.5 justify-center md:justify-start">
                    <span className="font-serif font-bold text-white leading-none" style={{ fontSize: 'clamp(32px,4vw,48px)' }}>
                      {stat.valoare}
                    </span>
                    <span className="font-sans text-brand-gold font-semibold text-[13px] uppercase tracking-wide">
                      {stat.unitate}
                    </span>
                  </div>
                  <p className="font-sans text-white/60 text-[12px] mt-1 tracking-wide">{stat.label}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PROBLEMA ═══════ */}
      <section className="bg-brand-surface section-padding">
        <div className="container-max">
          <div className="max-w-2xl mb-12">
            <Animate>
              <SectionLabel className="mb-5">Recunoști situația?</SectionLabel>
            </Animate>
            <Animate delay={80}>
              <h2 className="font-serif text-h2 text-brand-graphite">
                Lucruri care scapă printre degete. Zilnic.
              </h2>
            </Animate>
            <Animate delay={140}>
              <p className="font-sans text-body-lg text-brand-muted mt-4">
                Nu e lipsă de voință. E lipsă de infrastructură. Cineva trebuie să se ocupe de detaliile astea — și cel mai scump mod e să te ocupi tu.
              </p>
            </Animate>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {probleme.map((p, i) => (
              <Animate key={i} delay={i * 60}>
                <div className="group flex items-start gap-4 bg-white rounded-card p-5 shadow-subtle border border-black/[0.05] card-hover h-full">
                  <span className="font-serif text-brand-gold/70 font-bold text-[22px] leading-none mt-0.5 shrink-0 group-hover:text-brand-gold transition-colors">
                    —
                  </span>
                  <span className="font-sans text-[14px] text-brand-graphite leading-relaxed">{p}</span>
                </div>
              </Animate>
            ))}
          </div>

          <Animate delay={200}>
            <div className="mt-10 inline-flex items-center gap-3 bg-brand-green-light border border-brand-green/20 rounded-card px-6 py-4">
              <span className="font-serif text-brand-green font-bold text-[18px]">&ldquo;</span>
              <p className="font-serif text-[17px] text-brand-green italic">
                Nu e haos. E lipsă de infrastructură executivă.
              </p>
            </div>
          </Animate>
        </div>
      </section>

      {/* ═══════ SOLUTIA ═══════ */}
      <section className="bg-brand-cream section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Animate>
              <div>
                <SectionLabel className="mb-5">Ce facem noi</SectionLabel>
                <h2 className="font-serif text-h2 text-brand-graphite">
                  Un punct unic de coordonare, cu un om real în centru.
                </h2>
                <p className="font-sans text-body-lg text-brand-muted mt-5">
                  Nu preluăm deciziile tale. Preluăm tot ce se întâmplă în jurul lor: documentele, furnizorii, termenele, comunicarea, urmărirea.
                </p>
                <p className="font-sans text-[15px] text-brand-muted mt-4">
                  Rezultatul: câteva ore pe zi înapoiate, claritate în loc de haos administrativ și un partener care știe ce se întâmplă în firma ta la fel de bine ca tine.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button href="/despre">Citește mai mult</Button>
                  <Button href="/arii" variant="outline">Arii de intervenție</Button>
                </div>
              </div>
            </Animate>

            {/* Diagram */}
            <Animate delay={120} direction="left">
              <div className="relative">
                <div className="bg-brand-surface rounded-xl2 p-8 md:p-10 border border-black/[0.05] shadow-card">
                  <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto">
                    {/* Center node */}
                    <circle cx="140" cy="110" r="26" fill="#2D6A4F" />
                    <circle cx="140" cy="110" r="32" fill="none" stroke="#2D6A4F" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
                    <text x="140" y="106" textAnchor="middle" fill="white" fontSize="9" fontFamily="serif" fontWeight="700">NEXUS</text>
                    <text x="140" y="118" textAnchor="middle" fill="white" fontSize="7" fontFamily="sans-serif" opacity="0.8">EXEC</text>

                    {/* Outer nodes */}
                    {[
                      { cx: 48, cy: 44, label: 'Furnizori', color: '#EAF2EE', stroke: '#2D6A4F' },
                      { cx: 232, cy: 44, label: 'Contabil', color: '#EAF2EE', stroke: '#2D6A4F' },
                      { cx: 48, cy: 176, label: 'Echipă', color: '#EAF2EE', stroke: '#2D6A4F' },
                      { cx: 232, cy: 176, label: 'Parteneri', color: '#EAF2EE', stroke: '#2D6A4F' },
                      { cx: 140, cy: 18, label: 'Tu', color: '#FFF8E7', stroke: '#C9A84C' },
                    ].map((node, i) => (
                      <g key={i}>
                        <circle cx={node.cx} cy={node.cy} r="16" fill={node.color} stroke={node.stroke} strokeWidth="1.5" />
                        <text x={node.cx} y={node.cy + 4} textAnchor="middle" fill={node.stroke} fontSize="7" fontFamily="sans-serif" fontWeight="600">
                          {node.label}
                        </text>
                      </g>
                    ))}

                    {/* Connecting dashed lines */}
                    {[
                      [112, 90, 64, 56], [168, 90, 216, 56],
                      [112, 130, 64, 164], [168, 130, 216, 164],
                    ].map(([x1, y1, x2, y2], i) => (
                      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2D6A4F" strokeWidth="1" strokeDasharray="5 4" opacity="0.35" />
                    ))}
                    {/* Gold line to TU */}
                    <line x1="140" y1="84" x2="140" y2="34" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7" />
                  </svg>
                  <p className="font-sans text-[11px] text-brand-muted text-center mt-4 tracking-widest uppercase">
                    Coordonare centralizată
                  </p>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* ═══════ CEI 4 PILONI ═══════ */}
      <section className="bg-brand-dark section-padding relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-[0.06] pointer-events-none" aria-hidden="true" />
        <div className="container-max relative">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
            <Animate>
              <div>
                <SectionLabel light className="mb-4" />
                <h2 className="font-serif text-h2 text-white">Patru roluri. Un singur om.</h2>
              </div>
            </Animate>
            <Animate>
              <Link href="/piloni" className="font-sans text-[13px] text-white/40 hover:text-white/70 transition-colors shrink-0">
                Detalii complete →
              </Link>
            </Animate>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {piloni.map((pilon, i) => (
              <Animate key={pilon.nr} delay={i * 80}>
                <div className="group bg-white/[0.04] border border-white/[0.08] rounded-card p-6 hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 h-full">
                  <span className="font-serif text-brand-gold font-bold text-[12px] tracking-widest block mb-4">
                    {pilon.nr}
                  </span>
                  <h3 className="font-serif text-[20px] text-white font-bold mb-2 group-hover:text-brand-gold transition-colors duration-300">
                    {pilon.titlu}
                  </h3>
                  <p className="font-sans text-[13px] text-white/45 leading-relaxed">{pilon.subtitlu}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PROCESS ═══════ */}
      <section className="bg-brand-cream section-padding">
        <div className="container-max">
          <div className="max-w-xl mb-12">
            <Animate>
              <SectionLabel className="mb-5">Procesul</SectionLabel>
            </Animate>
            <Animate delay={80}>
              <h2 className="font-serif text-h2 text-brand-graphite">De la diagnoză la control în 30 de zile.</h2>
            </Animate>
          </div>

          <div className="relative">
            {/* Connecting line — desktop only */}
            <div className="hidden md:block absolute top-7 left-[calc(16.6%+16px)] right-[calc(16.6%+16px)] h-px bg-gradient-to-r from-brand-gold/30 via-brand-gold/60 to-brand-gold/30" aria-hidden="true" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              {[
                {
                  nr: '01',
                  titlu: 'Diagnosticul',
                  sub: '30 min · gratuit',
                  body: 'O conversație directă — nu un pitch. Îți pun câteva întrebări, ascult și îți spun sincer dacă și cum putem ajuta.',
                },
                {
                  nr: '02',
                  titlu: 'Setup-ul',
                  sub: 'Săptămânile 1–2',
                  body: 'Audităm procesele existente, stabilim canalele de comunicare și primele priorități. Fără haos în tranziție.',
                },
                {
                  nr: '03',
                  titlu: 'Controlul',
                  sub: 'Continuu, cu raport',
                  body: 'Operăm autonom în ariile agreate, cu un raport clar la finalul fiecărei luni. Nu aștepți să întrebi — îți spunem noi.',
                },
              ].map((step, i) => (
                <Animate key={step.nr} delay={i * 120}>
                  <div className="flex flex-col">
                    <div className="relative flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-brand-green-light border-2 border-brand-green/20 flex items-center justify-center shrink-0">
                        <span className="font-serif text-brand-green font-bold text-[18px]">{step.nr}</span>
                      </div>
                    </div>
                    <h3 className="font-serif text-h3 text-brand-graphite mb-1">{step.titlu}</h3>
                    <p className="font-sans text-[11px] font-bold text-brand-green tracking-[0.15em] uppercase mb-3">{step.sub}</p>
                    <p className="font-sans text-[14px] text-brand-muted leading-relaxed">{step.body}</p>
                  </div>
                </Animate>
              ))}
            </div>
          </div>

          <Animate delay={100}>
            <div className="mt-12">
              <Button href="/cum-functioneaza" variant="outline">
                Cum arată primele 30 de zile →
              </Button>
            </div>
          </Animate>
        </div>
      </section>

      {/* ═══════ DIFERENTIATORI ═══════ */}
      <section className="bg-brand-surface section-padding">
        <div className="container-max">
          <div className="max-w-xl mb-12">
            <Animate>
              <SectionLabel className="mb-5">De ce noi</SectionLabel>
            </Animate>
            <Animate delay={80}>
              <h2 className="font-serif text-h2 text-brand-graphite">Ce ne face diferiți.</h2>
            </Animate>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {diferentiatori.map((d, i) => (
              <Animate key={d.nr} delay={i * 70}>
                <div className="group bg-white rounded-card p-7 shadow-card border border-black/[0.05] card-hover">
                  <span className="font-serif text-brand-gold font-bold text-[13px] tracking-widest block mb-4">{d.nr}</span>
                  <h3 className="font-serif text-h3 text-brand-graphite mb-3 group-hover:text-brand-green transition-colors duration-300">
                    {d.titlu}
                  </h3>
                  <p className="font-sans text-[14px] text-brand-muted leading-relaxed">{d.descriere}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PACHETE PREVIEW ═══════ */}
      <section className="bg-brand-cream section-padding">
        <div className="container-max">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
            <Animate>
              <div>
                <SectionLabel className="mb-5">Pachete</SectionLabel>
                <h2 className="font-serif text-h2 text-brand-graphite">Care ți se potrivește?</h2>
              </div>
            </Animate>
            <Animate>
              <Link href="/pachete" className="font-sans text-[13px] text-brand-muted hover:text-brand-graphite transition-colors shrink-0">
                Comparație completă →
              </Link>
            </Animate>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pachete.map((pachet, i) => (
              <Animate key={pachet.slug} delay={i * 80}>
                <div
                  className={`rounded-card flex flex-col h-full transition-all duration-300 ${
                    pachet.highlight
                      ? 'bg-brand-green shadow-green ring-1 ring-brand-green/30 scale-[1.02] md:scale-[1.04]'
                      : 'bg-white border border-black/[0.06] shadow-card hover:-translate-y-1 hover:shadow-elevated'
                  }`}
                >
                  {pachet.highlight && (
                    <div className="px-7 pt-4 pb-0">
                      <span className="inline-flex items-center gap-1.5 bg-brand-gold/20 text-brand-gold font-sans text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
                        ★ Cel mai ales
                      </span>
                    </div>
                  )}
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className={`font-serif text-h2 font-bold mb-1 ${pachet.highlight ? 'text-white' : 'text-brand-graphite'}`}>
                      {pachet.titlu}
                    </h3>
                    <p className={`font-sans text-[13px] mb-5 ${pachet.highlight ? 'text-white/65' : 'text-brand-muted'}`}>
                      {pachet.subtitlu}
                    </p>
                    <p className={`font-sans text-[14px] leading-relaxed mb-6 flex-1 ${pachet.highlight ? 'text-white/80' : 'text-brand-muted'}`}>
                      {pachet.descriere}
                    </p>
                    <Button
                      href="/contact"
                      variant={pachet.highlight ? 'outline-light' : 'outline'}
                      className="mt-auto w-full justify-center"
                    >
                      Cere o diagnoză
                    </Button>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PENTRU CINE ═══════ */}
      <section className="bg-brand-surface section-padding">
        <div className="container-max">
          <Animate>
            <div className="max-w-xl mb-12">
              <SectionLabel className="mb-5">Potrivire</SectionLabel>
              <h2 className="font-serif text-h2 text-brand-graphite">E pentru tine dacă...</h2>
            </div>
          </Animate>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <Animate>
              <div>
                <p className="font-sans text-[11px] font-bold text-brand-green tracking-[0.2em] uppercase mb-5">Da, are sens</p>
                <ul className="flex flex-col gap-3.5">
                  {[
                    'Conduci o firmă cu 5–30 de angajați și tu ești cel care rezolvă tot administrativul',
                    'Petreci mai mult de 2–3 ore pe zi pe email, coordonare și urmărire',
                    'Ai crescut rapid și procesele interne nu au ținut pasul cu echipa',
                    'Vrei să delegi, dar nu ai budget pentru un angajat full-time dedicat',
                    'Ești obosit să repeți același context de trei ori unor oameni diferiți',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-sans text-[14px] text-brand-graphite leading-snug">
                      <span className="w-5 h-5 rounded-full bg-brand-green-light border border-brand-green/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-brand-green text-[10px] font-bold">✓</span>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Animate>

            <Animate delay={120}>
              <div>
                <p className="font-sans text-[11px] font-bold text-brand-muted tracking-[0.2em] uppercase mb-5">Nu ne potrivim dacă</p>
                <ul className="flex flex-col gap-3.5">
                  {[
                    'Cauți servicii de contabilitate sau consultanță fiscală',
                    'Ai nevoie de cineva full-time, integrat complet în echipă',
                    'Ești în faza pre-procese (venim după ce există ceva de organizat)',
                    'Preferi să controlezi personal fiecare detaliu',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-sans text-[14px] text-brand-muted leading-snug">
                      <span className="w-5 h-5 rounded-full bg-brand-surface border border-black/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-brand-muted/60 text-[10px] font-bold">×</span>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <Button href="/pentru-cine" variant="outline" size="sm">
                    Citește mai mult despre potrivire →
                  </Button>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIAL ═══════ */}
      <section className="bg-brand-dark section-padding relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-[0.05] pointer-events-none" aria-hidden="true" />
        <div className="container-max relative max-w-3xl">
          <Animate>
            <div className="text-center">
              <span className="font-serif text-brand-gold text-[72px] leading-none block -mb-4 opacity-40">&ldquo;</span>
              <blockquote className="font-serif text-h2 text-white leading-snug italic">
                [testimonial real — citat din experiența unui client, în propriile lui cuvinte]
              </blockquote>
              <div className="mt-8 flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="font-serif text-white/40 font-bold text-[14px]">?</span>
                </div>
                <p className="font-sans text-[13px] text-white/35 tracking-wide">
                  [Prenume Nume · Funcție, Firma] &nbsp;·&nbsp; <span className="italic text-white/20">⚠️ placeholder demo</span>
                </p>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* ═══════ CTA FINAL ═══════ */}
      <section className="bg-brand-cream section-padding">
        <div className="container-max max-w-2xl text-center">
          <Animate>
            <SectionLabel className="mb-6 justify-center">Primul pas</SectionLabel>
          </Animate>
          <Animate delay={80}>
            <h2 className="font-serif text-h1 text-brand-graphite">
              30 de minute care schimbă perspectiva.
            </h2>
          </Animate>
          <Animate delay={140}>
            <p className="font-sans text-body-lg text-brand-muted mt-5 max-w-prose mx-auto">
              Diagnosticul e gratuit și fără angajament. Îți pun câteva întrebări, ascult, și îți spun sincer — nici mai mult, nici mai puțin — dacă și cum putem ajuta.
            </p>
          </Animate>
          <Animate delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg" className="shadow-green w-full sm:w-auto justify-center">
                Cere o diagnoză gratuită →
              </Button>
              <Button href="/faq" variant="ghost" size="lg" className="w-full sm:w-auto justify-center">
                Întrebări frecvente
              </Button>
            </div>
          </Animate>
        </div>
      </section>

      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: BRAND_NAME,
            description: 'Infrastructură executivă externalizată — coordonare, organizare și control administrativ pentru antreprenori și IMM-uri.',
            url: 'https://nexus-executiv.ro',
            areaServed: { '@type': 'Country', name: 'Romania' },
            serviceType: 'Business Administration Outsourcing',
          }),
        }}
      />
    </>
  )
}
