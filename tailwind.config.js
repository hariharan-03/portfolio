/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#36a1d4',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      animation: {
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(8%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
