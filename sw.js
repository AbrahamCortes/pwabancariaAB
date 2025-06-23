const STATIC_CACHE = "static";

const APP_SHELL = [
    "/",
    "index.html",
    "css/styles.css",
    "sw/js.js",
    
];

self.addEventListener("install", (e) => {
    const cacheStatic = caches
    .open(STATIC_CACHE)
    .then(cache => cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);
});

self.addEventListener("fetch", (e) => {
    console.log("fectch! ", e.request);
});