document.addEventListener('DOMContentLoaded', function() {
    const botones = document.querySelectorAll('.showCursosImpartidos');
    
    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            const instructor = this.closest('.docente');
            const cursosContainer = instructor.querySelector('.Cursos');
            
            if (cursosContainer.style.display === 'none' || cursosContainer.style.display === '') {
                cursosContainer.style.display = 'block';
                this.textContent = 'Ocultar Cursos Impartidos';
            } else {
                cursosContainer.style.display = 'none';
                this.textContent = 'Ver Cursos Impartidos';
            }
        });
    });
});