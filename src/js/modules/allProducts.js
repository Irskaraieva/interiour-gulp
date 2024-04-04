// function createContentProducts(productsData) {
//     const name = productsData.name;
//     const price = productsData.price;
//     const type = productsData.type;
//     const brand = productsData.brand;
//     const category = productsData.category;
//     const image = productsData.image;

//     const product = `
//         <article class="article" data-type="${type}">
//         <div class="card-img">
//             <img src="./img/products/all-products/${image}" alt="product" class="prod-img">
//         </div>
//         <div class="card-description">
//             <span class="brand-name">${brand} </span>
//             <a class="good-name-wrapper">
//                 <h3 class="good-name">${name}</h3>
//                 <p>...</p>
//             </a>
//             <div class="stars-wrapper">
//                 <svg class="star checked" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" />
//                 </svg>
//                 <svg class="star checked" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" />
//                 </svg>
//                 <svg class="star checked" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" />
//                 </svg>
//                 <svg class="star checked" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" />
//                 </svg>
//                 <svg class="star checked" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" />
//                 </svg>
//             </div>
//             <div class="card-bottom">
//                 <span class="price"> $${price}</span>
//                 <div class="shopping-bag">
//                     <img src="./img/global-images/shopping-bag.svg" height="32px" alt="search-img">
//                 </div>
//             </div>
//         </div>
//         <a href="#!" class="card-link"></a>
//     </article>
//     `;
//     return product;
// };
// function appendContentToProductsWrapper(content) {
//     const el = document.getElementById('products-wrapper');
//     el.appendChild(content);
// }

// function initProducts() {
//     fetch('./helpers/goods.json')
//         .then((response) => response.json())
//         .then((goodsData) => {
//             goodsData.forEach(el => {
//                 const productHTML = createContentProducts(el);
//                 document.getElementById('products-wrapper').insertAdjacentHTML('beforeend', productHTML);
//             });
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
// }
// document.addEventListener('DOMContentLoaded', () => {
// const articles = document.querySelectorAll('.article');
// function filterProductsByType(btnType) {
    
//     articles.forEach(article => {
//         const type = article.dataset.type.toLowerCase();
//         if (btnType === 'all products' || type === btnType) {
//             article.style.display = 'block';
//         } else {
//             article.style.display = 'none';
//         }
//     });
// }

//     const buttons = document.querySelectorAll('.buttons-group button');
//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             buttons.forEach(btn => btn.classList.remove('active'));
//             button.classList.add('active');
//             filterProductsByType(button.innerHTML.toLowerCase());
//             console.log(button.innerHTML.toLowerCase());
//         });
//     });
// });

// initProducts();
