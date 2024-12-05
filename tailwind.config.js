/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6A1A',
        black: '#212337',
        green: '#749B3F',
        grey: {
          20: '#F4F6F6',
          50: '#D9D9D9',
          80: '#A6A6A6',
          100: '#4A4A52',
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        // Headings
        '.heading-1': {
          fontFamily: "'Rubik', sans-serif",
          fontSize: '80px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'normal',
          letterSpacing: '-1.6px',
        },
        '.heading-2': {
          fontFamily: "'Rubik', sans-serif",
          fontSize: '48px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'normal',
          letterSpacing: '-0.96px',
        },
        '.heading-3': {
          fontFamily: "'Rubik', sans-serif",
          fontSize: '40px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal',
          letterSpacing: '-0.8px',
        },
        '.heading-4': {
          fontFamily: "'Rubik', sans-serif",
          fontSize: '32px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: 'normal',
          letterSpacing: '-0.64px',
        },
        '.heading-5': {
          fontFamily: "'Rubik', sans-serif",
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: 'normal',
          letterSpacing: '-0.48px',
        },
        '.heading-6': {
          fontFamily: "'Rubik', sans-serif",
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'normal',
          letterSpacing: '-0.36px',
        },
        '.heading-7': {
          fontFamily: "'Rubik', sans-serif",
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'normal',
          letterSpacing: '-0.24px',
        },
        // Sub-Headings
        '.sub-heading-1': {
          fontFamily: "'Rubik', sans-serif",
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'normal',
          letterSpacing: '-0.4px',
        },
        '.sub-heading-2': {
          fontFamily: "'Rubik', sans-serif",
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'normal',
          letterSpacing: '-0.28px',
        },
        // Body
        '.body-1': {
          fontFamily: "'Questrial', sans-serif",
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '32px',
          letterSpacing: '-0.4px',
        },
        '.body-2': {
          fontFamily: "'Questrial', sans-serif",
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '24px',
          letterSpacing: '-0.36px',
        },
        '.body-3': {
          fontFamily: "'Questrial', sans-serif",
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '24px',
          letterSpacing: '-0.28px',
        },
        '.body-4': {
          fontFamily: "'Questrial', sans-serif",
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '18px',
          letterSpacing: '-0.24px',
        },
        // Buttons
        '.button-1': {
          fontFamily: "'Rubik', sans-serif",
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: 'normal',
          letterSpacing: '-0.36px',
        },
        '.button-2': {
          fontFamily: "'Rubik', sans-serif",
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal',
          letterSpacing: '-0.36px',
        },
        '.button-3': {
          fontFamily: "'Rubik', sans-serif",
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: 'normal',
          letterSpacing: '-0.28px',
        },
        '.button-4': {
          fontFamily: "'Rubik', sans-serif",
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: 'normal',
          letterSpacing: '-0.24px',
        },
      });
    },
  ],
};
