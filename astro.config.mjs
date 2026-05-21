import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://ajbarly.app',

  integrations: [
      sitemap()
  ],

  output: 'server',
  adapter: netlify(),
  vite: {
    css: {
      postcss: './postcss.config.cjs'
    }
  }
});