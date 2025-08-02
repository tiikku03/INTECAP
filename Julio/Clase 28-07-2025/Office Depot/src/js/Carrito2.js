const arrayLocalStorage = [
    {
        "producto": "Resma de papel",
        "descripcion": "Papel multiusos para impresión y copiado.",
        "precio": 75,
        "imagen_url": "https://www.spanishdict.com/translate/la%20imagen",
        "cantidad": 4
    }
];

function updateCartCounter(){
    const items = JSON.parse(localStorage.getItem("cart")) || []; 
    const cartLength = items.length;
    const CartCount = document.querySelector("#cart-count");

    if(CartCount){
        CartCount.textContent = cartLength;
    }
}

document.addEventListener("DOMContentLoaded", updateCartCounter);

 






