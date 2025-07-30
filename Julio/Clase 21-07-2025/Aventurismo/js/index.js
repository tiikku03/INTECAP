function enviarFormulario() {
    const nombre = document.getElementById("Nombre").value;
    const Correo = document.getElementById("Email").value;
    const Telefono = document.getElementById("Telefono").value;
    const Mensaje = document.getElementById("Mensaje").value;
    
    if (nombre && Correo && Telefono && Mensaje) {
        alert("Gracias por tu consulta, nos pondremos en contacto contigo pronto.");
    } else {
        alert("Completa todos los campos antes de enviar el formulario");
    }
}