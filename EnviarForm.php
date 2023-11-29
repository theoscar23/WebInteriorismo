<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger datos del formulario
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $direccion = $_POST["direccion"];
    $email = $_POST["email"];
    

    // Configuración del correo
    $para = "oscarambrosio23@gmail.com";
    $asunto = "Nuevo contacto";

    // Contenido del correo
    $contenido = "Nombre: $nombre\n";
    $contenido = "Apellido: $apellido\n";
    $contenido = "Direccion: $direccion\n";
    $contenido .= "Correo electrónico: $email\n\n";
    

    // Enviar el correo
    mail($para, $asunto, $contenido);

    // Redireccionar o mostrar un mensaje de éxito
    $mensaje="Gracias por contactar con nosotros"
    header("Location: index.html");
    echo"<p>$mensaje</p>";
} else {
    // Acceso directo al script, redirigir a la página de inicio
    header("Location: index.html");
    echo"<p>$mensaje</p>";
}
?>
