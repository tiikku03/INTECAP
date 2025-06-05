let Impares = 0;
for (let nu = 1; nu <= 100; nu++) {
  let numero = parseInt(prompt("Ingrese un numero"));
  document.write("El numero ingresado es: ", numero, "<br>");
  if (numero % 2 !== 0) {
    Impares++;
  }
}
document.write("<hr>");
document.write("Total de números impares ingresados: ", Impares, "<br>");
