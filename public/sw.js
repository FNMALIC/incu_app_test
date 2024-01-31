if (!self.define) {
  let e,
    s = {};
  const n = (n, i) => (
    (n = new URL(n + ".js", i).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, c) => {
    const a =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[a]) return;
    let t = {};
    const r = (e) => n(e, a),
      o = { module: { uri: a }, exports: t, require: r };
    s[a] = Promise.all(i.map((e) => o[e] || r(e))).then((e) => (c(...e), t));
  };
}
define(["./workbox-07a7b4f2"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "43480f1c73770e5ce140766544f2d8f7",
        },
        {
          url: "/_next/static/chunks/13-95bfba10dd1fbe2b.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/158-f1a24926bb8bc1f2.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/229-67d83e0ebeb8cbd5.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/236-3790ef67ed9813aa.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/374-675b0267fb107387.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/46-d07de3ba61dc5cd1.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/505-c4390246c4069147.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/517-694e9ac6a920b6f0.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/548-6d1397a42a0975ec.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/598-e64ebbccc1ef0b05.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/655-d174f755ac941d5e.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/659-147edebbc4470414.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/749-21f184c12321369e.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/808-e2589e66c96e6b9b.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/874-867d8cad29be7065.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/928-0435e2b9729a8ddf.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/938-f85faa2087473e31.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/966-ea4db28af889b7d0.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/app/(authentication)/auth/sign-in/layout-e11eef0d63d28d6a.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/app/(authentication)/auth/sign-in/page-6abb7492b781bbb4.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/app/(authentication)/auth/sign-up/layout-5745875a84cef87b.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/app/(authentication)/auth/sign-up/page-e8c9883628742a9b.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/app/(authentication)/layout-e192b2ee13b4c305.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/app/(user_access)/customers/page-affc6e2b74d19bba.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/app/(user_access)/dashboard/page-a18a3b02d96c5c9a.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/app/(user_access)/expenses/page-d4e30fc94d8b60eb.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/app/(user_access)/infrastructure/page-37afe8d19c34e76f.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/app/(user_access)/inventory/page-7732bdb8cb66880d.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/app/(user_access)/invoices/page-9a6e281a7d85741d.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/app/(user_access)/layout-af671f2b4127efd5.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/app/(user_access)/products/page-bdd72f8e48d30d41.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/app/(user_access)/reports/page-0c20c676b42c41fd.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/app/(user_access)/sales/page-048bc2e04a25a958.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/app/_not-found-01a4d0ab8d0d8c19.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/app/layout-e84d482b4c117e46.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/app/page-57fcf0e285c55bd1.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/d622d42c-36ecf4f63b577023.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/fd9d1056-acfd7dcc04307fd2.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/framework-8883d1e9be70c3da.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/main-app-609510edafe4a0a1.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/main-b94ef6a83239e0fa.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/pages/_app-98cb51ec6f9f135f.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/pages/_error-e87e5963ec1b8011.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-acb54c43523a0703.js",
          revision: "quXERprE6JonPm3RU5qUh",
        },
        {
          url: "/_next/static/css/431944509084d071.css",
          revision: "431944509084d071",
        },
        {
          url: "/_next/static/quXERprE6JonPm3RU5qUh/_buildManifest.js",
          revision: "a1b7599199e2e8c82f2c6bcf8d8aca61",
        },
        {
          url: "/_next/static/quXERprE6JonPm3RU5qUh/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/android-chrome-192x192.png",
          revision: "53b721707050eb50da52c045af1bee83",
        },
        {
          url: "/android-chrome-512x512.png",
          revision: "210f3e7a072e3f27d50640596186c3c9",
        },
        {
          url: "/apple-touch-icon.png",
          revision: "ee6119cfa8236d25a0a5be59905d66a9",
        },
        {
          url: "/favicon-16x16.png",
          revision: "cb4ee84ba4b2b3a1064ac0bf526895bd",
        },
        {
          url: "/favicon-32x32.png",
          revision: "d7bb7d4b1dd796e7ab63ca3fc4bf3225",
        },
        {
          url: "/icons/icon-128.png",
          revision: "a4a0d027aa17408a708170504e8480aa",
        },
        {
          url: "/icons/icon-144.png",
          revision: "dbe1b60293e7d9276d10a491a5e06e1f",
        },
        {
          url: "/icons/icon-152.png",
          revision: "4f73204363195bfeaf4ceea4096f161f",
        },
        {
          url: "/icons/icon-16.png",
          revision: "bc214705a235768d0cc927c63851aed2",
        },
        {
          url: "/icons/icon-180.png",
          revision: "3dd6a283c8056e42db1ea86c5cd8c985",
        },
        {
          url: "/icons/icon-192.png",
          revision: "0214030d6831f92f0571895dea94c592",
        },
        {
          url: "/icons/icon-256.png",
          revision: "91d52c7f0701e299a51ffc27609e13a3",
        },
        {
          url: "/icons/icon-48.png",
          revision: "13638d3711a6a3d57bb5801fbb4a3e23",
        },
        {
          url: "/icons/icon-512.png",
          revision: "3426c3a328767403f6e86e6309d96131",
        },
        {
          url: "/icons/icon-64.png",
          revision: "b61bc1c9204dd57b2b16b211b04d2c7b",
        },
        {
          url: "/icons/icon-72.png",
          revision: "ab50a54c460a61fd776912f7da3c1e4a",
        },
        {
          url: "/icons/icon-96.png",
          revision: "427bdf52f99ab679a6293c9317ff2c4e",
        },
        {
          url: "/images/favicon.ico",
          revision: "9441269c1b52b8fa7ecaf2633799a0db",
        },
        { url: "/manifest.json", revision: "18f69f7c70ec086831d9da7655a6872c" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: i,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
