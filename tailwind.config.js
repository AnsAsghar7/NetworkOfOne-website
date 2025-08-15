/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#fcb315',
        magenta: '#e221a0',
        sky: '#059fdb',
        violet: '#9420f3',
        red: '#fc2d2d',
        aqua: '#37e7e2',
        yellow: '#fadf6b',
        deep: '#0f373e',
      },
    },
  },
  plugins: [],
}
