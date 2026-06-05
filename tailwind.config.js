/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Sky-blue palette
          blue:      '#0284C7',   // sky-600
          blueDark:  '#0369A1',   // sky-700
          blueDeep:  '#075985',   // sky-800
          blueLight: '#E0F2FE',   // sky-100
          bluePale:  '#F0F9FF',   // sky-50
          cyan:      '#06B6D4',   // cyan-500
          cyanLight: '#CFFAFE',   // cyan-100
          // CTA / accent
          cta:       '#0284C7',   // main CTA blue
          ctaDark:   '#075985',   // dark CTA
          // Keep violet/pink for gradient accents
          violet:    '#6366F1',
          pink:      '#8B5CF6',
          // WhatsApp
          whatsapp:  '#25D366',
          whatsappDk:'#128C7E',
          // Text
          navy:      '#0C4A6E',   // sky-900 – headings
          slate:     '#1E293B',
        },
      },
      fontFamily: {
        sans:   ['Inter', 'sans-serif'],
        arabic: ['Cairo', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-cta':    'linear-gradient(135deg, #0284C7 0%, #075985 100%)',
        'gradient-blue':   'linear-gradient(135deg, #0284C7 0%, #06B6D4 100%)',
        'gradient-violet': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
        'gradient-brand':  'linear-gradient(135deg, #0284C7 0%, #6366F1 60%, #8B5CF6 100%)',
      },
      boxShadow: {
        'soft':      '0 4px 24px rgba(2,132,199,0.07)',
        'card':      '0 8px 40px rgba(2,132,199,0.09)',
        'card-hover':'0 20px 60px rgba(2,132,199,0.16)',
        'blue':      '0 8px 32px rgba(2,132,199,0.30)',
        'cta':       '0 8px 32px rgba(2,132,199,0.35)',
        'wa':        '0 8px 32px rgba(37,211,102,0.4)',
        'violet':    '0 8px 32px rgba(99,102,241,0.25)',
      },
      animation: {
        'float':      'float 5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'blob':       'blob 10s ease-in-out infinite',
        'blob2':      'blob 14s ease-in-out infinite reverse',
        'wa-ring':    'wa-ring 2.2s ease-out infinite',
        'cta-ring':   'cta-ring 2.4s ease-out infinite',
        'spin-slow':  'spin 15s linear infinite',
        'bounce-x':   'bounceX 1.5s ease-in-out infinite',
      },
      keyframes: {
        float:    { '0%,100%': { transform: 'translateY(0)' },    '50%': { transform: 'translateY(-14px)' } },
        blob:     { '0%,100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' }, '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' } },
        'wa-ring':  { '0%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.55)' },  '70%': { boxShadow: '0 0 0 18px rgba(37,211,102,0)' },  '100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0)' } },
        'cta-ring': { '0%': { boxShadow: '0 0 0 0 rgba(2,132,199,0.50)' },   '70%': { boxShadow: '0 0 0 16px rgba(2,132,199,0)' },    '100%': { boxShadow: '0 0 0 0 rgba(2,132,199,0)' } },
        bounceX:  { '0%,100%': { transform: 'translateX(0)' }, '50%': { transform: 'translateX(4px)' } },
      },
    },
  },
  plugins: [],
}
