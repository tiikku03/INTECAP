const productos = [
  { nombre: "Crema pura Tarro", precio: 17, stock: 10 },
  { nombre: "Yogurt Light", precio: 55, stock: 10 },
  { nombre: "Quesillo", precio: 45, stock: 30 },
  { nombre: "Mozzarella", precio: 20, stock: 15 },
  { nombre: "Helado de cremita", precio: 12, stock: 5 },
];

function FindProduct() {
  const entrada = document
    .getElementById("busqueda")
    .value.trim()
    .toLowerCase();
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = "";
  resultado.style.color = "black";

  let productosAMostrar = [];

  if (entrada === "") {
    productosAMostrar = productos;
  } else {
    productosAMostrar = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(entrada)
    );
  }

  if (productosAMostrar.length > 0) {
    productosAMostrar.forEach((producto) => {
      const productCard = document.createElement("div");
      productCard.classList.add("card");

      const precioTexto =
        producto.precio !== undefined && producto.precio !== null
          ? `Precio: $${producto.precio}`
          : "Precio no disponible";

      const imagenSrc = producto.imagen || "placeholder.jpg";
      productCard.innerHTML = `
                <section class="Productos">
                   <div class="Card">
                    <img src="${imagenSrc}" alt="Producto ${producto.nombre}">
                    <h3 class="Nombre">${producto.nombre}</h3>
                    <p class="Precio">${precioTexto}</p>
                    <p class="Stock"> Stock: ${producto.stock}</p>
                    <button class="moreInfo buy-button">Comprar</button>
                    <label for="cantidad" hidden>cantidad</label>
                    <input type="number" id="cantidad" min="0" max="${producto.stock}"  placeholder="Cantidad">
                   </div>
                 </section>
            `;
      resultado.appendChild(productCard);

      const buyButton = productCard.querySelector(".buy-button");
      buyButton.addEventListener("click", () => {
        alert(
          `¡Has seleccionado ${producto.nombre} para comprar! Precio: $${producto.precio}`
        );
        window.location.href = `1Compra.html?Producto=${encodeURIComponent(
  producto.nombre
)}&Precio=${encodeURIComponent(
  producto.precio
)}&Stock=${encodeURIComponent(producto.stock)}`;
      });
    });
  } else {
    resultado.textContent = "Producto no encontrado. Agrega el producto.";
    resultado.style.color = "red";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  let submitForm = document.getElementById("newProductForm");
  FindProduct();

  if (submitForm) {
    submitForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let productNameInput = document.getElementById("newName");
      let productPriceInput = document.getElementById("newPrice");
      let productStockInput = document.getElementById("newStock");

      const productName = productNameInput.value.trim();
      const productPrice = productPriceInput.value;
      const productStock = productStockInput.value;

      const productExists = productos.some(
        (producto) =>
          producto.nombre.toLowerCase() === productName.toLowerCase()
      );

      if (productExists) {
        alert(`El producto "${productName}" ya existe`);
        return;
      }

      productos.push({
        nombre: productName,
        precio: parseFloat(productPrice),
        stock: parseInt(productStock, 10),
      });

      productNameInput.value = "";
      productPriceInput.value = "";
      productStockInput.value = "";

      alert("Producto agregado exitosamente.");
      FindProduct();
    });
  }
});

function CleanSearch() {
  document.getElementById("busqueda").value = "";
  const resultado = document.getElementById("resultado");
  if (resultado) {
    resultado.textContent = "";
    resultado.style.color = "black";
  }
  FindProduct();
}
