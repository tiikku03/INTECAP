class Servicios {
    constructor(imagen, servicio, descripcion) {
        this.imagen = imagen;
        this.servicio = servicio;
        this.descripcion = descripcion;
    }
    Mostrar(){
        return`
            <div class="servicio-individual">
                <img src="${this.imagen}" alt="${this.servicio}">
                <h3>${this.servicio}</h3>
                <p>${this.descripcion}</p>
            </div>
        `;
    }
}
class ArrayServicios {
    constructor(){
        this.servicios = [];
    }
    aggServicios(servicios){
        this.servicios.push(servicios);
    }
    ShowServicios(){
        const contenedorServicios = document.getElementById("servicios");
        contenedorServicios.innerHTML = this.servicios.map((s) => s.Mostrar()).join("")
    }
}
const myServicios = new ArrayServicios();

myServicios.aggServicios(new Servicios("https://www.anahuac.mx/mexico/sites/default/files/styles/webp/public/noticias/Como-se-origino-el-grafito-que-contienen-los-lapices.jpg.webp?itok=WjMNUnx5","Lápices de Grafito","Pack de lápices HB de alta calidad para escritura y dibujo diario. Ideales para la oficina y el hogar."));
myServicios.aggServicios(new Servicios("https://img5.su-cdn.com/cdn-cgi/image/width=750,height=750/mall/file/2021/09/14/784ec5764b45444e97a3eca6de4cc04d.jpg","Escritorios","Diseño ergonómico y minimalista que se adapta a cualquier espacio de trabajo. Robusto y elegante."));
myServicios.aggServicios(new Servicios("https://copyfaxcor.com/wp-content/uploads/2021/10/Para-qu%C3%A9-sirve-una-impresora-multifuncional.jpg","Impresoras Multifuncional","Imprime, escanea y copia con alta velocidad. Conexión inalámbrica para mayor comodidad."));
myServicios.aggServicios(new Servicios("https://m.media-amazon.com/images/I/81BLi0KQXeL._UF894,1000_QL80_.jpg","Sillas Ergonómica","Silla de oficina con soporte lumbar ajustable. Comodidad garantizada durante largas jornadas."));
myServicios.aggServicios(new Servicios("https://www.oficinasmontiel.com/blog/wp-content/uploads/2024/05/migueldelbarrio_Imagine_a_photo_showcasing_the_advantages_of_er_2e0880b5-01e2-410b-ba14-6f1f4068d1e4.webp","Computadoras de Escritorio","Equipo potente y confiable para todas las tareas de la oficina. Incluye monitor y accesorios."));
// ...clases y servicios iniciales...

function Validacion(newServicio) {
    if (!newServicio.imagen || !newServicio.servicio || !newServicio.descripcion) {
        alert("Por favor, completa todos los campos del servicio.");
        return { duplicado: false, valido: false };
    }
    
    const existeServicio = myServicios.servicios.some(s => 
        s.servicio.toLowerCase() === newServicio.servicio.toLowerCase()
    );
    
    return {
        duplicado: existeServicio,
        valido: true
    };
}

// Event listener para el formulario
document.addEventListener("DOMContentLoaded", () => {
    // Mostrar servicios iniciales
    myServicios.ShowServicios();
    
    // Event listener del formulario
    document.getElementById("formServicios")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        
        const nuevoServicio = {
            imagen: document.getElementById("foto").value,
            servicio: document.getElementById("nombre").value,
            descripcion: document.getElementById("descripcion").value
        };

        const validar = Validacion(nuevoServicio);
        
        if (!validar.valido) {
            return;
        }
        
        if (validar.duplicado) {
            alert("El servicio ya existe.");
            return;
        } 
        myServicios.aggServicios(new Servicios(
            nuevoServicio.imagen,
            nuevoServicio.servicio,
            nuevoServicio.descripcion
        ));
        
        alert("Servicio agregado correctamente.");
        myServicios.ShowServicios();
        
        document.getElementById("formServicios").reset();
    });
});
const myForm = document.getElementById("formServicios");
const ShowForm = document.getElementById("showFormButton");

ShowForm.addEventListener("click", function (){
    if(myForm.style.display === "none" || myForm.style.display === ""){
        myForm.style.display = "block";
        ShowForm.textContent = "Ocultar Formulario";
    } else {
        myForm.style.display = "none";
        ShowForm.textContent = "Mostrar Formulario";
    }
});


function notifysubmit(e) {
    if (e) e.preventDefault();
    
    const footerEmail = document.getElementById("footer-email").value;
    if (footerEmail) {
        alert(`Gracias por suscribirte con el correo: ${footerEmail}`);
        document.getElementById("footer-email").value = '';
    } else {
        alert("Por favor, ingresa un correo electrónico válido.");
    }
}
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