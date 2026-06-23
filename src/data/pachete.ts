export interface Pachet {
  slug: string
  titlu: string
  subtitlu: string
  descriere: string
  pentruCine: string
  caracteristici: { label: string; valoare: string }[]
  highlight: boolean
  cta: string
}

export const pachete: Pachet[] = [
  {
    slug: 'start',
    titlu: 'Start',
    subtitlu: 'Primul pas în afară din haos',
    descriere:
      'Potrivit dacă ai o afacere stabilă, știi că ceva nu funcționează administrativ, dar nu ai volum suficient pentru un angajat dedicat. Intrăm cu pași mici, identificăm ce scârțâie și punem ordine acolo unde contează cel mai mult.',
    pentruCine:
      'Firme mici, antreprenori solo sau cu 1–5 angajați, care au nevoie de structură de bază și urmărire periodică.',
    caracteristici: [
      { label: 'Ore de suport lunar', valoare: '~20h' },
      { label: 'Arii acoperite', valoare: '3 (alese împreună)' },
      { label: 'Prezență fizică', valoare: 'Nu' },
      { label: 'Raport lunar', valoare: 'Da — rezumat scurt' },
      { label: 'Timp de răspuns', valoare: '24h lucrătoare' },
      { label: 'Onboarding', valoare: '1 săptămână' },
      { label: 'Preț', valoare: 'La cerere' },
    ],
    highlight: false,
    cta: 'Cere o diagnoză',
  },
  {
    slug: 'business',
    titlu: 'Business',
    subtitlu: 'Infrastructură completă, zi de zi',
    descriere:
      'Dacă afacerea ta a crescut, echipa s-a mărit și tu tot mai ești cel care rezolvă lucrurile administrative — e semnul că ai nevoie de mai mult decât ordine ocazională. Pachetul Business acoperă operaționalul complet, cu vizibilitate permanentă și timp de răspuns rapid.',
    pentruCine:
      'IMM-uri cu 5–20 de angajați, manageri care petrec >3h/zi în administrativ, firme în creștere rapidă.',
    caracteristici: [
      { label: 'Ore de suport lunar', valoare: '~40h' },
      { label: 'Arii acoperite', valoare: '6 (alese împreună)' },
      { label: 'Prezență fizică', valoare: 'Opțional' },
      { label: 'Raport lunar', valoare: 'Da — detaliat' },
      { label: 'Timp de răspuns', valoare: '4h lucrătoare' },
      { label: 'Onboarding', valoare: '2 săptămâni' },
      { label: 'Preț', valoare: 'La cerere' },
    ],
    highlight: true,
    cta: 'Cere o diagnoză',
  },
  {
    slug: 'executive',
    titlu: 'Executive',
    subtitlu: 'Un om în echipa ta, fără costul unui angajat',
    descriere:
      'Nivelul la care nu mai vorbim de suport punctual, ci de infrastructură executivă reală. Toate cele 10 arii acoperite, prezență fizică acolo unde e nevoie, raportare săptămânală și un om care funcționează ca un Chief of Staff extern. Tu gândești strategia. Restul e rezolvat.',
    pentruCine:
      'Antreprenori și manageri cu firme de 15–50 de angajați, care vor să se elibereze complet din operațional fără să angajeze full-time.',
    caracteristici: [
      { label: 'Ore de suport lunar', valoare: 'Nelimitat (în scop)' },
      { label: 'Arii acoperite', valoare: 'Toate 10' },
      { label: 'Prezență fizică', valoare: 'Da — programat' },
      { label: 'Raport', valoare: 'Săptămânal + lunar' },
      { label: 'Timp de răspuns', valoare: '2h în program' },
      { label: 'Onboarding', valoare: '2–3 săptămâni' },
      { label: 'Preț', valoare: 'La cerere' },
    ],
    highlight: false,
    cta: 'Cere o diagnoză',
  },
]
