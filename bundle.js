(()=>{"use strict";var e={890:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),i.push([e.id,":root{\n  --ship-color: #34a3c2;\n  --bad-color: #e62c63;\n  --good-color: #63c291;\n  --gray: #2a2b2b;\n}\n\n\nhtml, body,p,h3{\n  margin: 0;\n  padding: 0;\n}\n\nbody{\n  height: 100vh;\n  font-family: 'Black Ops One',Roboto, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader{\n  padding: 40px 0;\n  font-size: 80px;\n}\n\n#grids{\n  display: flex;\n  justify-content: center;\n  gap:100px;\n}\n\n#human,#ai{\n  display: grid;\n  width: 400px;\n  height: 400px;\n  border: 1px solid black;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n}\n\n.grid-ele{\n  border: 1px solid black;\n}\n\n.grid-ele.ship{\n  background-color: var(--ship-color);\n}\n\n.flex-grow{\n  flex-grow: 1;\n}\n\nfooter{\n  padding: 15px 0;\n}\n\na{\n  text-decoration: none;\n  color: inherit;\n}\n\n/* OVERLAY */\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: none;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.overlay.active {\n  display: block;\n}\n\n#input-ship{\n  display: flex;\n  flex-direction: column;\n  gap:20px;\n  align-items: center;\n  position: fixed;\n  z-index: 1;\n  top: 50%;\n  left: 50%;\n  width: 400px;\n  padding: 30px;\n  border-radius: 10px;\n  background-color: white;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n#input-ship.active{\n  transform: translate(-50%, -50%) scale(1);\n}\n\n#input-ship h3{\n  letter-spacing: 2px;\n  font-weight: normal;\n  font-size: 18px;\n\n}\n\n#input-grid{\n  display: grid;\n  border: 1px solid black;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n  width: 300px;\n  height: 300px;\n}\n\n#rotate{\n  display: inline-block;\n  border: none;\n  padding: 1rem 2rem;\n  margin: 0;\n  text-decoration: none;\n  background: var(--gray);\n  color: #ffffff;\n  font-family: inherit;\n  font-size: 1rem;\n  line-height: 1;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 3px;\n  transition: transform 80ms ease-in-out;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\n#rotate:hover{\n  transform: scale(1.05);\n}\n",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],d=a[c]||0,p="".concat(c," ").concat(d);a[c]=d+1;var u=n(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var h=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var l=r(e,o),c=0;c<a.length;c++){var d=n(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r={};(()=>{n.d(r,{Z:()=>x});var e=n(379),t=n.n(e),o=n(795),a=n.n(o),i=n(569),s=n.n(i),l=n(565),c=n.n(l),d=n(216),p=n.n(d),u=n(589),f=n.n(u),h=n(890),m={};m.styleTagTransform=f(),m.setAttributes=c(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p(),t()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const g=(e,t=[],n=!1,r=!1,o)=>({length:e,hits:t,sunk:n,hit:e=>{t.push(e)},issunk:()=>{let r=[...Array(e).keys()].join(",")===t.sort().join(",");return n=r},position:o,horizontal:r});class y{static loadPage(){y.createGrids(),y.startInputField()}static createGrids(){const e=document.getElementById("human"),t=document.getElementById("ai");y.putGridEle(e),y.putGridEle(t)}static putGridEle(e){for(let t=0;t<10;t++)for(let n=0;n<10;n++){let r=document.createElement("div");r.classList.add("grid-ele"),r.dataset.coord=`${t},${n}`,e.appendChild(r)}}static startInputField(){const e=document.getElementById("input-ship");document.querySelector(".overlay").classList.add("active"),setTimeout((()=>{e.classList.add("active")}),400);const t=document.getElementById("input-grid");y.putGridEle(t),y.makeInputHover()}static endInputField(){const e=document.getElementById("input-ship"),t=document.querySelector(".overlay");e.classList.remove("active"),t.classList.remove("active")}static makeInputHover(){y.setUpRotate(),y.promiseHover()}static setUpRotate(){const e=document.getElementById("rotate");e.value=!0,e.addEventListener("click",(()=>{e.value=!("true"===e.value)}))}static async promiseHover(){const e=[g(5),g(4),g(3),g(3),g(2)];for(let t=0;t<e.length;t++){let n=null;do{n=await y.makePromise(e[t])}while(!("okay"in n))}y.endInputField()}static async makePromise(e){return new Promise(((t,n)=>{const r=e.length,o=document.getElementById("input-grid"),a=o.querySelectorAll(".grid-ele"),i=[],s=[];for(let e=0;e<a.length;e++){const t=function(){const t=document.getElementById("rotate").value,n=a[e].getAttribute("data-coord").split(",").map(Number),i=[];for(let e=0;e<r;e++){let r=n[0],o=n[1];"true"===t?o+=e:r+=e,o>9||r>9||i.push([r,o])}for(let e=0;e<i.length;e++)o.querySelector(`[data-coord="${i[e].join(",")}"]`).style.backgroundColor="red"};i.push(t),a[e].addEventListener("mouseover",t),a[e].addEventListener("mouseout",(function(t){const n=document.getElementById("rotate").value,i=a[e].getAttribute("data-coord").split(",").map(Number),s=[];for(let e=0;e<r;e++){let t=i[0],r=i[1];"true"===n?r+=e:t+=e,r>9||t>9||s.push([t,r])}for(let e=0;e<s.length;e++)o.querySelector(`[data-coord="${s[e].join(",")}"]`).style.backgroundColor=""}))}for(let n=0;n<a.length;n++){const r=function(n){const r=n.target.getAttribute("data-coord").split(",").map(Number),o="true"===document.getElementById("rotate").value;e.horizontal=o,e.position=r;for(let e=0;e<a.length;e++)a[e].removeEventListener("mouseover",i[e]),a[e].removeEventListener("click",s[e]);y.isFree(e)?(y.editPlayerBoard(e,r,o),y.updatePlayerBoard(),y.updateInputBoard(),t({okay:!0})):t({notokay:!0})};s.push(r),a[n].addEventListener("click",r)}}))}static isFree(e){const t=x.player,n=(document.getElementById("input-grid"),y.possiblePath(e)),r=t.ships;let o=n;for(let e=0;e<r.length;e++)o=o.concat(y.possiblePath(r[e]));const a=o.map((function(e){return JSON.stringify(e)})).reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]).map((function(e){return JSON.parse(e)})).length===o.length;return n.length===e.length&&a}static editPlayerBoard(e,t,n){x.player.addShip(e,t,n)}static updatePlayerBoard(){const e=x.player.ships,t=document.getElementById("human");for(let n=0;n<e.length;n++){const r=y.possiblePath(e[n]);for(let e=0;e<r.length;e++)t.querySelector(`[data-coord="${r[e].join(",")}"]`).classList.add("ship")}}static updateInputBoard(){const e=x.player.ships,t=document.getElementById("input-grid");for(let n=0;n<e.length;n++){const r=y.possiblePath(e[n]);for(let e=0;e<r.length;e++)t.querySelector(`[data-coord="${r[e].join(",")}"]`).classList.add("ship")}}static possiblePath(e){const t=e.position,n=e.length,r=e.horizontal,o=[];for(let e=0;e<n;e++){let n=t[0],a=t[1];r?a+=e:n+=e,a>9||n>9||o.push([n,a])}return o}}const v=()=>{const e=[],t=(()=>{let e=Array.from(Array(10),(e=>Array.from(Array(10),(e=>null)))),t=0,n=0;return{board:e,placeShip:(n,r,o=!1)=>{if(r[0]<0||r[0]>9||r[1]<0||r[1]>9||e[r[0]][r[1]])return null;for(let t=0;t<n.length;t++)o?e[r[0]][r[1]+t]=[n,t]:e[r[0]+t][r[1]]=[n,t];t+=1},recieveHit:t=>{let r=e[t[0]][t[1]];return-1===r?null:r?(r[0].hit(r[1]),r[0].issunk()&&(n+=1),!0):(e[t[0]][t[1]]=-1,!1)},allSunk:()=>t===n}})();return{ships:e,board:t,addShip:(n,r,o)=>{e.push(n),t.placeShip(n,r,o)},addShipRandom:n=>{let r=Math.random()<.5,o=[Math.floor(10*Math.random()),Math.floor(10*Math.random())];e.push(n),t.placeShip(n,o,r)}}},b={player:v(),ai:v(),start:()=>{y.loadPage()}};b.start();const x=b})()})();