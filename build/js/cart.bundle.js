document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("decrease-btn"),t=document.getElementById("increase-btn"),n=document.getElementById("quantity-input");e.addEventListener("click",(function(){let e=parseInt(n.value)||0;e=Math.max(1,e-1),n.value=e})),t.addEventListener("click",(function(){let e=parseInt(n.value)||0;e=Math.min(50,e+1),n.value=e})),n.addEventListener("input",(function(){let e=parseInt(n.value)||0;e=Math.min(50,Math.max(1,e)),n.value=e}))}));