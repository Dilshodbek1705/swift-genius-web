// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // BU SATRNI QO'SHING:
  site: 'https://swiftgenius.uz',
  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});