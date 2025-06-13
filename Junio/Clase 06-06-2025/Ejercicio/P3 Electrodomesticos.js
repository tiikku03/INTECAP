function realizarPedido() {
  let comprar = true;
  let producto;
  let cantidad;
  let total = 0;
  let OpcionElegida;
  let ProductoActual = 0;
  const preciosProductos = {
        1: { nombre: "Molinillo de café plateado", precio: 194.00 },
        2: { nombre: "Aspiradora de piso robot Multilaser", precio: 1299.00 },
        3: { nombre: "Aspiradora 2 en", precio: 1399.00  },
        4: { nombre: "Freidora de aire 6 en 1 DualZone XL", precio: 1639.00 },
        5: { nombre: "Horno tostador con Sure-Crisp Air", precio:  559.00  },
        6: { nombre: "Parrilla Interior Antiadherente", precio: 1619.00 }
    };
  alert("¡Bienvenido a la sección de CElectrodomesticos!");
    producto = prompt(
      "Que desea adquirir \n 1.Molinillo de café plateado \n 2.Aspiradora de piso robot Multilaser \n 3.Aspiradora 2 en 1 \n 4.Freidora de aire 6 en 1 DualZone XL \n 5.Horno tostador con Sure-Crisp Air \n 6.Parrilla Interior Antiadherente \n Seleccione cancelar "
    );
    if (producto === null){
    }
    comprar 
    OpcionElegida =parseInt(producto);
    switch (OpcionElegida) {
      case 1: {
        alert("ha elegido Molinillo de café plateado (Q Q 194.00) ");
        ProductoActual = preciosProductos[1].precio;
        break;
      }
      case 2: {
        alert("ha elegido Aspiradora de piso robot Multilaser (Q 1,299.00) ");
        ProductoActual = preciosProductos[2].precio;
        break;
      }
      case 3: {
        alert("ha elegido Aspiradora 2 en 1(Q  1,399.00 ) ");
          ProductoActual = preciosProductos[3].precio;
        break;
      }
      case 4: {
        alert("ha elegido Freidora de aire 6 en 1 DualZone XL(Q  1,639.00) ");
          ProductoActual = preciosProductos[4].precio;
        break;
      }
      case 5: {
        alert("Horno tostador con Sure-Crisp Air(Q 559.00) ");
          ProductoActual = preciosProductos[5].precio;
        break;
      }
      case 6: {
        alert("Parrilla Interior Antiadherente (Q 1,619.00) ");
            ProductoActual = preciosProductos[6].precio;
        break;
      }
    }
    cantidad = parseInt(prompt("Ingrese la cantidad deseada"))
   total = cantidad * ProductoActual;
   alert("Su total a pagar es de "+ total)
  }