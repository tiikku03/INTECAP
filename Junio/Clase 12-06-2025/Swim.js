const Products = [
  {
    Code: "SX4120101",
    Name: "Gorro para Nadar",
    Description: "Gorro para cubrir el cabello para que se mantenga seco",
    Ph: '<img src="img/GorroParaNadar.png"',
    Price: 100.00,
  },
  {
    Code: "SX987436",
    Name: "Playera Para Nadar",
    Description: "Playera termica que mantiene una temperatura calida en el cuerpo",
    Ph: '<img src="img/PlayeraParaNatacionMujer.png"',
    Price: 250.00,
  },
  {
    Code: "SX87635",
    Name: "Lentes De Natacion",
    Description: "Lentes resistentes al agua",
    Ph: '<img src="img/LentesDeNAtacion.png"',
    Price: 150.00,
  },
  {
    Code: "SX09865",
    Name: "Tabla de Nadar",
    Description: "Tabla de polietireno para aprender a nadar",
    Ph: '<img src="img/TablaDeNatacion.png"',
    Price: 340.3,
  },
  {
    Code: "SX3234798",
    Name: "Sandalias",
    Description: "Sandalias suaves",
    Ph: '<img src="img/Sandalias.png"',
    Price: 324,
  },
  {
    Code: "SX098764",
    Name: "Pantaloneta para Hombre",
    Description: "Pantaloneta para nadar de hombre",
    Ph: '<img src="img/CALZONETASPEEDOHYPERBOOMHombre.png"',
    Price: 300.00,
  },
  {
    Code: "SX5431345",
    Name: "Traje de baño de Mujer",
    Description: "Traje de baño para mujer de una pieza",
    Ph: '<img src="img/CALZONETASPEDO HYPERBOOM.png"',
    Price: 56,
  },
];

function ShowProd() {
  for (let i = 0; i < Products.length; i++) {
    const producto = Products[i];

    document.write("<div>");
    document.write(`<p> ${producto.Ph}</p>`);

    document.write(`<h2>${producto.Name} ${producto.Code} </h2>`);
    document.write(`<p>${producto.Description}</p>`);

    document.write(`<p>Price: $${producto.Price}</p>`);

    document.write("</div>");

    document.write("<hr>");
  }
}

ShowProd();
