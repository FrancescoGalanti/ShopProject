/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      
      colors:{
        foreground: '#6c6774',
        background: '#ffcdb3',
        primary: '#6c6774',
        secondary: '#ffb6a3',
        tertiary: '#b4838d',
      }

    },
  },
  plugins: [],
}

