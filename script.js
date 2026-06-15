document.addEventListener("DOMContentLoaded", () => {
  // Referencias a los elementos
  const pantallaInicio = document.getElementById("pantalla-inicio");
  const btnEmpezar = document.getElementById("btn-empezar");

  const btnSoplar = document.getElementById("btn-soplar");
  const seccionPastel = document.getElementById("seccion-pastel");
  const seccionCarta = document.getElementById("seccion-carta");
  const humo = document.getElementById("humo-pastel");

  // Preparamos los dos archivos de audio
  // Usamos try/catch para evitar que un error aquí detenga el sitio
  let musicaFondo;
  let musicaSorpresa;
  try {
    musicaFondo = new Audio("fondo.mp3");
    musicaFondo.loop = true;
    musicaSorpresa = new Audio("sorpresa.mp3");
  } catch (e) {
    console.error(
      "Error al cargar los archivos de audio. Asegúrate de que existen.",
    );
  }

  // PASO 1: Cuando hace clic en "Toca aquí para empezar"
  btnEmpezar.addEventListener("click", () => {
    // --- LA CLAVE PARA DESCONGELAR ---
    // Primero, hacemos que la pantalla de inicio sea invisible al toque de inmediato,
    // para que no actúe como pared invisible mientras se desvanece.
    pantallaInicio.style.pointerEvents = "none";
    pantallaInicio.style.opacity = "0";

    // Intentamos reproducir la música de fondo (si el audio cargó bien)
    if (musicaFondo) {
      musicaFondo.play().catch((error) => {
        // Si el navegador bloquea el audio, no pasa nada, el sitio sigue.
        console.log(
          "El audio de fondo fue bloqueado por el navegador o no existe.",
        );
      });
    }

    // Después de 500ms (tiempo de la animación), ocultamos el elemento por completo.
    setTimeout(() => {
      pantallaInicio.style.display = "none";
    }, 500);
  });

  // PASO 2: Cuando hace clic en "Soplar las velas" (Tu código del pastel interactivo)
  btnSoplar.addEventListener("click", () => {
    // Pausamos la música de fondo si estaba sonando
    if (musicaFondo) musicaFondo.pause();

    // APAGAR VELAS
    const llamas = document.querySelectorAll(".llama");
    llamas.forEach((llama) => {
      llama.classList.add("apagada");
    });
    // NUEVO: Quitamos el resplandor de luz del pastel entero
    document.querySelector(".pastel-contenedor").classList.add("sin-luz");

    // ACTIVAR HUMO
    humo.classList.remove("oculto");
    setTimeout(() => {
      humo.classList.add("activo");
    }, 100);

    // Ocultamos el botón
    btnSoplar.style.display = "none";

    // Pausa de 3 segundos para ver la animación
    setTimeout(() => {
      seccionPastel.classList.add("ocultar-suave");
    }, 2500);

    // A los 3 segundos, lo quitamos del espacio por completo y entra la carta
    setTimeout(() => {
      // Iniciamos la música de la sorpresa si cargó
      if (musicaSorpresa) {
        musicaSorpresa
          .play()
          .catch((e) => console.log("Audio sorpresa bloqueado o no existe."));
      }

      // Ocultamos el espacio físico del pastel
      seccionPastel.classList.add("oculto");

      // Mostramos la carta con su propia animación de entrada
      seccionCarta.classList.remove("oculto");
      seccionCarta.classList.add("mostrar-carta");
    }, 3000);
  });
  // =========================================
  // LÓGICA DE LOS NUEVOS BOTONES
  // =========================================

  const btnRegresar = document.getElementById("btn-regresar");
  const btnMusica = document.getElementById("btn-musica");
  let musicaPausada = false;

  // 1. Botón de Pausar/Reproducir Música
  btnMusica.addEventListener("click", () => {
    if (musicaSorpresa) {
      if (musicaPausada) {
        musicaSorpresa.play();
        btnMusica.textContent = "Pausar música ⏸️";
        musicaPausada = false;
      } else {
        musicaSorpresa.pause();
        btnMusica.textContent = "Reproducir música ▶️";
        musicaPausada = true;
      }
    }
  });

  // 2. Botón de Volver al Pastel (Resetear animaciones)
  btnRegresar.addEventListener("click", () => {
    // Pausar música de sorpresa y volver a poner la de fondo
    if (musicaSorpresa) {
      musicaSorpresa.pause();
      musicaSorpresa.currentTime = 0; // Reinicia la canción sorpresa al segundo 0
    }
    if (musicaFondo) musicaFondo.play();

    // Ocultar la carta
    seccionCarta.classList.add("oculto");
    seccionCarta.classList.remove("mostrar-carta");

    // Restaurar el pastel y quitar la clase de desvanecimiento
    seccionPastel.classList.remove("oculto", "ocultar-suave");
    document.querySelector(".pastel-contenedor").classList.remove("sin-luz");

    // Encender las velas de nuevo
    const llamas = document.querySelectorAll(".llama");
    llamas.forEach((llama) => llama.classList.remove("apagada"));

    // Ocultar y resetear el humo
    humo.classList.remove("activo");
    humo.classList.add("oculto");

    // Mostrar de nuevo el botón de soplar
    btnSoplar.style.display = "inline-block";

    // Resetear el botón de música por si se quedó en "Reproducir"
    musicaPausada = false;
    btnMusica.textContent = "Pausar música ⏸️";
  });
});
