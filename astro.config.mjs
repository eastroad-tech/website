// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://eastroad.ai',
  integrations: [mdx()],
  // base: intentionally not set yet — depends on the final domain/repo
  // naming decision, which hasn't been made
});
