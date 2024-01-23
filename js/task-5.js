function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('button.change-color');

function onBtn() {
  const rgb = document.querySelector('span.color');
  rgb.innerHTML = getRandomHexColor();
  const body = document.querySelector('body');
  console.log((body.style.backgroundColor = getRandomHexColor()));
}

btn.addEventListener('click', onBtn);
