/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores principales
        azul: {
          DEFAULT: 'rgb(var(--color-azul) / <alpha-value>)',
          claro: 'rgb(var(--color-azul-claro) / <alpha-value>)',
        },
        secundario: 'rgb(var(--color-secundario) / <alpha-value>)',
        
        // Puedes agregar más colores personalizados aquí
        primario: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        acento: {
          DEFAULT: '#e63946',
          light: '#f48c95',
          dark: '#c81d2a',
        },
        fondo: {
          DEFAULT: '#070720',
          claro: '#1a1a4a',
          oscuro: '#050515',
        },
        texto: {
          DEFAULT: '#ffffff',
          secundario: '#a0a0b0',
          oscuro: '#333333',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        titulo: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}