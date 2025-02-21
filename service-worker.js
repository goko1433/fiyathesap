const CACHE_NAME = 'fiyat-hesaplama-cache-v1';
const urlsToCache = [
  '/',
  '/index.html'
  // Gerekli diğer dosya ve assetleri buraya ekleyin.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
