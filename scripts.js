// Inicializa el índice de la diapositiva en 0
let slideIndex = 0;

// Función para mostrar las diapositivas
function showSlides() {
    // Obtiene todas las diapositivas del documento
    let slides = document.querySelectorAll(".slide");

    // Incrementa el índice de la diapositiva
    slideIndex++;

    // Si el índice es mayor que la cantidad de diapositivas, vuelve al principio
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Oculta todas las diapositivas
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Muestra la diapositiva actual
    slides[slideIndex - 1].style.display = "block";

    // Establece un temporizador para llamar a la función nuevamente después de 2 segundos (cambio de imagen cada 2 segundos)
    setTimeout(showSlides, 2000);
}

// Función para precargar imágenes
function precargarImagenes(imagenes) {
    for (let i = 0; i < imagenes.length; i++) {
        // Crea un nuevo objeto de imagen y establece la fuente para precargar la imagen
        const img = new Image();
        img.src = imagenes[i];
    }
}

// Llama a la función de precarga con las rutas de las imágenes que deseas precargar
precargarImagenes([
    'imginf/imagen1.png',
    'imginf/imagen2m.jpg',
    'imginf/imagen3.png',
    'imginf/imagen4m.jpg',
    'imginf/imagen5.png',
    'imginf/imagen6m.jpg'
]);

// Inicia el proceso de mostrar diapositivas
showSlides();
