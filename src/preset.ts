import typographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

import { createPlugin } from "./plugin.js";
import type { Options } from "./types.js";

export function createPreset(options?: Options) {
	return {
		content: [],
		corePlugins: {
			container: false,
		},
		darkMode: ["class", '[data-ui-color-scheme="dark"]'],
		plugins: [animatePlugin, typographyPlugin, createPlugin(options)],
	} satisfies Config;
}
