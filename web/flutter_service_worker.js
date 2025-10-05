'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".vercel/project.json": "54b3abead8f53b656606bfdd31b09c80",
".vercel/README.txt": "2b13c79d37d6ed82a3255b83b6815034",
"assets/AssetManifest.bin": "216e62824cc167acf10e6b74f20b2224",
"assets/AssetManifest.bin.json": "e9ad8f2832ead5cb865b2c3f7066b583",
"assets/AssetManifest.json": "ac21a1223a6c13023f500c83994f6885",
"assets/assets/font/NeueHaasDisplayBlack.ttf": "a9f8a301de697ebfb4e9a0157cbe9160",
"assets/assets/font/NeueHaasDisplayBlackItalic.ttf": "88f74963845c5350ae260220778b3e3c",
"assets/assets/font/NeueHaasDisplayBold.ttf": "822ebe551ca0a1191ecadaa8fa71ddb5",
"assets/assets/font/NeueHaasDisplayBoldItalic.ttf": "dae896913597a8269d58cc1c63df41f8",
"assets/assets/font/NeueHaasDisplayLight.ttf": "cedb0be9ae2bd1fd529d9003a5ddae34",
"assets/assets/font/NeueHaasDisplayLightItalic.ttf": "f2f64f245b960df542dbc956f00c4150",
"assets/assets/font/NeueHaasDisplayMedium.ttf": "c00931e8b3cca8082101c210353fe27e",
"assets/assets/font/NeueHaasDisplayMediumItalic.ttf": "bfbca08a0812b80a8b42a8bf42ed7564",
"assets/assets/font/NeueHaasDisplayRoman.ttf": "13568ea57eda4ce469fa0600426963a5",
"assets/assets/font/NeueHaasDisplayRomanItalic.ttf": "87fe6070b5f7ea418084763c10068ab0",
"assets/assets/font/NeueHaasDisplayThin.ttf": "880401ec0686993ae377a6621e50d58a",
"assets/assets/font/NeueHaasDisplayThinItalic.ttf": "8500b8d2a64f210955bc15e37131fedd",
"assets/assets/font/NeueHaasDisplayXThin.ttf": "13017f9fa80e2ca2e9c6661f0a1b6eeb",
"assets/assets/font/NeueHaasDisplayXThinItalic.ttf": "67729302225678f15c8bad8c9a5b8f23",
"assets/assets/font/NeueHaasDisplayXXThin.ttf": "4e73fc2c1acd75f5531fbf8be3ebef74",
"assets/assets/font/NeueHaasDisplayXXThinItalic.ttf": "4ce45fd285884dc782e39e1f4efa8307",
"assets/assets/images/1.png": "45072e03044f40396d2ca97f12c8d8e7",
"assets/assets/images/Black.png": "71df3ddc3c94f3bb950ec00e34e1e2d1",
"assets/assets/images/Ellipse%25201%2520(1).png": "2337cff86f7ce557699d888fe497edba",
"assets/assets/images/Ellipse%25201%2520(2).png": "c5885e633dd2e14ed7b79de98a71df74",
"assets/assets/images/Ellipse%25201.png": "8c745bfbc2637dfc23bf1ee5cd1b9995",
"assets/assets/images/Iphone%252013@4x.png": "f3b1f375f471534a84cc659c83a91d29",
"assets/assets/images/iPhone%252015.png": "6cf3b60eb22c17b5b936e378a8404ec7",
"assets/assets/images/key_handover.svg": "6f648cc90b0b16e152cd87e4ec35501a",
"assets/assets/svgs/call.svg": "b60879bfbd9ad329a2087c220725df63",
"assets/assets/svgs/facebook.svg": "855d82256e79a5b89d0c10053bc80f65",
"assets/assets/svgs/Frame%25202.svg": "cd9451ce704882367c7ab84a9bdbb9e2",
"assets/assets/svgs/Icon%2520(1).svg": "5aabb3fa9d62aeb285f579fb6814e6b8",
"assets/assets/svgs/Icon%2520(10).svg": "cbce3ceb039023f3dac67d5add209d6e",
"assets/assets/svgs/Icon%2520(11).svg": "770e6310b2d241e5423676793367da39",
"assets/assets/svgs/Icon%2520(12).svg": "d4faa1d76c9d803e9f8b7757bc2b59d3",
"assets/assets/svgs/Icon%2520(13).svg": "ff54e1a2f77a9bf553eef6b64102e16f",
"assets/assets/svgs/Icon%2520(14).svg": "7a02035c38796e4d006fa34797aeeb84",
"assets/assets/svgs/Icon%2520(15).svg": "39633bc815c7c00ff2877a4ca9501628",
"assets/assets/svgs/Icon%2520(16).svg": "3cfa49b1cf49786ee27f6d11d5dfb84c",
"assets/assets/svgs/Icon%2520(17).svg": "292d8246c392cb8aaac8d05085e403b1",
"assets/assets/svgs/Icon%2520(18).svg": "cf021b7ae3256715417baaa473cedadc",
"assets/assets/svgs/Icon%2520(2).svg": "ce5451b3b17414a2681f41b38be7f86c",
"assets/assets/svgs/Icon%2520(3).svg": "81cdb97ddf36d50ee9c37ce976d918f7",
"assets/assets/svgs/Icon%2520(4).svg": "6676526265caea1d049a7ce4babfa2e9",
"assets/assets/svgs/Icon%2520(5).svg": "effc35f46e213ab8920faca4a18a9723",
"assets/assets/svgs/Icon%2520(6).svg": "6dbd2f15f1121b2eb3249b891959e619",
"assets/assets/svgs/Icon%2520(7).svg": "5c77682e7390156a3a59f01011b7d12b",
"assets/assets/svgs/Icon%2520(8).svg": "3c28699c35df2d6681bcad21ce075f18",
"assets/assets/svgs/Icon%2520(9).svg": "fc55e1a4d46df218e718496ab1705901",
"assets/assets/svgs/Icon.svg": "eafe410d1f65c9d93d29316e54ab584e",
"assets/assets/svgs/import.svg": "a6be60e823bf9f0e60c150ca0bc855ec",
"assets/assets/svgs/instagram.svg": "00ff47af3b47961837a7ba2f26b2d035",
"assets/assets/svgs/quote-down.svg": "831cfe2b2e4fdb4b9aeda8d45615182e",
"assets/assets/svgs/sms.svg": "b52330915069b07db6807b3f87a04a52",
"assets/assets/svgs/whatsapp.svg": "482e306a79f6c3c4ef72e6879dee64e9",
"assets/assets/svgs/youtube.svg": "708c7c9673bb1ae8c017dbbb58eebfbf",
"assets/FontManifest.json": "de4436019637837caa100422a74cd7e5",
"assets/fonts/MaterialIcons-Regular.otf": "27de7b91f18336a890ada01318e453e8",
"assets/loading.gif": "7a63480a257cdcc94fea9fa407908cbf",
"assets/NOTICES": "50f36258dc7ccf34fcd50ecdb42fe39c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "c00408f8e15ea4eb2df26c20a62c3778",
"icons/agent_icon.png": "5e3a858f27d66de14b76e8784179a88e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "91058cac72833beadefbc38f1871538a",
"/": "91058cac72833beadefbc38f1871538a",
"main.dart.js": "af6b08736f6b7613e5be398314c6a39d",
"manifest.json": "d748c05fec1c02baeb2607e46ee51559",
"version.json": "32ca62f16f5dddf8ccaa87cac1019189"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
