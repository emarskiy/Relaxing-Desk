const SQUARES_NUMBERS = 500;
const board = document.querySelector("#board");
const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "whitesmoke",
  "purple",
  "#FF00FF",
  "#00FF00",
  "#800000",
  "#FF00FF",
  "#FFFF00",
  "#00FFFF",
  "#FF1493",
  "#ADFF2F",
  "#F08080",
  "#87CEEB",
];

for (let i = 0; i < SQUARES_NUMBERS; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "rgb(93, 93, 96)";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor(params) {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
