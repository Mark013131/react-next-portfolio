document.querySelector(".character").addEventListener("click", () => {
  const character = document.querySelector(".character");
  character.style.animation = "jump 0.5s ease-out";
  setTimeout(() => {
    character.style.animation =
      "walk 10s linear infinite, sprite 0.5s steps(3) infinite";
  }, 500);
});
