import createPlugin from "tailwindcss/plugin";

export const plugin = createPlugin(
	({ addBase, addUtilities, matchUtilities, theme }) => {
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
				"--radius-none": "0",
				"--radius-sm": "2px",
				"--radius-md": "4px",
				"--radius-lg": "8px",
				"--radius-full": "9999px",

				/** Colors. */
				"--color-slate-50": "210.00deg 40.00% 98.04%",
				"--color-slate-100": "210.00deg 40.00% 96.08%",
				"--color-slate-200": "214.29deg 31.82% 91.37%",
				"--color-slate-300": "212.73deg 26.83% 83.92%",
				"--color-slate-400": "215.00deg 20.22% 65.10%",
				"--color-slate-500": "215.38deg 16.32% 46.86%",
				"--color-slate-600": "215.29deg 19.32% 34.51%",
				"--color-slate-700": "215.29deg 25.00% 26.67%",
				"--color-slate-800": "217.24deg 32.58% 17.45%",
				"--color-slate-900": "222.22deg 47.37% 11.18%",
				"--color-slate-950": "228.57deg 84.00% 4.90%",

				"--color-gray-50": "210.00deg 20.00% 98.04%",
				"--color-gray-100": "220.00deg 14.29% 95.88%",
				"--color-gray-200": "220.00deg 13.04% 90.98%",
				"--color-gray-300": "216.00deg 12.20% 83.92%",
				"--color-gray-400": "217.89deg 10.61% 64.90%",
				"--color-gray-500": "220.00deg 8.94% 46.08%",
				"--color-gray-600": "215.00deg 13.79% 34.12%",
				"--color-gray-700": "216.92deg 19.12% 26.67%",
				"--color-gray-800": "215.00deg 27.91% 16.86%",
				"--color-gray-900": "220.91deg 39.29% 10.98%",
				"--color-gray-950": "224.00deg 71.43% 4.12%",

				"--color-zinc-50": "0.00deg 0.00% 98.04%",
				"--color-zinc-100": "240.00deg 4.76% 95.88%",
				"--color-zinc-200": "240.00deg 5.88% 90.00%",
				"--color-zinc-300": "240.00deg 4.88% 83.92%",
				"--color-zinc-400": "240.00deg 5.03% 64.90%",
				"--color-zinc-500": "240.00deg 3.83% 46.08%",
				"--color-zinc-600": "240.00deg 5.20% 33.92%",
				"--color-zinc-700": "240.00deg 5.26% 26.08%",
				"--color-zinc-800": "240.00deg 3.70% 15.88%",
				"--color-zinc-900": "240.00deg 5.88% 10.00%",
				"--color-zinc-950": "240.00deg 10.00% 3.92%",

				"--color-neutral-gray-50": "0.00deg 0.00% 98.04%",
				"--color-neutral-gray-100": "0.00deg 0.00% 96.08%",
				"--color-neutral-gray-200": "0.00deg 0.00% 89.80%",
				"--color-neutral-gray-300": "0.00deg 0.00% 83.14%",
				"--color-neutral-gray-400": "0.00deg 0.00% 63.92%",
				"--color-neutral-gray-500": "0.00deg 0.00% 45.10%",
				"--color-neutral-gray-600": "0.00deg 0.00% 32.16%",
				"--color-neutral-gray-700": "0.00deg 0.00% 25.10%",
				"--color-neutral-gray-800": "0.00deg 0.00% 14.90%",
				"--color-neutral-gray-900": "0.00deg 0.00% 9.02%",
				"--color-neutral-gray-950": "0.00deg 0.00% 3.92%",

				"--color-stone-50": "60.00deg 9.09% 97.84%",
				"--color-stone-100": "60.00deg 4.76% 95.88%",
				"--color-stone-200": "20.00deg 5.88% 90.00%",
				"--color-stone-300": "24.00deg 5.75% 82.94%",
				"--color-stone-400": "24.00deg 5.43% 63.92%",
				"--color-stone-500": "25.00deg 5.26% 44.71%",
				"--color-stone-600": "33.33deg 5.45% 32.35%",
				"--color-stone-700": "30.00deg 6.25% 25.10%",
				"--color-stone-800": "12.00deg 6.49% 15.10%",
				"--color-stone-900": "24.00deg 9.80% 10.00%",
				"--color-stone-950": "20.00deg 14.29% 4.12%",

				"--color-red-50": "0.00deg 85.71% 97.25%",
				"--color-red-100": "0.00deg 93.33% 94.12%",
				"--color-red-200": "0.00deg 96.30% 89.41%",
				"--color-red-300": "0.00deg 93.55% 81.76%",
				"--color-red-400": "0.00deg 90.60% 70.78%",
				"--color-red-500": "0.00deg 84.24% 60.20%",
				"--color-red-600": "0.00deg 72.22% 50.59%",
				"--color-red-700": "0.00deg 73.71% 41.76%",
				"--color-red-800": "0.00deg 70.00% 35.29%",
				"--color-red-900": "0.00deg 62.82% 30.59%",
				"--color-red-950": "0.00deg 74.68% 15.49%",

				"--color-orange-50": "33.33deg 100.00% 96.47%",
				"--color-orange-100": "34.29deg 100.00% 91.76%",
				"--color-orange-200": "32.14deg 97.67% 83.14%",
				"--color-orange-300": "30.66deg 97.16% 72.35%",
				"--color-orange-400": "27.02deg 95.98% 60.98%",
				"--color-orange-500": "24.58deg 94.98% 53.14%",
				"--color-orange-600": "20.54deg 90.24% 48.24%",
				"--color-orange-700": "17.47deg 88.35% 40.39%",
				"--color-orange-800": "15.00deg 79.07% 33.73%",
				"--color-orange-900": "15.28deg 74.65% 27.84%",
				"--color-orange-950": "13.00deg 81.08% 14.51%",

				"--color-amber-50": "48.00deg 100.00% 96.08%",
				"--color-amber-100": "48.00deg 96.49% 88.82%",
				"--color-amber-200": "48.00deg 96.64% 76.67%",
				"--color-amber-300": "45.94deg 96.69% 64.51%",
				"--color-amber-400": "43.26deg 96.41% 56.27%",
				"--color-amber-500": "37.69deg 92.13% 50.20%",
				"--color-amber-600": "32.13deg 94.62% 43.73%",
				"--color-amber-700": "25.96deg 90.48% 37.06%",
				"--color-amber-800": "22.73deg 82.50% 31.37%",
				"--color-amber-900": "21.71deg 77.78% 26.47%",
				"--color-amber-950": "20.91deg 91.67% 14.12%",

				"--color-yellow-50": "54.55deg 91.67% 95.29%",
				"--color-yellow-100": "54.92deg 96.72% 88.04%",
				"--color-yellow-200": "52.76deg 98.31% 76.86%",
				"--color-yellow-300": "50.44deg 97.85% 63.53%",
				"--color-yellow-400": "47.95deg 95.82% 53.14%",
				"--color-yellow-500": "45.40deg 93.39% 47.45%",
				"--color-yellow-600": "40.61deg 96.12% 40.39%",
				"--color-yellow-700": "35.45deg 91.67% 32.94%",
				"--color-yellow-800": "31.76deg 80.95% 28.82%",
				"--color-yellow-900": "28.42deg 72.52% 25.69%",
				"--color-yellow-950": "26.00deg 83.33% 14.12%",

				"--color-lime-50": "78.26deg 92.00% 95.10%",
				"--color-lime-100": "79.59deg 89.09% 89.22%",
				"--color-lime-200": "80.87deg 88.46% 79.61%",
				"--color-lime-300": "81.97deg 84.52% 67.06%",
				"--color-lime-400": "82.71deg 77.97% 55.49%",
				"--color-lime-500": "83.74deg 80.53% 44.31%",
				"--color-lime-600": "84.80deg 85.23% 34.51%",
				"--color-lime-700": "85.87deg 78.42% 27.25%",
				"--color-lime-800": "86.25deg 68.97% 22.75%",
				"--color-lime-900": "87.62deg 61.17% 20.20%",
				"--color-lime-950": "89.27deg 80.39% 10.00%",

				"--color-green-50": "138.46deg 76.47% 96.67%",
				"--color-green-100": "140.62deg 84.21% 92.55%",
				"--color-green-200": "141.00deg 78.95% 85.10%",
				"--color-green-300": "141.71deg 76.64% 73.14%",
				"--color-green-400": "141.89deg 69.16% 58.04%",
				"--color-green-500": "142.09deg 70.56% 45.29%",
				"--color-green-600": "142.13deg 76.22% 36.27%",
				"--color-green-700": "142.43deg 71.81% 29.22%",
				"--color-green-800": "142.78deg 64.23% 24.12%",
				"--color-green-900": "143.81deg 61.17% 20.20%",
				"--color-green-950": "144.88deg 80.39% 10.00%",

				"--color-emerald-50": "151.76deg 80.95% 95.88%",
				"--color-emerald-100": "149.27deg 80.39% 90.00%",
				"--color-emerald-200": "152.37deg 76.00% 80.39%",
				"--color-emerald-300": "156.20deg 71.60% 66.86%",
				"--color-emerald-400": "158.11deg 64.37% 51.57%",
				"--color-emerald-500": "160.12deg 84.08% 39.41%",
				"--color-emerald-600": "161.38deg 93.55% 30.39%",
				"--color-emerald-700": "162.93deg 93.55% 24.31%",
				"--color-emerald-800": "163.15deg 88.12% 19.80%",
				"--color-emerald-900": "164.17deg 85.71% 16.47%",
				"--color-emerald-950": "165.71deg 91.30% 9.02%",

				"--color-teal-50": "166.15deg 76.47% 96.67%",
				"--color-teal-100": "167.23deg 85.45% 89.22%",
				"--color-teal-200": "168.39deg 83.78% 78.24%",
				"--color-teal-300": "170.57deg 76.92% 64.31%",
				"--color-teal-400": "172.46deg 66.01% 50.39%",
				"--color-teal-500": "173.41deg 80.39% 40.00%",
				"--color-teal-600": "174.67deg 83.85% 31.57%",
				"--color-teal-700": "175.34deg 77.44% 26.08%",
				"--color-teal-800": "176.10deg 69.37% 21.76%",
				"--color-teal-900": "175.93deg 60.82% 19.02%",
				"--color-teal-950": "178.60deg 84.31% 10.00%",

				"--color-cyan-50": "183.16deg 100.00% 96.27%",
				"--color-cyan-100": "185.11deg 95.92% 90.39%",
				"--color-cyan-200": "186.21deg 93.55% 81.76%",
				"--color-cyan-300": "186.99deg 92.41% 69.02%",
				"--color-cyan-400": "187.94deg 85.71% 53.33%",
				"--color-cyan-500": "188.74deg 94.50% 42.75%",
				"--color-cyan-600": "191.65deg 91.40% 36.47%",
				"--color-cyan-700": "192.92deg 82.28% 30.98%",
				"--color-cyan-800": "194.37deg 69.57% 27.06%",
				"--color-cyan-900": "196.36deg 63.64% 23.73%",
				"--color-cyan-950": "197.00deg 78.95% 14.90%",

				"--color-sky-50": "204.00deg 100.00% 97.06%",
				"--color-sky-100": "204.00deg 93.75% 93.73%",
				"--color-sky-200": "200.60deg 94.37% 86.08%",
				"--color-sky-300": "199.37deg 95.49% 73.92%",
				"--color-sky-400": "198.44deg 93.20% 59.61%",
				"--color-sky-500": "198.63deg 88.66% 48.43%",
				"--color-sky-600": "200.41deg 98.01% 39.41%",
				"--color-sky-700": "201.27deg 96.34% 32.16%",
				"--color-sky-800": "200.95deg 90.00% 27.45%",
				"--color-sky-900": "202.04deg 80.33% 23.92%",
				"--color-sky-950": "204.00deg 80.25% 15.88%",

				"--color-blue-50": "213.75deg 100.00% 96.86%",
				"--color-blue-100": "214.29deg 94.59% 92.75%",
				"--color-blue-200": "213.33deg 96.92% 87.25%",
				"--color-blue-300": "211.70deg 96.36% 78.43%",
				"--color-blue-400": "213.12deg 93.90% 67.84%",
				"--color-blue-500": "217.22deg 91.22% 59.80%",
				"--color-blue-600": "221.21deg 83.19% 53.33%",
				"--color-blue-700": "224.28deg 76.33% 48.04%",
				"--color-blue-800": "225.93deg 70.73% 40.20%",
				"--color-blue-900": "224.44deg 64.29% 32.94%",
				"--color-blue-950": "226.23deg 57.01% 20.98%",

				"--color-indigo-50": "225.88deg 100.00% 96.67%",
				"--color-indigo-100": "226.45deg 100.00% 93.92%",
				"--color-indigo-200": "228.00deg 96.49% 88.82%",
				"--color-indigo-300": "229.66deg 93.55% 81.76%",
				"--color-indigo-400": "234.45deg 89.47% 73.92%",
				"--color-indigo-500": "238.73deg 83.53% 66.67%",
				"--color-indigo-600": "243.40deg 75.36% 58.63%",
				"--color-indigo-700": "244.52deg 57.94% 50.59%",
				"--color-indigo-800": "243.65deg 54.50% 41.37%",
				"--color-indigo-900": "242.17deg 47.43% 34.31%",
				"--color-indigo-950": "243.75deg 47.06% 20.00%",

				"--color-violet-50": "250.00deg 100.00% 97.65%",
				"--color-violet-100": "251.43deg 91.30% 95.49%",
				"--color-violet-200": "250.50deg 95.24% 91.76%",
				"--color-violet-300": "252.50deg 94.74% 85.10%",
				"--color-violet-400": "255.14deg 91.74% 76.27%",
				"--color-violet-500": "258.31deg 89.53% 66.27%",
				"--color-violet-600": "262.12deg 83.26% 57.84%",
				"--color-violet-700": "263.39deg 69.96% 50.39%",
				"--color-violet-800": "263.36deg 69.30% 42.16%",
				"--color-violet-900": "263.50deg 67.42% 34.90%",
				"--color-violet-950": "261.18deg 72.65% 22.94%",

				"--color-purple-50": "270.00deg 100.00% 98.04%",
				"--color-purple-100": "268.70deg 100.00% 95.49%",
				"--color-purple-200": "268.57deg 100.00% 91.76%",
				"--color-purple-300": "269.19deg 97.37% 85.10%",
				"--color-purple-400": "270.00deg 95.24% 75.29%",
				"--color-purple-500": "270.74deg 91.01% 65.10%",
				"--color-purple-600": "271.48deg 81.33% 55.88%",
				"--color-purple-700": "272.09deg 71.67% 47.06%",
				"--color-purple-800": "272.89deg 67.16% 39.41%",
				"--color-purple-900": "273.64deg 65.64% 31.96%",
				"--color-purple-950": "273.55deg 86.92% 20.98%",

				"--color-fuchsia-50": "289.09deg 100.00% 97.84%",
				"--color-fuchsia-100": "286.96deg 100.00% 95.49%",
				"--color-fuchsia-200": "288.26deg 95.83% 90.59%",
				"--color-fuchsia-300": "291.11deg 93.10% 82.94%",
				"--color-fuchsia-400": "292.03deg 91.43% 72.55%",
				"--color-fuchsia-500": "292.19deg 84.08% 60.59%",
				"--color-fuchsia-600": "293.41deg 69.48% 48.82%",
				"--color-fuchsia-700": "294.69deg 72.41% 39.80%",
				"--color-fuchsia-800": "295.42deg 70.24% 32.94%",
				"--color-fuchsia-900": "296.70deg 63.64% 28.04%",
				"--color-fuchsia-950": "296.76deg 90.24% 16.08%",

				"--color-pink-50": "327.27deg 73.33% 97.06%",
				"--color-pink-100": "325.71deg 77.78% 94.71%",
				"--color-pink-200": "325.91deg 84.62% 89.80%",
				"--color-pink-300": "327.41deg 87.10% 81.76%",
				"--color-pink-400": "328.62deg 85.53% 70.20%",
				"--color-pink-500": "330.37deg 81.19% 60.39%",
				"--color-pink-600": "333.33deg 71.43% 50.59%",
				"--color-pink-700": "335.06deg 77.57% 41.96%",
				"--color-pink-800": "335.82deg 74.44% 35.29%",
				"--color-pink-900": "335.89deg 69.03% 30.39%",
				"--color-pink-950": "336.16deg 83.91% 17.06%",

				"--color-rose-50": "355.71deg 100.00% 97.25%",
				"--color-rose-100": "355.56deg 100.00% 94.71%",
				"--color-rose-200": "352.65deg 96.08% 90.00%",
				"--color-rose-300": "352.58deg 95.70% 81.76%",
				"--color-rose-400": "351.30deg 94.52% 71.37%",
				"--color-rose-500": "349.72deg 89.16% 60.20%",
				"--color-rose-600": "346.84deg 77.17% 49.80%",
				"--color-rose-700": "345.35deg 82.69% 40.78%",
				"--color-rose-800": "343.40deg 79.66% 34.71%",
				"--color-rose-900": "341.54deg 75.48% 30.39%",
				"--color-rose-950": "343.10deg 87.65% 15.88%",

				/** Neutral color. */
				"--color-neutral-0": "0deg 0% 100%",
				"--color-neutral-50": "var(--color-zinc-50)",
				"--color-neutral-100": "var(--color-zinc-100)",
				"--color-neutral-200": "var(--color-zinc-200)",
				"--color-neutral-300": "var(--color-zinc-300)",
				"--color-neutral-400": "var(--color-zinc-400)",
				"--color-neutral-500": "var(--color-zinc-500)",
				"--color-neutral-600": "var(--color-zinc-600)",
				"--color-neutral-700": "var(--color-zinc-700)",
				"--color-neutral-800": "var(--color-zinc-800)",
				"--color-neutral-900": "var(--color-zinc-900)",
				"--color-neutral-950": "var(--color-zinc-950)",
				"--color-neutral-1000": "0deg 0% 0%",

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
				"--color-notice-foreground": "var(--color-neutral-50)",
				"--color-notice-background": "var(--color-orange-500)",
				"--color-informative-foreground": "var(--color-neutral-50)",
				"--color-informative-background": "var(--color-sky-500)",
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
				"--color-notice-foreground": "var(--color-orange-50)",
				"--color-notice-background": "var(--color-orange-900)",
				"--color-informative-foreground": "var(--color-sky-50)",
				"--color-informative-background": "var(--color-sky-900)",
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

		matchUtilities(
			{
				s(value) {
					return { width: value, height: value };
				},
			},
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			{ values: theme("width")! },
		);

		matchUtilities(
			{
				"grid-fluid-cols"(value) {
					return {
						gridTemplateColumns: `repeat(var(--fluid-cols-repeat, auto-fill), minmax(${value}, 1fr))`,
					};
				},
			},
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			{ values: theme("width")! },
		);

		addUtilities({
			".grid-fluid-cols-fit": { "--fluid-cols-repeat": "auto-fit" },
			".grid-fluid-cols-fill": { "--fluid-cols-repeat": "auto-fill" },
		});
	},
	{
		theme: {
			borderRadius: {
				none: "var(--radius-none)",
				sm: "var(--radius-sm)",
				md: "var(--radius-md)",
				lg: "var(--radius-lg)",
				full: "var(--radius-full)",
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				inherit: "inherit",
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
				notice: {
					foreground: "hsl(var(--color-notice-foreground) / <alpha-value>)",
					background: "hsl(var(--color-notice-background) / <alpha-value>)",
				},
				informative: {
					foreground: "hsl(var(--color-informative-foreground) / <alpha-value>)",
					background: "hsl(var(--color-informative-background) / <alpha-value>)",
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
