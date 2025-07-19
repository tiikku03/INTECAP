// crar la clase
class Producto{
    constructor(nombre, precio,descripcion){   //Constructor
      this.nombre = nombre;
      this.precio = precio;
      this.descripcion = descripcion;
    }
    mostrarHtml(){ // mostra en HTML
        return`
    <div class="producto">
    <h2>${this.nombre}</h2>
    <p>${this.descripcion}</p>
    <p><strong>Precio: </strong> Q ${this.precio}</p>
</div>
        `;
    }
}
// Clase Tienda

class Tienda{
    constructor(){
    this.productos = [];
    }
    // agregar a un vector o array
    agregarProducto(producto){
        this.productos.push(producto);
     
    }
    mostrarCatalogo(){
 const contenedor = document.getElementById('catalogo');
 contenedor.innerHTML = this.productos.map(p=>p.mostrarHtml()).join('');
    }
}

const miTienda = new Tienda();
miTienda.agregarProducto(new Producto("Celular Samsung" , 3500, "Pantalla AmoLed de 7, bateria larga duracion"));
miTienda.agregarProducto(new Producto("Celular Xiaomi" , 3200, "Pantalla AmoLed de 7.5, bateria larga duracion"));
miTienda.agregarProducto(new Producto("Celular Motorola" , 3000, "Pantalla AmoLed de 6, bateria media duracion"));
miTienda.agregarProducto(new Producto("Celular iPhone 15" , 10000, "Pantalla AmoLed de 7, bateria larga duracion"));

//mostar catalogo en la pagina
miTienda.mostrarCatalogo();