// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Matches the GitHub Pages config actually set on eastroad-tech/website
  // (no custom domain configured there — confirmed via `gh api
  // repos/eastroad-tech/website/pages`). Revisit both site and base
  // together if eastroad.ai is wired up as a custom domain later.
  site: 'https://eastroad-tech.github.io',
  base: '/website',
  integrations: [mdx()],
});
