(()=>{"use strict";function e(){const e=document.querySelector(".menu__icon"),t=document.querySelector(".menu__body");e&&e.addEventListener("click",(function(o){document.body.classList.toggle("_lock"),e.classList.toggle("menu-open"),t.classList.toggle("menu-open"),o.preventDefault()}));const o=document.querySelectorAll(".menu-main-body-header__sub-list");o.length&&o.forEach((e=>{e.closest(".menu-main-body-header__item").setAttribute("data-spollers","767.98,max");const t=document.createElement("button");t.type="button",t.className="icon-arrow-bottom menu-arrow",t.setAttribute("data-spoller",""),e.before(t)}));!function(){const e=document.querySelectorAll("[data-dat]");if(e.length>0){const t=Array.from(e).filter((function(e,t,o){return e.dataset.dat.split(",")[0]}));if(t.length>0){const e=[];t.forEach((t=>{const o={},n=t.dataset.dat.split(",");o.classToRemove=n[0],o.breakpoint=n[1],o.classRemove=n[2],o.positin=n[3],e.push(o)})),e.forEach((function(e,t,o){const n=`(min-width: ${e.breakpoint}px)`,i=e.positin,r=e.classToRemove,s=e.classRemove,l=document.querySelector(`.${r}`),c=document.querySelector(`.${s}`),a=document.createElement("div");a.className=`div-indicator ${r}_${s}`,c.before(a);const d=document.querySelector(`.${r}_${s}`);function u(e){if(e.matches)d.before(c);else switch(i){case"first":l.insertBefore(c,l.firstElementChild);break;case"before":l.before(c);break;case"after":l.after(c);break;default:l.appendChild(c)}}const m=window.matchMedia(n);m.addListener(u),u(m)}))}}}(),function(){const e=document.querySelectorAll("[data-spollers]");if(e.length>0){const t=Array.from(e).filter((function(e,t,o){return!e.dataset.spollers.split(",")[0]}));t.length>0&&n(t);const o=Array.from(e).filter((function(e,t,o){return e.dataset.spollers.split(",")[0]}));if(o.length>0){const l=[];o.forEach((e=>{const t={},o=e.dataset.spollers.split(",");t.value=o[0],t.type=o[1]?o[1].trim():"max",t.item=e,l.push(t)}));let c=l.map((function(e){return"("+e.type+"-width: "+e.value+"px),"+e.value+","+e.type}));c=c.filter((function(e,t,o){return o.indexOf(e)===t})),c.forEach((e=>{const t=e.split(","),o=t[1],i=t[2],r=window.matchMedia(t[0]),s=l.filter((function(e){if(e.value===o&&e.type===i)return!0}));r.addListener((function(){n(s,r)})),n(s,r)}))}function n(e,t=!1){e.forEach((e=>{e=t?e.item:e,t.matches||!t?(e.classList.add("_init"),i(e),e.addEventListener("click",r)):(e.classList.remove("_init"),i(e,!1),e.removeEventListener("click",r))}))}function i(e,t=!0){const o=e.querySelectorAll("[data-spoller]");o.length>0&&o.forEach((e=>{t?(e.removeAttribute("tabindex"),e.classList.contains("_spoller-active")||(e.nextElementSibling.hidden=!0)):(e.setAttribute("tabindex","-1"),e.nextElementSibling.hidden=!1)}))}function r(e){const t=e.target;if(t.hasAttribute("data-spoller]")||t.closest("[data-spoller]")){const o=t.hasAttribute("data-spoller")?t:t.closest("[data-spoller]"),n=o.closest("[data-spollers]"),i=!!n.hasAttribute("data-one-spoller");n.querySelectorAll("._slide").length||(i&&!o.classList.contains("_spoller-active")&&s(n),o.classList.toggle("_spoller-active"),((e,t=500)=>{e.hidden?((e,t=500)=>{if(!e.classList.contains("_slide")){e.classList.add("_slide"),e.hidden&&(e.hidden=!1);let o=e.offsetHeight;e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingButton=0,e.style.marginTop=0,e.style.marginButton=0,e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=o+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-buttom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-buttom"),window.setTimeout((()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide")}),t)}})(e,t):((e,t=500)=>{e.classList.contains("_slide")||(e.classList.add("_slide"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingButton=0,e.style.marginTop=0,e.style.marginButton=0,window.setTimeout((()=>{e.hidden=!0,e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-buttom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-buttom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide")}),t))})(e,t)})(o.nextElementSibling,500)),e.preventDefault()}}function s(e){const t=e.querySelector("[data-spoller]._spoller-active");t&&(t.classList.remove("_spoller-active"),_slideUp(t.nextElementSibling,500))}}}(),document.querySelector(".item-tabs-all-preview"),document.querySelector(".item-tabs-all"),document.querySelectorAll(".tabs-button");const n=document.querySelectorAll(".item-tabs");document.querySelectorAll(".item-tabs .item-tabs__spoller"),n.forEach((function(e){e.classList.add("active-all")}))}function t(){myLib.body.addEventListener("click",(function(e){const t=e.target;(function(e,t){const o=e.closest(".popup-link");if(!o)return;const n=o.dataset.popup;if(!n)return;const i=o.dataset.work,r=document.querySelector(`.${n}`);if(!r)return;const s=r.querySelector(`.${i}`);r.querySelectorAll(".item-popup").forEach((e=>{e.style.display="none"})),s&&(s.style.display="block"),t.preventDefault();const l=myLib.body.querySelectorAll(".lock-padding");let c=!0;const a=function(e){c&&(e.classList.remove("is-active"),myLib.body.removeEventListener("keydown",m),myLib.body.removeEventListener("click",u))},d=function(){if(l.length>0)for(let e=0;e<l.length;e++)l[e].style.paddingRight="0px";window.myLib.body.style.paddingRight="0px",myLib.removeScroll(),c=!1,setTimeout((function(){c=!0}),800)};r&&(function(e){c&&(s.closest(".popup-works").scrollTop=0,e.classList.add("is-active"))}(r),function(){const e=window.innerWidth-myLib.body.querySelector(".wrapper").offsetWidth+"px";if(l.length>0)for(let t=0;t<l.length;t++)l[t].style.paddingRight=e;window.myLib.body.style.paddingRight=e,myLib.addScroll(),c=!1,setTimeout((function(){c=!0}),800)}());const u=e=>{const t=e.target;if(t.classList.contains("popup-close")||t.classList.contains("popup__inner")){const e=window.myLib.closestItemByClass(t,"popup");a(e),d()}},m=e=>{if("Escape"===e.key){const e=myLib.body.querySelector(".popup.is-active");e&&(a(e),d())}};myLib.body.addEventListener("keydown",m),myLib.body.addEventListener("click",u)})(t,e),function(e,t){if(myLib.body.querySelectorAll(".menu__scroll").length&&e.classList.contains("menu__scroll")&&e.href.includes("#")&&myLib.body.querySelector("."+e.href.split("#")[1])){t.preventDefault();const o=document.querySelector("."+e.href.split("#")[1]).getBoundingClientRect().top+scrollY-myLib.body.querySelector("header").offsetHeight;window.scrollTo({top:o,behavior:"smooth"})}}(t,e),function(e){e.closest(".scroll-up")&&window.scrollTo({top:0,behavior:"smooth"})}(t);const o={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return o.Android()||o.BlackBerry()||o.iOS()||o.Opera()||o.Windows()}};window.innerWidth>768&&o.any()&&(t.classList.contains("menu-arrow")&&t.closest(".menu-main-body-header__item").classList.toggle("_hover"),!t.closest(".menu-main-body-header__item")&&document.querySelectorAll(".menu-main-body-header__item._hover").length>0)&&document.querySelectorAll(".menu-main-body-header__item._hover").forEach((e=>{e.classList.remove("_hover")}))}))}window.myLib={},myLib.body=document.querySelector("body"),window.myLib.closestAttr=function(e,t){let o=e;for(;o;){let e=o.getAttribute(t);if(e)return e;o=o.parentElement}return null},window.myLib.closestItemByClass=function(e,t){let o=e;for(;o;){if(o.classList.contains(t))return o;o=o.parentElement}return null},window.myLib.addScroll=function(){myLib.body.classList.add("_lock")},window.myLib.removeScroll=function(){myLib.body.classList.remove("_lock")},window.onload=function(){const e=document.querySelector("#pleloader");document.body.classList.remove("_lock"),document.body.classList.add("loaded"),e&&e.classList.add("pleloader-active")},function(e){let t=new Image;t.onload=t.onerror=function(){1==(2==t.height)?document.querySelector("body").classList.add("webp"):document.querySelector("body").classList.add("no-webp")},t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}(),document.addEventListener("DOMContentLoaded",(()=>{(function(){let e=document.querySelectorAll(".ibg");for(var t=0;t<e.length;t++)e[t].querySelector("img")&&(e[t].style.backgroundImage="url("+e[t].querySelector("img").getAttribute("src")+")")})(),e(),function(){const e=document.querySelector(".blog__items");if(!e)return;let t,o=0,n=3;function i(t,o,n){t.items.slice(o,n).forEach((t=>{!function(t){let o="";if(o+=`<article class="blog__item item-blog" data-id="${t.id}">`,t.image&&(o+=`\n\t\t\t<a href="${t.url}" class="item-blog__image _ibg">\n\t\t\t\t<img src="${t.image}" alt="">\n\t\t\t</a>\n\t\t`),o+=`<div class="item-blog__data">${t.data}</div>`,o+=`\n\t\t<h4 class="item-blog__title">\n\t\t\t<a href="${t.url}" class="item-blog__link-title">${t.title}</a>\n\t\t</h4>\t\n\t\t`,t.text&&(o+=`\n\t\t<div class="item-blog__text text">\n\t\t\t${t.text}\n\t\t</div>\n\t\t`),t.tags){o+='<div class="item-blog__tags">';for(const e in t.tags)o+=`<a href="${t.tags[e]}" class="item-blog__tag">${e}</a>`;o+="</div>"}o+="</article>",e.insertAdjacentHTML("beforeEnd",o)}(t)})),r()}function r(){const e=t.items.length,o=document.querySelectorAll(".item-blog").length;document.querySelector(".blog__view-more").hidden=!(o<e)}!async function(){const e=await fetch("https://alex1-af.github.io/interesting-site/files/blog.json",{method:"GET"});if(e.ok){const r=await e.json();t=r,i(r,o,n)}else alert("Error!")}(),document.addEventListener("click",(function(e){e.target.closest(".blog__view-more")&&(o=document.querySelectorAll(".item-blog").length,n=o+3,i(t,o,n),e.preventDefault())}))}(),t(),function(){const e=document.querySelectorAll("._anim-items");if(e.length>0){function t(t){for(let t=0;t<e.length;t++){const n=e[t],i=n.offsetHeight,r=o(n).top,s=4;let l=window.innerHeight-i/s;i>window.innerHeight&&(l=window.innerHeight-window.innerHeight/s),scrollY>r-l&&scrollY<r+i?n.classList.add("_active"):n.classList.contains("_anim-no-hide")||n.classList.remove("_active")}}function o(e){const t=e.getBoundingClientRect(),o=window.scrollX||document.documentElement.scrollLeft,n=window.scrollY||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+o}}window.addEventListener("scroll",t),setTimeout((()=>{t()}),300)}}()}))})();