//Ejemplo for

//Contador
/* for (let m= 4; m <= 16; m++) */

/* for (let r=75;r>=50;r=r--) {
      document.writeln("<hr>");
      document.writeln("<h1>","😃","<h1>",r);
      document.writeln("<hr>","<br>");
} */

//Acumulador

// generar 25 num--> (1-10),mostrar suma y su promedio

/* let suma = 0;
for (let num = 1; num <= 25; num++) {
  let n1 = Math.trunc(Math.random() * 10 + 1);
  document.writeln("El numero generado es: ", n1, "<br>");
  suma = suma + n1; //Acumulador
}
document.writeln("La suma es: ", suma,"<br>");
document.writeln("El promedio es: ", suma/25); */

/* 25 alumnos con su nota 
mostrar promedio de los que gannaron 
y de los que perdieron Y cantidades de cada grupo*/

let sumaG = 0;
let sumaT = 0;
let cG = 0;
let cT = 0;
for (let al = 1; al <= 5; al++) {
  let nombre = prompt("Ingrese su nombre");
  document.write("El estudiante es: ", nombre, "<br>");
  let nota = parseInt(prompt("Ingrese nota"));
  document.write("La nota es: ", nota, "<br>","<hr>");

  if (nota >= 60) 
    {
    sumaG = sumaG + nota;
    cG = cG + 1;
  } 
  else {
    sumaT = sumaT + nota;
    cT = cT + 1;
  }
  document.write("El promedio de los aprobados es: ",( sumaG / cG), "<br>");
  document.write("Ganaron: ", cG, "Alumnos");
  document.write("El promedio de los aprobados es: ", (sumaT / cT), "<br>");
  document.write("Reprobaron: ", cT, "Alumnos");
}

/* 
let sumaG=0;
let sumaP=0;
let cG=0;
let cP=0;
for (let al=1;al<=5;al++)
{
    let nombre=prompt("ingrese nombre");
    document.write("El nombre ingresado es: ",nombre,"<br>");
    let nota = parseInt(prompt("Ingrese nota"));
    document.write("La nota ingresada es: ",nota,"<br>","<hr>");
    if(nota>=60)
    {
        sumaG=sumaG+nota;
        cG=cG+1;
    }
    else
    {
        sumaP=sumaP+nota;
        cP=cP+1;
    }
}
document.write("El promedio de los aprobados es: "+(sumaG/cG),"<br>");
document.write("Ganaron: ",cG," Alumnos","<br>");
document.write("El promedio de los reprobados es: "+(sumaP/cP),"<br>");
document.write("Peredieron: ",cP," Alumnos");
 */