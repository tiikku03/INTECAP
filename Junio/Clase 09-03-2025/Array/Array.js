const meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio");
meses.push("Julio");
document.write(meses)
const num=[1,2,3,4,5,6];
num.pop();
document.write("<br>",num);
meses.shift();
document.write("<br>",meses);
num.unshift(8,9);
document.write("<br>",num);


/* let npmbres=[];
for(let p=0;p<=9;p++){
    nomb=prompt("Ingrese nombre");
    npmbres.push(nomb);
}
document.writeln(npmbres) */