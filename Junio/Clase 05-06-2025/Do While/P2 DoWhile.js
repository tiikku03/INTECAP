let num; //inicio
let c=0;
do{
    num=parseInt(prompt("ingrese numero par"));
    c++;
}
while (num%2==0 );//condicion
document.write("La cantidad de numeros pares fueron ",c-1," veces")