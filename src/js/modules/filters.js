// document.addEventListener('DOMContentLoaded', () => {
//     //open store list
//     const openStoreList = document.getElementById('filter-store-arrow');
//     const storeList = document.getElementById('filter-store-list');

//     const openProductList = document.getElementById('filter-product-arrow');
//     const productList = document.getElementById('filter-products-list');

//     openStoreList.addEventListener('click', () => {
//         storeList.classList.toggle('hide-list');
//         openStoreList.classList.toggle('rotate');
//     });

//     openProductList.addEventListener('click', () => {
//         productList.classList.toggle('hide-list');
//         openProductList.classList.toggle('rotate');
//     });

//     //cheked box
//     storeList.addEventListener('click', function (event) {

//         if (event.target.closest('.filter-store-item')) {
//             const storeItem = event.target.closest('.filter-store-item');
//             const filterItemBox = storeItem.querySelector('.filter-item-box');
//             filterItemBox.classList.toggle('checked');
//             logCheckedSpanContent();
//         }
//     });

//     productList.addEventListener('click', function (event) {

//         if (event.target.closest('.filter-product-item')) {
//             const storeItem = event.target.closest('.filter-product-item');
//             const filterItemBox = storeItem.querySelector('.filter-item-box');
//             filterItemBox.classList.toggle('checked');
//         }
//     });

//     //reset filters

//     const resetBtn = document.getElementById('reset');

//     resetBtn.addEventListener('click', () => {
//         const checkedElements = document.querySelectorAll('.checked');
//         checkedElements.forEach((element) => {
//             element.classList.remove('checked');            
//         });
//         logCheckedSpanContent();
//     });


//     function logCheckedSpanContent() {
//         const items = document.querySelectorAll('.filter-store-item');

//         items.forEach(item => {
//             const div = item.querySelector('.filter-item-box');
//             const span = item.querySelector('span');

//             if (div.classList.contains('checked')) {
//                 console.log(span.innerHTML);
//             }
//         });
        
//     }
// });