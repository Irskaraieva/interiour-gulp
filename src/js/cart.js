document.addEventListener('DOMContentLoaded', function () {
    const decreaseBtn = document.getElementById('decrease-btn');
    const increaseBtn = document.getElementById('increase-btn');
    const quantityInput = document.getElementById('quantity-input');

    decreaseBtn.addEventListener('click', function () {
        let currentValue = parseInt(quantityInput.value) || 0;
        currentValue = Math.max(1, currentValue - 1);
        quantityInput.value = currentValue;
    });

    increaseBtn.addEventListener('click', function () {
        let currentValue = parseInt(quantityInput.value) || 0;
        currentValue = Math.min(50, currentValue + 1);
        quantityInput.value = currentValue;
    });

    quantityInput.addEventListener('input', function () {
        let currentValue = parseInt(quantityInput.value) || 0;
        currentValue = Math.min(50, Math.max(1, currentValue));
        quantityInput.value = currentValue;
    });
});