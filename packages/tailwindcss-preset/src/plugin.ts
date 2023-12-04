import createPlugin from "tailwindcss/plugin.js";

import * as defaults from "./defaults.js";
import type { Options } from "./types.js";

export default createPlugin.withOptions<Options>(
	(options) => {
		return function plugin({ addBase, addComponents, addUtilities, matchUtilities, theme }) {
			/**
			 * Breakpoints.
			 *
			 * We cannot use css variables to configure media query conditions
			 * until `@custom-media` lands with css media queries level 5 spec.
			 */
			addBase({
				":root": {
					...Object.fromEntries(
						Object.entries(options.breakpoints ?? defaults.breakpoints).map(([key, value]) => {
							return [`--breakpoint-${key}`, value];
						}),
					),
				},
			});
		};
	},
	(_options) => {
		return {};
	},
);
