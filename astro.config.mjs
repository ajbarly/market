import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://market.ajbarly.app',

  integrations: [
      sitemap(),
      tailwind({
          // Disable injecting a basic `base.css` import on every page.
          applyBaseStyles: false
      })
  ],

  output: 'server',
  adapter: netlify()
});