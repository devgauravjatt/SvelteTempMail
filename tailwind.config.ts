import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#FF6F41', // Main color
					50: '#FFE0CC', // Lightest shade
					100: '#FFCC99', // Light shade
					200: '#FFB366', // Soft shade
					300: '#FF9933', // Medium shade
					400: '#FF7F1A', // Slightly darker
					500: '#FF6F41', // Main color
					600: '#FF5722', // Darker
					700: '#FF4511', // Even darker
					800: '#FF3300', // Very dark
					900: '#FF1A00' // Darkest shade
				}
			}
		}
	},

	plugins: []
} satisfies Config;
