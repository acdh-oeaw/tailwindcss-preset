# acdh-oeaw tailwindcss preset

this is a customisable preset for [`tailwindcss`](https://tailwindcss.com/). it includes animation
utilities from [`tailwindcss-animate`](https://github.com/jamiebuilds/tailwindcss-animate) and
typography styles from [`@tailwindcss/typography`](https://tailwindcss.com/docs/typography-plugin).

## how to install

```bash
npm install tailwindcss @acdh-oeaw/tailwindcss-preset
```

## how to setup

```ts
// tailwind.config.ts

import { type Config } from "tailwindcss";
import preset from "@acdh-oeaw/tailwindcss-preset";

const config = {
	config: ["./src/**/*.@(ts|tsx)"],
	presets: [preset],
} satisfies Config;

export default config;
```

## how to toggle dark mode

dark mode can be toggled via data attribute on the root element:

```html
<html data-color-scheme="dark">
	<!-- ... -->
</html>
```

## how to customise

design tokens can be customised via css custom properties. note that colors must be defined as hsl
channels.

```css
:root {
	--color-foreground: 240deg 6% 10%;
}

:root[data-color-scheme="dark"] {
	--color-foreground: 240deg 6% 90%;
}
```
