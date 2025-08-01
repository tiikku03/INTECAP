productos = [
  {
    producto: "Resma de papel",
    descripcion: "Papel multiusos para impresión y copiado.",
    precio: 75,
    imagen_url: "https://www.spanishdict.com/translate/la%20imagen",
  },
  {
    producto: "Bolígrafo de tinta negra",
    descripcion: "Para escritura diaria.",
    precio: 25,
    imagen_url: "https://www.spanishdict.com/translate/la%20imagen",
  },
  {
    producto: "Lapicero",
    descripcion: "Lapiceros HB para escribir y dibujar.",
    precio: 30,
    imagen_url: "https://www.spanishdict.com/translate/la%20imagen",
  },
  {
    producto: "Grapadora",
    descripcion: "Para unir documentos.",
    precio: 45,
    imagen_url: "https://www.spanishdict.com/translate/la%20imagen",
  },
  {
    producto: "Grapas",
    descripcion: "Repuesto para grapadora.",
    precio: 15,
    imagen_url: "https://www.spanishdict.com/translate/la%20imagen",
  },
  {
    producto: "Cinta adhesiva",
    descripcion: "Para pegar y reparar.",
    precio: 18,
    imagen_url: "https://www.spanishdict.com/translate/la%20imagen",
  },
  {
    producto: "Tijeras",
    descripcion: "Para cortar papel y otros materiales.",
    precio: 20,
    imagen_url: "https://www.spanishdict.com/translate/la%20imagen",
  },
  {
    producto: "Calculadora científica",
    descripcion: "Para cálculos matemáticos complejos.",
    precio: 150,
    imagen_url: "https://www.spanishdict.com/translate/la%20imagen",
  },
  {
    producto: "Folder de plástico",
    descripcion: "Para organizar documentos.",
    precio: 40,
    imagen_url: "https://www.spanishdict.com/translate/la%20imagen",
  },
  {
    producto: "Perforadora de 2 agujeros",
    descripcion: "Para perforar hojas.",
    precio: 55,
    imagen_url: "https://www.spanishdict.com/translate/la%20imagen",
  },
  {
    producto: "Post-it",
    descripcion: "Notas adhesivas para recordatorios.",
    precio: 28,
    imagen_url: "https://www.spanishdict.com/translate/la%20imagen",
  },
  {
    producto: "Marcadores fluorescentes",
    descripcion: "Para resaltar texto importante.",
    precio: 22,
    imagen_url: "https://www.spanishdict.com/translate/la%20imagen",
  },
  {
    producto: "Corrigedor líquido",
    descripcion: "Para corregir errores de escritura.",
    precio: 12,
    imagen_url: "https://www.spanishdict.com/translate/la%20imagen",
  },
  {
    producto: "Clips",
    descripcion: "Para sujetar papeles temporalmente.",
    precio: 8,
    imagen_url: "https://www.spanishdict.com/translate/la%20imagen",
  },
  {
    producto: "Borrador de nata",
    descripcion: "Para borrar lápiz.",
    precio: 5,
    imagen_url: "https://www.spanishdict.com/translate/la%20imagen",
  },
  {
    producto: "Sacapuntas",
    descripcion: "Para afilar lápices.",
    precio: 6,
    imagen_url: "https://www.spanishdict.com/translate/la%20imagen",
  },
  {
    producto: "Destructor de papel",
    descripcion: "Para eliminar documentos confidenciales.",
    precio: 500,
    imagen_url: "https://www.spanishdict.com/translate/la%20imagen",
  },
  {
    producto: "Archivero de 3 anillas",
    descripcion: "Para almacenar documentos perforados.",
    precio: 35,
    imagen_url: "https://www.spanishdict.com/translate/la%20imagen",
  },
  {
    producto: "Carpeta de proyectos con elástico",
    descripcion: "Para guardar trabajos y proyectos.",
    precio: 20,
    imagen_url: "https://www.spanishdict.com/translate/la%20imagen",
  },
  {
    producto: "Sellos de goma",
    descripcion: "Para marcar documentos con información específica.",
    precio: 120,
    imagen_url: "https://www.spanishdict.com/translate/la%20imagen",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  const productosContainer = document.querySelector(".productos");
  const loadMoreButton = document.querySelector(".LoadMoreButtons");
  const cards = productos.map((producto) => {
    return `
        <div class="contenedorProductosIndividual">
            <img src="${producto.imagen_url}" alt="${producto.producto}">
            <div>
            <h3>${producto.producto}</h3>
            <p>Q.${producto.precio}</p>
            </div>
            <p>${producto.descripcion}</p>
            <button class="addToCartBtn" id="${producto.producto}">Añadir al carrito</button>
        </div>
        `;
  });

  if (cards.length / 10 > 1) {
    const carsToshow = cards.slice(0, 10);
    productosContainer.innerHTML = carsToshow.join("");
  }

  function loadingMoreContent() {
    const currentLength = productosContainer.children.length;
    const nextCards = cards.slice(currentLength, currentLength + 10);
    productosContainer.innerHTML += nextCards.join("");
  }

  if (cards.length > 10) {
    loadMoreButton.innerHTML = `<button class="btn">Cargar más productos</button>`;
  }
  loadMoreButton.addEventListener("click", () => {
    loadingMoreContent();
    addToCart();
    if (productosContainer.children.length >= cards.length) {
      loadMoreButton.innerHTML = "";
    }
  });

  addToCart();
});

function addToCart() {
  const addToCartButtons = document.querySelectorAll(".addToCartBtn");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.id;
      const producto = productos.find((p) => p.producto === productId);
      const cartArray = JSON.parse(localStorage.getItem("cart")) || [];

      const existingProductIndex = cartArray.findIndex(
        (p) => p.producto === productId
      );

      if (existingProductIndex !== -1) {
        // If the product exists, increment its quantity
        cartArray[existingProductIndex].cantidad++;
      } else {
        // If the product does not exist, add it to the cart
        cartArray.push({ ...producto, cantidad: 1 });
      }
      
      localStorage.setItem("cart", JSON.stringify(cartArray));
      console.log(cartArray);   
      
    });
  });
}
