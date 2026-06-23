# DESIGN.md — Identitate Vizuală
## Infrastructură Executivă Externalizată · Demo Website

> **Direcție:** „Ordinea ca identitate" — tot ce vede clientul transmite calm, control și claritate.
> Referință vizuală: undeva între *The Economist* (autoritate editorială) și o firmă de consultanță boutique (căldură umană, ordine).

---

## 1. Paletă de culori

| Token | Rol | HEX | Descriere |
|---|---|---|---|
| `brand-cream` | Background primar | `#FAF9F7` | Alb cald, nu alb rece de Word. Primitor, premium. |
| `brand-graphite` | Text principal | `#1C1C1C` | Aproape negru, cu ușoară căldură. Autoritate fără agresivitate. |
| `brand-green` | Accent principal (CTA, headings cheie, borduri, hover) | `#2D6A4F` | Verde smarald matur. Diferențiator față de toți concurenții albaștri. Stabilitate, prezență, control. |
| `brand-green-light` | Verde deschis pentru hover states și backgrounds subtile | `#EAF2EE` | |
| `brand-gold` | Accent secundar (highlights, borduri fine, detalii premium) | `#C9A84C` | Auriu discret — premium fără kitsch. Apare rar, tocmai de aceea contează. |
| `brand-surface` | Suprafețe alternative (secțiuni, carduri) | `#F0EDEA` | Gri cald deschis. Nu alb, nu gri rece. |
| `brand-muted` | Text secundar, metadata, subtitluri | `#6B6560` | Gri cald mediu — lizibil, retras. |
| `brand-dark` | Secțiuni dark (footer, CTA principal, hero alternativ) | `#141414` | Negru aproape complet — pentru contrast puternic când e nevoie. |
| `white` | Alb pur pentru carduri pe fundal `surface` | `#FFFFFF` | |

**Regulă de utilizare:**
- **Verde** = acțiune, accent, confirmare. Apare pe butoane, hover, linii decorative, headings din secțiunile cheie.
- **Auriu** = detaliu de valoare. Apare pe separatoare, iconițe selectate, numerotări elegante. Niciodată pe suprafețe mari.
- **Cream + Graphite** = 80% din orice pagină. Spațiu + text. Nimic mai mult.

---

## 2. Sistem tipografic

### Font de titluri: Playfair Display
- **De ce:** Serif editorial cu personalitate — transmite autoritate, maturitate, „am văzut lucruri și știu ce fac". Nu e Arial, nu e Montserrat (peste tot în nișă). Diferențiator imediat.
- **Import Google Fonts:** `Playfair Display:wght@400;500;700;900`
- **Utilizare:** H1, H2, tagline-uri, quote-uri mari

### Font de corp: Inter
- **De ce:** Lizibilitate perfectă pe orice ecran, modern-neutru, nu concurează cu titlurile.
- **Import Google Fonts:** `Inter:wght@300;400;500;600`
- **Utilizare:** tot textul de corp, butoane, labels, navigație

### Scară tipografică

| Clasă | Dimensiune | Weight | Utilizare |
|---|---|---|---|
| `text-display` | 56–72px | 700 | Hero tagline principal |
| `text-h1` | 40–48px | 700 | Titluri de pagină |
| `text-h2` | 28–36px | 600 | Titluri de secțiune |
| `text-h3` | 20–24px | 600 | Subtitluri, carduri |
| `text-h4` | 16–18px | 600 | Labels, caption-uri cheie |
| `text-body-lg` | 18px | 400 | Paragraf introductiv, lead copy |
| `text-body` | 16px | 400 | Text curent |
| `text-sm` | 14px | 400 | Metadata, note, footer |

**Line height:** 1.6 pentru corp; 1.15 pentru titluri mari (mai compact = mai autoritar).
**Letter spacing:** +0.04em pe uppercase labels; -0.02em pe titluri display mari.

---

## 3. Logo placeholder — Wordmark SVG

**Concept:** Litera „N" geometrică (lettermark simplu) + wordmark „NEXUS" în Playfair Display + „EXECUTIV" în Inter, spaced out. Curat, înlocuibil.

> ⚠️ BRAND_NAME = `"Nexus Executiv"` — **PROVIZORIU**. Centralizat în `/src/constants/brand.ts`. Schimbi acolo și se actualizează tot site-ul.

### Logo principal (SVG — light version):

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 48" fill="none">
  <!-- Lettermark N -->
  <rect x="0" y="4" width="3" height="34" fill="#2D6A4F"/>
  <rect x="14" y="4" width="3" height="34" fill="#2D6A4F"/>
  <rect x="0" y="4" width="17" height="3" fill="#2D6A4F"/>
  <rect x="0" y="35" width="17" height="3" fill="#2D6A4F"/>
  <line x1="3" y1="7" x2="14" y2="35" stroke="#2D6A4F" stroke-width="3"/>
  <!-- Wordmark -->
  <text x="28" y="27" font-family="serif" font-size="18" font-weight="700" fill="#1C1C1C" letter-spacing="4">NEXUS</text>
  <text x="28" y="40" font-family="sans-serif" font-size="9" font-weight="400" fill="#6B6560" letter-spacing="3">EXECUTIV</text>
  <!-- Gold accent line -->
  <rect x="28" y="30" width="90" height="1" fill="#C9A84C" opacity="0.6"/>
</svg>
```

### Favicon (32×32 — lettermark N simplificat):

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="4" fill="#2D6A4F"/>
  <text x="8" y="24" font-family="serif" font-size="20" font-weight="700" fill="#FAF9F7">N</text>
</svg>
```

> **Pentru producție:** înlocuiești SVG-ul cu logo-ul real. Componentele `<Logo />` și `<Favicon />` sunt izolate în `/src/components/ui/Logo.tsx`.

---

## 4. Principii de design

### Spațiere
- **Whitespace generos** — nu umple ecranul. Dacă o secțiune pare prea goală, e aproape bine.
- Padding secțiuni: `py-20 md:py-28` (80–112px vertical)
- Gap între carduri: `gap-8` (32px)
- Maxim container: `max-w-6xl` (1152px) — nu se extinde la full width

### Ierarhie
- **Un singur mesaj dominant per secțiune.** Titlu mare + câteva rânduri + CTA. Nu acoperim totul.
- Butoane principale: verde plin (`bg-brand-green text-white`) — apar rar, tocmai de aceea atrag atenția
- Butoane secundare: outline verde (`border-brand-green text-brand-green`)
- Link-uri inline: subliniate discret, fără culoare agresivă

### Carduri și suprafețe
- Background: `#FFFFFF` pe `#F0EDEA`, sau `#F0EDEA` pe `#FAF9F7`
- Border: `1px solid rgba(0,0,0,0.06)` — aproape invizibil, dă structură
- Border-radius: `rounded-lg` (8px) — nu colțuri foarte rotunjite (evităm look-ul fintech)
- Shadow: `0 4px 16px rgba(0,0,0,0.05)` — extrem de subtilă

### Imagini și ilustrații
- **NU** stock photos cu strângeri de mână, boardroom, oameni-stoc în costum
- **DA:** Fotografii de ambiance — birou ordonat, agendă pe masă, mâini care scriu, o ceașcă de cafea lângă un laptop curat
- **DA:** Grafice geometrice abstracte (grile, linii, structuri) care sugerează ordine și sistem
- Toate placeholder-ele marcate explicit: `[foto reală — ambiance birou]`, `[portret real — persoana din echipă]`
- Aspect ratio fotografii: 16:9 sau 3:2 (nu pătrat — pătrat dă feel de Instagram, nu de site executiv)

### Micro-animații
- `transition-all duration-200 ease-out` pe hovere
- Fade-in discret pe scroll (Intersection Observer, delay-uri de 100–200ms între elemente)
- **NU:** parallax, animații 3D, loading-uri spectaculoase — distracte, nu premium

### Separatoare și detalii de auriu
- O linie `1px solid #C9A84C` sub logo, sau ca accent pe quote-uri importante
- Numerotare secțiuni cu cifre în auriu (`01`, `02`, `03`) — detaliu editorial discret
- Accent pe primul caracter al unui paragraph cheie (initial cap în auriu) — opțional, pentru secțiunile „Despre"

---

## 5. Design tokens — Tailwind Config

```typescript
// tailwind.config.ts — tokens de design
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          cream:   '#FAF9F7',
          graphite:'#1C1C1C',
          green:   '#2D6A4F',
          'green-light': '#EAF2EE',
          gold:    '#C9A84C',
          surface: '#F0EDEA',
          muted:   '#6B6560',
          dark:    '#141414',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(40px, 6vw, 72px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1':      ['clamp(32px, 4vw, 48px)',  { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h2':      ['clamp(24px, 3vw, 36px)',  { lineHeight: '1.2' }],
        'h3':      ['clamp(18px, 2vw, 24px)',  { lineHeight: '1.3' }],
        'body-lg': ['18px', { lineHeight: '1.7' }],
        'body':    ['16px', { lineHeight: '1.65' }],
      },
      spacing: {
        'section':    '112px',
        'section-sm': '80px',
      },
      maxWidth: {
        'container': '1152px',
        'prose':     '680px',
      },
      borderRadius: {
        'card': '8px',
        'btn':  '6px',
      },
      boxShadow: {
        'card':     '0 4px 16px rgba(0, 0, 0, 0.05)',
        'elevated': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'subtle':   '0 1px 4px rgba(0, 0, 0, 0.06)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## 6. Componente de bază — comportament vizual

### Buton principal (CTA)
```
bg-brand-green text-white px-8 py-3.5 rounded-btn
font-sans font-semibold text-[15px] tracking-wide
hover:bg-[#235A41] transition-all duration-200
focus:ring-2 focus:ring-brand-green focus:ring-offset-2
```

### Buton secundar (outline)
```
border border-brand-green text-brand-green px-8 py-3.5 rounded-btn
font-sans font-semibold text-[15px] tracking-wide
hover:bg-brand-green-light transition-all duration-200
```

### Card standard
```
bg-white rounded-card shadow-card p-8
border border-black/5
hover:shadow-elevated transition-shadow duration-300
```

### Tag / Badge
```
bg-brand-green-light text-brand-green
px-3 py-1 rounded-full text-sm font-sans font-medium tracking-wide uppercase
```

### Separator auriu
```
w-12 h-px bg-brand-gold mx-auto my-8
```

---

## 7. Structura vizuală per tip de secțiune

| Secțiune | Background | Titlu font | Accent |
|---|---|---|---|
| Hero | `brand-cream` | Playfair Display, display size | Verde pe CTA, auriu pe tagline |
| Piloni / Arii | `brand-surface` | Playfair Display h2 | Numerotare auriu |
| Pachete | `white` | Playfair Display h2 | Card-ul recomandat cu border verde |
| Testimonial / Quote | `brand-dark` | Playfair Display italic, h2 | Text `white`, ghilimele auriu |
| FAQ | `brand-cream` | Inter h3 | Divider subtil |
| CTA final | `brand-green` | Playfair Display, white | Buton outline alb |
| Footer | `brand-graphite` | Inter | Logo alb, links muted |

---

## Checklist Faza 2

- [x] Paletă finală cu rol definit per culoare
- [x] Sistem tipografic (2 fonturi, scară completă)
- [x] Logo placeholder SVG + favicon SVG
- [x] Principii de design documentate
- [x] Tokens Tailwind definiți
- [x] Comportament vizual per componentă
- [x] BRAND_NAME centralizat (provizoriu: „Nexus Executiv")
