if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),u={module:{uri:t},exports:l,require:o};s[t]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/ghettoblaster-3e4e89be.png",revision:null},{url:"assets/ICILONDE-title-BK-cef7458c.png",revision:null},{url:"assets/index-3c596b28.css",revision:null},{url:"assets/index-e75a9450.js",revision:null},{url:"index.html",revision:"0d371a4ebd881b8344ea2524b530c051"},{url:"logo.svg",revision:"a477282c23d4644f76158c088b46e6e8"},{url:"registerSW.js",revision:"78a2060a72d61976251a3816a5e43938"},{url:"manifest.webmanifest",revision:"4ae8c8361283b36492f9b441c9d8badd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));