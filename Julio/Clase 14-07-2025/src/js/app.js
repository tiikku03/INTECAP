const productos = [
{nombre: "laptop", precio: 1200, stock: 10},
{nombre: "Mouse", stock: 10},
{nombre: "Teclado", precio: 45, stock: 30},
{nombre: "Monitor", precio: 300, stock: 15},
{nombre: "Celular", precio: 800, stock: 5},
]
function FindProduct(){
 const entrada = document.getElementById("busqueda").value.trim().toLowerCase();
 const resultado = document.getElementById("resultado");

 let encontrado = false;

 for (let i = 0; i< productos.length; i++){
    if(productos[i].nombre.toLowerCase()=== entrada){
        encontrado = true;
        if("precio" in productos[i]){
            resultado.textContent = 'Producto: ' + productos[i].nombre + ' precio ' + productos[i].precio
            resultado.style.color= "green";
        } 
        else{
            resultado.textContent = 'Producto encontrado pero no tiene precio registrado';
            resultado.style.color= "yellow";
        }
        break;
    }
 }
if(!encontrado){
    resultado.textContent = "producto no encontrado";
    resultado.style.color ="red";
    
}

}

// toLowerCase ------pasa todo a minusculas--------devuelve el valor en minúsculas de la cadena que realiza la llamada.
// Value.trim --------Elimina espacios--- elimina los espacios en blanco en ambos extremos del string


