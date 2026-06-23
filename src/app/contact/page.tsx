'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/constants/brand'

interface FormData {
  nume: string
  firma: string
  telefon: string
  email: string
  mesaj: string
}

interface FormErrors {
  nume?: string
  email?: string
  mesaj?: string
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.nume.trim()) errors.nume = 'Te rugăm să introduci numele tău.'
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = 'Te rugăm să introduci un email valid.'
  if (!data.mesaj.trim() || data.mesaj.trim().length < 20)
    errors.mesaj = 'Spune-ne câteva cuvinte despre situația ta (minim 20 caractere).'
  return errors
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ nume: '', firma: '', telefon: '', email: '', mesaj: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const erori = validate(form)
    if (Object.keys(erori).length > 0) {
      setErrors(erori)
      return
    }
    // Demo — fără backend real
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-brand-cream flex items-center justify-center pt-20">
        <div className="container-max max-w-2xl text-center">
          <div className="w-16 h-16 rounded-full bg-brand-green-light border-2 border-brand-green flex items-center justify-center mx-auto mb-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="font-serif text-h1 text-brand-graphite mb-5">Am primit mesajul tău.</h1>
          <p className="font-sans text-body-lg text-brand-muted mb-3">
            Îți răspundem în maximum 24 de ore lucrătoare pentru a stabili diagnosticul gratuit.
          </p>
          <p className="font-sans text-[15px] text-brand-muted mb-10">
            Dacă ai întrebări urgente, ne poți contacta direct la{' '}
            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="text-brand-green underline">
              {CONTACT_PHONE}
            </a>.
          </p>
          <Button href="/" variant="outline">Înapoi acasă</Button>
        </div>
      </div>
    )
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3.5 rounded-btn border font-sans text-[15px] text-brand-graphite bg-white placeholder:text-brand-muted/40 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-brand-surface hover:border-brand-muted/30'
    }`

  return (
    <>
      <section className="bg-brand-cream pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-max max-w-3xl">
          <SectionLabel className="mb-6">Cere o diagnoză</SectionLabel>
          <h1 className="font-serif text-h1 text-brand-graphite leading-tight">
            30 de minute. Gratuit. Fără angajament.
          </h1>
          <p className="font-sans text-body-lg text-brand-muted mt-5">
            Completează formularul de mai jos și te contactăm în maximum 24 de ore pentru a programa convorbirea. Nu e o prezentare comercială — e o conversație sinceră despre situația ta.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nume" className="block font-sans text-[12px] font-semibold text-brand-graphite tracking-wide uppercase mb-2">
                      Nume <span className="text-brand-green">*</span>
                    </label>
                    <input
                      id="nume"
                      name="nume"
                      type="text"
                      value={form.nume}
                      onChange={handleChange}
                      placeholder="Ion Popescu"
                      autoComplete="name"
                      className={inputClass('nume')}
                    />
                    {errors.nume && <p className="mt-1.5 font-sans text-[12px] text-red-500">{errors.nume}</p>}
                  </div>
                  <div>
                    <label htmlFor="firma" className="block font-sans text-[12px] font-semibold text-brand-graphite tracking-wide uppercase mb-2">
                      Firma
                    </label>
                    <input
                      id="firma"
                      name="firma"
                      type="text"
                      value={form.firma}
                      onChange={handleChange}
                      placeholder="Firma SRL"
                      autoComplete="organization"
                      className="w-full px-4 py-3.5 rounded-btn border border-brand-surface hover:border-brand-muted/30 font-sans text-[15px] text-brand-graphite bg-white placeholder:text-brand-muted/40 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block font-sans text-[12px] font-semibold text-brand-graphite tracking-wide uppercase mb-2">
                      Email <span className="text-brand-green">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ion@firma.ro"
                      autoComplete="email"
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="mt-1.5 font-sans text-[12px] text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="telefon" className="block font-sans text-[12px] font-semibold text-brand-graphite tracking-wide uppercase mb-2">
                      Telefon
                    </label>
                    <input
                      id="telefon"
                      name="telefon"
                      type="tel"
                      value={form.telefon}
                      onChange={handleChange}
                      placeholder="+40 700 000 000"
                      autoComplete="tel"
                      className="w-full px-4 py-3.5 rounded-btn border border-brand-surface hover:border-brand-muted/30 font-sans text-[15px] text-brand-graphite bg-white placeholder:text-brand-muted/40 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mesaj" className="block font-sans text-[12px] font-semibold text-brand-graphite tracking-wide uppercase mb-2">
                    Descrie pe scurt situația <span className="text-brand-green">*</span>
                  </label>
                  <textarea
                    id="mesaj"
                    name="mesaj"
                    rows={5}
                    value={form.mesaj}
                    onChange={handleChange}
                    placeholder="Ce te ocupă cel mai mult timp? Ce scapă cel mai des? Cu cât ești mai specific, cu atât diagnosticul e mai util."
                    className={`resize-none ${inputClass('mesaj')}`}
                  />
                  {errors.mesaj && <p className="mt-1.5 font-sans text-[12px] text-red-500">{errors.mesaj}</p>}
                </div>

                <div className="pt-2">
                  <Button type="submit" size="lg" className="w-full sm:w-auto justify-center">
                    Trimite cererea de diagnoză
                  </Button>
                  <p className="font-sans text-[12px] text-brand-muted mt-3 opacity-70">
                    Datele tale sunt confidențiale și nu sunt transmise către terți.
                  </p>
                </div>
              </form>
            </div>

            {/* Info laterală */}
            <div className="space-y-6">
              <div className="bg-white rounded-card p-6 shadow-card border border-black/5">
                <p className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-muted mb-4">
                  Ce se întâmplă după
                </p>
                <ol className="space-y-4">
                  {[
                    { nr: '1', text: 'Primești confirmare de primire în câteva ore.' },
                    { nr: '2', text: 'Te contactăm în 24h pentru a stabili data convorbirii.' },
                    { nr: '3', text: '30 de minute de diagnoză — online sau telefonic.' },
                    { nr: '4', text: 'Îți spunem sincer ce am face și dacă are sens.' },
                  ].map((step) => (
                    <li key={step.nr} className="flex items-start gap-3">
                      <span className="font-serif text-brand-gold font-bold text-[16px] leading-none mt-0.5 shrink-0">{step.nr}</span>
                      <p className="font-sans text-[14px] text-brand-muted leading-relaxed">{step.text}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-brand-green-light rounded-card p-6 border border-brand-green/20">
                <p className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-green mb-3">
                  Contact direct
                </p>
                <p className="font-sans text-[14px] text-brand-graphite mb-2">
                  <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="hover:text-brand-green transition-colors">
                    {CONTACT_PHONE}
                  </a>
                </p>
                <p className="font-sans text-[14px] text-brand-graphite">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-brand-green transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </p>
                <p className="font-sans text-[12px] text-brand-muted mt-3 italic">
                  ⚠️ Contact placeholder demo — actualizează cu datele reale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
