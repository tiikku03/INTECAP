// Ensure this script runs after the DOM is loaded.
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    const producto = params.get("Producto");
    const precio = parseInt(params.get("Precio"));
    const cantidad = parseInt(params.get("cantidad"));


    document.getElementById('nombreProducto').textContent = "Producto: " + producto;
    document.getElementById('precioProducto').textContent = "Precio: " + precio; 
    document.getElementById("cantidadProducto").textContent = "Cantidad: " + cantidad;

    let totalCalculado = precio * cantidad;
    document.getElementById("totalproducto").textContent = "Total: " + totalCalculado;

    const form = document.querySelector('form');

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const nombreComprador = document.getElementById('customerName').value;
        const direccionComprador = document.getElementById('Address').value;
        const phoneComprador = document.getElementById('Phone').value;
        const correoComprador = document.getElementById('Email').value;

        let formContainer = document.getElementById("endMessage");
        formContainer.innerHTML = `
            Gracias <strong>${nombreComprador}</strong> por realizar la compra,
            los artículos se enviarán a <strong>${direccionComprador}</strong>. Nos comunicaremos a
            su número de celular proporcionado: <strong>${phoneComprador}</strong> o a su correo electrónico: <strong>${correoComprador}</strong>.`;
        form.reset(); 
    });
});