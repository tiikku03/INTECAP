function realizarPedido() {
  let comprar = true;
  let producto;
  let cantidad;
  let total = 0;
  let OpcionElegida;
  let ProductoActual = 0;
  const preciosProductos = {
        1: { nombre: "Simmons Harmony Lux Pillow Top", precio: 8469.00 },
        2: { nombre: "Cama Sealy Alicante", precio: 12011.00 },
        3: { nombre: "Beautyrest Harmony Pillow Top", precio: 5799.00 },
        4: { nombre: "Sofá cama", precio: 3999.20 },
        5: { nombre: "Sala 3-2 Camilo", precio: 11519.20 },
        6: { nombre: "Sala 3-2 Napa", precio: 10399.20 }
    };
  alert("¡Bienvenido a la sección de Camas y Salas!");
  while (comprar) {
    producto = prompt(
      "Que desea adquirir \n 1.Simmons Harmony Lux Pillow Top \n 2.Cama Sealy Alicante \n 3.Beautyrest Harmony Pillow Top \n 4.Sofá cama \n 5.Sala 3-2 Camilo \n 6.Sala 3-2 Napa \n Seleccione cancelar si no desea otro producto"
    );
    if (producto === null){
        comprar = false;
        break;
    }
    comprar 
    OpcionElegida =parseInt(producto);
    switch (OpcionElegida) {
      case 1: {
        alert("ha elegido Cama Simmons Harmony Lux Pillow Top (Q 8,469.00) ");
        ProductoActual = preciosProductos[1].precio;
        break;
      }
      case 2: {
        alert("ha elegido Cama Sealy Alicante(Q 12,011.00) ");
        ProductoActual = preciosProductos[2].precio;
        break;
      }
      case 3: {
        alert("ha elegido Cama Beautyrest Harmony(Q 5,799.00) ");
          ProductoActual = preciosProductos[3].precio;
        break;
      }
      case 4: {
        alert("ha elegido Sofá cama Lux Pillow(Q 3,999.20) ");
            document.write("ha elegido Sofá cama Lux Pillow(Q 3,999.20)");
          ProductoActual = preciosProductos[4].precio;
        break;
      }
      case 5: {
        alert("ha elegido Sala 3-2 Camilo Pillow(Q 11,519.20) ");
          ProductoActual = preciosProductos[5].precio;
        break;
      }
      case 6: {
        alert("ha elegido Sala 3-2 Napa(Q 10,399.20) ");
            ProductoActual = preciosProductos[6].precio;
        break;
      }
    }
  }
   cantidad = parseInt(prompt("Ingrese la cantidad deseada"))
   total = cantidad * ProductoActual;
   alert("Su total a pagar es de "+ total)
}
