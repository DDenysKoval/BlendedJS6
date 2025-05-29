import"./assets/styles-BK7AYJoX.js";import{a as i}from"./assets/vendor-N5iQpiFS.js";const s={form:document.querySelector(".search-form"),categoriesList:document.querySelector(".categories"),productsList:document.querySelector(".products")};async function d(){try{return await i.get("https://dummyjson.com/products/category-list")}catch(t){console.log(t.message)}}async function l(){const t={limit:12,skip:(o-1)*12,orientation:"portrait"};try{return await i.get("https://dummyjson.com/products/",{params:t})}catch(e){console.log(e.message)}}async function p(t){const e={limit:12,skip:(o-1)*12,orientation:"portrait"};try{return await i.get(`https://dummyjson.com/products/category/${t}`,{params:e})}catch(a){console.log(a.message)}}function g(t){return t.unshift("All"),t.map(e=>`
    <li class="categories__item">
      <button class="categories__btn" type="button">${e}</button>
    </li>`).join("")}function n(t){return t.map(e=>`
    <li class="products__item" data-id="${e.id}">
      <img class="products__image" src="${e.thumbnail}" alt="${e.description}"/>
      <p class="products__title">${e.title}</p>
      <p class="products__brand"><span class="products__brand--bold">Brand: ${e.brand}</span></p>
      <p class="products__category">Category: ${e.category}  </p>
      <p class="products__price">Price: ${e.price}$</p>
    </li>`).join("")}async function m(){try{const t=await d();s.categoriesList.innerHTML=g(t.data)}catch(t){console.log(t.message)}}let o=1,c;async function y(t){t.preventDefault(),o=1;try{const e=await l();s.productsList.innerHTML=n(e.data.products)}catch(e){console.log(e.message)}}async function _(t){if(o=1,document.querySelectorAll(".categories__btn").forEach(r=>r.classList.remove("categories__btn--active")),t.target.nodeName!=="BUTTON")return;c=t.target.textContent,t.target.closest(".categories__btn").classList.add("categories__btn--active");try{const r=await p(c);if(s.productsList.innerHTML=n(r.data.products),c==="All"){const u=await l();s.productsList.innerHTML=n(u.data.products)}}catch(r){console.log(r.message)}}document.addEventListener("DOMContentLoaded",m);s.form.addEventListener("submit",y);s.categoriesList.addEventListener("click",_);
//# sourceMappingURL=index.js.map
