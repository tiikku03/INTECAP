let curso; // Declarar fuera para acceso global

document.addEventListener("DOMContentLoaded", function () {
  const infoCurso = document.getElementById("info-curso");
  curso = JSON.parse(localStorage.getItem("cursosAsignados")); // Asignar valor

  if (curso) {
    infoCurso.innerHTML = `
      <img class="curso-img" src="${curso.imagen}" alt="${curso.titulo}" style="max-width: 300px;">
      <h2 class="curso-name">${curso.titulo}</h2>
      <p class="curso-descripcion">Descripción: <strong>${curso.descripcion}</strong></p>
      <p class="curso-modalidad">Modalidad: <strong>${curso.modalidad}</strong></p>
      <p class="curso-precio">Precio: <strong>${curso.precio}</strong></p>
      <ul>
        ${curso.detalles.map(det => `<li>${det}</li>`).join("")}
      </ul>
      <button onclick="eliminarCurso()">Eliminar Curso</button>
      <button id="btn-confirmar" onclick="confirmarCurso()">Confirmar</button>
    `;
  } else {
    infoCurso.innerHTML = "<p>No hay ningun curso seleccionado</p>";
    const volverCursos = document.getElementById("volver");
    const volverDiv = document.createElement('div');
    volverDiv.innerHTML = `
      <a href="Cursos.html"><button>Volver a Cursos Virtuales</button></a>
      <a href="CursosP.html"><button>Volver a Cursos Presenciales</button></a>
    `;    
    volverCursos.appendChild(volverDiv);
  }
});

function confirmarCurso(){
    const PayContainer = document.getElementById("Asignar-Pago");
    PayContainer.innerHTML = `
      <h2>Pago del Curso</h2>
      <p>total: ${curso.precio} </p>
      <p>Por favor, realiza el pago del curso seleccionado en las próximas 48 horas.</p>
    `;
}

function eliminarCurso(){
  localStorage.removeItem("cursosAsignados");
  location.reload();
}