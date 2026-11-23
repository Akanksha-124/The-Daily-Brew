/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FAF8F4',
          100: '#F7F3EB',
          200: '#EEE7D9',
          300: '#E4D9C4',
        },
        champagne: {
          100: '#F5EFE4',
          200: '#EBE0CC',
          300: '#D9C6A5',
          400: '#CDB68F',
          500: '#BF9E6B',
          600: '#9E7E4E',
        },
        espresso: {
          800: '#3D2D25',
          900: '#30231D',
          950: '#1F1713',
        },
        walnut: {
          600: '#695143',
          700: '#574135',
          800: '#49372D',
          900: '#3A2A22',
        },
        taupe: {
          200: '#DFD8CE',
          300: '#C7BDB1',
          400: '#A99A88',
          500: '#8C7C6A',
          600: '#6E604F',
        },
        softwhite: '#FFFEFA',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        sans: ['"Manrope"', '"DM Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.22em',
        widest: '0.18em',
      },
      boxShadow: {
        subtle: '0 2px 12px -2px rgba(48, 35, 29, 0.05)',
        card: '0 8px 30px -4px rgba(48, 35, 29, 0.07)',
        hover: '0 16px 40px -6px rgba(48, 35, 29, 0.12)',
        modal: '0 25px 60px -12px rgba(31, 23, 19, 0.25)',
      },
      borderRadius: {
        editorial: '2px',
        luxe: '6px',
        soft: '16px',
      }
    },
  },
  plugins: [],
}

