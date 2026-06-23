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
          'green-dark': '#1E4E3A',
          'green-mid':  '#4A8B6F',
          'green-light':'#EAF2EE',
          gold:         '#A87B3E',
          surface:      '#E6DFD6',
          muted:        '#6B6560',
          dark:         '#191510',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(38px,5.5vw,68px)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'h1':     ['clamp(30px,4vw,48px)',    { lineHeight: '1.12', letterSpacing: '-0.015em' }],
        'h2':     ['clamp(22px,3vw,36px)',    { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        'h3':     ['clamp(17px,2vw,24px)',    { lineHeight: '1.3' }],
        'body-lg':['18px',                   { lineHeight: '1.72' }],
      },
      spacing: {
        '18': '4.5rem',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
      maxWidth: {
        'container': '1152px',
        'prose':     '680px',
      },
      borderRadius: {
        'card': '10px',
        'btn':  '7px',
        'xl2':  '16px',
      },
      boxShadow: {
        'card':     '0 4px 20px rgba(0,0,0,0.06)',
        'elevated': '0 12px 40px rgba(0,0,0,0.10)',
        'green':    '0 8px 32px rgba(45,106,79,0.25)',
        'subtle':   '0 1px 4px rgba(0,0,0,0.06)',
        'glow':     '0 0 0 3px rgba(45,106,79,0.15)',
      },
      backgroundImage: {
        'dot-grid': "radial-gradient(circle, rgba(45,106,79,0.12) 1px, transparent 1px)",
        'green-gradient': 'linear-gradient(135deg, #2D6A4F 0%, #1E4E3A 100%)',
        'cream-fade': 'linear-gradient(180deg, #FAF9F7 0%, #E6DFD6 100%)',
      },
      backgroundSize: {
        'dot': '24px 24px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
