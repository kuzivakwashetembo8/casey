// Retire the legacy cache-first worker. API requests, including POST, must
// never be written to the Cache API. This worker intentionally leaves requests
// to the browser's normal network handling.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Intentionally do not call respondWith() or caches.put() for any request.
