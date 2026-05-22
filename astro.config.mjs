// =============================================================================
// THE VEIL & LEAD — ASTRO CONFIG
// =============================================================================
// Astro reads this file when it starts up. It tells Astro:
//   - What domain this site lives at (for absolute URLs in sitemaps, etc.)
//   - Which integrations to load (Pagefind, in this case)
//
// You'll rarely edit this file. Most day-to-day work happens in
// src/content/ (writing content) and src/pages/ (page templates).
// =============================================================================

import { defineConfig } from 'astro/config';
import pagefind from 'astro-pagefind';

export default defineConfig({
  // Replace this with the real domain when you know where the site
  // will live. It only affects absolute URLs (sitemaps, RSS, social
  // share tags) — local dev works regardless.
  site: 'https://veil-and-lead.example.com',

  integrations: [
    // Pagefind builds a search index from your built HTML files and
    // serves a tiny WASM-powered search at runtime. The integration
    // handles the build pipeline automatically — you don't need
    // a separate "pagefind" command in package.json.
    pagefind(),
  ],
});
