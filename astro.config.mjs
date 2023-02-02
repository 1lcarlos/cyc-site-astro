import { defineConfig } from 'astro/config';

// https://astro.build/config
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://1lcarlos.github.io',
  base: '/cyc-site-astro',
  output: "server",
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [tailwind()]
});