self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./style.css", "./icon/android-chrome-192x192.png"]);
        })
    );
})

self.addEventListener("fetch", e => {
    console.log(`Intercepting fetch request for ${e.request.url}`);
});