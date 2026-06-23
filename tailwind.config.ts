import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          cream:        '#FAF9F7',
          graphite:     '#1C1C1C',
          green:        '#2D6A4F',
          'green-light':'#EAF2EE',
          gold:         '#C9A84C',
          surface:      '#F0EDEA',
          muted:        '#6B6560',
          dark:         '#141414',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(40px,6vw,72px)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'h1':     ['clamp(32px,4vw,48px)',  { lineHeight: '1.12', letterSpacing: '-0.015em' }],
        'h2':     ['clamp(24px,3vw,36px)',  { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        'h3':     ['clamp(18px,2vw,24px)',  { lineHeight: '1.3' }],
        'body-lg':['18px',                  { lineHeight: '1.72' }],
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
        'card':     '0 4px 16px rgba(0,0,0,0.05)',
        'elevated': '0 8px 32px rgba(0,0,0,0.08)',
        'subtle':   '0 1px 4px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}

export default config
