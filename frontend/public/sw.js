if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const r=e=>a(e,n),o={module:{uri:n},exports:c,require:r};s[n]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/I48FeTp-iRGQyMGWtsshG/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/I48FeTp-iRGQyMGWtsshG/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/268-1977513431970ecc.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/288-c288b262ddda615e.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/330-a5d2a936e1676c38.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/353-3d595f8a9ec617a6.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/381-7dcd452e8fd8c6cc.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/45-6d3601deb363f867.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/468-ffb219d5f3ce3802.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/725-489cd2927a77ec92.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/749-6ba5c8a94a6cc0bb.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/878-0585b3e815c3cfbb.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/app/(route)/category/page-05b8ca447a01faa7.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/app/(route)/ending/page-77c213e5565d8e35.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/app/(route)/incorrect_list/page-b278ea340da929b5.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/app/(route)/login/kakao/page-6c5254a84293d554.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/app/(route)/login/page-af4fc94cf898eaa3.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/app/(route)/main/page-2ab3e0427575658d.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/app/(route)/main_quiz/page-b8fc639b4a5e7b2f.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/app/(route)/my_page/page-2c3ea9aad116ea17.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/app/(route)/profile_add/page-aff1258dfc909f28.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/app/(route)/profile_list/page-807fc1eac7df785a.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/app/(route)/quiz1/page-f6f6a5a933df09a8.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/app/(route)/quiz2/page-aac589aea2e2d0a8.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/app/(route)/tutorial/page-6b3c1c7360f4f949.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/app/_not-found-f4e5451ca0dd79da.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/app/layout-b7eda4e3e4f8d447.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/app/page-595f3ca0eb050a64.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/fd9d1056-53f5783a4f95e15b.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/main-46d6fe5e9ce58f0c.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/main-app-0f13ae568e48baa0.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-549b4c16ea969afc.js",revision:"I48FeTp-iRGQyMGWtsshG"},{url:"/_next/static/css/ed09739ba3110e37.css",revision:"ed09739ba3110e37"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/Andylogo.eff77e67.png",revision:"c5a8954a05a0e801523280baf96026c0"},{url:"/_next/static/media/andy.673f74ed.png",revision:"00e2e14239bddc882a42930a1a99e7a4"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/character.673f74ed.png",revision:"00e2e14239bddc882a42930a1a99e7a4"},{url:"/_next/static/media/correct.b0352107.png",revision:"a7491f56a891cb17b6eafddc4d05ff71"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/kakao_logo.0d1ed005.png",revision:"025146546fed11c8dc5f5b0699596787"},{url:"/_next/static/media/smile_stamp.54ccf345.png",revision:"ada9e0a29ecf9dcddbb64957ec5f422b"},{url:"/_next/static/media/wrong.baa027c9.png",revision:"0ae7c72b47b1b72699372a7158c1fd7a"},{url:"/logo192.png",revision:"e726b807815166c577aa902e59383778"},{url:"/logo256.png",revision:"e726b807815166c577aa902e59383778"},{url:"/logo512.png",revision:"c81684a36b95a74653b94d8a0b702ce1"},{url:"/manifest.json",revision:"36e16b10a0f030689e2ee14f929be1d5"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));