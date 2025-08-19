//Obtener elementos 
document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll(".buy-btn");
    buttons.forEach(boton =>{
    boton.addEventListener("click", function(e){
    e.preventDefault();
    
    const articuloContainer = this.closest(".articulo-container")
    const imgArticulo = articuloContainer.querySelector(".img-articulo").src;
    const articuloName = articuloContainer.querySelector(".name-articulo").textContent;
    const descripcion = articuloContainer.querySelector(".descripcion-articulo").textContent;
    const precio = articuloContainer.querySelector(".precio-articulo").textContent;

    const articuloInformacion = {
      imgArticulo,
      articuloName,
      descripcion,
      precio: precio.replace('precio: Q', '').replace('precio: ', '')
    };
    
    console.log('informacion del articulo: ', articuloInformacion);
    localStorage.setItem("ArticuloFarmacia", JSON.stringify(articuloInformacion));
    window.location.href = "Compra.html";
    });
   });
});


//eventos

//tarjetas
const articulos = document.querySelectorAll(".articulo-container");

articulos.forEach(articulo => {
  articulo.style.transition = "box-shadow 0.4s ease, transform 0.4s ease";
  articulo.addEventListener("mouseover", function() {
  articulo.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
  });
  articulo.addEventListener("mouseout", function() {
    articulo.style.boxShadow = "";
    articulo.style.transform = "";
  });
});

//img
const imagenes = document.querySelectorAll(".img-articulo");
imagenes.forEach(imagen => {
  imagen.style.transition = "box-shadow 0.4s, transform 0.4s, filter 0.4s, border-radius 0.4s";
  imagen.addEventListener("mouseover", function() {
    imagen.style.filter = "brightness(1.15)";
    imagen.style.transform = "scale(1.02)";
    imagen.style.boxShadow = "0 8px 24px rgba(0,0,0,0.18)";
    imagen.style.borderRadius = "20px";
    imagen.style.border = "2px solid #000";
  });
  imagen.addEventListener("mouseout", function() {
    imagen.style.filter = "";
    imagen.style.transform = "";
    imagen.style.boxShadow = "";
    imagen.style.borderRadius = "";
    imagen.style.border = "";
  });
});
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