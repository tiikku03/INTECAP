let op = 1;
let total= 0.0;

do{
    op = parseInt(
    prompt(
      "Menu \n 1. Pollo Frito Q38 \n 2. Quesoburguesa Q32 \n 3. Pizza personal Q27"," Ingrese su opcion"
    )
  );
  document.write("Menu", "<br>");
  document.write("1. Pollo Frito Q38", "<br>");
  document.write("2. Quesoburguesa Q32", "<br>");
  document.write("3. Pizza personal Q27", "<br>");
  document.write("Ha elegido la opcion ", op, "<br>", "<hr>");

  switch (op) {
    case 1:{document.write(" su pedido es pollo frito", "<br>"); total=total+38;break;}
    case 2:{document.write(" su pedido es una Quesoburguesa", "<br>"); total=total+32;break;}
    case 3:{document.write(" su pedido es Una Pizza Personal", "<br>"); total=total+27;break;}
    default:{document.write("Ha decidio salir su total es: Q"+total,"<hr>", "<br>", "<br>")}
  }
}
  while (op <= 3);