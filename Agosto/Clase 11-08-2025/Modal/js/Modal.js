let modal = document.getElementById("myModal");
let btnAbrir = document.getElementById("btnAbrir")
let btnCerrar = document.querySelector(".cerrar")

btnAbrir.onclick = function(){
    modal.style.display = "block";
};
btnCerrar.onclick = function(){
    modal.style.display= "none"
};

window.onclick = function(e){
    if (e.target == modal){
        modal.style.display = "none"
    }
};