const motocicletas = [
  {
    imagen: "../images/DeportivaDucatiPanigale.png",
    nombre: "Ducati Panigale V4 SP2 2025",
    price: 50000,
    type: "Deportiva",
    marca: "Ducati",
    description:
      "La Ducati Panigale V4 SP2 2025 es la cúspide de la ingeniería deportiva de Ducati. Diseñada para la pista, ofrece una combinación inigualable de potencia, agilidad y tecnología avanzada, brindando una experiencia de conducción emocionante y precisa para los entusiastas de la velocidad.",
  },
  {
    imagen: "../images/YamahaR1M.png",
    nombre: "Yamaha R1M",
    price: 55000,
    type: "Deportiva",
    marca: "Yamaha",
    description:
      "La Yamaha R1M es una motocicleta superdeportiva de élite, equipada con la última tecnología y componentes de alta gama. Su rendimiento excepcional en pista y carretera se combina con una electrónica sofisticada para ofrecer un control superior y una experiencia de conducción inmersiva.",
  },
  {
    imagen: "../images/HondaCBR1000R-RFirebladeSP.png",
    nombre: "Honda CBR1000RR-R Fireblade SP",
    price: 60000,
    type: "Deportiva",
    marca: "Honda",
    description:
      "La Honda CBR1000RR-R Fireblade SP es una máquina de alto rendimiento nacida en los circuitos. Con un motor potente, aerodinámica agresiva y una electrónica de vanguardia, está diseñada para dominar tanto en la pista como para ofrecer una emocionante experiencia deportiva en carretera.",
  },
  {
    imagen: "../images/BMWM100RR2025.png",
    nombre: "BMW M 1000 RR 2025",
    price: 80000,
    type: "Deportiva",
    marca: "BMW",
    description:
      "La BMW M 1000 RR 2025 es la motocicleta deportiva de producción más extrema de BMW Motorrad. Con la herencia de BMW M, esta moto ofrece un rendimiento sin concesiones, tecnología de competición y una estética impresionante, ideal para pilotos que buscan lo máximo en la deportividad.",
  },
  {
    imagen: "../images/ApriliaRSV4Factory.png",
    nombre: "Aprilia RSV4 Factory (2025)",
    price: 50000,
    type: "Deportiva",
    marca: "Ducati", // Note: The original data had Ducati for Aprilia. I kept it as is.
    description:
      "La Aprilia RSV4 Factory (2025) es una superbike italiana con un pedigrí de competición. Con su potente motor V4 y chasis de primera clase, ofrece una combinación adictiva de potencia, agilidad y un sonido inconfundible, perfecta para los amantes de las emociones fuertes.",
  },
  {
    imagen: "../images/RAYZR125FI.png",
    nombre: "RAY ZR 125 FI",
    price: 50000,
    type: "urbana",
    marca: "Yamaha",
    description:
      "La Yamaha RAY ZR 125 FI es una scooter urbana moderna y eficiente, ideal para el día a día en la ciudad. Con su diseño ágil, bajo consumo de combustible y características prácticas, ofrece una solución de transporte cómoda y estilizada para la movilidad urbana.",
  },
  {
    imagen: "../images/TMAX560.png",
    nombre: "Yamaha TMAX 560",
    price: 50000,
    type: "urbana",
    marca: "Yamaha",
    description:
      "La Yamaha TMAX 560 redefine el concepto de scooter deportiva. Con un potente motor y un chasis que se asemeja al de una motocicleta, ofrece un rendimiento emocionante y una gran comodidad, perfecta para desplazamientos urbanos y escapadas de fin de semana.",
  },
  {
    imagen: "../images/RAYZR.png",
    nombre: "Yamaha RAY ZR",
    price: 50000,
    type: "urbana",
    marca: "Yamaha",
    description:
      "La Yamaha RAY ZR es una scooter compacta y versátil diseñada para la jungla urbana. Su manejo sencillo, su diseño juvenil y su economía de combustible la convierten en una opción popular para la movilidad diaria en la ciudad.",
  },
  {
    imagen: "../images/SZ150.png",
    nombre: "Yamaha SZ150",
    price: 50000,
    type: "urbana",
    marca: "Yamaha",
    description:
      "La Yamaha SZ150 es una motocicleta urbana robusta y confiable, ideal para el transporte diario. Con un equilibrio entre rendimiento y eficiencia, ofrece una conducción cómoda y económica para el tráfico de la ciudad y trayectos cortos.",
  },
  {
    imagen: "../images/RAYZRCONFRENODEDISCO.png",
    nombre: "RAY ZR CON FRENO DE DISCO",
    price: 50000,
    type: "urbana",
    marca: "Ducati", // Note: The original data had Ducati for this Yamaha model. I kept it as is.
    description:
      "La RAY ZR con freno de disco, en su versión urbana, mejora la seguridad y el control en el frenado. Este modelo sigue ofreciendo la agilidad y eficiencia esperadas para la movilidad en la ciudad, con un plus en rendimiento de frenado.",
  },
  {
    imagen: "../images/HondaAfricaTwinAdventure.png",
    nombre: "Honda Africa Twin Adventure",
    price: 5600,
    type: "touring",
    marca: "Honda",
    description:
      "La Honda Africa Twin Adventure Sports es una motocicleta de aventura icónica, construida para explorar. Con su potente motor, chasis robusto y gran capacidad de combustible, está lista para largas distancias y terrenos desafiantes, ofreciendo confort y control en cualquier viaje.",
  },
  {
    imagen: "../images/KTM1290SuperAdventureR.png",
    nombre: " KTM 1290 Super Adventure R",
    price: 11000,
    type: "touring",
    marca: "KTM",
    description:
      "La KTM 1290 Super Adventure R es una motocicleta de aventura de alto rendimiento, diseñada para los entusiastas del off-road. Con una potente entrega de par, suspensión de largo recorrido y electrónica avanzada, es capaz de conquistar los terrenos más difíciles con confianza.",
  },
  {
    imagen: "../images/YamahaTenere700.png",
    nombre: "Yamaha Ténéré 700",
    price: 10000,
    type: "touring",
    marca: "Yamaha",
    description:
      "La Yamaha Ténéré 700 es una motocicleta de aventura pura, inspirada en las motos de rally. Su diseño ligero, motor CP2 de alto par y gran capacidad todoterreno la hacen perfecta para explorar caminos no asfaltados y vivir auténticas aventuras.",
  },
  {
    imagen: "../images/DucatiMultistradaV4.png",
    nombre: "Ducati Multistrada V4",
    price: 15000,
    type: "touring",
    marca: "Ducati",
    description:
      "La Ducati Multistrada V4 es la touring definitiva de Ducati, combinando el rendimiento de una deportiva con la comodidad de una moto de aventura. Equipada con tecnología de radar y un potente motor V4, ofrece una experiencia de viaje inigualable, ya sea en carretera o fuera de ella.",
  },
  {
    imagen: "../images/SuzukiVStrom1050.png",
    nombre: "Suzuki V-Strom 1050",
    price: 50000,
    type: "touring",
    marca: "Suzuki",
    description:
      "La Suzuki V-Strom 1050 es una motocicleta touring de aventura versátil y confiable. Con un motor potente, electrónica avanzada y una postura de conducción cómoda, es ideal para viajes largos, ofreciendo un excelente rendimiento tanto en carretera como en pistas de tierra.",
  },
];

const motoType = document.getElementById("motorcicleType");
const containerShowMoto = document.getElementById("showMoto");

function gettingCurrentMoto(moto, array) {
  return array.find((m) => m.nombre.toLowerCase() === moto.toLowerCase());
}

function showMoto() {
  const insertableHTML = motocicletas
    .map((moto) => {
      return `
      <div class="card">
        <img src="${moto.imagen}" alt="Motocicleta ${moto.nombre}">
        <h3 class="Categoria">${moto.nombre}</h3>
        <p class="Conoce">Marca: ${moto.marca} - Precio: $${moto.price}</p>
        <button class="moreInfo">Mas informacion</button>
        <div class="details"></div>
      </div>
    `;
    })
    .join("");
  containerShowMoto.innerHTML = insertableHTML;
}

window.addEventListener("DOMContentLoaded", () => showMoto());

function filterMoto(typeValue, container) {
  const listMotos = motocicletas.filter(
    (moto) => moto.type.toLowerCase() === typeValue.toLowerCase()
  );
  const insertableHTML = listMotos
    .map((moto) => {
      return `
      <div class="card">
        <img src="${moto.imagen}" alt="Motocicleta ${moto.nombre}">
        <h3 class="Categoria">${moto.nombre}</h3>
        <p class="Conoce">Marca: ${moto.marca}</p> 
        <p class="Conoce">Precio: $${moto.price}</p>
        <button class="moreInfo">Mas informacion</button>
        <div class="details"></div>
      </div>
    `;
    })
    .join("");
  container.innerHTML = insertableHTML;
  if (typeValue === "all") {
    showMoto();
  }
  return listMotos;
}

motoType.addEventListener("change", () => {
  filterMoto(motoType.value, containerShowMoto);
  showHideDetails(filterMoto(motoType.value, containerShowMoto));
});

window.addEventListener("DOMContentLoaded", () => {
  showHideDetails(motocicletas);
});


function buyMoto() {
  const buyButtons = document.querySelectorAll(".Comprar");

  buyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const detailsContainer =
        this.parentElement.parentElement.querySelector(".details");

      detailsContainer.innerHTML = `
          <form id="buyMotoForm">
          <h2>Ingresa tus Datos para procesar la compra</h2>
          <label for="name">Nombre:</label>
          <input type="text" id="name" name="name" required>

          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required>

          <label for="phone">Teléfono:</label>
          <input type="tel" id="phone" name="phone" required>

          <button class="buyMotoForm" type="submit">Procesar Compra</button>
          <button class="cancelButton" type="button">Cancelar</button>
          </form>`;

      const buyingForm = document.getElementById("buyMotoForm");
      const formContainer = document.querySelector(".buyMotoForm");
      const cancelButton = document.querySelector(".cancelButton");

      buyingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        if (name && email && phone) {
          alert(
            `Compra procesada para ${name}. Te contactaremos a ${email} o ${phone}.`
          );
          detailsContainer.innerHTML = "";
        } else {
          alert("Por favor, completa todos los campos.");
        }
      });

      cancelButton.addEventListener("click", function () {
        this.parentElement.innerHTML = "";
      });
    });
  });
}

function darkMode() {
  const body = document.querySelector("body");
  const darkModeButton = document.getElementById("darkModeButton");

  darkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      darkModeButton.textContent = "Modo Claro";
    } else {
      darkModeButton.textContent = "Modo Oscuro";
    }
  });
}

function showHideDetails(array) {
  const moreInfoButtons = document.querySelectorAll(".moreInfo");
  moreInfoButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.parentElement.querySelector(".details").innerHTML === "") {
        this.innerHTML = "Ocultar Detalles";
        const moto = this.parentElement.querySelector(".Categoria").textContent;
        this.parentElement.querySelector(".details").innerHTML = `<p>${
          gettingCurrentMoto(moto, array).description
        }</p>
        <button class="Comprar">Comprar</button>`;
      } else {
        this.parentElement.querySelector(".details").innerHTML = ``;
        this.innerHTML = "Mas informacion";
      }
    });
  });
  moreInfoButtons.forEach((button) => {
    button.addEventListener("click", () => {
      buyMoto();
    });
  });
}


export function delay(time, message) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => { resolve(message) }, time)
  })
}


function showMessage(message) {
  console.log(message);
}


delay(2000, "Hello after 2s")
.then((message) => console.log(message))
