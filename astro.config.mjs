import { defineConfig } from 'astro/config';

// https://astro.build/config

import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://1lcarlos.github.io',
  base: '/cyc-site-astro'  
});