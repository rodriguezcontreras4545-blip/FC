document.addEventListener("DOMContentLoaded", () => {
  // Referencias a los elementos
  const pantallaInicio = document.getElementById("pantalla-inicio");
  const btnEmpezar = document.getElementById("btn-empezar");

  const btnSoplar = document.getElementById("btn-soplar");
  const seccionPastel = document.getElementById("seccion-pastel");
  const seccionCarta = document.getElementById("seccion-carta");

  // Preparamos los dos archivos de audio
  const musicaFondo = new Audio(
    "PXNDX Procedimientos Para Llegar a un Común Acuerdo.mp3",
  );
  musicaFondo.loop = true; // Hace que la música de fondo se repita infinitamente

  const musicaSorpresa = new Audio("Que los Cumpla Feliz.mp3");

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
  // ... (mantenemos el código anterior de música y pantalla de inicio) ...

  const btnSoplar = document.getElementById("btn-soplar");
  const seccionPastel = document.getElementById("seccion-pastel");
  const seccionCarta = document.getElementById("seccion-carta");
  // Referencias a los elementos del pastel CSS
  const humo = document.getElementById("humo-pastel");

  btnSoplar.addEventListener("click", () => {
    // 1. Pausamos la música de fondo
    musicaFondo.pause();

    // 2. APAGAR VELAS: Seleccionamos todas las llamas y añadimos la clase 'apagada'
    const llamas = document.querySelectorAll(".llama");
    llamas.forEach((llama) => {
      llama.classList.add("apagada");
    });

    // 3. ACTIVAR HUMO: Mostramos el humo y luego le damos la animación
    humo.classList.remove("oculto");
    setTimeout(() => {
      humo.classList.add("activo");
    }, 100); // Pequeña pausa para que el navegador note el cambio

    // Ocultamos el botón para que no pueda presionarlo dos veces
    btnSoplar.style.display = "none";

    // 4. Pausa de 3 segundos (3000ms) para ver la animación de apagado
    setTimeout(() => {
      // Iniciamos la música de la sorpresa
      musicaSorpresa.play();

      // Ocultamos toda la sección del pastel
      seccionPastel.classList.add("oculto");

      // Mostramos la carta con la animación
      seccionCarta.classList.remove("oculto");
      seccionCarta.classList.add("mostrar-carta");
    }, 3000); // Ajusta este tiempo si quieres que el humo dure más o menos
  });
});
