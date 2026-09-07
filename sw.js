self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('goal-zero-pwa').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/festejo.mp3',
        '/icono-vial.svg',
        '/icono-derrame.svg'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
