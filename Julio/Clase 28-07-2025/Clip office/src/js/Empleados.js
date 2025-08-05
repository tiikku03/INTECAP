const empleados = [
  { img: "https://www.mutuanavarra.es/wp-content/uploads/2024/03/PLZ0143-2048x1363.jpg", nombre: "Alejandro Valdés", puesto: "Director General "},
  { img: "https://workbeat.com/wp-content/uploads/2021/11/iStock-530437128-2-1-1024x683-1.jpg", nombre: "Valeria Soto", puesto: "Directora de Operaciones"},
  { img: "https://media.licdn.com/dms/image/v2/C4E03AQEG5uKswjlU8w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1634573482597?e=2147483647&v=beta&t=ChdPihnfPN1PdVqh-WEI2MyxvS7IXPkDLeWPGe7wtBo", nombre: "Marco Rivas", puesto: "Director Financiero"},
  { img: "https://eidosseleccion.com/wp-content/uploads/2024/01/mujer-trabajo-1.png", nombre: "Isabel Cruz", puesto: "Vicepresidenta de Marketing"},
  { img: "https://img.freepik.com/fotos-premium/ensenanza-formal-hombre-barbudo-usa-traje-formal-entrenador-o-profesor-estilo-formal-moda-trabajo-formal-traje-negocios-vestimenta-profesional-codigo-vestimenta-ropa-formal_474717-16237.jpg", nombre: "Daniel Méndez", puesto: "Vicepresidente de Ventas y Desarrollo de Negocios"},
  { img: "https://images.ecestaticos.com/wucbOy20mhcowr2SNmCkKWZ0vzQ=/0x123:2095x1259/600x315/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F5ff%2Fa3e%2F77f%2F5ffa3e77f55d4007ca257ec0cc99c18b.jpg", nombre: "Paulina Herrera", puesto: "Vicepresidenta de Recursos Humanos"},
  { img: "https://edifica.com.pe/blog/wp-content/uploads/2022/05/profesional-trabajando-oficina-edifica.jpg", nombre: "Natalia Paredes", puesto: "Directora Legal"},
  { img: "https://ecoembesempleo.es/web/app/uploads/2022/01/AdobeStock_274890024-768x512.jpeg", nombre: "Ricardo Vargas", puesto: "sistente de Servicio al Cliente"},
  { img: "https://img.freepik.com/fotos-premium/cara-hombre-negocios-exito-lider-trabajo-oficina-vision-mentalidad-jefe-corporativo-crecimiento-carrera-retrato-profesional-gerente-motivacion-mision-felicidad_590464-195126.jpg", nombre: "José Ramírez", puesto: "Jefe de Almacén y Logística"},
];
let mostrarEmpleado = [];

window.addEventListener("DOMContentLoaded", () => {
  const empleadosContainer = document.querySelector(".Empleados");
  const loadMoreContent = document.querySelector(".LoadMore");
const Cards = empleados.map((empleados) => {
  return `<div class="Empleado">
  <img src="${empleados.img}" alt="">
  <div class="informacion">
      <h2>${empleados.nombre}</h2>
      <p>${empleados.puesto}</p>
  </div>
</div>
`;
});
  if (Cards.length / 5 > 1) {
    const cardsToShow = Cards.slice(0, 5);
    empleadosContainer.innerHTML = cardsToShow.join("");
  }
  
  function LoadingMoreContent() {
    const currentLength = empleadosContainer.children.length;
    const nextCards = Cards.slice(currentLength, currentLength + 5);
    empleadosContainer.innerHTML += nextCards.join("");
  }
  

  function showLessContent() {
    const cardsToShow = Cards.slice(0, 5);
    empleadosContainer.innerHTML = cardsToShow.join("");

    loadMoreContent.innerHTML = `<button class="btn" id="loadMore">Cargar más empleados</button>`;
  }
  
  if(Cards.length > 5){
    loadMoreContent.innerHTML = `<button class="btn" id="loadMore">Cargar más empleados</button>`;
  }
  
  loadMoreContent.addEventListener("click", (e) => {
    if(e.target.id === "loadMore") {
      LoadingMoreContent();
      if(empleadosContainer.children.length >= Cards.length){
        loadMoreContent.innerHTML = `<button class="btn" id="showLess">Mostrar menos</button>`;
      }
    } else if(e.target.id === "showLess") {
      showLessContent();
    }
  })
});

//footer form script
function notifysubmit() {
  const footerEmail = document.getElementById("footer-email").value;
  if (footerEmail) {
    alert(`Gracias por suscribirte con el correo: ${footerEmail}`);
    document.getElementById("footer-email").value = "";
  } else {
    alert("Por favor, ingresa un correo electrónico válido.");
  }
  e.preventDefault();
}
