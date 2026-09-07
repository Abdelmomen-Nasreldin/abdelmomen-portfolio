import { copyFileSync } from 'node:fs';
// Cloudflare Pages uses a top-level 404.html instead of its SPA fallback.
copyFileSync('dist/client/404/index.html', 'dist/client/404.html');
