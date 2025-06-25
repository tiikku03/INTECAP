const specifications = document.getElementsByClassName("specifications");
const buttons = document.getElementsByClassName("buy-button");
const inventory = [
  { productName: "Pan de Campaña 600 g.", 
    price: 30.50
  },
  {
    productName: "Baguette Integral 320 g.",
    price: 12
  },
  { productName: "Pan Sourdough 600 g.", 
    price: 29 },
  {
    productName: "Pan Integral de 400 g.",
    price: 17
  },
  {
    productName: "Bolsa de 6 Panes para Hamburguesa 100 g.",
    price: 36
  },
  {
    productName: "Pan Brioche 600 g.",
    price: 63,
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


