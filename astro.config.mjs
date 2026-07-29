// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Served from the custom domain root (confirmed via `gh api
  // repos/eastroad-tech/website/pages`: cname "eastroad.ai", canonical
  // html_url "https://eastroad.ai/"), not the eastroad-tech.github.io/website
  // subpath — so no base is set. Revisit both together if the Pages custom
  // domain is ever removed and the site reverts to the subpath URL.
  site: 'https://eastroad.ai',
  integrations: [mdx()],
});
