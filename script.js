const btn = document.getElementById("btn");
const hexText = document.getElementById("bg-hex-code");

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getRandomHex() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexValues.length);
    hexColor += hexValues[randomIndex];
  }
  return hexColor;
}

btn.addEventListener("click", () => {
  const newColor = getRandomHex();
  document.body.style.backgroundColor = newColor;
  hexText.innerText = newColor;
});
