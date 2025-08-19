let articulo;
document.addEventListener("DOMContentLoaded", function(){
    const infoArticulos = document.getElementById("AP-Comprar");
    articulo = JSON.parse(localStorage.getItem("ArticuloFarmacia"));

    if (articulo){
        infoArticulos.innerHTML = `
        <article class="articulo-container">
            <img class="img-articulo" src="${articulo.imgArticulo}" alt="${articulo.articuloName}">
            <h2 class="name-articulo">${articulo.articuloName}</h2>
            <p class="descripcion-articulo">${articulo.descripcion}</p>
            <p class="precio-articulo">${articulo.precio}</p>
            <button class="Confirmar">Confirmar Compra</button>
            <button onclick="eliminar()">Eliminar Articulo</button>
       </article>
        ` ;
    }else{
       infoArticulos.innerHTML = infoArticulos.innerHTML = '<p class="vacio">No hay ningun Articulo o Producto Seleccionado</p>';
        const volver = document.getElementById("volver")
        const VolverDiv = document.createElement('div');
        VolverDiv.innerHTML = `
        <div class="Regresar">
        <a href="articulos.html"><button>Ver Articulos</button></a>
        <a href="medicina.html"><button>Ver Medicamentos</button></a>
        </div>
        `
        volver.appendChild(VolverDiv);
    }
});

function eliminar(){
  localStorage.removeItem("ArticuloFarmacia");
  location.reload();
}

// Recibe Novedades
function notifysubmit(){
    const footerEmail = document.getElementById("footer-email").value;
    if (footerEmail) {
        alert(`Gracias por suscribirte con el correo: ${footerEmail}`);
        document.getElementById("footer-email").value = '';
    } else {
        alert("Por favor, ingresa un correo electrónico válido.");
    }
    e.preventDefault();
}