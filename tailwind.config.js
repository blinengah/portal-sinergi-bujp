/**
 * ============================================================
 * APPLICATION : Portal Sinergi Operasional BUJP-User
 * COMPONENT   : tailwind.config.js
 * CREATED BY  : Bli Nengah
 * VERSION     : v1.0.0
 * YEAR        : 2026
 * ============================================================
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        corporate: {
          50: '#F0F5FA',
          100: '#E1EBF5',
          500: '#0284C7',
          800: '#0F2C59',
          900: '#0B192C',
        }
      }
    },
  },
  plugins: [],
};
