document.addEventListener("DOMContentLoaded", () => {
    // Referencias a los elementos
    const pantallaInicio = document.getElementById("pantalla-inicio");
    const btnEmpezar = document.getElementById("btn-empezar");
    
    const btnSoplar = document.getElementById("btn-soplar");
    const seccionPastel = document.getElementById("seccion-pastel");
    const seccionCarta = document.getElementById("seccion-carta");
    
    // Preparamos los dos archivos de audio
    const musicaFondo = new Audio('PXNDX Procedimientos Para Llegar a un Común Acuerdo.mp3');
    musicaFondo.loop = true; // Hace que la música de fondo se repita infinitamente
    
    const musicaSorpresa = new Audio('Que los Cumpla Feliz.mp3');

    // PASO 1: Cuando hace clic en "Toca aquí para empezar"
    btnEmpezar.addEventListener("click", () => {
        // Desvanecemos y ocultamos la pantalla de inicio
        pantallaInicio.style.opacity = "0";
        setTimeout(() => {
            pantallaInicio.style.display = "none";
        }, 500);

        // Inicia la música de fondo
        musicaFondo.play();
    });

    // PASO 2: Cuando hace clic en "Soplar las velas"
    btnSoplar.addEventListener("click", () => {
        // Pausamos la música de fondo para que no se mezclen
        musicaFondo.pause();
        
        // Iniciamos la música de la sorpresa
        musicaSorpresa.play();

        // Ocultamos el pastel y mostramos la carta
        seccionPastel.classList.add("oculto");
        seccionCarta.classList.remove("oculto");
        seccionCarta.classList.add("mostrar-carta");
    });
    confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  });
});

