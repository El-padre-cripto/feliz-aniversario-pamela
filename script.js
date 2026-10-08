const button = document.getElementById("openMessage");
const message = document.getElementById("message");
const confetti = document.getElementById("confetti");

button.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.scrollIntoView({ behavior: "smooth", block: "start" });
  button.textContent = "Feliz aniversário, Pamela! 🎉";
  launchConfetti(120);
});

function launchConfetti(amount) {
  const symbols = ["✦", "◆", "●", "★"];
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.fontSize = (8 + Math.random() * 10) + "px";
    piece.style.animationDuration = (2.5 + Math.random() * 3) + "s";
    piece.style.animationDelay = Math.random() * .8 + "s";
    piece.style.opacity = .5 + Math.random() * .5;
    confetti.appendChild(piece);

    setTimeout(() => piece.remove(), 6000);
  }
}
