// Criar balões
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");

  // Cor aleatória
  const colors = ["red", "blue", "green", "yellow", "purple", "pink"];
  balloon.style.background = colors[Math.floor(Math.random() * colors.length)];

  // Posição aleatória
  balloon.style.left = Math.random() * window.innerWidth + "px";

  // Duração diferente p/ cada balão
  balloon.style.animationDuration = 5 + Math.random() * 5 + "s";

  document.body.appendChild(balloon);

  setTimeout(() => balloon.remove(), 10000);
}

// Criar confetes
function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");

  const colors = ["#ff0", "#0ff", "#f0f", "#0f0", "#f00", "#00f"];
  confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.left = Math.random() * window.innerWidth + "px";
  confetti.style.animationDuration = 2 + Math.random() * 3 + "s";

  document.body.appendChild(confetti);

  setTimeout(() => confetti.remove(), 5000);
}

setInterval(createBalloon, 800);
setInterval(createConfetti, 200);
