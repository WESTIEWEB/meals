/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html, js,jsx,ts,tsx}", "./src/**/*.svelte", "./public/index.html", "./index.html"
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px'
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'serif': ['Merriweather', 'serif'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald', 'sans-serif'],
      'body': ['Open Sans', 'sans-serif']
    },
  },
  plugins: [],
}

