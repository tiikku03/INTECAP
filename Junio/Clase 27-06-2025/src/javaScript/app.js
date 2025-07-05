const saborVelozMenus = [
  {
    nameMenu: "Cheeseburger Clásica",
    price: 39,
    imageSrc: "../images/menu1.png", // Ruta de ejemplo para la imagen
  },
  {
    nameMenu: "Hamburguesa Doble Queso",
    price: 49,
    imageSrc: "../images/menu2.png",
  },
  {
    nameMenu: "Hamburguesa Champiñones Suizos",
    price: 49,
    imageSrc: "../images/menu3.png",
  },
  {
    nameMenu: "Hamburguesa Jalapeño Picante",
    price: 39,
    imageSrc: "../images/menu4.png",
  },
  {
    nameMenu: "Burrito El Dorado",
    price: 39,
    imageSrc: "../images/menu5.png",
  },
  {
    nameMenu: "Burrito Baja Blast",
    price: 39,
    imageSrc: "../images/menu6.png",
  },
  {
    nameMenu: "Burrito Vegano Picante",
    price: 50,
    imageSrc: "../images/menu7.png",
  },
  {
    nameMenu: "Jugo de Naranja Natural",
    price: 15,
    imageSrc: "../images/bebida1.webp",
  },
  {
    nameMenu: "Limonada Refrescante",
    price: 10,
    imageSrc: "../images/bebida2.webp",
  },
  {
    nameMenu: "Agua de Jamaica",
    price: 20,
    imageSrc: "../images/bebida3.webp",
  },
  {
    nameMenu: "Jugo de Frutos Rojos",
    price: 15,
    imageSrc: "../images/bebida4.webp",
  },
  {
    nameMenu: "Agua de Pepino y Menta",
    price: 10,
    imageSrc: "../images/bebida5.png",
  },

  {
    nameMenu: "Pastel de Chocolate",
    price: 30,
    imageSrc: "images/chocolate-cake.jpg",
  },
  {
    nameMenu: "Helado de Vainilla",
    price: 25,
    imageSrc: "images/vanilla-ice-cream.jpg",
  },
  {
    nameMenu: "Helado de Frutas",
    price: 20,
    imageSrc: "images/apple-pie.jpg",
  },
];

const buttonMenu = document.getElementsByClassName("comprarMenu");


function managingUserPurchase(object, amountRequested) {
  if (amountRequested !== "") {
    (object.amountUserWants = parseInt(amountRequested)),
      (object.bill = amountRequested * object.price);
    return object.bill;
  }
}

function managingUserPurchaseDiscount(object, amountRequested) {
  let discount = 0;
  if (amountRequested !== "") {
    object.amountUserWants = parseInt(amountRequested);
    discount = Number((amountRequested * object.price * 0.05).toFixed(2));
    object.bill = Number((amountRequested * object.price - discount).toFixed(2));
  }
  return discount;
}

function postrePromocional(object, amountRequested, container) {
    if (amountRequested !== "") {
      object.amountUserWants = parseInt(amountRequested) + 1;
      object.bill = (object.amountUserWants * object.price);
      container.innerHTML = `Ha comprado 3 o mas postres, Ha recibido una mas gratis`;
    }
  
}

// para los botones de menu
for (let i = 0; i < buttonMenu.length; i++) {
  buttonMenu[i].addEventListener("click", (event) => {
    let menuCollection = event.currentTarget.parentNode.children;
    let currentProductName = menuCollection[1];
    let purrchaseAmount = menuCollection[4].value;
    let descuentoContainer = menuCollection[5];

    for (product of saborVelozMenus) {
      if (product.nameMenu === currentProductName.innerText) {
        if (
          currentProductName.parentNode.parentNode.className === "menus" &&
          purrchaseAmount >= 3
        ) {
          let discount = managingUserPurchaseDiscount(product, purrchaseAmount);
          descuentoContainer.innerHTML = `El descuento es de: ${discount} 
          <br> Costo de los menus: Q.${product.bill}`;
        } else if (currentProductName.parentNode.parentNode.className === "menus" && purrchaseAmount < 3
        ) {
          managingUserPurchase(product, purrchaseAmount);
          descuentoContainer.innerHTML = `No hay descuento, debes comprar 3 o mas <br> Costo de los menus: Q.${product.bill}`;
        } else if (purrchaseAmount >= 3 && currentProductName.parentNode.parentNode.className === "postres") {
          postrePromocional(product,purrchaseAmount, descuentoContainer);
        } else {
          managingUserPurchase(product, purrchaseAmount);
          descuentoContainer.innerHTML = `<br> Costo de los menus: Q.${product.bill}`;
        }
      }
    }
  });
}

let billElement = document.getElementById("bill");

function gettingTotalBill(Array) {
  let productsInTheCart = Array.filter((element) => {
    if (element.hasOwnProperty("amountUserWants")) {
      return element;
    }
  });

  let totalBill = productsInTheCart.reduce((accu, product) => {
    return product.bill + accu;
  }, 0);

  let htmlCode = productsInTheCart.map((element) => {
    return `
      <tr>
      <td>${element.amountUserWants}</td>
      <td>${element.nameMenu}</td>
      <td class="productAmount">Q.${element.bill}</td>
      </tr>
      `;
  });

  billElement.classList.add("bill");
  billElement.innerHTML = `
                         <tr>
                         <td><strong>Factura</strong></td>
                         </tr>
                         ${htmlCode.join("")}
                         <tr>    
                         <td></td>
                         <td><strong>Total</strong></td>
                         <td class="productAmount"><strong>Q.${totalBill}</strong></td>
                         </tr>`;
}

for (let i = 0; i < buttonMenu.length; i++) {
  buttonMenu[i].addEventListener("click", () =>
    gettingTotalBill(saborVelozMenus)
  );
}


// Desarrollando el formulario de compra


let formContainer = document.getElementById("endMessage")
let form = document.getElementById("billingForm")



 form.addEventListener("submit",(event)=>{
  event.preventDefault();
  const datosFormulario = {};
  for (let i = 0; i < event.target.elements.length; i++) { // Use event.target.elements
      const elemento = event.target.elements[i];
      if (!elemento.name || elemento.type === 'submit') {
        continue;
      }else{
        datosFormulario[elemento.name] = elemento.value;
      }
    }
  formContainer.innerHTML = `
  Gracias <strong>${datosFormulario.userName}</strong> por realizar la compre,
  los articulos se enviaran a <strong>${datosFormulario.address}</strong>, nos comunicaremos a
  su numero de celular proporcionado; <strong>${datosFormulario.phoneNumber}</strong>`
}) 

