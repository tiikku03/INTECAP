/* let n = 1; //inicio
while (n <= 10) { // coindicion
  document.write(n,"<br>");
  n++ //contador
}
 */
//Verifica
let preg = "s"; //inicio
let c= 0;
while (preg == "S" || preg == "s" || preg == "si" || preg == "SI") { // coindicion
  preg= prompt("Ingrese s/n")
  c++;
}
document.write("Ingreso la letra s ",c,"Veces");
