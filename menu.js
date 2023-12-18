function validarFormulario() {
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var correo = document.getElementById('correo').value.trim();

    var errorNombre = document.getElementById('error-nombre');
    var errorApellido = document.getElementById('error-apellido');
    var errorTelefono = document.getElementById('error-telefono');
    var errorCorreo = document.getElementById('error-correo');

    errorNombre.innerHTML = '';
    errorApellido.innerHTML = '';
    errorTelefono.innerHTML = '';
    errorCorreo.innerHTML = '';

    if (nombre === '') {
        errorNombre.innerHTML = 'Por favor, ingrese su Nombre';
        console.log("Validación de Nombre fallida");
        return false;
    }

    if (apellido === '') {
        errorApellido.innerHTML = 'Por favor, ingrese su Apellido';
        console.log("Validación de Apellido fallida");
        return false;
    }

    if (telefono === '') {
        errorTelefono.innerHTML = 'Por favor, ingrese su Teléfono';
        console.log("Validación de Teléfono fallida");
        return false;
    }

    if (correo === '') {
        errorCorreo.innerHTML = 'Por favor, ingrese su Correo electrónico';
        console.log("Validación de Correo fallida");
        return false;
    }

    console.log("Validación de formulario exitosa");
    return true;
}
// function toggleMenu() {
//     var menuCheckbox = document.getElementById("menu");
//     var navbar = document.querySelector(".navbar");

//     navbar.style.display = menuCheckbox.checked ? "none" : "block"; 
// }