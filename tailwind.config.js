/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html, js,jsx,ts,tsx}", "./src/**/*.svelte", "./public/index.html", "./index.html"
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '640px'},
      'md': {'max':'768px'},
      'lg': {'max':'1024px'},
      '2xl': {'max': '1280px'},
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

