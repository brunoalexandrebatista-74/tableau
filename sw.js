// Fichier de service de la mini-application « Tableau » (05/11/2026).
// Chrome l'exige pour proposer « Installer l'application ». Il ne garde rien
// en mémoire et ne lit aucune donnée : chaque demande part telle quelle sur internet.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) { e.respondWith(fetch(e.request)); });
