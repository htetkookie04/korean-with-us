import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        cherry: {
          50: '#fef7f7',
          100: '#fdeaea',
          200: '#fad7d9',
          300: '#f6b2b5',
          400: '#f08389',
          500: '#e85d75',
          600: '#d63384',
          700: '#b02a5b',
          800: '#952952',
          900: '#7e2448',
        },
        korean: {
          red: '#c5282f',
          blue: '#003478',
        },
        background: "var(--background)",
        foreground: "#000000",
      },
      fontFamily: {
        'korean': ['Noto Sans KR', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;