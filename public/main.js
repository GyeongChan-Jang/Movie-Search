!function(){"use strict";var e={705:function(e){e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);n&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},738:function(e){e.exports=function(e){return e[1]}},745:function(e,r,t){var n=t(738),o=t.n(n),i=t(705),a=t.n(i)()(o());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600;800&family=Poppins:wght@500;600;700&display=swap);"]),a.push([e.id,'*{padding:0;margin:0;box-sizing:border-box}body{font-family:"Open Sans",sans-serif;font-family:"Poppins",sans-serif}body a{text-decoration:none}body img{width:100%;display:block}body .wrapper{min-height:100vh;background-color:#fff}body .wrapper .container{max-width:1200px;margin:0 auto;padding:1rem 1rem}body .wrapper .search-container{background-color:#a9def9;height:180px;display:flex;align-items:center;justify-content:center}body .wrapper .search-container .search-element{display:flex;align-items:center;justify-content:center;flex-direction:column;position:relative}body .wrapper .search-container .search-element h3{margin-top:1rem;margin-right:1rem;font-size:2rem;color:#252422;font-weight:600}body .wrapper .search-container .search-element .form-control{padding:1rem 2rem;font-size:1.4rem;border:none;border-top-left-radius:3px;border-bottom-left-radius:3px;border-top-right-radius:3px;outline:none;color:#252422;width:350px;margin-top:1rem}body .wrapper .search-list{padding:5rem;display:grid;right:0;grid-template-columns:repeat(5, 1fr)}@media(max-width: 576){body .wrapper .search-list{grid-column:1}}@media(max-width: 1100px){body .wrapper .search-list{grid-template-columns:repeat(3, 1fr)}}@media(min-width: 1700px){body .wrapper .search-list{grid-template-columns:repeat(7, 1fr)}}body .wrapper .search-list.hide-search-list{display:none}body .wrapper .search-list .search-list-item{border:3px solid #252422;margin:1rem;padding:1rem;transition:all .2s ease-in;cursor:pointer}body .wrapper .search-list .search-list-item:hover{background-color:#f1faee;transform:scale(1.1)}body .wrapper .search-list .search-list-item .search-item-info{margin-top:1rem;border-top:1px solid #252422;padding-top:1rem}body .wrapper .logo{font-size:2rem;color:#252422;font-weight:bold}body .wrapper .logo p{font-size:2rem;color:#252422;font-weight:bold}body .wrapper .logo p span{color:#00a8e8}body .wrapper .result-container{padding:3rem 0}body .wrapper .result-container.hide-details{display:none}body .wrapper .result-container .result-grid{display:grid;grid-template-columns:repeat(2, 1fr)}@media(max-width: 970px){body .wrapper .result-container .result-grid{display:block}}body .wrapper .result-container .movie-poster{max-width:500px;margin:0 auto;border:8px solid #252422;border-radius:.3rem}@media(max-width: 970px){body .wrapper .result-container .movie-poster{margin:0 auto}}body .wrapper .result-container .movie-info{width:600px;margin:0 auto;text-align:left;color:#252422;padding:2rem;border:8px solid #252422;border-radius:.3rem;display:flex;flex-direction:column;justify-content:space-around;font-size:1rem;color:#8d99ae}@media(max-width: 970px){body .wrapper .result-container .movie-info{width:500px;margin:2rem auto}}body .wrapper .result-container .movie-info .movie-title{padding:1rem;font-size:3rem;color:#252422;background-color:#f1faee}body .wrapper .result-container .movie-info .movie-misc-info{list-style:none;display:flex;align-items:center;justify-content:center;padding:1rem;color:#252422;border:4px solid #252422;border-radius:.2rem}body .wrapper .result-container .movie-info .movie-misc-info .rated{padding:0 .4rem;margin:0 .4rem;border-radius:3px;font-weight:600;font-size:1.2rem}body .wrapper .result-container .movie-info .movie-misc-info .rated span{color:#00a8e8}body .wrapper .result-container .movie-info .movie-misc-info .released{font-weight:600;font-size:1.2rem}body .wrapper .result-container .movie-info .movie-misc-info .released span{color:#00a8e8}body .wrapper .result-container .movie-info .genre p{color:#252422;font-size:1.5rem;margin-bottom:.5rem}body .wrapper .result-container .movie-info .writer p{color:#252422;font-size:1.5rem;margin-bottom:.5rem}body .wrapper .result-container .movie-info .actors p{color:#252422;font-size:1.5rem;margin-bottom:.5rem}body .wrapper .result-container .movie-info .plot{min-width:400px}body .wrapper .result-container .movie-info .plot p{color:#252422;font-size:1.5rem;margin-bottom:.5rem}body .wrapper .result-container .movie-info .language{color:#ffb703;font-style:italic}body .wrapper .result-container .movie-info .awards{font-weight:300;font-size:.9rem}body .wrapper .result-container .movie-info .awards i{color:#00a8e8;margin:1rem .7rem 0 0}',""]),r.Z=a},379:function(e){var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],d=n.base?c[0]+n.base:c[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var m=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)r[m].references++,r[m].updater(u);else{var f=o(u,n);n.byIndex=s,r.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);r[s].references--}for(var c=n(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=c}}},569:function(e){var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:function(e){e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:function(e,r,t){e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:function(e){e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,o&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:function(e){e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={id:n,exports:{}};return e[n](i,i.exports,t),i.exports}t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,{a:r}),r},t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e=t(379),r=t.n(e),n=t(795),o=t.n(n),i=t(569),a=t.n(i),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),m=t.n(p),u=t(745),f={};f.styleTagTransform=m(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),r()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;const h=document.querySelector("#movie-search-box"),g=document.querySelector(".search-list"),v=document.querySelector(".result-grid");document.querySelector(".details-container"),h.onkeyup=()=>{!function(){let e=h.value.trim();e.length>0?(g.classList.remove("hide-search-list"),async function(e){const r=`https://www.omdbapi.com/?apikey=7035c60c&s=${e}&page=1`,t=await fetch(`${r}`),n=await t.json();"True"===n.Response&&function(e){g.innerHTML="";for(let r=0;r<e.length;r++){let t=document.createElement("div");t.dataset.id=e[r].imdbID,t.classList.add("search-list-item");let n=e[r].Poster;"N/A"===e[r].Poster&&(n="./images/NotFound.png"),t.innerHTML=`\n    <div class="search-item-thumbnail">\n      <img src="${n}" alt="movie-poster">\n    </div>\n    <div class="search-item-info">\n      <h3>${e[r].Title}</h3>\n      <p>${e[r].Year}</p>\n    </div>`,g.appendChild(t)}g.querySelectorAll(".search-list-item").forEach((e=>{e.addEventListener("click",(async()=>{g.classList.add("hide-search-list"),h.value="";const r=await fetch(`https://www.omdbapi.com/?i=${e.dataset.id}&apikey=7035c60c`),t=await r.json();var n,o;n=t,v.innerHTML=`\n  <div class="movie-poster">\n            <img src="${"N/A"!==n.Poster?(o=n.Poster,o.replace("SX300","SX${size}")):"./images/NotFound.png"}">\n          </div>\n          <div class="movie-info">\n            <h3 class="movie-title">\n              ${n.Title}\n            </h3>\n            <ul class="movie-misc-info">\n            <li class="rated"><span>Ratings:</span> ${n.Ratings[0].Value}</li>\n            <li class="released"><span>Released:</span> ${n.Released}</li>\n            </ul>\n            <div class="genre">\n              <p>Genre</p>${n.Genre}\n            </div>\n            <div class="writer">\n              <p>Writer</p>\n              ${n.Writer}\n            </div>\n            <div class="actors">\n              <p>Actors</p> ${n.Actors}\n            </div>\n            <div class="plot">\n              <p>Plot</p>${n.Plot}\n            </div>\n            <div class="language">\n              <span>Language</span>\n              ${n.Language}\n            </div>\n            <p class="awards">\n              <i class="fas fa-award"></i>${n.Awards}\n            </p>\n          </div>\n  `,console.log(t)}))}))}(n.Search)}(e)):g.classList.add("hide-search-list")}()},h.onclick=()=>{g.classList.add("hide-search-list")}}()}();