let premios = [
  "PlayStation",
  "Apple Watch",
  "Nintendo Switch",
  "GoPro",
  "iPad Air",
  "Auriculares Sony ",
  "Mini Trípode Flexible para Celular",
  "Mouse Inalámbrico",
  "JBL Go 3",
  "Smart LED TV HD",
];
let part = [
  "Alejandro","Sofía","Diego","Valentina",
  "Mateo","Camila","Sebastián","Valeria","Nicolás",
  "Isabella","Gabriel","Mariana","Daniel","Andrea",
  "Santiago","Daniela","Emilio","Paula",
  "Fernando","Laura","Miguel", "Carolina","Javier",
  "Jimena","Carlos",
];
let Wnum;
document.write("Los premios son: <br>");
for (let i = 0; i < premios.length; i++) {
  document.write(premios[i] + "<br>");
}
document.write("<br>Los Participantes son: <br>");
for (let i = 0; i < part.length; i++) {
  document.write(part[i] + "<br>");
}
for (let a = 0; a < 10; a++) {
  Wnum = Math.trunc(Math.random() * 25 + 1);
  let Pwnum = part[Wnum];
  document.write("El Ganador es; "+ Pwnum +"<br>");
  document.write("El premio es; "+ premios[a]+"<br>");
}
