
const Products= [
{
      Code: "SX4120101",
    Name:"Medias",
    Description: "Medias Nike Academy Classic Blanca",
    Ph:'<img src="img/S1.png"' ,
    Price: 195.00

},
{
     Code: "JE6460",
    Name:"Balón Adidas",
    Description: "Balón Adidas Messi 'La Vida Tropical'",
    Ph: '<img src="img/S2.png" width="300px"',
    Price: 245.00
},
{
     Code: "HV3819-451",
    Name:"Gorra",
    Description: "Gorra Nike Brasil Unisex",
    Ph: ' <img src="img/S3.png" width="300px"',
    Price: 235.00
},
{
     Code: " IY2879",
    Name:"Mochila",
    Description: "Mochila Adidas Tiro Negro",
    Ph: '<img src="img/S5.png" width="300px"',
    Price: 490.00
},
{
     Code: "ZFCABL",
    Name:"Calcetines",
    Description: "Calcetines Antideslizantes ZF Blanco",
    Ph: '<img src="img/S4.png" width="400px"',
    Price: 85.00
},
{
     Code: "HV3825-451",
    Name:"Espinilleras",
    Description: "Espinilleras Nike Mercurial Hardshell 'Read'",
    Ph: '  <img src="img/S6.png" width="300px"',
    Price: 195.00
},
{
    Code: "FJ4862-011",
    Name:"Guantes De Porteros",
    Description: "Guantes De Porteros Nike GK Match Negro",
    Ph: '<img src="img/S7.png" width="300px" ',
    Price: 56
}
];

function ShowProd() {
  for (let i = 0; i < Products.length; i++) {
    const producto = Products[i];


    document.write('<div>');
     document.write(`<p> ${producto.Ph}</p>`);

    document.write(`<h2>${producto.Name} ${producto.Code} </h2>`);
    document.write(`<p>${producto.Description}</p>`);

    document.write(`<p>Price: Q${producto.Price}</p>`);

    document.write('</div>');

    document.write('<hr>');
  }

}

ShowProd();