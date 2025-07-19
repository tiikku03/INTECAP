const personal = [
  { nombre: "Juan Pérez", sueldo: 3500, puesto: "Gerente" },
  { nombre: "María García", sueldo: 2000, puesto: "Vendedor" },
  { nombre: "Carlos López", sueldo: 1800, puesto: "Cajero" },
  { nombre: "Ana Martínez", sueldo: 2200, puesto: "Supervisor" },
  { nombre: "Luis Rodríguez", sueldo: 1900, puesto: "Almacenista" },
];

function FindPersonal() {
  const entrada = document
    .getElementById("busqueda")
    .value.trim()
    .toLowerCase();
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = '';
  resultado.style.color = "black";

  let personalAMostrar = [];

  if (entrada === '') {
    personalAMostrar = personal;
  } else {
    const personaEncontrada = personal.find(persona => persona.nombre.toLowerCase() === entrada);
    if (personaEncontrada) {
      personalAMostrar.push(personaEncontrada);
    }
  }

  if (personalAMostrar.length > 0) {
    personalAMostrar.forEach(persona => {
      const personalCard = document.createElement('div');
      personalCard.classList.add('card');

      const sueldoTexto = persona.sueldo !== undefined && persona.sueldo !== null
        ? `Sueldo: $${persona.sueldo}`
        : "Sueldo no disponible";

      const puestoTexto = persona.puesto !== undefined && persona.puesto !== null
        ? `Puesto: ${persona.puesto}`
        : "Puesto no disponible";

      personalCard.innerHTML = `
        <section class="PersonalCard">
           <div class="Card">
            <h3 class="nameP">${persona.nombre}</h3>
            <p class="SueldoP">${sueldoTexto}</p>
            <p class="Puestop">${puestoTexto}</p>
            <button class="moreInfo">Ver Perfil</button>
            <div class="details"></div>
          </div>
        </section>
      `;
      resultado.appendChild(personalCard);
    });
  } else {
    resultado.textContent = "Persona no encontrada. Agrega el personal.";
    resultado.style.color = "red";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let submitForm = document.getElementById("newProductForm");
  if (submitForm) {
    submitForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let personalNameInput = document.getElementById("newName");
      let personalSueldoInput = document.getElementById("newSueldo");
      let personalPuestoInput = document.getElementById("newPuesto");

      const personalName = personalNameInput.value;
      const personalSueldo = personalSueldoInput.value;
      const personalPuesto = personalPuestoInput.value;

      personal.push({
        nombre: personalName,
        sueldo: parseFloat(personalSueldo),
        puesto: personalPuesto,
      });

      personalNameInput.value = "";
      personalSueldoInput.value = "";
      personalPuestoInput.value = "";

      alert("Personal agregado exitosamente.");
      FindPersonal(); 
    });
  }
   FindPersonal();
});

function CleanSearch() {
  document.getElementById("busqueda").value = "";
  const resultado = document.getElementById("resultado");
  if (resultado) {
    resultado.textContent = "";
    resultado.style.color = "black";
  }
  FindPersonal();
}