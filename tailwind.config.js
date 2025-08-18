/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'titillium': ['Titillium Web', 'sans-serif'],
      },
      colors: {
        'portfolio': {
          'dark': '#111111',
          'card': 'rgba(32, 32, 48, 0.9)',
          'accent': '#EFF1C5',
          'gray': 'rgba(61, 61, 61, 0.5)',
          'mobile-card': '#1F1F2D',
        }
      },
      backgroundImage: {
        'texture-1': "url('/background-texture-1.png')",
        'texture-2': "url('/background-texture-2.png')",
      },
      backdropBlur: {
        'portfolio': '100px',
      }
    },
  },
  plugins: [],
}
