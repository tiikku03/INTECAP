const productos = JSON.parse(localStorage.getItem("cart")) || [];



window.addEventListener("DOMContentLoaded", () => {
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
            <input type="number" value="${producto.cantidad}">
            <button class="Eliminar">Aliminar del carrito</button>
        </div>
        `;
  });

  if (cards.length > 0) {
    const carsToshow = cards.slice(0, 10);
    productosContainer.innerHTML = carsToshow.join("");
  }

  function loadingMoreContent() {
    const currentLength = productosContainer.children.length;
    const nextCards = cards.slice(currentLength, currentLength + 10);
    productosContainer.innerHTML += nextCards.join("");
  }

  if (cards.length > 10) {
    loadMoreButton.innerHTML = `<button class="btn">Cargar más productos</button>`;
  }
  loadMoreButton.addEventListener("click", () => {
    loadingMoreContent();
    if (productosContainer.children.length >= cards.length) {
      loadMoreButton.innerHTML = "";
    }
  });
});
