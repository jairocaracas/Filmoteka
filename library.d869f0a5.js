!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=r.parcelRequired76b;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,r){n[e]=r},r.parcelRequired76b=a);var u=a("bpxeT"),o=a("2TvXO"),c=a("dIxxU"),i=a("i0xjD"),s=a("hDcu4"),p=document.querySelector(".movies-gallery"),l=JSON.parse(localStorage.getItem("movies-Watched"))||[],d=JSON.parse(localStorage.getItem("movies-Queue"))||[];function f(e){return v.apply(this,arguments)}function v(){return(v=e(u)(e(o).mark((function r(t){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.default.get("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),i.options);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function h(){return m.apply(this,arguments)}function m(){return m=e(u)(e(o).mark((function r(){var t;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return p.innerHTML="",r.next=3,Promise.all(l.map(function(){var r=e(u)(e(o).mark((function r(t){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()));case 3:t=r.sent,(0,s.renderMovieCards)(t,p);case 5:case"end":return r.stop()}}),r)}))),m.apply(this,arguments)}function x(){return x=e(u)(e(o).mark((function r(){var t;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return p.innerHTML="",r.next=3,Promise.all(d.map(function(){var r=e(u)(e(o).mark((function r(t){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()));case 3:t=r.sent,(0,s.renderMovieCards)(t,p);case 5:case"end":return r.stop()}}),r)}))),x.apply(this,arguments)}document.addEventListener("DOMContentLoaded",h);var w=document.querySelector("#watchedButton"),y=document.querySelector("#queueButton");w.addEventListener("click",h),y.addEventListener("click",(function(){return x.apply(this,arguments)}))}();
//# sourceMappingURL=library.d869f0a5.js.map
