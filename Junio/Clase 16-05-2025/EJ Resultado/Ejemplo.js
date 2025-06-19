function Total(){
   let PR1 = document.getElementById("P1").value;
   let PR2 = document.getElementById("P2").value;
   let PR3 = document.getElementById("P3").value;
   let PR4 = document.getElementById("P4").value;
   let PR5 = document.getElementById("P5").value;

   let Show = document.getElementById("Ver");

   Show.innerHTML = "<hr>" + "Total Q: " + (PR1*500+PR2*400+PR3*350+PR4*250+PR5*350) + "<hr>" ;
}