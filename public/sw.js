const KEY = "key";

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("message", (event) => {
  if (event.data.type === "CACHE_URLS") {
    event.waitUntil(
      caches.open(KEY).then((cache) => {
        return cache.addAll(event.data.payload);
      })
    );
  }
});
