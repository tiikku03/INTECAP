let notas = [];
let Satisfactorio = 0;
let Insatisfactorio = 0;
let nota = 0;
document.write("Ingreso de notas", "<br><br>");
let can = parseInt(prompt("ingrese cuantas notas va a ingresar"));
for (let p = 0; p < can; p++) {
  nota = prompt("Ingrese nota: ");
  notas.push(nota);
  document.write("La nota ingresada es: ", nota, "<br>");
  if (nota>=60){
    document.write("Satisfactorio", "<br>")
    Satisfactorio++;
  }
  else{
    document.write("Insatisfactorio", "<br>")
    Insatisfactorio++;
  }
}
 document.write("La cantidad de aprobados es ",Satisfactorio, "<br>");
  document.write("La cantidad de aprobados es ",Insatisfactorio, "<br>");