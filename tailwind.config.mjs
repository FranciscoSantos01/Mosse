/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js',
		flowbite.content()
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('flowbite/plugin'),
		flowbite.plugin()
	],
}