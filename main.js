document.addEventListener('DOMContentLoaded', function () {
    const iniciarSesionForm = document.getElementById('iniciar-sesion');
    const crearCuentaForm = document.getElementById('crear-cuenta');
    const crearCuentaButton = document.querySelector('.crear');

    crearCuentaButton.addEventListener('click', function (e) {
        e.preventDefault();
        iniciarSesionForm.style.display = 'none';
        crearCuentaForm.style.display = 'block';
    });
});
