import confetti from "https://cdn.skypack.dev/canvas-confetti";

confetti();

document.getElementById("confetti").addEventListener("click", () => {
  confetti();
});
