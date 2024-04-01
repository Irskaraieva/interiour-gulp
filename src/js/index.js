import range from './modules/range.js';
import filters from './modules/filters.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {

    spaceBetween: 18,

    breakpoints: {
        900: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        700: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
        },
        300: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },

    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});

const secondSwiper = new Swiper('.second-swiper', {

    spaceBetween: 18,

    breakpoints: {
        1600: {
            slidesPerView: 3.5,
            slidesPerGroup: 2,
        },
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        1000: {
            slidesPerView: 2.5,
            slidesPerGroup: 1,
        },
        800: {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        500: {
            slidesPerView: 2.5,
            slidesPerGroup: 1,
        },
        340: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
        },
        280: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },

    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        snapOnRelease: true,
    },
});


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

document.addEventListener('DOMContentLoaded', () => {
    const selectWrapper = document.getElementById('select-wrapper');
const select = document.querySelector('.select');
const sortArrow = document.querySelector('.sort-arrow');
const selectedItem = document.querySelector('.selected-item');

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

    const goodsWrapper = document.querySelector('.goods-wrapper');
    const products = goodsWrapper.querySelectorAll('.swiper-slide');
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
                product.style.display = 'block';
                product.style.visibility = 'visible';
                secondSwiper.update();
                
            } else {
                product.style.display = 'none';
                product.style.visibility = 'hidden';
                secondSwiper.update();
            }
        });
    }

    function sortProductsByPrice(ascending) {
        const sortedProducts = Array.from(products).sort((a, b) => {
            const priceA = parseFloat(a.dataset.price);
            const priceB = parseFloat(b.dataset.price);
            return ascending ? priceA - priceB : priceB - priceA;
        });
    
        const swiperWrapper = document.querySelector('.second-swiper .swiper-wrapper');
        swiperWrapper.innerHTML = '';
    
        sortedProducts.forEach(product => {
            swiperWrapper.appendChild(product);
        });
    
        secondSwiper.update();
    }

    function sortProductsByName() {
        const sortedProducts = Array.from(products).sort((a, b) => {
            const nameA = a.dataset.name.toLowerCase();
            const nameB = b.dataset.name.toLowerCase();
            return nameA.localeCompare(nameB);
        });
            
        const swiperWrapper = document.querySelector('.second-swiper .swiper-wrapper');
        swiperWrapper.innerHTML = ''; 
    
        sortedProducts.forEach(product => {
            swiperWrapper.appendChild(product);
        });
    
        secondSwiper.update();
    }
});