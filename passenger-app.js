// Phusion Passenger entry point (CommonJS)
// cPanel's Node.js Selector loads this file as the startup script.
// It dynamically imports the Angular SSR ESM bundle and re-exports the handler.

async function loadApp() {
  const { reqHandler } = await import('./dist/Mo-portfolio/server/server.mjs');
  return reqHandler;
}

let handler;
loadApp().then(h => { handler = h; });

module.exports = (req, res) => {
  if (handler) {
    handler(req, res);
  } else {
    res.writeHead(503);
    res.end('Server is starting...');
  }
};
