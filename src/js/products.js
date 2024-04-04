import range from './modules/range.js';

//filter-button-mobile
const filterWrapper = document.getElementById('filter-wrapper');
const filterButton = document.getElementById('filter-button');

filterButton.addEventListener('click', () => {
    filterButton.classList.toggle('active');
    filterWrapper.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) {
        filterButton.classList.remove('active');
        filterWrapper.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});

function createContentProducts(productsData) {
    const name = productsData.name;
    const price = productsData.price;
    const type = productsData.type;
    const brand = productsData.brand;
    const category = productsData.category;
    const image = productsData.image;

    const product = `
        <article class="article" data-type="${type}">
        <div class="card-img">
            <img src="./img/products/all-products/${image}" alt="product" class="prod-img">
        </div>
        <div class="card-description">
            <span class="brand-name">${brand} </span>
            <a class="good-name-wrapper">
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
                <div class="shopping-bag">
                    <img src="./img/global-images/shopping-bag.svg" height="32px" alt="search-img">
                </div>
            </div>
        </div>
        <a href="#!" class="card-link"></a>
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
            const products = document.querySelectorAll('article'); // Отримання всіх товарів після завантаження
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

