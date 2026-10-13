/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        steel: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9aaeb8',
          400: '#8D99AE',
          500: '#6c7a89',
          600: '#566575',
          700: '#3e4a56',
          800: '#27313a',
          900: '#101820',
          950: '#0B2545',
        },
        gold: {
          50: '#fdf8ed',
          100: '#faedcf',
          200: '#f5d99e',
          300: '#efbf6d',
          400: '#e9a93c',
          500: '#D4A017',
          600: '#b88412',
          700: '#936612',
          800: '#765216',
          900: '#624417',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#1da851',
        },
        offwhite: '#F7F8FA',
      },
      fontFamily: {
        heading: ['Poppins', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        'steel-gradient': 'linear-gradient(135deg, #0B2545 0%, #101820 100%)',
        'metallic': 'linear-gradient(180deg, #f0f4f8 0%, #d9e2ec 50%, #bcccdc 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4A017 0%, #efbf6d 50%, #D4A017 100%)',
      },
      boxShadow: {
        'premium': '0 10px 40px -12px rgba(11, 37, 69, 0.15)',
        'gold': '0 8px 30px -8px rgba(212, 160, 23, 0.3)',
        'card': '0 4px 24px -8px rgba(11, 37, 69, 0.1)',
      },
    },
  },
  plugins: [],
};
