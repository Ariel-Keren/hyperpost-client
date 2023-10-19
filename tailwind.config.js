/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				darker: "#0A141F",
				dark: "#131D2D",
				dim: "#7E8DA0",
				primary: "#5F79FC",
				warning: "#ef476f",
				hover: "#1E2E48",
				"dim-hover": "#4E5E74",
				"primary-hover": "#4B68FB",
				"warning-hover": "#ED315D"
			}
		}
	},
	plugins: []
};
