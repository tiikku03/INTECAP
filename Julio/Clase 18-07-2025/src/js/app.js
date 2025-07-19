class Libro {
  constructor(titulo, editorial, autor, descripcion, edicion, precio) {
    this.titulo = titulo;
    this.editorial = editorial;
    this.autor = autor;
    this.descripcion = descripcion;
    this.edicion = edicion;
    this.precio = precio;
  }
  showHTML() {
    return `
    <div class="libro">
    <h2 class="titulo">${this.titulo}</h2>
    <p class="editorial">${this.editorial}</p>
    <p class="autor">${this.autor}</p>
    <p class="descripcion">${this.descripcion}</p>
    <p class="edicion">${this.edicion}</p>
    <p class="Precio"><strong> Precio: Q ${this.precio.toFixed(2)} </strong></p> <br>
    <button class="buy-button" type="submit">Más detalles</button>
    </div>

        `;
  }
}
class Shop {
  constructor() {
    this.libros = [];
  }
  addBooks(libro) {
    this.libros.push(libro);
  }
  showBooks() {
    const contenedor = document.getElementById("librosContainer");
    contenedor.innerHTML = this.libros.map((l) => l.showHTML()).join("");
  }
}
const myShop = new Shop();
myShop.addBooks(
  new Libro(
    "Cien años de soledad",
    "Editorial Sudamericana",
    "Gabriel García Márquez",
    "Una obra maestra del realismo mágico de la literatura latinoamericana.",
    "1ra Edición",
    120.0
  )
);
myShop.addBooks(
  new Libro(
    "Don Quijote de la Mancha",
    "Francisco de Robles",
    "Miguel de Cervantes",
    "La novela más destacada de la literatura española y universal.",
    "Edición Conmemorativa",
    95.5
  )
);
myShop.addBooks(
  new Libro(
    "1984",
    "Secker & Warburg",
    "George Orwell",
    "Una novela distópica que advierte sobre los peligros del totalitarismo.",
    "Edición de Bolsillo",
    75.25
  )
);
myShop.addBooks(
  new Libro(
    "Orgullo y Prejuicio",
    "T. Egerton, Whitehall",
    "Jane Austen",
    "Un clásico de la literatura romántica inglesa, lleno de ingenio y sátira social.",
    "Edición de Lujo",
    110.75
  )
);
myShop.addBooks(
  new Libro(
    "El Principito",
    "Reynal & Hitchcock",
    "Antoine de Saint-Exupéry",
    "Un cuento poético y filosófico que explora temas universales como la amistad, el amor y la pérdida.",
    "Edición Ilustrada",
    60.0
  )
);
myShop.showBooks();