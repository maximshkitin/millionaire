!function(){"use strict";var e,t,r,n,o,i,u,c,f,a={},l={};function s(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={exports:{}},n=!0;try{a[e](r,r.exports,s),n=!1}finally{n&&delete l[e]}return r.exports}s.m=a,e=[],s.O=function(t,r,n,o){if(r){o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[r,n,o];return}for(var u=1/0,i=0;i<e.length;i++){for(var r=e[i][0],n=e[i][1],o=e[i][2],c=!0,f=0;f<r.length;f++)u>=o&&Object.keys(s.O).every(function(e){return s.O[e](r[f])})?r.splice(f--,1):(c=!1,o<u&&(u=o));if(c){e.splice(i--,1);var a=n();void 0!==a&&(t=a)}}return t},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},s.t=function(e,n){if(1&n&&(e=this(e)),8&n||"object"==typeof e&&e&&(4&n&&e.__esModule||16&n&&"function"==typeof e.then))return e;var o=Object.create(null);s.r(o);var i={};t=t||[null,r({}),r([]),r(r)];for(var u=2&n&&e;"object"==typeof u&&!~t.indexOf(u);u=r(u))Object.getOwnPropertyNames(u).forEach(function(t){i[t]=function(){return e[t]}});return i.default=function(){return e},s.d(o,i),o},s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce(function(t,r){return s.f[r](e,t),t},[]))},s.u=function(e){},s.miniCssF=function(e){return"static/css/b6f51be53ffbd880.css"},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},o="_N_E:",s.l=function(e,t,r,i){if(n[e]){n[e].push(t);return}if(void 0!==r)for(var u,c,f=document.getElementsByTagName("script"),a=0;a<f.length;a++){var l=f[a];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+r){u=l;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.setAttribute("data-webpack",o+r),u.src=s.tu(e)),n[e]=[t];var d=function(t,r){u.onerror=u.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach(function(e){return e(r)}),t)return t(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.tt=function(){return void 0===i&&(i={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(i=trustedTypes.createPolicy("nextjs#bundler",i))),i},s.tu=function(e){return s.tt().createScriptURL(e)},s.p="/millionaire/_next/",u={272:0},s.f.j=function(e,t){var r=s.o(u,e)?u[e]:void 0;if(0!==r){if(r)t.push(r[2]);else if(272!=e){var n=new Promise(function(t,n){r=u[e]=[t,n]});t.push(r[2]=n);var o=s.p+s.u(e),i=Error();s.l(o,function(t){if(s.o(u,e)&&(0!==(r=u[e])&&(u[e]=void 0),r)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,r[1](i)}},"chunk-"+e,e)}else u[e]=0}},s.O.j=function(e){return 0===u[e]},c=function(e,t){var r,n,o=t[0],i=t[1],c=t[2],f=0;if(o.some(function(e){return 0!==u[e]})){for(r in i)s.o(i,r)&&(s.m[r]=i[r]);if(c)var a=c(s)}for(e&&e(t);f<o.length;f++)n=o[f],s.o(u,n)&&u[n]&&u[n][0](),u[n]=0;return s.O(a)},(f=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(c.bind(null,0)),f.push=c.bind(null,f.push.bind(f))}();