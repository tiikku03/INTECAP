function realizarPedido() {
  let comprar = true;
  let producto;
  let cantidad;
  let total = 0;
  let OpcionElegida;
  let ProductoActual = 0;
  const preciosProductos = {
    1: { nombre: "Motocicleta Katana R1 200", precio: 13050.72 },
    2: { nombre: "Motocicleta Katana Scrambler 250R", precio: 15352.32 },
    3: { nombre: "Motocicleta Yamaha FZ25", precio: 33606.14 },
    4: { nombre: "Motocicleta Yamaha FZS 3.0", precio: 24204.62 },
    5: { nombre: "Motocicleta Yamaha XTZ 125", precio: 18710.28 },
    6: { nombre: "Motocicleta Yamaha FZ 2.0", precio: 20285.38 },
  };
  alert("¡Bienvenido a la sección de motocicletas!");
    producto = prompt("Que desea adquirir \n 1.Motocicleta Katana R1 200 \n 2.Motocicleta Katana Scrambler 250R \n 3.Motocicleta Yamaha FZ25 \n 4.Motocicleta Yamaha FZS 3.0 \n 5.Motocicleta Yamaha XTZ 125 \n 6.Motocicleta Yamaha FZ 2.0 \n Seleccione cancelar " );
    if (producto === null) {
    }
    comprar;
    OpcionElegida = parseInt(producto);
    switch (OpcionElegida) {
      case 1: {
        alert("ha elegido Motocicleta Katana R1 200 (Q13,050.72) ");
        ProductoActual = preciosProductos[1].precio;
        break;
      }
      case 2: {
        alert("ha elegido Motocicleta Katana Scrambler 250R (Q 15,352.32) ");
        ProductoActual = preciosProductos[2].precio;
        break;
      }
      case 3: {
        alert("ha elegido Motocicleta Yamaha FZ25 (Q 33,606.14) ");
        ProductoActual = preciosProductos[3].precio;
        break;
      }
      case 4: {
        alert("ha elegido Motocicleta Yamaha FZS 3.0 (Q 24,204.62) ");
        ProductoActual = preciosProductos[4].precio;
        break;
      }
      case 5: {
        alert("ha elegido Motocicleta Yamaha XTZ 125 (Q 18,710.28) ");
        ProductoActual = preciosProductos[5].precio;
        break;
      }
      case 6: {
        alert("ha elegido Motocicleta Yamaha FZ 2.0 (Q20,285.38) ");
        ProductoActual = preciosProductos[6].precio;
        break;
      }
    }
     cantidad = parseInt(prompt("Ingrese la cantidad deseada"));
  total = cantidad * ProductoActual;
  alert("Su total a pagar es de " + total);
  }

