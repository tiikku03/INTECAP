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