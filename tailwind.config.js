/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': 'var(--color-dark)',
        'azul': 'var(--color-azul)',
        'red': 'var(--color-red)',
        'gris': 'var(--color-gris)',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"], // Puedes personalizar los temas que quieras incluir
  },
}