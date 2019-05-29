// importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");
//
// importScripts(
//   "/precache-manifest.f823486adf3e027119851e7a3a56a3d1.js"
// );
//
// workbox.clientsClaim();
//
// /**
//  * The workboxSW.precacheAndRoute() method efficiently caches and responds to
//  * requests for URLs in the manifest.
//  * See https://goo.gl/S9QRab
//  */
// self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.suppressWarnings();
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
//
// workbox.routing.registerNavigationRoute("/index.html", {
//
//   blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
// });


const cacheName = 'helloWorld';

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache =>
        cache.addAll([
          '/static/js/',
          '/index.html',
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