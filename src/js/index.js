import mobileNav from './modules/mobile-nav.js';
import range from './modules/range.js';
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

    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        snapOnRelease: true,
    },

    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
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
        el: '.swiper-scrollbar',
    },
});

const nav = document.getElementById('nav');
const navMobBtn = document.getElementById('nav-mob-btn');
const navLinks = document.querySelectorAll('.nav-list li');

mobileNav();
range();

navLinks.forEach(li => {
    li.addEventListener('click', () => {
        if (window.innerWidth < 1000) {
            navMobBtn.classList.toggle('active');
            document.body.classList.remove('no-scroll');
        }
    });
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 1000) {
        document.body.classList.remove('no-scroll');
        navMobBtn.classList.remove('active');
        nav.style.display = 'flex'
    } else if ((!navMobBtn.classList.contains('active')) && (window.innerWidth < 1000)) {
        nav.style.display = 'none';
    }
});

const selectWrapper = document.getElementById('select-wrapper');
const select = document.querySelector('.select');
const sortArrow = document.querySelector('.sort-arrow');
const selectedItem = document.querySelector('.selected-item');

selectWrapper.addEventListener('click', function (event) {
    const target = event.target;
    const isVisible = select.classList.contains('is-visible');

    if (target.tagName === 'LI') {
        selectedItem.textContent = target.textContent;
    }

    if (isVisible) {
        select.classList.remove('is-visible');
        sortArrow.classList.remove('rotate');
    } else {
        select.classList.add('is-visible');
        sortArrow.classList.add('rotate');
    }
});







