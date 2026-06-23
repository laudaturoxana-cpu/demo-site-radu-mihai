import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { BRAND_NAME } from '@/constants/brand'

export const metadata: Metadata = {
  title: 'Despre proiect',
  description:
    'Ce este infrastructura executivă externalizată, de ce există și cum diferă față de un asistent virtual sau un secretariat clasic.',
}

export default function DesprePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brand-cream pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-max max-w-3xl">
          <SectionLabel className="mb-6">Despre proiect</SectionLabel>
          <h1 className="font-serif text-h1 text-brand-graphite leading-tight">
            Am văzut de prea multe ori același tablou.
          </h1>
          <p className="font-sans text-body-lg text-brand-muted mt-5 max-w-prose">
            Un antreprenor bun, cu o idee bună, înghițit de detalii. Contracte care stau nesemnate. Termene care trec. Furnizori care nu mai răspund pentru că nu le-a trimis nimeni confirmarea. Și el, în mijloc, rezolvând lucruri pe care n-ar trebui să le rezolve.
          </p>
        </div>
      </section>

      {/* MOTIVATIA */}
      <section className="bg-brand-surface section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionLabel className="mb-6">De unde vine ideea</SectionLabel>
              <h2 className="font-serif text-h2 text-brand-graphite mb-6">
                Există un gol între ce ar trebui să facă un antreprenor și ce face în realitate.
              </h2>
              <p className="font-sans text-[15px] text-brand-muted leading-relaxed mb-4">
                Antreprenorii cu care am lucrat nu duc lipsă de viziune sau determinare. Duc lipsă de ordine în spate. Cineva trebuie să se ocupe de ce se întâmplă între ședințe, și, de obicei, acel cineva e tot antreprenorul.
              </p>
              <p className="font-sans text-[15px] text-brand-muted leading-relaxed mb-4">
                Un office manager intern ar rezolva problema, dar costă și necesită timp de integrare. Un asistent virtual execută ce i se dă, dar nu gândește ce trebuie făcut. Un consultant dă recomandări, dar nu le urmărește.
              </p>
              <p className="font-sans text-[15px] text-brand-muted leading-relaxed">
                {BRAND_NAME} e răspunsul la întrebarea: <em>&bdquo;Cine se ocupă de restul?&rdquo;</em>
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  titlu: 'Nu suntem secretariat',
                  corp: 'Secretariatul răspunde la telefon și programează întâlniri. Noi gândim ce trebuie organizat, identificăm blocajele și propunem soluții, fără să așteptăm instrucțiuni pentru fiecare detaliu.',
                },
                {
                  titlu: 'Nu suntem asistent virtual',
                  corp: 'Un asistent virtual execută sarcinile pe care le primește. Noi coordonăm activ: urmărim, escaladăm, raportăm. Diferența e între cineva care face ce i se cere și cineva care se asigură că tot ce trebuie se și întâmplă.',
                },
                {
                  titlu: 'Nu suntem consultanți',
                  corp: 'Consultanții analizează și recomandă. Noi executăm și urmărim. Propunem, dar și implementăm. Dacă ceva nu funcționează, nu scriem un raport, rezolvăm.',
                },
              ].map((item) => (
                <div key={item.titlu} className="bg-white rounded-card p-6 shadow-card border border-black/5">
                  <h3 className="font-serif text-[18px] text-brand-graphite font-bold mb-2">{item.titlu}</h3>
                  <p className="font-sans text-[14px] text-brand-muted leading-relaxed">{item.corp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FACTORUL UMAN */}
      <section className="bg-brand-dark section-padding">
        <div className="container-max max-w-3xl">
          <SectionLabel light className="mb-6" />
          <h2 className="font-serif text-h2 text-white mb-6">
            Factorul uman. Nu negociabil.
          </h2>
          <p className="font-sans text-body-lg text-white/70 leading-relaxed mb-5">
            Trăim în era automatizărilor și a tool-urilor care promit să facă totul. Și totuși, una dintre cele mai frecvente probleme pe care le auzim de la antreprenori e că nimeni nu mai înțelege contextul.
          </p>
          <p className="font-sans text-[15px] text-white/60 leading-relaxed mb-5">
            Software-ul nu știe că furnizorul X are obiceiul să întârzie cu facturile și că trebuie sunat în avans. Nu știe că partenerul Y preferă comunicarea pe WhatsApp și nu pe e-mail. Nu știe că termenul de joi e de fapt critice pentru că e înainte de auditul de vineri.
          </p>
          <p className="font-sans text-[15px] text-white/60 leading-relaxed">
            Un om știe. Și reține. Și adaptează. Diferența dintre un instrument și un partener e că partenerii înțeleg contextul.
          </p>

          <div className="mt-10 p-6 border border-white/10 rounded-card">
            <p className="font-serif text-[20px] text-brand-gold italic leading-relaxed">
              &bdquo;Un om cu număr de telefon, prezent fizic acolo unde e nevoie, care știe ce s-a întâmplat săptămâna trecută și ce urmează săptămâna viitoare.&rdquo;
            </p>
            <p className="font-sans text-[12px] text-white/30 mt-3 tracking-wide uppercase">
              Asta suntem noi.
            </p>
          </div>
        </div>
      </section>

      {/* PREZENTA FIZICA */}
      <section className="bg-brand-cream section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel className="mb-6">Prezență reală</SectionLabel>
              <h2 className="font-serif text-h2 text-brand-graphite mb-5">
                Nu exclusiv remote. Acolo unde e nevoie.
              </h2>
              <p className="font-sans text-[15px] text-brand-muted leading-relaxed mb-4">
                Unele lucruri nu se rezolvă pe Zoom. O ședință cu un furnizor dificil, un audit de documente fizice, o zi de training cu echipa pe un nou sistem de lucru, pentru astea, prezența contează.
              </p>
              <p className="font-sans text-[15px] text-brand-muted leading-relaxed mb-4">
                Pachetele Business și Executive includ prezență fizică acolo unde situația o cere. Nu în fiecare zi, dar când e necesar.
              </p>
              <p className="font-sans text-[15px] text-brand-muted leading-relaxed">
                Asta e diferența față de orice serviciu pur remote: există cineva care poate fi acolo.
              </p>
            </div>

            {/* Placeholder vizual */}
            <div className="bg-brand-surface rounded-card p-10 min-h-64 flex items-center justify-center border border-black/5 shadow-card">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-green-light border-2 border-brand-green flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-brand-green font-bold text-xl">NE</span>
                </div>
                <p className="font-sans text-[12px] text-brand-muted tracking-[0.15em] uppercase">
                  [foto reală, persoana din echipă]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-surface section-padding">
        <div className="container-max text-center max-w-2xl">
          <h2 className="font-serif text-h2 text-brand-graphite mb-5">
            Suficient de curios să vedem dacă ne potrivim?
          </h2>
          <p className="font-sans text-body-lg text-brand-muted mb-8">
            Diagnosticul durează 30 de minute și e gratuit. Fără pitch-uri. O conversație directă.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">Cere o diagnoză</Button>
            <Button href="/cum-functioneaza" variant="outline" size="lg">Cum funcționează →</Button>
          </div>
        </div>
      </section>
    </>
  )
}
