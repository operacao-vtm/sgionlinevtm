/* SGI · VTM — necessário para instalar como app. Sempre busca a versão nova (não guarda páginas velhas). */
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => { if (e.request.method !== 'GET') return; e.respondWith(fetch(e.request).catch(() => caches.match(e.request))); });
