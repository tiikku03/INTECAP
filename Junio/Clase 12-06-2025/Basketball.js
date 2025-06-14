
const Products= [
{
    Code: "SX4120101",
    Name:"Medias",
    Description: "Medias Nike Academy Classic Blanca",
    Ph: "",
    Price: 195.00

},
{
     Code: "",
    Name:"",
    Description: "",
    Ph: "",
    Price: 23423
},
{
     Code: "",
    Name:"",
    Description: "",
    Ph: "",
    Price: 23423
},
{
     Code: "",
    Name:"",
    Description: "",
    Ph: "",
    Price: 3423
},
{
     Code: "",
    Name:"",
    Description: "",
    Ph: "",
    Price: 324
},
{
     Code: "",
    Name:"",
    Description: "",
    Ph: "",
    Price: 543
},
{
    Code: "",
    Name:"",
    Description: "",
    Ph: "",
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

    document.write(`<p>Price: $${producto.Price}</p>`);

    document.write('</div>');

    document.write('<hr>');
  }

}

ShowProd();