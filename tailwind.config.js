/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				xs: '390px',
				mobile:'500px',
				max: '1920px',
			},
			fontFamily: {
				secondary: ['Old Standard TT', 'serif'],
			},
			colors: {
				primary: {
					100: '#f6f4f3',
					200: '#f5f3f1',
					300: '#f4f1ef',
					400: '#F3F0EE',
					600: '#dad8d6',
					700: '#c2c0be',
				},
				secondary: '#000000',
				third: '#696C6D',
			},
		},
	},
	plugins: [],
}
