const specifications = document.getElementsByClassName("specifications");
const buttons = document.getElementsByClassName("buy-button");
const inventory = [
  { productName: "Framboisier", 
    price: 445
  },
  {
    productName: "Bandeja de 16 Mini Postres",
    price: 130
  },
  { productName: "Exotic", 
    price: 390 },
  {
    productName: "Pastel Creme Brulee",
    price: 445
  },
  {
    productName: "Pie de Fresa Vainilla",
    price: 390
  },
  {
    productName: "Pie de Limón con Merengue",
    price: 345,
  },
];

function managingUserPurchase(object, amountRequested) {  
  if (amountRequested !== ""){
    (object.amountUserWants = parseInt(amountRequested)),
    (object.bill = amountRequested * object.price);
  }
}


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (event) => {
    let specificationsCollection = event.currentTarget.parentNode.children;
    let purchaseOptions = event.currentTarget.parentNode;
    let currentProductName = purchaseOptions.parentNode.children[0];
    let purrchaseAmount = specificationsCollection[1].value;

    for (product of inventory) {
      if (product.productName === currentProductName.innerText) {
        managingUserPurchase(product, purrchaseAmount);
      }
    }
  });
}

let billElement = document.getElementById("bill")

function gettingTotalBill(){
  let productsInTheCart = inventory.filter((element) => {
    if (element.hasOwnProperty("amountUserWants")){
      return element
    }
  })

  let totalBill = productsInTheCart.reduce((accu, product) => {
    return product.bill + accu
  },0)

  let htmlCode = productsInTheCart.map((element) =>{
    return(
      `
      <tr>
      <td>${element.amountUserWants}</td>
      <td>${element.productName}</td>
      <td class="productAmount">Q.${element.bill}</td>
      </tr>
      `
    )
  })

  billElement.classList.add("bill")
  billElement.innerHTML = `
                         <tr>
                         <td><strong>Factura</strong></td>
                         </tr>
                         ${htmlCode.join("")}
                         <tr>    
                         <td></td>
                         <td><strong>Total</strong></td>
                         <td class="productAmount"><strong>Q.${totalBill}</strong></td>
                         </tr>`
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click",() => gettingTotalBill())}
