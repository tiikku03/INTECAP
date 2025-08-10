document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(boton => {
        boton.addEventListener("click", function(e){
             e.preventDefault();

             const cursoContainer = this.closest('.Curso');

             const titulo = cursoContainer.querySelector('h3').textContent;
             const descripcion = cursoContainer.querySelector('.curso-content p').textContent;
            const precio = cursoContainer.querySelector('.Precio').textContent;
            const imagen = cursoContainer.querySelector('.img-curso').src;

            const detalles = [];
            const listDetalles = cursoContainer.querySelectorAll('.Detalles li');
            listDetalles.forEach(detalle => {
                detalles.push(detalle.textContent)
            });
            const cursoInformacion = {
                titulo,
                descripcion,
                precio: precio.replace('precio: Q', '').replace('precio:', ''),
                imagen,
                detalles
            };
              console.log('Información del curso:', cursoInformacion);
        });
    });
}); 