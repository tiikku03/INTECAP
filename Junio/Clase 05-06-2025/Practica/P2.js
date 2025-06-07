let par = 0;
let impar = 0;
let contador = 0;
let num = 0;
    while(num<15){
        num= parseInt(prompt("Ingrese numero "));
        document.write("Los numeros ingresados son: "+ num+"<br>")
   
    if(num%2==0){
      par++;
    }
    else{
      impar++;
    }
     }
  contador++;

document.write("Numeros impares ingresados: "+impar+"<br>")
document.write("Numeros pares ingresados: "+par)