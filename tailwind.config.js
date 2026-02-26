/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // White opacity variants used throughout components
    'bg-white/5', 'bg-white/7', 'bg-white/8', 'bg-white/10', 'bg-white/12',
    'bg-white/14', 'bg-white/15',
    'border-white/5', 'border-white/7', 'border-white/8', 'border-white/10',
    'border-white/12', 'border-white/15',
    'text-white/7', 'text-white/25', 'text-white/30', 'text-white/40',
    'text-white/45', 'text-white/50', 'text-white/55', 'text-white/60',
    'text-white/70', 'text-white/80', 'text-white/90',
    'hover:bg-white/7', 'hover:bg-white/8', 'hover:bg-white/12',
    'hover:bg-white/14', 'hover:bg-white/15',
    // Accent opacity variants
    'bg-accent/8', 'bg-accent/10', 'bg-accent/12', 'bg-accent/15',
    'bg-accent/20', 'bg-accent/25',
    'border-accent/8', 'border-accent/10', 'border-accent/12',
    'border-accent/15', 'border-accent/20', 'border-accent/22',
    'border-accent/25', 'border-accent/30', 'border-accent/40',
    'text-accent/60',
    'hover:bg-accent/10', 'hover:bg-accent/20', 'hover:border-accent/40',
    // Forest color variants with opacity
    'bg-forest-950/40', 'bg-forest-950/90', 'bg-forest-950/95',
    'bg-forest-900/90', 'bg-forest-800/60',
    // Gradient classes used in project cards
    'from-emerald-950', 'via-forest-800', 'to-forest-900',
    'from-forest-900', 'to-forest-900', 'to-emerald-950',
    'from-forest-950', 'to-forest-800',
    // Transition delays
    'delay-1', 'delay-2', 'delay-3', 'delay-4',
    // Hover translate
    'hover:-translate-y-0.5', 'hover:-translate-y-1', 'hover:-translate-y-2',
    'hover:translate-x-1',
    // Other used classes
    'backdrop-blur-xl', 'backdrop-blur-sm',
    'hover:bg-forest-800',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#071f17',
          900: '#0B3D2E',
          800: '#0e4f3a',
          700: '#115f46',
          600: '#1a7a59',
        },
        accent: {
          DEFAULT: '#3ddc84',
          dim:     '#2ab869',
          muted:   '#a8c4b8',
        },
      },
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'spin-slow':   'spin 12s linear infinite',
        'float':       'floatY 6s ease-in-out infinite',
        'pulse-glow':  'pulseGlow 3s ease-in-out infinite',
        'blink':       'blink 2s ease infinite',
        'dot-bounce':  'dotBounce 0.6s ease infinite alternate',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(61,220,132,0.2)' },
          '50%':      { boxShadow: '0 0 40px rgba(61,220,132,0.5)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.35' },
        },
        dotBounce: {
          from: { transform: 'translateY(0)',   opacity: '0.4' },
          to:   { transform: 'translateY(-8px)', opacity: '1'   },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '450': '450ms',
      },
      opacity: {
        '7':  '0.07',
        '8':  '0.08',
        '12': '0.12',
        '14': '0.14',
        '15': '0.15',
        '22': '0.22',
        '25': '0.25',
        '35': '0.35',
        '40': '0.40',
        '45': '0.45',
        '55': '0.55',
        '60': '0.60',
        '70': '0.70',
        '80': '0.80',
        '85': '0.85',
        '90': '0.90',
        '95': '0.95',
      },
    },
  },
  plugins: [],
}
