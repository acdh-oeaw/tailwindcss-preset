import typographyPlugin from "@tailwindcss/typography";
import { type Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

import { createPlugin } from "./plugin.js";
import { type Options } from "./types.js";

export function createPreset(options?: Options) {
	return {
		content: [],
		darkMode: ["class", '[data-color-scheme="dark"]'],
		plugins: [animatePlugin, typographyPlugin, createPlugin(options)],
	} satisfies Config;
}
