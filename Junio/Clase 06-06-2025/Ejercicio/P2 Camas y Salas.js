const addCart = document.getElementById("add-cart")
const shoppingCart = document.getElementById("shoppingCart")
const cart = []




function findingTheElement(nodeList, itemToBeFound){
    let foundItem ="";
    for (let elementId of nodeList){
        console.log(elementId)
        /* if (itemToBeFound === elementId){
            console.log(elementId)
        } */
    }
    return;
}


function addToCart(){
    let item = {
        productName: null,
        producPrice: null,
        imageAdress: null
    }
    const parentOfCart = addCart.parentElement;
    const childrenId = parentOfCart.id;
    const childrenElements = childrenId.childNodes
    console.log(childrenId)
   
    item.producPrice = findingTheElement(childrenElements,"product-price")
    item.productName = findingTheElement(childrenElements,"product-name")
    item.imageAdress = findingTheElement(childrenElements,"product-image")
    
    console.log(findingTheElement(childrenElements,"product-image"))
    return item;

}

function showAmmountOfItemsInCart() {
    return;
}


shoppingCart.addEventListener("click", ()=> window.location.href = "carrito.html")
console.log(addCart.addEventListener("click",addToCart))
