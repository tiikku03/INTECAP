// Producto Clase
class Producto {
    constructor(nombre, precio, descripcion, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;  // nueva propiedad para la imagen
    }
    showHTML() {
        return `
            <div class="producto">
                <h2>${this.nombre}</h2>
                <p>Precio: $${this.precio}</p>
                <p>${this.descripcion}</p>
                <img src="${this.imagen}" alt="${this.nombre}">
            </div>
        `;
    }
}
// Clase tienda
class Tienda{
    constructor(){
        this.productos = [];
    }
    addProducto(producto){
        this.productos.push(producto);  
        this.showHTML();
    }
    showHTML(){
        const contenedor = document.getElementById("catalogo");
        contenedor.innerHTML = this.productos.map(producto => producto.showHTML()).join("");
    }
}
// Crear tienda
const tienda = new Tienda();

//productos iniciales
tienda.addProducto(new Producto(
    "iPhone 16", 14500, "Cámara dual 12MP, 256GB",
    "https://ishop.gt/cdn/shop/files/iPhone_16_No-AI_Ultramarine_PDP_Image_Position_1__GENS_5c266b7b-3ab8-4a7e-a582-a43161fc3bee.jpg?v=1726066575&width=823"
));

tienda.addProducto(new Producto(
    "Xiaomi Redmi Note", 2999, "Batería de larga duración, 64GB",
    "https://xiaomistore.com.gt/wp-content/uploads/824320Redmi20Note201320Pro205G20Aurora20Purple2050828.webp"
));

// Escuchar el envio del formulario
document.getElementById("formProducto").addEventListener("submit",function(event){
    event.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const descripcion = document.getElementById("descripcion").value;
    const imagen = document.getElementById("imagen").value;

     //crear un nuevo producto y agg
     const nuevoProducto = new Producto(nombre,precio, descripcion, imagen);
     tienda.addProducto(nuevoProducto); 

     //limpiar el formulario
    this.reset();
});