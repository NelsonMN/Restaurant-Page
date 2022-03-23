(()=>{var t={28:(t,n,e)=>{"use strict";e.d(n,{Z:()=>v});var r=e(81),o=e.n(r),a=e(645),i=e.n(a),c=e(667),s=e.n(c),u=new URL(e(509),e.b),l=new URL(e(798),e.b),d=new URL(e(122),e.b),p=i()(o()),f=s()(u),m=s()(l),h=s()(d);p.push([t.id,"/* Fonts */\n\n@font-face {\n    font-family: 'GreatVibes';\n    src: url("+f+") format('truetype');\n}\n\n@font-face {\n    font-family: 'Kanit';\n    src: url("+m+") format('truetype');\n}\n\n/* Main */\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --menu-color: #416561;\n    --main-text: beige;\n}\n\nbody {\n    background-image: url("+h+");\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\n/* Buttons */\n\nbutton {\n    background: none;\n\tcolor: inherit;\n\tborder: none;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\nbutton:hover {\n    transform: scale(1.3);\n    transition-duration: .8s;\n}\n\n/* Header */\n\n.header {\n    display: flex;\n    flex-direction: column;\n    height: 20vh;\n    justify-content: center;\n    align-items: center;\n    gap: 50px;\n    background-color: var(--menu-color);\n    opacity: 0.85;\n    color: var(--main-text);\n    font-family: 'Kanit';\n    font-weight: 100;\n    font-size: 20px;\n}\n\n.title {\n    font-family: 'GreatVibes';\n    font-weight: 900;\n    font-size: 75px;\n}\n\n.nav {\n    display: flex;\n    gap: 10vw;\n}\n\n\n/* Footer */\n\n.footer {\n    position: absolute;\n    display: flex;\n    height: 8vh;\n    justify-content: center;\n    align-items: center;\n    bottom: 0;\n    width: 100vw;\n    background-color: var(--menu-color);\n    opacity: 0.85;\n    color: var(--main-text);\n    font-family: 'Kanit';\n    font-size: 18px;\n}\n\n.footer > a:hover {\n    transform: scale(1.3);\n    transition-duration: .8s;\n}",""]);const v=p},645:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:t=>{"use strict";t.exports=function(t,n){return n||(n={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]|(%20)/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=e(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=r(t,o),u=0;u<a.length;u++){var l=e(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:t=>{"use strict";var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{"use strict";t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{"use strict";t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{"use strict";t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{"use strict";t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},509:(t,n,e)=>{"use strict";t.exports=e.p+"6d246c3b51d7eb58b13a.ttf"},798:(t,n,e)=>{"use strict";t.exports=e.p+"7b6b95563f4c5697d973.ttf"},122:(t,n,e)=>{"use strict";t.exports=e.p+"7c3366af0c6d2ee6c086.jpg"}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return t[r](a,a.exports,e),a.exports}e.m=t,e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.b=document.baseURI||self.location.href,(()=>{"use strict";var t=e(379),n=e.n(t),r=e(795),o=e.n(r),a=e(569),i=e.n(a),c=e(565),s=e.n(c),u=e(216),l=e.n(u),d=e(589),p=e.n(d),f=e(28),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=document.querySelector(".content");(()=>{const t=document.createElement("div");t.classList.add("header");const n=document.createElement("h1");n.classList.add("title"),n.textContent="Maison Selby",h.appendChild(t),t.appendChild(n),t.append((()=>{const t=document.createElement("div");t.classList.add("nav");const n=document.createElement("button");n.textContent="Home";const e=document.createElement("button");e.textContent="Menu";const r=document.createElement("button");return r.textContent="Contact",t.append(n,e,r),t})())})(),(()=>{const t=document.createElement("div");t.classList.add("footer");const n=document.createElement("a");n.href="https://github.com/NelsonMN",n.textContent="Created By: NelsonMM",t.append(n),h.append(t)})()})()})();