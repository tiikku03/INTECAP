/* let n = 1; //inicio
while (n <= 10) { // coindicion
  document.write(n,"<br>");
  n++ //contador
}
 */

let preg = "s"; //inicio
let c= 0;
do { //pregunta primero y despues verifica
  preg= prompt("Ingrese s/n");
  c++;
}
while (preg == "S" || preg == "s" || preg == "si" || preg == "SI"); // coindicion



document.write("Ingreso la letra s ",c,"Veces");
