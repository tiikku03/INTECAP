document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(boton => {
        boton.addEventListener("click", function(e){
             e.preventDefault();

             const cursoContainer = this.closest('.Curso');
             const titulo = cursoContainer.querySelector('h3').textContent;
             const descripcion = cursoContainer.querySelector('.curso-content p').textContent;
             const modalidad = cursoContainer.querySelector('.Modalidad').textContent;
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
                precio: precio.replace('Precio: Q', '').replace('Precio: ', ''), 
                imagen,
                modalidad: modalidad.replace('Modalidad: ', ''), 
                detalles
            };
            console.log('Información del curso:', cursoInformacion);
            localStorage.setItem('cursosAsignados', JSON.stringify(cursoInformacion));
            window.location.href = 'Asignados.html';
        });
    });
});