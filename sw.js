// Offline support. The page is fetched from the network first so updates show up
// the next time she opens the app; the cached copy is used only when offline.
const CACHE = "escuela-a6500-v3";
const SHELL = ["./", "index.html", "en.js", "manifest.webmanifest", "icons/icon-192.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if(req.method !== "GET") return;
  const url = new URL(req.url);
  const isFont = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if(url.origin !== location.origin && !isFont) return;

  if(isFont){
    // Fonts never change: cache first.
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res;
    })));
    return;
  }
  // Own files: network first, fall back to cache when offline. no-cache makes the browser check
  // with GitHub Pages instead of reusing its own copy for ten minutes after an update.
  e.respondWith(fetch(req, {cache: "no-cache"}).then(res => {
    if(res.ok){ const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req).then(hit => hit || (req.mode === "navigate" ? caches.match("index.html") : undefined))));
});
