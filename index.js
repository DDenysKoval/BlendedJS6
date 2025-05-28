import"./assets/styles-BK7AYJoX.js";import{a as r}from"./assets/vendor-N5iQpiFS.js";const s={form:document.querySelector(".search-form"),categoriesList:document.querySelector(".categories"),productsList:document.querySelector(".products")},o=12,c=0,n={limit:o,skip:c,orientation:"portrait"};async function a(){try{return await r.get("https://dummyjson.com/products/category-list")}catch(t){console.log(t.message)}}async function i(){try{return await r.get("https://dummyjson.com/products/",{params:n})}catch(t){console.log(t.message)}}function u(t){return t.map(e=>`
    <li class="categories-item">${e}</li>`).join("")}function m(t){return t.map(e=>`
    <li class="product-item">
      <h2 class="product-title">${e.title}</h2>
      <p class="product-text">${e.brand}</p>
      <img src="${e.thumbnail}" alt="${e.description}">
      <p class="product-price">$${e.price}</p>
    </li>`).join("")}async function p(){try{const t=await a();s.categoriesList.innerHTML=u(t.data)}catch(t){console.log(t.message)}}async function l(t){t.preventDefault();try{const e=await i();s.productsList.innerHTML=m(e.data.products)}catch(e){console.log(e.message)}}document.addEventListener("DOMContentLoaded",p);s.form.addEventListener("submit",l);
//# sourceMappingURL=index.js.map
