export interface Pilon {
  nr: string
  titlu: string
  subtitlu: string
  descriere: string
  detalii: string[]
}

export const piloni: Pilon[] = [
  {
    nr: '01',
    titlu: 'Liantul',
    subtitlu: 'Leagă oamenii, furnizorii, departamentele',
    descriere:
      'Între echipa ta internă, contabil, furnizori și parteneri există mereu un gol. Cineva uită să confirme. Altcineva nu a primit documentul. Un termen trece pentru că nimeni nu știa de el. Liantul astupă golurile astea. Nu prin e-mailuri trimise în bbc, ci prin comunicare directă, urmărire activă și un singur om care știe tot ce se întâmplă.',
    detalii: [
      'Punct unic de contact pentru toate entitățile externe',
      'Urmărire activă a confirmărilor și răspunsurilor restante',
      'Coordonare comunicare între departamente sau colaboratori',
      'Notificări proactive înainte ca un termen să treacă',
    ],
  },
  {
    nr: '02',
    titlu: 'Navigatorul',
    subtitlu: 'Vede ansamblul și dă direcție',
    descriere:
      'Când ești în mijlocul lucrurilor, e greu să le vezi pe toate. Navigatorul face un pas înapoi, se uită la tot tabloul — ce e urgent, ce e important, ce poate aștepta — și traduce asta într-un plan clar de acțiune. Nu e consultant care dă rapoarte. E omul care îți spune azi ce trebuie să se întâmple mâine.',
    detalii: [
      'Prioritizare săptămânală a activităților administrative',
      'Identificarea blocajelor înainte să devină crize',
      'Dashboard operațional clar, fără jargon',
      'Recomandări concrete, nu analize generale',
    ],
  },
  {
    nr: '03',
    titlu: 'Administratorul Executiv',
    subtitlu: 'Execută și ține administrativul sub control',
    descriere:
      'Documentele sunt la zi. Facturile intră și ies la timp. Contractele sunt urmărite. Dosarele există și se găsesc. Sună banal, dar e exact ce lipsește în 9 din 10 firme mici care cresc rapid. Administratorul Executiv e omul care se asigură că mașinăria funcționează fără să ai nevoie să verifici tu personal fiecare piesă.',
    detalii: [
      'Gestionare documente, contracte și arhivă electronică',
      'Urmărire facturi emise și primite, termene de plată',
      'Coordonare cu contabilitatea pentru documente și clarificări',
      'Pregătire materiale pentru ședințe, prezentări, rapoarte',
    ],
  },
  {
    nr: '04',
    titlu: 'Managerul de Colaborare',
    subtitlu: 'Coordonează relațiile și fluxul de lucru',
    descriere:
      'Furnizori, parteneri, freelanceri, colaboratori externi — fiecare are nevoie de ceva de la tine și ceva de la celălalt. Fără coordonare, fiecare ședință se termină cu „revenim cu detalii" și detaliile nu mai revin niciodată. Managerul de Colaborare ține firele, urmărește angajamentele și se asigură că ce s-a promis se și întâmplă.',
    detalii: [
      'Urmărire acțiuni și angajamente din ședințe',
      'Coordonare freelanceri și colaboratori externi',
      'Gestionare relații cu parteneri și furnizori strategici',
      'Minute de ședință, follow-up structurat, termene clare',
    ],
  },
]
