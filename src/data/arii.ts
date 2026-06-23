export interface Arie {
  nr: string
  titlu: string
  descriere: string
  exemple: string[]
}

// ⚠️ DEMO — cele 10 arii sunt exemple reprezentative, marcate ca atare.
// Activăm selectiv ariile relevante pentru fiecare client, în funcție de nevoie.
export const arii: Arie[] = [
  {
    nr: '01',
    titlu: 'Documente și arhivă',
    descriere:
      'Organizăm documentele existente, implementăm o structură de arhivă electronică și ne asigurăm că orice document se găsește în mai puțin de două minute.',
    exemple: [
      'Audit și reorganizare arhivă curentă',
      'Structură de foldere și nomenclatură clară',
      'Procedură de arhivare pentru documente noi',
    ],
  },
  {
    nr: '02',
    titlu: 'Coordonare furnizori',
    descriere:
      'Un furnizor care nu răspunde, o livrare întârziată sau o ofertă necomparată costă bani. Urmărim relațiile cu furnizorii activi și coordonăm comunicarea în locul tău.',
    exemple: [
      'Urmărire livrări și confirmări comenzi',
      'Gestionare solicitări, oferte și comparații',
      'Escaladare și rezolvare probleme cu furnizorii',
    ],
  },
  {
    nr: '03',
    titlu: 'Termene și scadențe',
    descriere:
      'Contractele au termene de reînnoire. Obligațiile au scadențe. Garanțiile expiră. Noi ținem evidența tuturor și te alertăm înainte să se întâmple ceva neplăcut.',
    exemple: [
      'Calendar central de termene contractuale',
      'Alerte proactive pentru scadențe și reînnoiri',
      'Urmărire obligații recurente (licențe, abonamente, asigurări)',
    ],
  },
  {
    nr: '04',
    titlu: 'Comunicare operațională',
    descriere:
      'E-mailuri de confirmare, răspunsuri la solicitări de rutină, comunicări interne — lucruri care consumă 2 ore dintr-o zi și care pot fi gestionate fără tine.',
    exemple: [
      'Gestionare corespondență de rutină',
      'Redactare comunicări interne și externe',
      'Coordonare comunicare între echipe sau departamente',
    ],
  },
  {
    nr: '05',
    titlu: 'Relația cu contabilitatea',
    descriere:
      'Contabilul tău are nevoie de documente la timp, de clarificări și de un interlocutor care înțelege ce cere. Noi facem legătura — fără să ne substituim expertizei contabile.',
    exemple: [
      'Colectare și transmitere documente contabile',
      'Urmărire facturi emise și primite',
      'Clarificări și comunicare curentă cu firma de contabilitate',
    ],
  },
  {
    nr: '06',
    titlu: 'Logistică internă',
    descriere:
      'Spații de birou, echipamente, consumabile, mici achiziții de birou — detalii care nu merită atenția ta, dar care trebuie totuși gestionate de cineva.',
    exemple: [
      'Coordonare achiziții și aprovizionare birou',
      'Urmărire mentenanță echipamente',
      'Gestionare relații cu proprietar/administrator spațiu',
    ],
  },
  {
    nr: '07',
    titlu: 'Ședințe și urmărire acțiuni',
    descriere:
      'O ședință fără ordine de zi e conversație. Una fără minute și follow-up e timp pierdut. Pregătim, documentăm și urmărim ce s-a decis.',
    exemple: [
      'Pregătire ordine de zi înainte de ședință',
      'Redactare minute clare cu acțiuni și responsabili',
      'Follow-up săptămânal pe acțiunile restante',
    ],
  },
  {
    nr: '08',
    titlu: 'Raportare operațională',
    descriere:
      'Nu un raport de 40 de pagini pe care nu-l citești. Un rezumat clar, săptămânal sau lunar, cu ce s-a rezolvat, ce e în curs și ce necesită decizia ta.',
    exemple: [
      'Dashboard operațional adaptat nevoilor tale',
      'Raport lunar scurt — în limbaj de antreprenor, nu de contabil',
      'Alerte proactive pentru situații care cer atenție',
    ],
  },
  {
    nr: '09',
    titlu: 'Contracte și parteneri',
    descriere:
      'Contractele se semnează, se pun într-un dosar și se uită. Până când expiră sau apar probleme. Noi le ținem în evidență și te anunțăm când e nevoie să te uiți la ele.',
    exemple: [
      'Evidență contracte active și termene cheie',
      'Urmărire îndeplinire obligații contractuale',
      'Pregătire documente pentru negocieri sau reînnoiri',
    ],
  },
  {
    nr: '10',
    titlu: 'Proiecte transversale',
    descriere:
      'Un proiect care implică mai multe departamente sau colaboratori externi are nevoie de cineva care să coordoneze, nu doar să participe. Asigurăm coerența și avansul.',
    exemple: [
      'Coordonare echipe mixte (intern + extern)',
      'Urmărire plan de proiect și livrabile',
      'Comunicare și aliniere între toți factorii implicați',
    ],
  },
]
