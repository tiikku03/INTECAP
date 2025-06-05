let EdadMa = 0;
let EdadMe = 0;
let PMa = 0;
let PMe = 0;
for (let per = 1; per <= 30; per++) {
  let nombre = prompt("Ingrese su nombre");
  document.write("El nombre ingresado es ", nombre, "<br>");
  let edad = parseInt(prompt("Ingrese su edad"));
  document.write("El nombre ingresado es: ", edad, "<br>","<hr>");

  if (edad >= 18) {
    EdadMa = EdadMa + edad;
    PMa = PMa + 1;
  } else {
    EdadMe = EdadMe + edad;
    PMe = PMe + 1;
  }
}
 document.write("El promedio de los adultos es: ",(EdadMa / PMa), "<br>");
   document.write("El promedio de los menores de edad es: ",(EdadMe / PMe), "<br>");
