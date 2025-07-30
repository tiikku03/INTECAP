class Alineas {
  constructor(logo, nombre, descripcion, contacto, email) {
    this.logo = logo;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.contacto = contacto;
    this.email = email;
  }
  showHTML() {
    return `
            <div class="aerolinea">
                <img src="${this.logo}" alt="${this.nombre}">
                <h2>${this.nombre}</h2>
                <p class="descripcion">${this.descripcion}</p>
                <p><i class="fa-solid fa-phone"></i> ${this.contacto} </p>
                <p><i class="fa-solid fa-envelope"></i> ${this.email} </p>
            </div>
        `;
  }
}
class ArrayAlineas {
  constructor() {
    this.aerolineas = [];
  }
  addALinea(aerolinea) {
    this.aerolineas.push(aerolinea);
  }
  showAlineas() {
    const contenedorAlineas = document.getElementById("aereolineas");
    contenedorAlineas.innerHTML = this.aerolineas
      .map((a) => a.showHTML())
      .join("");
  }
}

const myAlineas = new ArrayAlineas();

myAlineas.addALinea(
  new Alineas("https://i.scdn.co/image/ab67616d0000b273a8d6cba9aba57c7a2e75200c", "Singapore Airlines", "Reserve billetes de avión con Singapore Airlines y disfrute de la comodidad y el lujo a bordo de la aerolínea más premiada del mundo.", "+65 9184 8888", "cbsiah@hallmark-aviation.com")
);
myAlineas.addALinea(
  new Alineas("https://i.pinimg.com/1200x/64/9e/1c/649e1c738c189557e58cf78e1ec21cfe.jpg", "Fly Emirates", "Emirates conecta el mundo a través de nuestro centro global de Dubái. Operamos aviones modernos, eficientes y cómodos. Nuestro personal, con una gran diversidad cultural, ofrece a diario servicios galardonados a nuestros clientes en seis continentes.", "+971 600 555 555", "emirates@emirates.com")
);
myAlineas.addALinea(
  new Alineas("https://www.latamairlines.com/content/dam/latamxp/sites/alianzas/aerolineas-images_0009_QatarAirways.png", "Qatar Airways", "El Grupo Qatar Airways le ofrece todo lo que necesitará para disfrutar de un viaje sin complicaciones, incluyendo servicios en el aeropuerto, menús a bordo, viajes en avión privado y muchos más.", "+974 4144 5555", " tell-us@qatarairways.com.qa")
);

myAlineas.showAlineas();
