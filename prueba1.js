const botonTema = document.getElementById('botonTema');
//COMENTARIO 
botonTema.addEventListener('click', () => {
    document.body.classList.toggle('tema-oscuro');
    
    
    if (document.body.classList.contains('tema-oscuro')) {
        botonTema.textContent = 'Volver al Tema Claro';
    } else {
        botonTema.textContent = 'Cambiar Tema';
    }
});