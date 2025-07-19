const tiendas = [
  { nombre: "Lácteos La Vaquita", direccion: " Sucursal Peri-Roosevelt" },
  { nombre: "Lácteos La Vaquita", direccion: "Sucursal Zona 1" },
  { nombre: "Lácteos La Vaquita", direccion: "Sucursal El Trébol" },
  { nombre: "Lácteos La Vaquita", direccion: "Sucursal Roosevelt" },
  { nombre: "Lácteos La Vaquita", direccion: "Sucursal Próceres" },
];

function FindShop() {
  const entrada = document
    .getElementById("busqueda")
    .value.trim()
    .toLowerCase();
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = '';
  resultado.style.color = "black";

  let tiendasAMostrar = [];

  if (entrada === '') {
    tiendasAMostrar = tiendas;
  } else {
    tiendasAMostrar = tiendas.filter(tienda => tienda.nombre.toLowerCase().includes(entrada) || tienda.direccion.toLowerCase().includes(entrada));
  }

  if (tiendasAMostrar.length > 0) {
    tiendasAMostrar.forEach(tienda => {
      const tiendaCard = document.createElement('div');
      tiendaCard.classList.add('card');

      const tiendaTexto = tienda.direccion !== undefined && tienda.direccion !== null
        ? `Dirección: ${tienda.direccion}`
        : "Dirección no disponible";

      const imagenSrc = tienda.imagen || '../images/placeholder.jpg'; 

      tiendaCard.innerHTML = `
        <section class="Productos">
          <div class="Card">
            <img src="${imagenSrc}" alt="Tienda ${tienda.nombre}">
            <h3 class="Nombre">${tienda.nombre}</h3>
            <p class="Precio">${tiendaTexto}</p>
            <button class="moreInfo">Editar</button>
            <div class="details"></div>
          </div>
        </section>
      `;
      resultado.appendChild(tiendaCard);
    });
  } else {
    resultado.textContent = "Tienda no encontrada. Agrega la tienda.";
    resultado.style.color = "red";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let submitForm = document.getElementById("newProductForm");
  FindShop(); 

  if (submitForm) {
    submitForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let tiendaNameInput = document.getElementById("newName");
      let tiendaAddresInput = document.getElementById("newAddres");

      const storeName = tiendaNameInput.value.trim();
      const storeAddress = tiendaAddresInput.value.trim();
      
      const duplicado = tiendas.some(tienda=>
        tienda.nombre.toLowerCase() === storeName.toLowerCase() &&
        tienda.direccion.toLowerCase() === storeAddress.toLowerCase() 
      )
      if (duplicado){
        alert("Tienda ya existe")
      }
      tiendas.push({
        nombre: storeName,
        direccion: storeAddress 
      });

      tiendaNameInput.value = "";
      tiendaAddresInput.value = "";

      alert("¡Tienda agregada exitosamente!");
      FindShop(); 
    });
  }
});

function CleanSearch() {
  document.getElementById("busqueda").value = "";
  const resultado = document.getElementById("resultado");
  if (resultado) {
    resultado.textContent = "";
    resultado.style.color = "black";
  }
  FindShop();
}