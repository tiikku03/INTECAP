const params = new URLSearchParams(window.location.search);

const producto = params.get("Producto");
const precio = parseInt(params.get("Precio"));
const cantidad = params.get("cantidad");

document.getElementById('nombreProducto').textContent = "Producto: " + producto ;
document.getElementById('precioProducto').textContent = "Precio " + precio;
document.getElementById("cantidadProducto").textContent = "Cantidad: " + cantidad;
// alt 96
``
const nombreComprador = document.getElementById('customerName');
const direccionComprador = document.getElementById('Address');
const phoneComprador = document.getElementById('Phone');
const correoComprador = document.getElementById('Email');

let total = "Total: " + precio  * cantidad;
console.log(total);