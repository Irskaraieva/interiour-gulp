function mobileNav() {
    const navMobBtn = document.getElementById('nav-mob-btn');
    const nav = document.getElementById('nav');
    
    navMobBtn.onclick = (e) => {
        e.stopPropagation();
        document.body.classList.toggle('no-scroll');
        navMobBtn.classList.toggle('active');
        if (document.body.classList.contains('no-scroll')) {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }

    };
}

export default mobileNav;

