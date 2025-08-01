const productos = JSON.parse(localStorage.getItem("cart")) || [];

function eliminarDelCarrito(productoAEliminar) {
  const newProducts = productos.filter((p) => p.producto !== productoAEliminar);
  localStorage.setItem("cart", JSON.stringify(newProducts));
  console.log("productoEliminado");
  location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
  const productosContainer = document.querySelector(".productos");
  const loadMoreButton = document.querySelector(".LoadMoreButtons");

  const cards = productos.map((producto) => {
    return `
        <div class="contenedorProductosIndividual">
            <img src="${producto.imagen_url}" alt="${producto.producto}">
            <div>
            <h3>${producto.producto}</h3>
            <p>Q.${producto.precio}</p>
            </div>
            <p>${producto.descripcion}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <input type="number" value="${producto.cantidad}" id="${producto.producto}" class="amount">
            <button class="Eliminar" producto="${producto.producto}">Eliminar del carrito</button>
        </div>
        `;
  });

  productosContainer.innerHTML = cards.join("");

  loadMoreButton.addEventListener("click", () => {
    loadingMoreContent();
    if (productosContainer.children.length >= cards.length) {
      loadMoreButton.innerHTML = "";
    }
  });

  productosContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("Eliminar")) {
      const productoAEliminar = event.target.getAttribute("producto");
      eliminarDelCarrito(productoAEliminar);
    }
  });

  productosContainer.addEventListener("change", (event) => {
    if (event.target.classList.contains("amount")) {
      const newAmount = parseInt(event.target.value);
      const productoIndex = productos.findIndex(
        (p) => event.target.id === p.producto
      );
      if (productoIndex !== -1) {
        productos[productoIndex].cantidad = newAmount;
        localStorage.setItem("cart", JSON.stringify(productos));
        console.log("Updated");
      }
    }
  });
});


function showingTheBill() {

}

function showSimilarProducts(){
  
}