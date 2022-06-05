(()=>{"use strict";var e={890:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),i.push([e.id,":root{\n  --ship-color: #34a3c2;\n  --bad-color: #e62c63;\n  --good-color: #63c291;\n  --gray: #2a2b2b;\n}\n\n\nhtml, body,p,h3{\n  margin: 0;\n  padding: 0;\n}\n\nbody{\n  height: 100vh;\n  font-family: 'Black Ops One',Roboto, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader{\n  padding: 40px 0;\n  font-size: 80px;\n}\n\n#grids{\n  display: flex;\n  justify-content: center;\n  gap:100px;\n}\n\n#human,#ai{\n  display: grid;\n  width: 400px;\n  height: 400px;\n  border: 1px solid black;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n}\n\n.grid-ele{\n  border: 1px solid black;\n}\n\n#ai .grid-ele:hover{\n  background-color: var(--gray);\n}\n\n.grid-ele.miss{\n  background-color: var(--bad-color);\n}\n\n.grid-ele.ship.hit{\n  background-color: var(--good-color);\n}\n\n.grid-ele.hit{\n  background-color: var(--good-color);\n}\n\n.grid-ele.ship{\n  background-color: var(--ship-color);\n}\n\n.flex-grow{\n  flex-grow: 1;\n}\n\nfooter{\n  padding: 15px 0;\n}\n\na{\n  text-decoration: none;\n  color: inherit;\n}\n\n/* OVERLAY */\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: none;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.overlay.active {\n  display: block;\n}\n\n#input-ship{\n  display: flex;\n  flex-direction: column;\n  gap:20px;\n  align-items: center;\n  position: fixed;\n  z-index: 1;\n  top: 50%;\n  left: 50%;\n  width: 400px;\n  padding: 30px;\n  border-radius: 10px;\n  background-color: white;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n#input-ship.active{\n  transform: translate(-50%, -50%) scale(1);\n}\n\n#input-ship h3{\n  letter-spacing: 2px;\n  font-weight: normal;\n  font-size: 18px;\n\n}\n\n#input-grid{\n  display: grid;\n  border: 1px solid black;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n  width: 300px;\n  height: 300px;\n}\n\nbutton{\n  display: inline-block;\n  border: none;\n  padding: 1rem 2rem;\n  margin: 0;\n  text-decoration: none;\n  background: var(--gray);\n  color: #ffffff;\n  font-family: inherit;\n  font-size: 1rem;\n  line-height: 1;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 3px;\n  transition: transform 80ms ease-in-out;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\n#rotate:hover{\n  transform: scale(1.05);\n}\n",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var p=n(u),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var m=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var l=r(e,o),c=0;c<a.length;c++){var d=n(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=(e,t=[],n=!1,r=!1,o)=>({length:e,hits:t,sunk:n,hit:e=>{t.push(e)},issunk:()=>{let r=[...Array(e).keys()].join(",")===t.sort().join(",");return n=r},position:o,horizontal:r}),t=()=>{const e=[],t=(()=>{const e=Array.from(Array(10),(e=>Array.from(Array(10),(e=>null))));let t=0,n=0;return{board:e,placeShip:(n,r,o=!1)=>{if(r[0]<0||r[0]>9||r[1]<0||r[1]>9||e[r[0]][r[1]])return null;for(let t=0;t<n.length;t++)o?e[r[0]][r[1]+t]=[n,t]:e[r[0]+t][r[1]]=[n,t];t+=1},recieveHit:t=>{let r=e[t[0]][t[1]];return-1===r?null:r?(r[0].hit(r[1]),r[0].issunk()&&(n+=1),!0):(e[t[0]][t[1]]=-1,!1)},allSunk:()=>t===n,checkCollide:t=>{const n=a.possiblePath(t);for(let t=0;t<n.length;t++)if(e[n[t][0]][n[t][1]])return!0;return!1}}})(),n=(()=>{let e=[];for(let t=0;t<10;t++)for(let n=0;n<10;n++)e.push([t,n]);return function(e){e.sort((()=>Math.random()-.5))}(e),e})();return{ships:e,board:t,addShip:(n,r,o)=>{e.push(n),t.placeShip(n,r,o)},addShipRandom:n=>{let r,o;do{o=Math.random()<.5,r=[],o?(r.push(Math.floor(9*Math.random())),r.push(Math.floor(Math.random()*(9-n.length)))):(r.push(Math.floor(Math.random()*(9-n.length))),r.push(Math.floor(9*Math.random()))),n.horizontal=o,n.position=r}while(t.checkCollide(n));e.push(n),t.placeShip(n,r,o)},getRandomMoves:()=>{let e=n[0];return n.shift(),e}}},r={player:t(),ai:t()};class o{static loadPage(){o.createGrids(),o.startInputField(),o.placeAIships(),o.hoverAIBoard()}static createGrids(){const e=document.getElementById("human"),t=document.getElementById("ai");o.putGridEle(e),o.putGridEle(t)}static putGridEle(e){for(let t=0;t<10;t++)for(let n=0;n<10;n++){let r=document.createElement("div");r.classList.add("grid-ele"),r.dataset.coord=`${t},${n}`,e.appendChild(r)}}static startInputField(){const e=document.getElementById("input-ship");document.querySelector(".overlay").classList.add("active"),setTimeout((()=>{e.classList.add("active")}),400);const t=document.getElementById("input-grid");o.putGridEle(t),o.makeInputHover()}static endInputField(){const e=document.getElementById("input-ship"),t=document.querySelector(".overlay");e.classList.remove("active"),t.classList.remove("active")}static makeInputHover(){o.setUpRotate(),o.promiseHover()}static setUpRotate(){const e=document.getElementById("rotate");e.value=!0,e.addEventListener("click",(()=>{e.value=!("true"===e.value)}))}static async promiseHover(){const t=[e(5),e(4),e(3),e(3),e(2)];for(let e=0;e<t.length;e++){let n=null;do{n=await o.makePromise(t[e])}while(!("okay"in n))}o.endInputField()}static async makePromise(e){return new Promise(((t,n)=>{const r=e.length,a=document.getElementById("input-grid"),i=a.querySelectorAll(".grid-ele"),s=[],l=[];for(let e=0;e<i.length;e++){const t=function(){const t=document.getElementById("rotate").value,n=i[e].getAttribute("data-coord").split(",").map(Number),o=[];for(let e=0;e<r;e++){let r=n[0],a=n[1];"true"===t?a+=e:r+=e,a>9||r>9||o.push([r,a])}for(let e=0;e<o.length;e++)a.querySelector(`[data-coord="${o[e].join(",")}"]`).style.backgroundColor="red"};s.push(t),i[e].addEventListener("mouseover",t),i[e].addEventListener("mouseout",(function(t){const n=document.getElementById("rotate").value,o=i[e].getAttribute("data-coord").split(",").map(Number),s=[];for(let e=0;e<r;e++){let t=o[0],r=o[1];"true"===n?r+=e:t+=e,r>9||t>9||s.push([t,r])}for(let e=0;e<s.length;e++)a.querySelector(`[data-coord="${s[e].join(",")}"]`).style.backgroundColor=""}))}for(let n=0;n<i.length;n++){const r=function(n){const r=n.target.getAttribute("data-coord").split(",").map(Number),a="true"===document.getElementById("rotate").value;e.horizontal=a,e.position=r;for(let e=0;e<i.length;e++)i[e].removeEventListener("mouseover",s[e]),i[e].removeEventListener("click",l[e]);o.isFree(e)?(o.editPlayerBoard(e,r,a),o.updatePlayerBoard(),o.updateInputBoard(),t({okay:!0})):t({notokay:!0})};l.push(r),i[n].addEventListener("click",r)}}))}static isFree(e){const t=r.player,n=(document.getElementById("input-grid"),o.possiblePath(e)),a=t.ships;let i=n;for(let e=0;e<a.length;e++)i=i.concat(o.possiblePath(a[e]));const s=i.map((function(e){return JSON.stringify(e)})).reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]).map((function(e){return JSON.parse(e)})).length===i.length;return n.length===e.length&&s}static editPlayerBoard(e,t,n){r.player.addShip(e,t,n)}static updatePlayerBoard(){const e=r.player.ships,t=document.getElementById("human");for(let n=0;n<e.length;n++){const r=o.possiblePath(e[n]);for(let e=0;e<r.length;e++)t.querySelector(`[data-coord="${r[e].join(",")}"]`).classList.add("ship")}}static updateInputBoard(){const e=r.player.ships,t=document.getElementById("input-grid");for(let n=0;n<e.length;n++){const r=o.possiblePath(e[n]);for(let e=0;e<r.length;e++)t.querySelector(`[data-coord="${r[e].join(",")}"]`).classList.add("ship")}}static possiblePath(e){const t=e.position,n=e.length,r=e.horizontal,o=[];for(let e=0;e<n;e++){let n=t[0],a=t[1];r?a+=e:n+=e,a>9||n>9||o.push([n,a])}return o}static placeAIships(){const t=r.ai,n=[e(5),e(4),e(3),e(3),e(2)];for(let e=0;e<n.length;e++)t.addShipRandom(n[e])}static hoverAIBoard(){const e=document.getElementById("ai").querySelectorAll(".grid-ele");for(let t=0;t<e.length;t++)e[t].addEventListener("click",o.onClickShip,{once:!0})}static onClickShip(e){const t=e.target.getAttribute("data-coord").split(",").map(Number),n=r.ai,a=r.player;n.board.recieveHit(t)?e.target.classList.add("hit"):e.target.classList.add("miss"),o.attackPlayer(),n.board.allSunk()?o.winningBoard("Congratulation, you win!"):a.board.allSunk()&&o.winningBoard("Oops!AI beats human")}static winningBoard(e){const t=document.getElementById("input-ship");document.querySelector(".overlay").classList.add("active"),t.classList.add("active"),t.textContent="";const n=document.createElement("h3");n.textContent=e,t.appendChild(n);const r=document.createElement("button");r.textContent="Restart",r.addEventListener("click",(()=>{location.reload()})),t.appendChild(r)}static attackPlayer(){const e=document.getElementById("human"),t=r.player,n=t.board,o=t.getRandomMoves(),a=n.recieveHit(o),i=e.querySelector(`[data-coord="${o.join(",")}"]`);a?i.classList.add("hit"):i.classList.add("miss")}static showEnemyShips(){const e=r.ai.ships,t=document.getElementById("ai");for(let n=0;n<e.length;n++){const r=o.possiblePath(e[n]);for(let e=0;e<r.length;e++)t.querySelector(`[data-coord="${r[e].join(",")}"]`).classList.add("ship")}}}const a=o;var i=n(379),s=n.n(i),l=n(795),c=n.n(l),d=n(569),u=n.n(d),p=n(565),h=n.n(p),m=n(216),f=n.n(m),g=n(589),y=n.n(g),v=n(890),b={};b.styleTagTransform=y(),b.setAttributes=h(),b.insert=u().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=f(),s()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals,a.loadPage()})()})();