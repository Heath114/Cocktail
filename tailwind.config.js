/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#e7d393',
        'white-100': '#efefef',
      },
      fontFamily: {
        'sans': ['Mona Sans', 'sans-serif'],
        'serif': ['DM Serif Text', 'serif'],
        'modern-negra': ['Modern Negra', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      spacing: {
        '62': '15.5rem',
      }
    }
  },
  plugins: [],
};