/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
				xs: '390px',
				max: '1920px',
			},
			fontFamily: {
				secondary: ['Old Standard TT', 'serif'],
			},
			colors: {
				primary: '#F3F0EE',
				secondary: '#000000',
				third: '#696C6D',
			},
    },
  },
  plugins: [],
};
