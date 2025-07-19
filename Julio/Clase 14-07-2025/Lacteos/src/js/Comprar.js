const params = new URLSearchParams(window.location.search);

const producto = params.get("Producto");
const precio = parseInt(params.get("Precio"));
const stock= params.get('Stock');

document.getElementById('nombreProducto').textContent = "Producto: " + producto ;
document.getElementById('precioProducto').textContent = "Precio " + precio;
document.getElementById('stockProducto').textContent = "Stock Disponible: " + stock;


