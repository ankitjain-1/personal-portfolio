const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/main.css",
  "/css/bike.css",
  "/css/hamburger.css",
  "/css/name.css",
  "/css/profile-about-tag.css",
  "/css/splash.css",
  "/js/hamburger.js",
  "/js/main.js",
  "/assets/img/logo2/Aj",
  "/assets/img/logo2/onlinelogomaker-120520-2129-5352.svg",
  "./assets/img/profile-picture-300x300.jpg",
  "./assets/img/linkedin.png",
  "./assets/img/gmail.png",
  "./assets/img/github.png",
  "./assets/img/stack-overflow.png",
  "./assets/img/instagram2.png",
  "./assets/img/Android-app-.png",
  "./assets/img/.jpg",
  "./assets/img/development-cover_2.jpg",
  "./assets/img/webdevelopment2.jpg"

]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
  