import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileCta } from '@/components/ui/MobileCta'
import { BRAND_NAME, BRAND_TAGLINE, BRAND_URL } from '@/constants/brand'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(BRAND_URL),
  title: {
    default: `${BRAND_NAME}, ${BRAND_TAGLINE}`,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    'Un punct unic de coordonare administrativă și executivă pentru antreprenori și IMM-uri. Organizăm, urmărim și ținem afacerea ta sub control, ca tu să te ocupi de ce contează.',
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: BRAND_URL,
    siteName: BRAND_NAME,
    title: `${BRAND_NAME}, ${BRAND_TAGLINE}`,
    description:
      'Infrastructură executivă externalizată pentru antreprenori. Un om real, coordonare reală, rezultate vizibile.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND_NAME}, ${BRAND_TAGLINE}`,
    description:
      'Infrastructură executivă externalizată pentru antreprenori și IMM-uri.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: BRAND_URL,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main className="pb-mobile-cta md:pb-0">{children}</main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  )
}
