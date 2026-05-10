/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#d4a017',
          light: '#e8c547',
          dark: '#a0780f',
        },
        beige: {
          DEFAULT: '#e8dcc8',
          light: '#f5efe0',
          dark: '#c4b89a',
        },
        black: {
          DEFAULT: '#050505',
          deep: '#020202',
        },
        orange: {
          glow: '#ff7a00',
          warm: '#ff8c2a',
        },
        glass: {
          bg: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(212, 160, 23, 0.2)',
          hover: 'rgba(255, 255, 255, 0.06)',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Cormorant Garamond', 'serif'],
        ui: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold': '0 0 60px rgba(212, 160, 23, 0.3)',
        'gold-intense': '0 0 100px rgba(212, 160, 23, 0.5)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      }
    },
  },
  plugins: [],
}
