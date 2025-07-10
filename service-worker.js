self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('qr-check-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './success.mp3'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});