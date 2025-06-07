let op = 1;
let num1 = 0;
let num2 = 0;
let resultado = 0;
num1 = parseInt(prompt("Ingrese el primer numero"));
num2 = parseInt(prompt("Ingrese el segundo numero"));
document.write("El primer numero es: ", num1, "<br>");
document.write("El primer numero es: ", num2, "<br>");
do {
  op = parseInt(
    prompt(
      "Menu \n 1. Suma \n 2. Resta \n 3. Multiplicación \n 4.División",
      " Ingrese su opción"
    )
  );
  switch (op) {
    case 1:
      resultado = num1 + num2;
      {
        document.write("El resultado de la suma es: ", resultado, "<br>");
        break;
      }
    case 2:
      resultado = num1 - num2;
      {
        document.write("El resultado de la resta es: ", resultado, "<br>");
        break;
      }
    case 3:
      resultado = num1 * num2;
      {
        document.write(
          "El resultado de la multiplicacion es: ",
          resultado,
          "<br>"
        );
        break;
      }
    case 4:
      resultado = num1 / num2;
      {
        document.write("El resultado de la division es: ", resultado, "<br>");
        break;
      }
  }
} while (op <= 4);
