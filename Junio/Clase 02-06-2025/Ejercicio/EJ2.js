let vowel = 0;
consonant = 0;

for (let ABCs = 1; ABCs <= 25; ABCs++) {
  let letter = prompt("ingrese una letra");
  document.write("la letra ingresada es: ", letter, "<br>");

  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u" ||
    letter === "A" ||
    letter === "E" ||
    letter === "I" ||
    letter === "O" ||
    letter === "U"
  ) {
    vowel++;
  } else {
    consonant++;
  }
}
document.write("<hr>");
document.write("Total de vocales ingresadas: ", vowel, "<br>");
document.write("Total de consonantes ingresadas: ", consonant, "<br>");
