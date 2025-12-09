// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://framepickerbykriss.com',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'de'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en',
        fr: 'fr',
        de: 'de'
      }
    }
  })]
});
