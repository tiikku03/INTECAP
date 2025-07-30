class Personal {
  constructor(foto, nombre, direccion, genero, dpi, puesto) {
    this.foto = foto;
    this.nombre = nombre;
    this.direccion = direccion;
    this.genero = genero;
    this.dpi = dpi;
    this.puesto = puesto;
  }
  showHTML() {
    return `<div class="personal">
            <img src="${this.foto}" alt="${this.nombre}">
            <div class="personal-info">
                <h2 class="personal-name">${this.nombre}</h2>
                <p class="personal-direccion">Dirección: ${this.direccion}</p>
                <p class="personal-genero">Género: ${this.genero}</p>
                <p class="personal-dpi">DPI: ${this.dpi}</p>
                <p class="personal-puesto">Puesto: ${this.puesto}</p>
            </div>
        </div>`;
  }
}
class ArrayPersonal {
  constructor() {
    this.personals = [];
  }

  addPersonal(personal) {
      this.personals.push(personal)
  }
  ShowPersonal() {
    const contenedorPersonal = document.getElementById("personal");
    contenedorPersonal.innerHTML = this.personals
      .map((p) => p.showHTML())
      .join("");
  }
}

debugger

const myPersonal = new ArrayPersonal();

myPersonal.addPersonal(
  new Personal(
    "https://intereconomia.com/wp-content/uploads/2019/04/imagen-personal-OPOLJA.jpeg",
    "Lourdes Echeverría",
    "Blvd Los Proceres Y 8 Av Esquina Z-10,Ciudad de Guatemala,Guatemala",
    "Femenino",
    "1234567890101",
    "Contadora"
  )
);
myPersonal.addPersonal(
  new Personal(
    "https://img.freepik.com/fotos-premium/concepto-planificacion-empresarial-reflexivo-hombre-negocios-mediana-edad-sentado-escritorio-computadora-trabajando_116547-60293.jpg?semt=ais_hybrid&w=740",
    "Alex Roblero",
    "Blvd Los Proceres Y 8 Av Esquina Z-10,Ciudad de Guatemala,Guatemala",
    "Masculino",
    "8364910275821",
    "Gerente"
  )
);
myPersonal.addPersonal(
  new Personal(
    "https://img.freepik.com/foto-gratis/hombre-pensativo-traje_23-2147574148.jpg?semt=ais_hybrid&w=740&q=80",
    "Raúl Muñoz",
    "9 AV 34-00 Z-11 COL CHARCAS, Flores,Guatemala",
    "Masculino",
    "2719503846209",
    "Diseñador Gráfico"
  )
);
myPersonal.addPersonal(
  new Personal(
    "https://img.freepik.com/foto-gratis/empresarios-hispanos-mediana-edad_23-2151098595.jpg?semt=ais_hybrid&w=740",
    "Sofía Hernández",
    "6 Av 9-18 Z-10,Ciudad de Guatemala,Guatemala",
    "Femenino",
    "5048721639540",
    "Encargado de Ventas"
  )
);
myPersonal.addPersonal(
  new Personal(
    "https://www.chio-lecca.edu.pe/cdn/shop/articles/chio-lecca-blog-imagen-personal.png?v=1741021013",
    "Edith Badillo",
    "24 C 0-33 Z-1,Ciudad de Guatemala,Guatemala",
    "Femenino",
    "9123876045321",
    "Asistente Administrativa"
  )
);  

function Validation(newPerson){
    const existeDPI = myPersonal.personals.some(p => p.dpi === newPerson.dpi);
    const existeNombre = myPersonal.personals.some(p => p.nombre.toLowerCase() === newPerson.nombre.toLowerCase());
    return {
        duplicadoDPI: existeDPI,
        duplicadoNombre: existeNombre
    }
}

myPersonal.ShowPersonal();
document
    .getElementById("formPersonal")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        
        const nuevaPersona = {
            foto: document.getElementById('foto').value,
            nombre: document.getElementById('nombre').value,
            direccion: document.getElementById('direccion').value,
            genero: document.getElementById('genero').value,
            dpi: document.getElementById('dpi').value,
            puesto: document.getElementById('puesto').value
        };
        
        const validacion = Validation(nuevaPersona);

        if (validacion.duplicadoDPI) {
            alert('Ya existe una persona con este DPI.');
            return;
        }
        if (validacion.duplicadoNombre) {
            alert('Ya existe una persona con este nombre.');
            return;
        } 
        myPersonal.addPersonal(new Personal(
            nuevaPersona.foto,
            nuevaPersona.nombre,
            nuevaPersona.direccion,
            nuevaPersona.genero,
            nuevaPersona.dpi,
            nuevaPersona.puesto
        ));
        
        alert('Persona agregada exitosamente');
        document.getElementById('formPersonal').reset();
        myPersonal.ShowPersonal(); 
});
  
const myForm = document.getElementById("formPersonal");
const showFormButton = document.getElementById("showFormButton");

showFormButton.addEventListener("click", function () {
  if (myForm.style.display == "none" || myForm.style.display == "") {
    myForm.style.display = "block";
    showFormButton.textContent = "Ocultar Formulario";
  } else {
    myForm.style.display = "none";
    showFormButton.textContent = "Mostrar Formulario";
  }
});

function FindPersonal() {
  const entrada = document.getElementById("busqueda").value.trim().toLowerCase();
  const containerPersonal = document.getElementById("personal");
  containerPersonal.innerHTML = "";
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = "";
  resultado.style.color = "black";

  let showPersonal = [];
  if (entrada === ""){
    myPersonal.ShowPersonal();
    showPersonal = myPersonal.personals;
  }else{
    showPersonal = myPersonal.personals.filter((personal) =>
    personal.nombre.toLowerCase().includes(entrada));
  }
  if (showPersonal.length > 0){
     showPersonal.forEach((personal) => {
      const CardPersonal = document.createElement("div");
      CardPersonal.innerHTML = `
        <div class="personal">
          <img src="${personal.foto}" alt="${personal.nombre}">
          <div class="personal-info">
            <h2 class="personal-name">${personal.nombre}</h2>
            <p class="personal-direccion">Dirección: ${personal.direccion}</p>
            <p class="personal-genero">Género: ${personal.genero}</p>
            <p class="personal-dpi">DPI: ${personal.dpi}</p>
            <p class="personal-puesto">Puesto: ${personal.puesto}</p>
          </div>
        </div>
      `;
      resultado.appendChild(CardPersonal);
    })
  }else{
    resultado.innerHTML = "Personal no encontrado";
    alert("Personal no encontrado");
    resultado.style.color = "red";
  }
}
function CleanSearch(){
  document.getElementById("busqueda").value = "";
  const resultado = document.getElementById("resultado");
  if (resultado) {
    resultado.textContent = "";
    resultado.style.color = "black";
  }
  myPersonal.ShowPersonal();
}
