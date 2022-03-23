(()=>{var n={28:(n,t,e)=>{"use strict";e.d(t,{Z:()=>v});var r=e(81),o=e.n(r),a=e(645),i=e.n(a),c=e(667),s=e.n(c),u=new URL(e(509),e.b),l=new URL(e(798),e.b),d=new URL(e(122),e.b),p=i()(o()),f=s()(u),m=s()(l),h=s()(d);p.push([n.id,"/* Fonts */\n\n@font-face {\n    font-family: 'GreatVibes';\n    src: url("+f+") format('truetype');\n}\n\n@font-face {\n    font-family: 'Kanit';\n    src: url("+m+") format('truetype');\n}\n\n\n/* Main */\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --menu-color: #416561;\n    --main-text: beige;\n}\n\nbody {\n    background-image: url("+h+");\n    background-attachment: fixed;\n    overflow: auto;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n    transition: transform .4s\n}\n\n.content{\n    display: flex;\n    flex-direction: column;\n}\n\n/* Buttons */\n\nbutton {\n    background: none;\n\tcolor: inherit;\n\tborder: none;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n    transition: transform .4s\n}\n\nbutton:hover {\n    transform: scale(1.2);\n    transition-duration: .4s;\n}\n\n\n/* Header */\n\n.header {\n    display: flex;\n    flex-direction: column;\n    height: 20vh;\n    width: 100vw;\n    justify-content: center;\n    align-items: center;\n    gap: 50px;\n    background-color: var(--menu-color);\n    opacity: 0.85;\n    color: var(--main-text);\n    font-family: 'Kanit';\n    font-weight: 100;\n    font-size: 20px;\n}\n\n.title {\n    font-family: 'GreatVibes';\n    font-weight: 900;\n    font-size: 75px;\n}\n\n.nav {\n    display: flex;\n    gap: 10vw;\n}\n\n\n/* Content */\n\n.main {\n    min-height: 72vh;\n}\n\n.main-content {\n    margin: 125px 300px;\n    height: 650px;\n    background-color: var(--menu-color);\n    opacity: .85;\n}\n\n\n/* Footer */\n\n.footer {\n    margin-top: auto;\n    display: flex;\n    height: 8vh;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    background-color: var(--menu-color);\n    opacity: 0.85;\n    color: var(--main-text);\n    font-family: 'Kanit';\n    font-size: 18px;\n}\n\n.footer > a:hover {\n    transform: scale(1.2);\n    transition-duration: .4s;\n}",""]);const v=p},645:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:n=>{"use strict";n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=e(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);t[c].references--}for(var s=r(n,o),u=0;u<a.length;u++){var l=e(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:n=>{"use strict";var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{"use strict";n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{"use strict";n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},509:(n,t,e)=>{"use strict";n.exports=e.p+"6d246c3b51d7eb58b13a.ttf"},798:(n,t,e)=>{"use strict";n.exports=e.p+"7b6b95563f4c5697d973.ttf"},122:(n,t,e)=>{"use strict";n.exports=e.p+"7c3366af0c6d2ee6c086.jpg"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,(()=>{"use strict";var n=e(379),t=e.n(n),r=e(795),o=e.n(r),a=e(569),i=e.n(a),c=e(565),s=e.n(c),u=e(216),l=e.n(u),d=e(589),p=e.n(d),f=e(28),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=document.querySelector(".content");(()=>{const n=document.createElement("div");n.classList.add("header");const t=document.createElement("h1");t.classList.add("title"),t.textContent="Maison Selby",h.appendChild(n),n.appendChild(t),n.append((()=>{const n=document.createElement("div");n.classList.add("nav");const t=document.createElement("button");t.textContent="Home";const e=document.createElement("button");e.textContent="Menu";const r=document.createElement("button");return r.textContent="Contact",n.append(t,e,r),n})())})(),(()=>{const n=document.createElement("div");n.classList.add("main");const t=document.createElement("div");t.classList.add("main-content"),h.append(n),n.append(t)})(),(()=>{const n=document.createElement("div");n.classList.add("footer");const t=document.createElement("a");t.href="https://github.com/NelsonMN",t.textContent="Created By: NelsonMM",n.append(t),h.append(n)})()})()})();