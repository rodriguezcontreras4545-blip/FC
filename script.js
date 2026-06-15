document.addEventListener("DOMContentLoaded", () => {
  const btnSoplar = document.getElementById("btn-soplar");
  const seccionPastel = document.getElementById("seccion-pastel");
  const seccionCarta = document.getElementById("seccion-carta");

  // Preparamos el archivo de audio
  // Asegúrate de que el nombre coincida exactamente con tu archivo .mp3
  const musica = new Audio("cancion.mp3");

  btnSoplar.addEventListener("click", () => {
    // Reproducir la música
    musica.play();

    // Ocultamos el pastel
    seccionPastel.classList.add("oculto");

    // Mostramos la carta
    seccionCarta.classList.remove("oculto");
    seccionCarta.classList.add("mostrar-carta");
  });
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  });
});
