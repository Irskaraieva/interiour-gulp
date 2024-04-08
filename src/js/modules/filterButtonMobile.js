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