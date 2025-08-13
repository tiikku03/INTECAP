const cuadro = document.getElementById("cuadro");
const tecla = document.getElementById("tecla");

//evento click

cuadro.addEventListener("click", function(){ //llama un evento click
    const colors = ["lightblue", "blue", "green", " lifhtgreen", "pnik", "lightpink", "orange"];

    const colorAleatorio = colors[Math.floor(Math.random()*colors.length)];// genera un nuemro y lo obtiene del array 
    cuadro.style.backgroundColor = colorAleatorio;
})  ;

//evento doble click
cuadro.addEventListener("dblclick", function(){
    cuadro.textContent = "Haz dado doble click!"
}) ;

//evento cuando se sale del cuadro
cuadro.addEventListener("mouseout", function(){
    cuadro.textContent = "haz salido"
    cuadro.style.borderRadius = "20px"; cuadro.style.transform = "scale(1)"
});

//evento cuando estamns encima del cuadro 
cuadro.addEventListener("mouseover",function(){
    cuadro.style.borderRadius= "50%"; cuadro.style.transform = "scale(1.5)"
});

//Evento cuando presionamos una tecla
document.addEventListener("keydown",function(e){
tecla.textContent = " haz presionado la tecla: "+e.key;
});