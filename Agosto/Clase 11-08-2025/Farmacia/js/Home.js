
//cambiar de imagenes 
const imagenArticulos = document.querySelectorAll(".img-articulo");

imagenArticulos.forEach(imagen => {
    let originalSrc = imagen.src;

    imagen.addEventListener("mouseover", () => {
        imagen.src = "https://shop.marriott.com/dw/image/v2/BLCS_PRD/on/demandware.static/-/Sites-productCatalog_MBB/default/dw462f685c/images/main/westin-shampoo-white-tea-HB-303-WT-v1-hpr-3000x3794.jpg?sw=840&sh=1062";
            imagen.style.transform = "scale(1.01)";
        imagen.style.transition = "transform 0.5s ease";
    });
    imagen.addEventListener("mouseout", () => {
        imagen.src = originalSrc;
        imagen.style.transform = "";
        imagen.style.transition = "transform 0.5s ease";
    });
});

const imagenMedicinas = document.querySelectorAll(".img-medicina");
imagenMedicinas.forEach(imagen => {
    let originalSrc = imagen.src;

    imagen.addEventListener("mouseover", () => {
        imagen.src = "https://www.consumer.es/app/uploads/fly-images/586217/interaccion-medicamentos-alimentos-1200x550-cc.jpg";
        imagen.style.transform = "scale(1.01)";
        imagen.style.transition = "transform 0.5s ease";
    });
    imagen.addEventListener("mouseout", () => {
        imagen.src = originalSrc;
        imagen.style.transform = "";
        imagen.style.transition = "transform 0.5s ease";
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