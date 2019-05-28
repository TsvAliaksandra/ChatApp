const cacheName = 'helloWorld';

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('install', event => {
  console.log(12122121);
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(['/js/script.js'])));
});