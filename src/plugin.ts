import createPlugin from "tailwindcss/plugin";

export const plugin = createPlugin(
	({ addBase }) => {
		addBase({
			":root": {
				/** Breakpoints. */
				"--breakpoint-xs": "30rem",
				"--breakpoint-sm": "40rem",
				"--breakpoint-md": "48rem",
				"--breakpoint-lg": "64rem",
				"--breakpoint-xl": "80rem",
				"--breakpoint-2xl": "96rem",
				"--breakpoint-3xl": "120rem",

				/** Border radius. */
				"--radius-sm": "2px",
				"--radius-md": "4px",
				"--radius-lg": "8px",

				/** Colors. */
				"--color-neutral-0": "240deg 0% 100%",
				"--color-neutral-50": "240deg 0% 98%",
				"--color-neutral-100": "240deg 5% 96%",
				"--color-neutral-200": "240deg 6% 90%",
				"--color-neutral-300": "240deg 5% 84%",
				"--color-neutral-400": "240deg 5% 65%",
				"--color-neutral-500": "240deg 4% 46%",
				"--color-neutral-600": "240deg 5% 34%",
				"--color-neutral-700": "240deg 5% 26%",
				"--color-neutral-800": "240deg 4% 16%",
				"--color-neutral-900": "240deg 6% 10%",
				"--color-neutral-950": "240deg 10% 4%",
				"--color-neutral-1000": "240deg 0% 0%",

				"--color-red-50": "0deg 86% 97%",
				"--color-red-100": "0deg 93% 94%",
				"--color-red-200": "0deg 96% 89%",
				"--color-red-300": "0deg 94% 82%",
				"--color-red-400": "0deg 91% 71%",
				"--color-red-500": "0deg 84% 60%",
				"--color-red-600": "0deg 72% 51%",
				"--color-red-700": "0deg 74% 42%",
				"--color-red-800": "0deg 70% 35%",
				"--color-red-900": "0deg 63% 31%",
				"--color-red-950": "0deg 75% 15%",

				"--color-green-50": "138deg 76% 97%",
				"--color-green-100": "141deg 84% 93%",
				"--color-green-200": "141deg 79% 85%",
				"--color-green-300": "142deg 77% 73%",
				"--color-green-400": "142deg 69% 58%",
				"--color-green-500": "142deg 71% 45%",
				"--color-green-600": "142deg 76% 36%",
				"--color-green-700": "142deg 72% 29%",
				"--color-green-800": "143deg 64% 24%",
				"--color-green-900": "144deg 61% 20%",
				"--color-green-950": "145deg 80% 10%",

				/** Typography. */
				"--font-family-body": "var(--font-sans), ui-sans-serif, system-ui, sans-serif",

				/** Font sizes. */
				"--font-size-2xs": "0.5rem",
				"--font-size-xs": "0.625rem",
				"--font-size-sm": "0.75rem",
				"--font-size-md": "0.875rem",
				"--font-size-lg": "1rem",
				"--font-size-xl": "1.125rem",
				"--font-size-2xl": "1.25rem",
				"--font-size-3xl": "1.5rem",
				"--font-size-4xl": "1.875rem",
				"--font-size-5xl": "2.25rem",
				"--font-size-6xl": "3rem",
				"--font-size-7xl": "3.75rem",
				"--font-size-8xl": "4.5rem",
				"--font-size-9xl": "6rem",
				"--font-size-10xl": "8rem",

				/** Line heights. */
				"--line-height-2xs": "0.625rem",
				"--line-height-xs": "0.75rem",
				"--line-height-sm": "1rem",
				"--line-height-md": "1.25rem",
				"--line-height-lg": "1.5rem",
				"--line-height-xl": "1.75rem",
				"--line-height-2xl": "1.75rem",
				"--line-height-3xl": "2rem",
				"--line-height-4xl": "2.25rem",
				"--line-height-5xl": "2.5rem",
				"--line-height-6xl": "3rem",
				"--line-height-7xl": "3.75rem",
				"--line-height-8xl": "4.5rem",
				"--line-height-9xl": "6rem",
				"--line-height-10xl": "8rem",
			},
		});

		addBase({
			":root": {
				colorScheme: "light",

				/** Named colors. */
				"--color-foreground": "var(--color-neutral-950)",
				"--color-background": "var(--color-neutral-0)",
				"--color-surface-foreground": "var(--color-neutral-950)",
				"--color-surface-background": "var(--color-neutral-0)",
				"--color-overlay-foreground": "var(--color-neutral-950)",
				"--color-overlay-background": "var(--color-neutral-0)",
				"--color-primary-foreground": "var(--color-neutral-50)",
				"--color-primary-background": "var(--color-neutral-900)",
				"--color-secondary-foreground": "var(--color-neutral-900)",
				"--color-secondary-background": "var(--color-neutral-100)",
				"--color-muted-foreground": "var(--color-neutral-500)",
				"--color-muted-background": "var(--color-neutral-100)",
				"--color-accent-foreground": "var(--color-neutral-900)",
				"--color-accent-background": "var(--color-neutral-100)",
				"--color-negative-foreground": "var(--color-neutral-50)",
				"--color-negative-background": "var(--color-red-500)",
				"--color-positive-foreground": "var(--color-neutral-50)",
				"--color-positive-background": "var(--color-green-500)",
				"--color-border": "var(--color-neutral-200)",
				"--color-input": "var(--color-neutral-200)",
				"--color-focus-ring": "var(--color-neutral-400)",
			},
			":root[data-color-scheme=dark]": {
				colorScheme: "dark",

				/** Named colors. */
				"--color-foreground": "var(--color-neutral-50)",
				"--color-background": "var(--color-neutral-950)",
				"--color-surface-foreground": "var(--color-neutral-50)",
				"--color-surface-background": "var(--color-neutral-950)",
				"--color-overlay-foreground": "var(--color-neutral-50)",
				"--color-overlay-background": "var(--color-neutral-950)",
				"--color-primary-foreground": "var(--color-neutral-900)",
				"--color-primary-background": "var(--color-neutral-50)",
				"--color-secondary-foreground": "var(--color-neutral-50)",
				"--color-secondary-background": "var(--color-neutral-800)",
				"--color-muted-foreground": "var(--color-neutral-400)",
				"--color-muted-background": "var(--color-neutral-800)",
				"--color-accent-foreground": "var(--color-neutral-50)",
				"--color-accent-background": "var(--color-neutral-800)",
				"--color-negative-foreground": "var(--color-red-50)",
				"--color-negative-background": "var(--color-red-900)",
				"--color-positive-foreground": "var(--color-green-50)",
				"--color-positive-background": "var(--color-green-900)",
				"--color-border": "var(--color-neutral-800)",
				"--color-input": "var(--color-neutral-800)",
				"--color-focus-ring": "var(--color-neutral-800)",
			},
		});

		addBase({
			"*,\n\t*::before,\n\t*::after": {
				boxSizing: "border-box",
				margin: "0",
				padding: "0",
				borderColor: "hsl(var(--color-border) / <alpha-value>)",
			},
			":root": {
				overflow: "hidden",
				backgroundColor: "hsl(var(--color-background) / <alpha-value>)",
				color: "hsl(var(--color-foreground) / <alpha-value>)",
				fontSize: "var(--font-size-md)",
				fontFamily: "var(--font-family-body)",
				overflowWrap: "break-word",
				tabSize: "4",
				blockSize: "100%",
				fontSynthesis: "none",
				textRendering: "optimizeLegibility",
				textSizeAdjust: "none",
				WebkitTapHighlightColor: "transparent",
			},
			body: {
				overflowY: "auto",
				blockSize: "100%",
			},
			":focus": {
				outline: "none",
			},
			":focus-visible": {
				outline: "2px solid hsl(var(--color-focus-ring) / <alpha-value>)",
				outlineOffset: "0",
			},
			"blockquote,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6": {
				textWrap: "balance",
			},
			iframe: {
				border: "0",
			},
			p: {
				textWrap: "pretty",
			},
			"[id]": {
				scrollMarginBlockStart: "2ex",
			},
			"@media (prefers-reduced-motion: reduce)": {
				"*,\n\t*::before,\n\t*::after": {
					transitionDuration: "0.01ms !important",
					animationDuration: "0.01ms !important",
					animationIterationCount: "1 !important",
					scrollBehavior: "auto !important",
				},
			},
		});
	},
	{
		theme: {
			borderRadius: {
				sm: "var(--radius-sm)",
				md: "var(--radius-md)",
				lg: "var(--radius-lg)",
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				white: "hsl(var(--color-neutral-0) / <alpha-value>)",
				black: "hsl(var(--color-neutral-1000) / <alpha-value>)",
				neutral: {
					"0": "hsl(var(--color-neutral-0) / <alpha-value>)",
					"50": "hsl(var(--color-neutral-50) / <alpha-value>)",
					"100": "hsl(var(--color-neutral-100) / <alpha-value>)",
					"200": "hsl(var(--color-neutral-200) / <alpha-value>)",
					"300": "hsl(var(--color-neutral-300) / <alpha-value>)",
					"400": "hsl(var(--color-neutral-400) / <alpha-value>)",
					"500": "hsl(var(--color-neutral-500) / <alpha-value>)",
					"600": "hsl(var(--color-neutral-600) / <alpha-value>)",
					"700": "hsl(var(--color-neutral-700) / <alpha-value>)",
					"800": "hsl(var(--color-neutral-800) / <alpha-value>)",
					"900": "hsl(var(--color-neutral-900) / <alpha-value>)",
					"950": "hsl(var(--color-neutral-950) / <alpha-value>)",
					"1000": "hsl(var(--color-neutral-1000) / <alpha-value>)",
				},
				foreground: "hsl(var(--color-foreground) / <alpha-value>)",
				background: "hsl(var(--color-background) / <alpha-value>)",
				surface: {
					foreground: "hsl(var(--color-surface-foreground) / <alpha-value>)",
					background: "hsl(var(--color-surface-background) / <alpha-value>)",
				},
				overlay: {
					foreground: "hsl(var(--color-overlay-foreground) / <alpha-value>)",
					background: "hsl(var(--color-overlay-background) / <alpha-value>)",
				},
				primary: {
					foreground: "hsl(var(--color-primary-foreground) / <alpha-value>)",
					background: "hsl(var(--color-primary-background) / <alpha-value>)",
				},
				secondary: {
					foreground: "hsl(var(--color-secondary-foreground) / <alpha-value>)",
					background: "hsl(var(--color-secondary-background) / <alpha-value>)",
				},
				muted: {
					foreground: "hsl(var(--color-muted-foreground) / <alpha-value>)",
					background: "hsl(var(--color-muted-background) / <alpha-value>)",
				},
				accent: {
					foreground: "hsl(var(--color-accent-foreground) / <alpha-value>)",
					background: "hsl(var(--color-accent-background) / <alpha-value>)",
				},
				negative: {
					foreground: "hsl(var(--color-negative-foreground) / <alpha-value>)",
					background: "hsl(var(--color-negative-background) / <alpha-value>)",
				},
				positive: {
					foreground: "hsl(var(--color-positive-foreground) / <alpha-value>)",
					background: "hsl(var(--color-positive-background) / <alpha-value>)",
				},
				border: "hsl(var(--color-border) / <alpha-value>)",
				input: "hsl(var(--color-input) / <alpha-value>)",
				"focus-ring": "hsl(var(--color-focus-ring) / <alpha-value>)",
			},
			fontFamily: {
				body: ["var(--font-family-body)"],
			},
			fontSize: {
				"2xs": ["var(--font-size-2xs)", { lineHeight: "var(--line-height-2xs)" }],
				xs: ["var(--font-size-xs)", { lineHeight: "var(--line-height-xs)" }],
				sm: ["var(--font-size-sm)", { lineHeight: "var(--line-height-sm)" }],
				md: ["var(--font-size-md)", { lineHeight: "var(--line-height-md)" }],
				lg: ["var(--font-size-lg)", { lineHeight: "var(--line-height-lg)" }],
				xl: ["var(--font-size-xl)", { lineHeight: "var(--line-height-xl)" }],
				"2xl": ["var(--font-size-2xl)", { lineHeight: "var(--line-height-2xl)" }],
				"3xl": ["var(--font-size-3xl)", { lineHeight: "var(--line-height-3xl)" }],
				"4xl": ["var(--font-size-4xl)", { lineHeight: "var(--line-height-4xl)" }],
				"5xl": ["var(--font-size-5xl)", { lineHeight: "var(--line-height-5xl)" }],
				"6xl": ["var(--font-size-6xl)", { lineHeight: "var(--line-height-6xl)" }],
				"7xl": ["var(--font-size-7xl)", { lineHeight: "var(--line-height-7xl)" }],
				"8xl": ["var(--font-size-8xl)", { lineHeight: "var(--line-height-8xl)" }],
			},
			screens: {
				xs: "var(--breakpoints-xs)",
				sm: "var(--breakpoints-sm)",
				md: "var(--breakpoints-md)",
				lg: "var(--breakpoints-lg)",
				xl: "var(--breakpoints-xl)",
				"2xl": "var(--breakpoints-2xl)",
				"3xl": "var(--breakpoints-3xl)",
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null,
					},
				},
			},
		},
	},
);
