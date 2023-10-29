/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#01847e",
					secondary: "#40efa9",
					accent: "#efffa3",
					neutral: "#1d212b",
					"base-100": "#0c4a6e",
					info: "#638ecf",
					success: "#1cc47e",
					warning: "#f4b848",
					error: "#ee8572",
				},
			},
		],
	},
	theme: {
		container: {
			center: true,
		},
		fontFamily: {
			josefinSans: ["Josefin Sans", "sans-serif"],
		},
	},
};
