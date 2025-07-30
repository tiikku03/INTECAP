// clase Producto
class Producto{
    constructor(nombre, precio, descripcion){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }
    showHTML () {
    return`
    <div class="Producto">
    <h2>${this.nombre}</h2>
    <p>${this.descripcion}</p>
    <p><strong>Precio: </strong>Q${this.precio}</p>
    </div>
    `;
 }
}
//Clase Tienda
class Tienda{
    constructor(){
        this.productos=[];
    }
    addProducto(producto){
        this.productos.push(producto);
        this.showCatalogo();// mostrar catalogo acada vez que se agrga un nbuevo producto
    }
    showCatalogo(){
        const contenedor = document.getElementById("catalogo");
        contenedor.innerHTML = this.productos.map(p => p.showHTML()).join("");
    } 
}
// Instancia de la clase Tienda
const tienda = new Tienda();

// agrgar productos iniciales
tienda.addProducto(new Producto("Producto 1", 100, "Descripcion del producto 1"));
tienda.addProducto(new Producto("Producto 2", 200, "Descripcion del producto 2 "));
tienda.addProducto(new Producto("Producto 3", 300, "Descripcion del producto 3 "));

// agrgar evento al formulario
document.getElementById("formProducto").addEventListener("submit", function(event){
    event.preventDefault(); // evitar que se recargue la pagina

    // obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const descripcion = document.getElementById("descripcion").value;

    // crear un nuevo producto
    const nuevoProducto = new Producto (nombre, precio, descripcion);

    // agrgar a la tienda
    tienda.addProducto(nuevoProducto);

//limpiar el formulario
    this.reset();
    
});
