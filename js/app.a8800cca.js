!function(){"use strict";var e,r={3211:function(e,r,t){t(7042),t(1539),t(8309),t(1038),t(8783),t(2526),t(1817),t(2165),t(6992),t(3948),t(2817);var n,o=(n=t(8683))&&n.__esModule?n:{default:n};function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var a,l=function(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,r):void 0}}(e))){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,s=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return l=e.done,e},e:function(e){s=!0,a=e},f:function(){try{l||null==t.return||t.return()}finally{if(s)throw a}}}}(document.querySelectorAll(".video__playpause"));try{var s=function(){var e=a.value;e.addEventListener("click",(function(r){var t=e.parentNode.querySelector("video");t.paused?(t.play(),e.classList.add("video__playpause--fade")):(t.pause(),e.classList.remove("video__playpause--fade"))}))};for(l.s();!(a=l.n()).done;)s()}catch(e){l.e(e)}finally{l.f()}"undefined"!=typeof Swiper&&null!=Swiper&&(new Swiper(".carousel-container",{slidesPerView:1,centeredSlides:!1,slidesPerGroupSkip:1,mousewheel:!0,breakpoints:{705:{slidesPerView:2,slidesPerGroup:2},1140:{slidesPerView:3,slidesPerGroup:3},1460:{slidesPerView:4,slidesPerGroup:4}},scrollbar:{el:".carousel-container .swiper-scrollbar"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".vertical-container",{direction:"vertical",slidesPerView:"auto",freeMode:!0,scrollbar:{el:".vertical-scrollbar"},mousewheel:!0}));var u=document.querySelector("header .burger"),c=document.querySelector("header.page-header");u.addEventListener("click",(function(e){u.classList.contains("burger--open")?(u.classList.remove("burger--open"),c.classList.remove("page-header--open")):(u.classList.add("burger--open"),c.classList.add("page-header--open"))})),document.querySelector(".select")&&(new o.default({select:".select.select--1",showSearch:!1,placeholder:"выберите площадку"}),new o.default({select:".select.select--2",showSearch:!1,placeholder:"выберите направление"})),new kursor({color:"#FE8B4C",type:2,removeDefaultCursor:!0})},2817:function(e,r,t){t.r(r)}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,n),i.exports}n.m=r,e=[],n.O=function(r,t,o,i){if(!t){var a=1/0;for(u=0;u<e.length;u++){t=e[u][0],o=e[u][1],i=e[u][2];for(var l=!0,s=0;s<t.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](t[s])}))?t.splice(s--,1):(l=!1,i<a&&(a=i));l&&(e.splice(u--,1),r=o())}return r}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[t,o,i]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={143:0};n.O.j=function(r){return 0===e[r]};var r=function(r,t){var o,i,a=t[0],l=t[1],s=t[2],u=0;for(o in l)n.o(l,o)&&(n.m[o]=l[o]);for(s&&s(n),r&&r(t);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[a[u]]=0;n.O()},t=self.webpackChunktest_mainrasha=self.webpackChunktest_mainrasha||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var o=n.O(void 0,[412],(function(){return n(3211)}));o=n.O(o)}();
//# sourceMappingURL=app.a8800cca.js.map