const cacheName = 'helloWorld';

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache =>
        cache.addAll([
          '/index.html',
          '/static/js/',
        ]))
      .then(() => self.skipWaiting()),
  );
});

// self.addEventListener('activate', event => {
//   event.waitUntil(self.clients.claim());
// });

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => {
        return response || fetch(event.request);
      }),
  );
});