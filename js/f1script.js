const toggleButton = document.getElementById("modeToggle");
const video = document.getElementById("videoF1");
const aviso = document.getElementById("aviso-video");

// Iniciar vídeo ao apertar "S" e remover aviso
document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "s") {
    video.muted = false;
    video.play().catch((err) => {
      console.log("Erro ao iniciar vídeo:", err);
    });

    if (aviso) {
      aviso.style.display = "none";
    }
  }
});

// Mostrar aviso novamente quando o vídeo termina
video.addEventListener("ended", () => {
  if (aviso) {
    aviso.style.display = "inline-block";
  }
});

// Alternar modo claro/escuro
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
//para pausar o video com a tecla "p"

  document.addEventListener("keydown", function (e) {
    if (e.key.toLowerCase() === "p") {
      if (!video.paused) {
        video.pause();
      } else {
        video.play();
      }
    }
  });

  // Reiniciar o vídeo pressionando "R"
document.addEventListener("keydown", function (e) {
    if (e.key.toLowerCase() === "r") {
      video.currentTime = 0;
      video.play();
    }
  });
