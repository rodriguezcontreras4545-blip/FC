document.addEventListener("DOMContentLoaded", () => {
    const btnSoplar = document.getElementById("btn-soplar");
    const seccionPastel = document.getElementById("seccion-pastel");
    const seccionCarta = document.getElementById("seccion-carta");

    btnSoplar.addEventListener("click", () => {
        // Ocultamos el pastel
        seccionPastel.classList.add("oculto");
        
        // Mostramos la carta quitando la clase 'oculto' y añadiendo la animación
        seccionCarta.classList.remove("oculto");
        seccionCarta.classList.add("mostrar-carta");
    });
});