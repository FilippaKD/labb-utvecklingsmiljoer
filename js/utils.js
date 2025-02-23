export function initClicker(button, output) {
  let score = 0;
  document.getElementById(button).addEventListener("click", () => {
    score++;
    document.getElementById(output).innerText = score;
  });
}