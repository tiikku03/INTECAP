class Clientes{
    constructor(nombre, email, tel, mensaje){
        this.nombre = nombre;
        this.email = email;
        this.tel = tel;
        this.mensaje = mensaje;
    }
    mostrarDatos(){
       console.log("Comentario Enviado:");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Correo: ${this.email}`);
        console.log(`Teléfono: ${this.tel}`);
        console.log(`Mensaje: ${this.mensaje}`);
    }
    Mostrar(){
       alert(`Gracias ${this.nombre}, tu comentario ha sido enviado correctamente.`);
    }
}
const formulario = document.getElementById("formulario");
formulario.addEventListener('submit', function (e){
e.preventDefault();

const nombre = document.getElementById("Nombre").value;
const email = document.getElementById("Email").value;
const tel = document.getElementById("Telefono").value;
const  mensaje = document.getElementById("Mensaje").value;

const cliente = new Clientes(nombre, email, tel, mensaje);
cliente.mostrarDatos();
cliente.Mostrar();

formulario.reset();
});
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