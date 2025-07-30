class Destination {
  constructor(imagen, destino, descripcion, precio,) {
    this.imagen = imagen;
    this.destino = destino;
    this.descripcion = descripcion;
    this.precio = precio;
  }
  showHTML() {
    return `<div class="destino">
            <img src="${this.imagen}" alt="${this.destino}">
            <div class="destino-info">
            <h2>${this.destino}</h2>
            <p>${this.descripcion}</p>
            <span>${this.precio}</span>
        </div>
        </div>`;
  }
}

class ArrayDestination {
  constructor() {
    this.destinations = [];
  }
  addDestino(destination) {
    this.destinations.push(destination);
  }
  showDestinos() {
    const contenedorDestinos = document.getElementById("destinos");
    contenedorDestinos.innerHTML = this.destinations
      .map((d) => d.showHTML())
      .join("");
  }
}

const myDestination = new ArrayDestination();

myDestination.addDestino(
  new Destination(
    "https://www.atayan.viajes/wp-content/uploads/2020/01/Viaje-a-Tailandia-Koh-phi-phi-3.jpg",
    "Singapur, Tailandia, Phuket y Phi Phi",
    "Un viaje inolvidable por las playas y cultura de Tailandia",
    "Desde $1500 por persona"
  )
);

myDestination.addDestino(
  new Destination(
    "https://www.lanacion.com.ar/resizer/v2/impactantes-imagenes-de-dubai-la-ciudad-mas-OSUEEHEXPZGRBMZUXD2BDDY2JE.jpg?auth=4a1c8343aaa739b6fe356be477a6d3ddfecd6a1082068788e5a8f85aa9d5c6c3&width=420&height=280&quality=70&smart=true",
    "Emiratos Árabes",
    " Dubái y en el resto de los Emiratos Árabes Unidos",
    "Desde $779 por persona"
  )
);

myDestination.addDestino(
  new Destination(
    "https://www.panavision-tours.com/viajes/tours-europa-agencias-viaje/tours-europa-agencias-viaje.jpg",
    "EUROPA TOUR 2025",
    "Experimenta un recorrido por Europa.",
    "Desde $5225 por persona"
  )
);

myDestination.addDestino(
  new Destination(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCgH8-5h0GIfoHG4xKbvV8nJjwBorytFFAgmQjHVn_B4ras3HP31B7jEYH5Z6t6UIMVGA&usqp=CAU",
    "Bogotá – Medellín – Cartagena",
    "Explora la vibrante cultura de Colombia.",
    "Desde $915 por persona"
  )
);

myDestination.addDestino(
  new Destination(
    "https://content.r9cdn.net/rimg/dimg/76/95/29f7ea33-city-13675-168869255e1.jpg?width=1366&height=768&xhint=1561&yhint=1026&crop=true",
    "Colores de Japón e Hiroshima",
    "Sumérgete en la cultura y la historia de Japón.",
    "Desde $3520 por persona"
  )
);

myDestination.addDestino(
  new Destination(
    "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0f/ec/98/c2.jpg",
    "Super India – Exclusivo",
    "Una experiencia única en la India.",
    "Desde $840 por persona"
  )
);

myDestination.addDestino(
  new Destination(
    "https://www.cloud-europamundo.com/img/carousel/big/Salerno_20210914144931.jpg",
    "Atenas, Península, Corazón De Italia con Sorrento",
    "Un viaje que combina la historia de Grecia con la belleza de Italia.",
    "Desde $1507 por persona"
  )
);

myDestination.addDestino(
  new Destination(
    "https://cdn5.travelconline.com/images/fit-in/2000x0/filters:quality(75):strip_metadata():format(webp)/https%3A%2F%2Ftr2storage.blob.core.windows.net%2Fimagenes%2FATuQhgHU9ty4-dpwUdkt1VZjpeg.jpeg",
    "Turquía con Crucero por las Islas Griegas y Dubái",
    "Descubre los misterios y la historia del antiguo Egipto.",
    "Desde $2132 por persona"
  )
);

myDestination.addDestino(
  new Destination(
    "https://imagenes.elpais.com/resizer/v2/3ZORQ23GYLQJQQLPDBQGVFPBWQ.jpg?auth=0c312520e921da516cbef7e56978ecad1eb59af6298b29da30cbaf148bb42fb7&width=980&height=980&smart=true",
    "Las Maravillas de Egipto",
    "",
    "Desde $2048 por persona"
  )
);

myDestination.addDestino(
  new Destination(
    "https://panama.viajardo.com/wp-content/uploads/2024/04/panama-playa-800x400.jpg",
    "La magia del Caribe en Panamá",
    "Disfruta de las playas y el encanto caribeño de Panamá.",
    "Desde $1223 por persona"
  )
);

myDestination.showDestinos();

function FindDestination() {
  const entrada = document
    .getElementById("busqueda")
    .value.trim()
    .toLowerCase();
  const containerDestinations = document.getElementById("destinos");
  containerDestinations.innerHTML = "";
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = "";
  resultado.style.color = "black";

  let showDestinations = [];
  if (entrada === ""){
    myDestination.showDestinos();
    showDestinations = myDestination.destinations;
  }else{
    showDestinations = myDestination.destinations.filter((destination) => 
        destination.destino.toLowerCase().includes(entrada)
  );
  if (showDestinations.length >0){
    showDestinations.forEach((destination) =>{
      const cardDestination = document.createElement("div");
      cardDestination.innerHTML = `
      <div class="destino">
        <img src="${destination.imagen}" alt="${destination.destino}">
        <h2 class="Destino-titulo">${destination.destino}</h2>
        <p class="Destino-descripcion">${destination.descripcion}</p>
        <span class="price"><strong>${destination.precio}</strong></span>
      </div>
      `;
      resultado.appendChild(cardDestination);
    });
  } else {
    resultado.textContent = "DESTINO NO ENCONTRADO";
    resultado.style.color = "red";
  }
}
}
function CleanSearch() {
  document.getElementById("busqueda").value = "";
  const resultado = document.getElementById("resultado");
  if (resultado) {
    resultado.textContent = "";
    resultado.style.color = "black";
  }
  FindDestination();
}