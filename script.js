const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("#body");
const randBtn = document.querySelector("#random");

const setGradient = () => {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = `background: linear-gradient(to right, ${color1.value}, ${color2.value})`;
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const setRandomColor = () => {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  setGradient();
};

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randBtn.addEventListener("click", setRandomColor);
