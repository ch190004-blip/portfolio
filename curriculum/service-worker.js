const CACHE_NAME = "curriculum-app-v1";

self.addEventListener("install", event => {
  console.log("Service Worker 安裝");
});

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
