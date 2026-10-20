import { defineConfig } from 'astro/config';

// Hosted on Netlify, which sets URL to the site's main address during its builds.
export default defineConfig({
  site: process.env.URL ?? 'https://laura-ochoa.netlify.app',
});
