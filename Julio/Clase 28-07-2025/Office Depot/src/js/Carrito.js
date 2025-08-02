// Este código solo se ejecutará cuando el DOM esté listo.
document.addEventListener("DOMContentLoaded", () => {
  //
  // 1. Declaración de variables y elementos del DOM
  //
  const productosContainer = document.querySelector(".productos");
  const billContainer = document.querySelector(".billTable");
  const loadMoreButton = document.querySelector(".LoadMoreButtons");
  let productos = JSON.parse(localStorage.getItem("cart")) || [];

  //
  // 2. Funciones para la manipulación del DOM
  //
  function renderizarProductos() {
    if (productos.length === 0) {
      productosContainer.innerHTML = "<p>Tu carrito está vacío.</p>";
      if (loadMoreButton) {
        loadMoreButton.style.display = "none";
      }
      return;
    }

    const cards = productos.map((producto) => {
      return `
                <div class="contenedorProductosIndividual" producto="${
                  producto.producto
                }">
                    <img src="${producto.imagen_url}" alt="${
        producto.producto
      }">
                    <div>
                        <h3>${producto.producto}</h3>
                        <p>Q.${producto.precio}</p>
                    </div>
                    <p>${producto.descripcion}</p>
                    <p>Precio por estos productos <spam> Q.${
                      producto.precio * producto.cantidad
                    }</spam></p>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <input type="number" value="${
                      producto.cantidad
                    }" id="amount-${producto.producto}" class="amount">
                    <button class="Eliminar" data-producto="${
                      producto.producto
                    }">Eliminar del carrito</button>
                </div>
            `;
    });
    productosContainer.innerHTML = cards.join("");
  }

  function eliminarDelCarrito(productoAEliminar) {
    productos = productos.filter((p) => p.producto !== productoAEliminar);
    localStorage.setItem("cart", JSON.stringify(productos));

    renderizarProductos();
    showBill();
  }

  function actualizarCantidad(productoID, nuevaCantidad) {
    const producto = productos.find((p) => p.producto === productoID);
    if (producto) {
      producto.cantidad = nuevaCantidad;
      localStorage.setItem("cart", JSON.stringify(productos));
      console.log(
        `Cantidad de "${productoID}" actualizada a ${nuevaCantidad}.`
      );
    }
    renderizarProductos();
    showBill();
  }

  function showBill() {
    const initialValue = 0;

    const TotalBill = productos.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.precio * currentValue.cantidad,
      initialValue
    );
    const billArray = productos.map((producto) => {
      return `
        <tr>
          <td>${producto.producto}</td>
          <td>${producto.precio * producto.cantidad}</td>
        </tr>`;
    });
    billContainer.innerHTML = `<tbody>
                    <tr>
                      Factura  
                    </tr>
                    ${billArray.join("")}
                    <tr>
                      <td>Total</td>
                      <td>${TotalBill}</td>  
                    </tr>
                </tbody>`;

    console.log(`Total de la factura: Q.${TotalBill}`);
    return TotalBill;
  }

  //
  // 3. Manejadores de eventos (Event Listeners)
  //
  if (productosContainer) {
    productosContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("Eliminar")) {
        const productoAEliminar = event.target.dataset.producto;
        eliminarDelCarrito(productoAEliminar);
      }
    });

    productosContainer.addEventListener("change", (event) => {
      if (event.target.classList.contains("amount")) {
        const newAmount = parseInt(event.target.value);
        const productoID = event.target.id.replace("amount-", ""); // Limpia el ID para obtener solo el nombre del producto
        if (newAmount > 0) {
          actualizarCantidad(productoID, newAmount);
        } else {
          // Si la cantidad es 0, podrías eliminar el producto
          eliminarDelCarrito(productoID);
        }
      }
      renderizarProductos();
    });
  }

  if (loadMoreButton) {
    loadMoreButton.addEventListener("click", () => {
      loadingMoreContent();
      // Lógica para el botón de "Cargar más"
    });
  }


  //
  // 4. Inicialización
  //
  renderizarProductos();
  showBill()
});
