# Nexus Executiv — Website Demo

> ⚠️ **DEMO DE PREZENTARE** — Conținut provizoriu, înainte de versiunea finală de producție.

## Ce e ăsta

Website demo multi-pagină pentru un serviciu de **infrastructură executivă externalizată**, construit în Next.js + TypeScript + Tailwind CSS.

---

## ⚠️ Ce trebuie actualizat înainte de lansare

| Element | Unde | Status |
|---|---|---|
| **Numele brandului** | `src/constants/brand.ts` → `BRAND_NAME` | ⚠️ PROVIZORIU — "Nexus Executiv" |
| **URL-ul final** | `src/constants/brand.ts` → `BRAND_URL` | ⚠️ Placeholder |
| **Email de contact** | `src/constants/brand.ts` → `CONTACT_EMAIL` | ⚠️ Placeholder |
| **Telefon de contact** | `src/constants/brand.ts` → `CONTACT_PHONE` | ⚠️ Placeholder |
| **Testimoniale** | `src/app/page.tsx`, `src/app/pentru-cine/page.tsx` | ⚠️ Placeholder marcat |
| **Logo SVG final** | `src/components/ui/Logo.tsx` | ⚠️ Wordmark geometric |
| **Favicon final** | `public/favicon.svg` | ⚠️ Lettermark simplu |
| **Fotografii reale** | Marcate cu `[foto reală — ...]` în pagini | ⚠️ Placeholder |
| **Formular contact** | `src/app/contact/page.tsx` | ⚠️ Validare front-end only — nevoie de backend |
| **Prețuri reale** | `src/data/pachete.ts` | ⚠️ "La cerere" — actualizează dacă publici prețuri |

---

## Structura site

```
/              → Home (story complet)
/despre        → Motivație, factorul uman, diferențiere
/cum-functioneaza → Model punct unic, onboarding 30 zile
/piloni        → Cei 4 piloni (Liant, Navigator, Admin Exec, Mgr Colaborare)
/arii          → Cele 10 arii executive
/pachete       → Start / Business / Executive — comparativ
/pentru-cine   → Calificare client potrivit / nepotrivit
/faq           → Răspuns la 8 obiecții frecvente
/contact       → Formular cerere diagnoză
```

---

## Structura proiectului

```
src/
├── app/                  → Paginile (App Router)
├── components/
│   ├── layout/           → Header, Footer
│   └── ui/               → Button, Logo, SectionLabel
├── constants/
│   └── brand.ts          → BRAND_NAME și alte constante globale ← START AICI
└── data/                 → Conținut editabil: piloni, arii, pachete, faq
```

---

## Cum pornești local

```bash
npm install
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm run start
```

---

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 3**
- **next/font** — Playfair Display + Inter (Google Fonts, self-hosted)

---

## Deploy pe Vercel

1. Urcă pe GitHub (repo nou sau existent)
2. Importă în Vercel din dashboard
3. Deploy automat la fiecare push pe `main`

---

*Website construit ca demo de prezentare. Toate testimonialele, datele de contact și prețurile sunt placeholder și trebuie înlocuite cu date reale înainte de lansare.*
