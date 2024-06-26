import range from './modules/range.js';
import filters from './modules/filters.js';
import filterButtonMobile from './modules/filterButtonMobile.js';

function createContentProducts(productsData) {
    const name = productsData.name;
    const price = productsData.price;
    const type = productsData.type;
    const brand = productsData.brand;
    const category = productsData.category;
    const image = productsData.image;

    const product = `
        <article class="article" data-type="${type}" data-price="${price}" data-name="${name}">
        <div class="card-img">            
            <img src="./img/products/all-products/${image}" alt="product" class="prod-img">    
        </div>
        <div class="card-description">
            <span class="brand-name">${brand} </span>
            <a href="./product.html" class="good-name-wrapper">
                <h3 class="good-name">${name}</h3>
                <p>...</p>
            </a>
            <div class="stars-wrapper">
                <svg class="star checked" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" />
                </svg>
                <svg class="star checked" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" />
                </svg>
                <svg class="star checked" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" />
                </svg>
                <svg class="star checked" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" />
                </svg>
                <svg class="star checked" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" />
                </svg>
            </div>
            <div class="card-bottom">
                <span class="price"> $${price}</span>
                <a href="./cart.html" class="shopping-bag">
                    <img src="./img/global-images/shopping-bag.svg" height="32px" alt="search-img">
                </a>
            </div>
        </div>
        <a href="./product.html" class="card-link"></a>
    </article>
    `;
    return product;
};

function appendContentToProductsWrapper(content) {
    const el = document.getElementById('products-wrapper');
    el.appendChild(content);
}

function initProducts() {
    fetch('./helpers/goods.json')
        .then((response) => response.json())
        .then((goodsData) => {
            goodsData.forEach(el => {
                const productHTML = createContentProducts(el);
                document.getElementById('products-wrapper').insertAdjacentHTML('beforeend', productHTML);
            });
            const products = document.querySelectorAll('article');
            const buttonsGroup = document.querySelector('.buttons-group');
            const buttons = buttonsGroup.querySelectorAll('button');

            let productType = 'All products';

            buttons[0].classList.add('active');

            buttonsGroup.addEventListener('click', function (event) {
                const target = event.target;

                if (target.tagName === 'BUTTON') {
                    productType = target.textContent.trim();
                    buttons.forEach(button => {
                        button.classList.remove('active');
                    });
                    target.classList.add('active');
                    filterProducts();
                }
            });

            function filterProducts() {
                products.forEach(product => {
                    const type = product.dataset.type.toLowerCase();
                    if (productType.toLowerCase() === 'all products' || type === productType.toLowerCase()) {
                        product.style.display = 'flex';
                    } else {
                        product.style.display = 'none';
                    }
                });
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

initProducts();

document.addEventListener('DOMContentLoaded', () => {
    const selectWrapper = document.getElementById('select-wrapper');
    const select = document.querySelector('.select');
    const sortArrow = document.querySelector('.sort-arrow');
    const selectedItem = document.querySelector('.selected-item');

    function sortProductsByPrice(ascending) {
        const products = document.querySelectorAll('article');
        const sortedProducts = Array.from(products).sort((a, b) => {
            const priceA = parseFloat(a.dataset.price);
            const priceB = parseFloat(b.dataset.price);
            return ascending ? priceA - priceB : priceB - priceA;
        });

        const productsWrapper = document.getElementById('products-wrapper');
        productsWrapper.innerHTML = '';

        sortedProducts.forEach(product => {
            productsWrapper.appendChild(product);
        });
    }

    function sortProductsByName() {
        const products = document.querySelectorAll('article');
        const sortedProducts = Array.from(products).sort((a, b) => {
            const nameA = a.dataset.name.toLowerCase();
            const nameB = b.dataset.name.toLowerCase();
            return nameA.localeCompare(nameB);
        });

        const productsWrapper = document.getElementById('products-wrapper');
        productsWrapper.innerHTML = '';

        sortedProducts.forEach(product => {
            productsWrapper.appendChild(product);
        });

    }

    selectWrapper.addEventListener('click', function (event) {
        const target = event.target;
        const isVisible = select.classList.contains('is-visible');

        if (target.tagName === 'LI') {
            selectedItem.textContent = target.textContent;
            if (selectedItem.textContent === 'Low-Hight') {
                sortProductsByPrice(true);
            } else if (selectedItem.textContent === 'Hight-low') {
                sortProductsByPrice(false);
            } else if (selectedItem.textContent === 'Name') {
                sortProductsByName();
            }
        };

        if (isVisible) {
            select.classList.remove('is-visible');
            sortArrow.classList.remove('rotate');
        } else {
            select.classList.add('is-visible');
            sortArrow.classList.add('rotate');
        };
    });
})