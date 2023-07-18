import typographyPlugin from "@tailwindcss/typography";
import { type Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

import { plugin as designTokensPlugin } from "./plugin.js";

export const preset = {
	content: [],
	darkMode: ["class", '[data-color-scheme="dark"]'],
	plugins: [animatePlugin, designTokensPlugin, typographyPlugin],
} satisfies Config;
