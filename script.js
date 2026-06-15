document.addEventListener("DOMContentLoaded", () => {
  const btnSoplar = document.getElementById("btn-soplar");
  const seccionPastel = document.getElementById("seccion-pastel");
  const seccionCarta = document.getElementById("seccion-carta");

  // Preparamos el archivo de audio
  // Asegúrate de que el nombre coincida exactamente con tu archivo .mp3
  const musica = new Audio("PXNDX Procedimientos Para Llegar a un Común Acuerdo.mp3");
  musica.play();

  btnSoplar.addEventListener("click", () => {

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
