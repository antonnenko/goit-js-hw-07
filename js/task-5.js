function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const colorSpan = document.querySelector('span.color');
const btn = document.querySelector('button.change-color');

function onBtn() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
}

btn.addEventListener('click', onBtn);
