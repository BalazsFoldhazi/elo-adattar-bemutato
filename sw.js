// Élő Adattár — service worker.
//
// A bemutató telepíthető alkalmazásként is fut, és hálózat nélkül is
// megnyílik. Új változat kiadásakor a VERZIO számát emeld: a régi tár akkor
// törlődik, és a telefon az új képeket, ikonokat tölti le.

const VERZIO = 'elo-adattar-v1';

const ALAP = [
  './',
  './index.html',
  './manifest.webmanifest',
  './ikonok/ikon-192.png',
  './ikonok/ikon-512.png',
  './kepek/02-partnerlista.jpg',
  './kepek/06-arajanlat-szerk.jpg',
  './kepek/14-teendok.jpg',
  './kepek/16-napi-tura.jpg',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(VERZIO)
      .then((tar) => tar.addAll(ALAP))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((nevek) => Promise.all(nevek.filter((n) => n !== VERZIO).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const kerés = e.request;
  if (kerés.method !== 'GET') return;

  // Maga az oldal: ELŐBB a hálózat, hogy egy frissítés rögtön látszódjon;
  // ha nincs hálózat, a tárolt változat.
  if (kerés.mode === 'navigate') {
    e.respondWith(
      fetch(kerés)
        .then((valasz) => {
          const masolat = valasz.clone();
          caches.open(VERZIO).then((tar) => tar.put('./index.html', masolat));
          return valasz;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Képek, ikonok és a betűtípusok: előbb a tárolt, közben a háttérben frissül.
  const url = new URL(kerés.url);
  const sajat = url.origin === self.location.origin;
  const betu = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!sajat && !betu) return;

  e.respondWith(
    caches.open(VERZIO).then((tar) =>
      tar.match(kerés).then((tarolt) => {
        const friss = fetch(kerés)
          .then((valasz) => {
            if (valasz.ok || valasz.type === 'opaque') tar.put(kerés, valasz.clone());
            return valasz;
          })
          .catch(() => tarolt);
        return tarolt || friss;
      })
    )
  );
});
