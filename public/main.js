!function(){"use strict";var e,r,t,o,n,i,a,s,c,p,l,d,u,m,f={705:function(e){e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",o=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),o&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),o&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,o,n,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var p=0;p<e.length;p++){var l=[].concat(e[p]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),n&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=n):l[4]="".concat(n)),r.push(l))}},r}},738:function(e){e.exports=function(e){return e[1]}},745:function(e,r,t){var o=t(738),n=t.n(o),i=t(705),a=t.n(i)()(n());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600;800&family=Poppins:wght@500;600;700&display=swap);"]),a.push([e.id,'*{padding:0;margin:0;box-sizing:border-box}body{font-family:"Open Sans",sans-serif;font-family:"Poppins",sans-serif}body a{text-decoration:none}body img{width:100%;display:block}body .wrapper{min-height:100vh;background-color:#fff}body .wrapper .container{max-width:1200px;margin:0 auto;padding:1rem 1rem}body .wrapper .search-container{background-color:#a9def9;height:180px;display:flex;align-items:center;justify-content:center}body .wrapper .search-container .search-element{display:flex;align-items:center;justify-content:center;flex-direction:column;position:relative}body .wrapper .search-container .search-element h3{margin-right:1rem;font-size:2rem;color:#252422;font-weight:600;margin-bottom:1.5rem}body .wrapper .search-container .search-element .form-control{padding:1rem 2rem;font-size:1.4rem;border:none;border-top-left-radius:3px;border-bottom-left-radius:3px;border-top-right-radius:3px;outline:none;color:#252422;width:350px}body .wrapper .search-container .search-element .search-list{position:absolute;right:0;top:100%;max-height:500px;overflow-wrap:break-word;overflow:auto;z-index:999}body .wrapper .search-container .search-element .search-list .search-list-item{background-color:#a9def9;padding:.5rem;border-bottom:1px solid #252422;width:342px;color:#252422;cursor:pointer;transition:background-color 200ms ease;display:flex;align-items:center}body .wrapper .search-container .search-element .search-list .search-list-item:hover{background-color:#add8e6}body .wrapper .search-container .search-element .search-list .search-list-item .search-item-thumbnail img{width:40px;margin-right:1rem}body .wrapper .search-container .search-element .search-list .search-list-item .search-item-info h3{font-weight:500;font-size:1rem}body .wrapper .search-container .search-element .search-list .search-list-item .search-item-info p{font-size:.8rem;margin-top:.5rem;font-weight:600;opacity:.6}body .wrapper .search-container .search-element .search-list.hide-search-list{display:none}body .wrapper .logo{font-size:2rem;color:#252422;font-weight:bold}body .wrapper .logo p{font-size:2rem;color:#252422;font-weight:bold}body .wrapper .logo p span{color:#00a8e8}body .wrapper .result-container{padding:3rem 0}body .wrapper .result-container .result-grid{display:flex}@media(max-width: 970px){body .wrapper .result-container .result-grid{display:block}}body .wrapper .result-container .movie-poster{max-width:500px;margin:0 auto;border:4px solid #252422;margin-right:3rem}@media(max-width: 970px){body .wrapper .result-container .movie-poster{margin:0 auto}}body .wrapper .result-container .movie-info{text-align:center;color:#252422;padding-top:3rem}body .wrapper .result-container .movie-info .movie-title{font-size:2rem;color:#00a8e8}body .wrapper .result-container .movie-info .movie-misc-info{list-style:none;display:flex;align-items:center;justify-content:center;padding:1rem}body .wrapper .result-container .movie-info .movie-misc-info .year{font-weight:500}body .wrapper .result-container .movie-info .movie-misc-info .rated{background-color:#a9def9;padding:0 .4rem;margin:0 .4rem;border-radius:3px;font-weight:600}body .wrapper .result-container .movie-info .movie-misc-info .released{font-size:.9rem;opacity:.9}body .wrapper .result-container .movie-info .genre{background-color:#a9def9}body .wrapper .result-container .movie-info .writer{padding:.5rem;margin:1rem 0}body .wrapper .result-container .movie-info .plot{min-width:400px;margin:1rem auto}body .wrapper .result-container .movie-info .language{color:#00a8e8;font-style:italic}body .wrapper .result-container .movie-info .awards{font-weight:300;font-size:.9rem}body .wrapper .result-container .movie-info .awards i{color:#00a8e8;margin:1rem .7rem 0 0}',""]),r.Z=a},379:function(e){var r=[];function t(e){for(var t=-1,o=0;o<r.length;o++)if(r[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],p=o.base?c[0]+o.base:c[0],l=i[p]||0,d="".concat(p," ").concat(l);i[p]=l+1;var u=t(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)r[u].references++,r[u].updater(m);else{var f=n(m,o);o.byIndex=s,r.splice(s,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function n(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,n){var i=o(e=e||[],n=n||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);r[s].references--}for(var c=o(e,n),p=0;p<i.length;p++){var l=t(i[p]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=c}}},569:function(e){var r={};e.exports=function(e,t){var o=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:function(e){e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:function(e,r,t){e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:function(e){e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var n=void 0!==t.layer;n&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,n&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(o,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:function(e){e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},h={};function y(e){var r=h[e];if(void 0!==r)return r.exports;var t=h[e]={id:e,exports:{}};return f[e](t,t.exports,y),t.exports}y.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return y.d(r,{a:r}),r},y.d=function(e,r){for(var t in r)y.o(r,t)&&!y.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},y.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},e=y(379),r=y.n(e),t=y(795),o=y.n(t),n=y(569),i=y.n(n),a=y(565),s=y.n(a),c=y(216),p=y.n(c),l=y(589),d=y.n(l),u=y(745),(m={}).styleTagTransform=d(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=p(),r()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals,document.querySelector("#movie-search-box"),document.querySelector(".search-list"),async function(e){const r=await fetch("https://www.omdbapi.com/?apikey=7035c60c&s=frozen"),t=await r.json();"True"===t.Response&&displayMovieList(t.Search)}()}();