!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=e.parcelRequired76b;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){o[t]=e},e.parcelRequired76b=r);var s=r("hDcu4"),i=r("bpxeT"),m=r("2TvXO"),a=r("dIxxU"),c=r("i0xjD");function l(t){return d.apply(this,arguments)}function d(){return(d=t(i)(t(m).mark((function e(n){var o;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.default.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=".concat(n),c.options);case 3:return o=t.sent,t.abrupt("return",o.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var h=r("hXsLy"),f=document.querySelector("#pag");function u(t,e){var n,o,r="";e>1&&(r+='<li class="pagination__item pagination__item--arrow" id="back" onclick="element(20,'.concat(e-1,')"><i class="fas fa-arrow-left"></i></li>')),e<=4?(7-(7-e),n=1,o=7):(n=Number(e)-3,o=Number(e)+3);for(var s=n;s<=o;s++)r+='<li class="pagination__item pagination__item--number '.concat(s==e?"pagination__item--active":"",'"><span>').concat(s,"</span></li>");e<t&&(r+='<li class="pagination__item pagination__item--arrow" id="next"><i class="fa-solid fa-arrow-right"></i></li>'),f.innerHTML=r}i=r("bpxeT"),m=r("2TvXO"),a=r("dIxxU");var b,v,p=r("6JpON"),g=(c=r("i0xjD"),document.querySelector(".form__input"));function _(){return w.apply(this,arguments)}function w(){return(w=t(i)(t(m).mark((function e(){var n;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b=g.value,e.prev=1,t(p).Loading.circle({svgColor:"#ff6b08"}),e.next=5,a.default.get("https://api.themoviedb.org/3/search/movie?query=".concat(b,"&include_adult=false&language=en-US&page=").concat(1),c.options);case 5:if(n=e.sent,v=n.data.results,console.log(v),0!==v.length){e.next=13;break}return console.log("Sorry, there are no images matching your search query. Please try again."),t(p).Notify.failure("Sorry, there are no images matching your search query. Please try again."),t(p).Loading.remove(),e.abrupt("return");case 13:return t(p).Loading.remove(),e.abrupt("return",v);case 17:e.prev=17,e.t0=e.catch(1),console.error(e.t0),t(p).Notify.failure("An error ocurred");case 21:case"end":return e.stop()}}),e,null,[[1,17]])})))).apply(this,arguments)}var y=r("dyT35");var x=document.querySelector(".form"),z=document.querySelector(".movies-gallery"),C=document.querySelector(".footer__link"),k=document.querySelector("#pag");(0,s.renderMovieCards)(l(1),z),u(20,1),x.addEventListener("submit",(function(t){t.preventDefault(),(0,s.renderMovieCards)(_(),z)})),z.addEventListener("click",h.fetchMovie),k.addEventListener("click",(function(t){var e=t.target.querySelector("span").innerText;console.log(e),(0,s.renderMovieCards)(l(e),z),u(20,e)})),C.addEventListener("click",(function(){var t=y.create('\n      <div class="members__info-modal">\n      \t<button class="modal__btnX" data-modal-close>\n          <span class="modal__iconX">✕</span>\n      \t</button>\n\t\t\t\t<div class="members__info-container">\n\t\t\t\t\t<div class="members__info-member">\n\t\t\t\t\t\t<div class="members__info-member--picture member1"></div>\n\t\t\t\t\t\t<div class="members__info-member--info">\n\t\t\t\t\t\t\t<h3 class="members__info-member--name name1"></h3>\n\t\t\t\t\t\t\t<p class="members__info-member--role footer__text role1"></p>\n\t\t\t\t\t\t\t<div class="members__info-member--links">\n\t\t\t\t\t\t\t\t<a class="members__info-member--linkedin linkedin1" target="_blank">\n\t\t\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a class="members__info-member--github github1" target="_blank">\n\t\t\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 496 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>\n\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="members__info-member">\n\t\t\t\t\t\t<div class="members__info-member--picture member2"></div>\n\t\t\t\t\t\t<div class="members__info-member--info">\n\t\t\t\t\t\t\t<h3 class="members__info-member--name name2"></h3>\n\t\t\t\t\t\t\t<p class="members__info-member--role footer__text role2"></p>\n\t\t\t\t\t\t\t<div class="members__info-member--links">\n\t\t\t\t\t\t\t\t<a class="members__info-member--linkedin linkedin2" target="_blank">\n\t\t\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a class="members__info-member--github github2" target="_blank">\n\t\t\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 496 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>\n\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="members__info-member">\n\t\t\t\t\t\t<div class="members__info-member--picture member3"></div>\n\t\t\t\t\t\t<div class="members__info-member--info">\n\t\t\t\t\t\t\t<h3 class="members__info-member--name name3"></h3>\n\t\t\t\t\t\t\t<p class="members__info-member--role footer__text role3"></p>\n\t\t\t\t\t\t\t<div class="members__info-member--links">\n\t\t\t\t\t\t\t\t<a class="members__info-member--linkedin linkedin3" target="_blank">\n\t\t\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a class="members__info-member--github github3" target="_blank">\n\t\t\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 496 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>\n\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="members__info-member">\n\t\t\t\t\t\t<div class="members__info-member--picture member4"></div>\n\t\t\t\t\t\t<div class="members__info-member--info">\n\t\t\t\t\t\t\t<h3 class="members__info-member--name name4">David Sora</h3>\n\t\t\t\t\t\t\t<p class="members__info-member--role footer__text role4">Desarrollador</p>\n\t\t\t\t\t\t\t<div class="members__info-member--links">\n\t\t\t\t\t\t\t\t<a class="members__info-member--linkedin linkedin4" target="_blank">\n\t\t\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a class="members__info-member--github github4" target="_blank">\n\t\t\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 496 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>\n\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t');t.element().querySelector(".name1").textContent="Jairo Caracas",t.element().querySelector(".role1").textContent="Team Leader, Developer",t.element().querySelector(".linkedin1").href="https://www.linkedin.com/in/jairocaracas-designer/",t.element().querySelector(".github1").href="https://github.com/jairocaracas/",t.element().querySelector(".name2").textContent="Andrés Urango",t.element().querySelector(".role2").textContent="Developer",t.element().querySelector(".linkedin2").href="https://www.linkedin.com/in/felipe-urango-098a07287/",t.element().querySelector(".github2").href="https://github.com/AndresUrango10",t.element().querySelector(".name3").textContent="David Sora",t.element().querySelector(".role3").textContent="Developer",t.element().querySelector(".linkedin3").href="https://www.linkedin.com/in/david-sora/",t.element().querySelector(".github3").href="https://github.com/davidfsora",t.element().querySelector(".name4").textContent="Steven Romero",t.element().querySelector(".role4").textContent="Developer",t.element().querySelector(".linkedin4").href="https://www.linkedin.com/",t.element().querySelector(".github4").href="https://github.com/warllensteven",t.element().querySelector(".modal__btnX").addEventListener("click",(function(){t.close()})),t.show(),document.addEventListener("keydown",(function(e){"Escape"===e.key&&t.close()}))}))}();
//# sourceMappingURL=index.7166b32a.js.map
