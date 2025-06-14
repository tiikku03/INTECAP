const Products = [
  {
    Code: "SX1234764",
    Name: "Tenis Para Basquetboll",
    Description: "Tenis con plataforma para mayor comodidad en el juego",
    Ph: '<img src="tenisDeBasquetball.png"',
    Price: 795.0,
  },
  {
    Code: "SX45687808",
    Name: "Balon Spalding",
    Description: "Pelota spalding para basquetball",
    Ph: '<img src="balonSpalding.png"',
    Price: 234.23,
  },
  {
    Code: "SX35789009",
    Name: "Camiseta",
    Description: "Camiseta para jugar",
    Ph: '<img src="img/camiseta de nba 2.png"',
    Price: 256.23,
  },
  {
    Code: "SX5679987",
    Name: "Playera de la NBA",
    Description: "Playera oficial de NBA",
    Ph: '<img src="img/camisetadeNBA.png"',
    Price: 342.3,
  },
  {
    Code: "SX135688",
    Name: "Balon Adidas",
    Description: "Pelota de basquetball adidas",
    Ph: '<img src="img/balon.png"',
    Price: 324.5,
  },
  {
    Code: "SX124676",
    Name: "Canasta de basquetball",
    Description: "Canasta portatil para colocar en pared",
    Ph: '<img src="img/Canasta.png"',
    Price: 543.5,
  },
  {
    Code: "SX1246886",
    Name: "Gorra de los lakers",
    Description: "Gorra morada con el slogan de los lakers",
    Ph: '<img src="img/GorraDeLosLakers.png"',
    Price: 56.99,
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
