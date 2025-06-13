let nombre = "Luis"; //variable
let edad = 31;
let nombres = ["Maria", "Claudia", "Oscar", "Fernanda", "Manuel", "Lupe"];
let edades = new Array(15, 39, 23, 18, 90, 47); // Array o vector
// document.write(nombres.length);
document.write("Personas mayores a 30 años","<br>")
nombres.unshift()
edades.unshift()  //push final y unshift principio
/* nombres.pop();
edades.pop(); */
let t= nombre.length-1;
for (let p = 0; p <= t; p++) {

    document.write("Nombre: ", nombres[p],"<br>","edad: ",edades[p],"<br>")
/*     if(edades[p]>30){
    document.write("Nombre: ", nombres[p],"<br>");
    document.write("edad: ",edades[p],"<br>");
    } */
}
// document.write(nombres[0],nombres[1],nombres[3]);
