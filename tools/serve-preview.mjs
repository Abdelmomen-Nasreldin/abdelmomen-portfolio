import { createServer } from 'node:http';
import { gzipSync } from 'node:zlib';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, extname, sep } from 'node:path';
const root = resolve('dist/client');
const port = Number(process.env.PORTFOLIO_PORT || 4400);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.webmanifest': 'application/manifest+json',
  '.txt': 'text/plain',
};
createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    res.writeHead(400).end();
    return;
  }
  let file = resolve(root, '.' + pathname);
  if (file !== root && !file.startsWith(root + sep)) {
    res.writeHead(403).end();
    return;
  }
  if (existsSync(file) && statSync(file).isDirectory()) file = resolve(file, 'index.html');
  if (!existsSync(file) && !extname(file) && existsSync(file + '.html')) file += '.html';
  let status = 200;
  if (!existsSync(file) || !statSync(file).isFile()) {
    file = resolve(root, '404.html');
    status = 404;
  }
  if (!existsSync(file)) {
    res.writeHead(404).end('Not found');
    return;
  }
  const compress =
    /\bgzip\b/.test(req.headers['accept-encoding'] || '') &&
    /\.(html|css|js|svg|xml|txt)$/.test(file);
  const body = readFileSync(file);
  res.writeHead(status, {
    'Content-Type': types[extname(file)] || 'application/octet-stream',
    'Cache-Control': 'no-store',
    Vary: 'Accept-Encoding',
    ...(compress ? { 'Content-Encoding': 'gzip' } : {}),
  });
  res.end(compress ? gzipSync(body) : body);
}).listen(port, '127.0.0.1', () => console.log('Portfolio preview: http://127.0.0.1:' + port));
