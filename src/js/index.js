import mobileNav from './modules/mobile-nav.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {  
   
    slidesPerView: 2,
    spaceBetween: 18,

    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

const nav = document.getElementById('nav');
const navMobBtn = document.getElementById('nav-mob-btn');
const navLinks = document.querySelectorAll('.nav-list li');

mobileNav();

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






