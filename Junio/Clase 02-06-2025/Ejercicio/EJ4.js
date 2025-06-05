 let Nummult=Number();
 function Number(Num){
     return Math.trunc(Math.random()*25 + 1);
 }
for (let mult = 1; mult <= 10; mult++) {
     let resultado= Nummult * mult;
    document.write(Nummult, " x ", mult, " = ", resultado, "<br>");
}