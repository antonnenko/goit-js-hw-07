function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesArr = [];
  for (let i = 0; i < amount; i++) {
    let boxSize = 30 + i * 10;
    boxesArr.push(
      `<div style="background-color:${getRandomHexColor()}; width:${boxSize}px; height:${boxSize}px"></div>`
    );
  }

  console.log(boxesArr.join('\n'));
  const boxes = (document.querySelector('#boxes').innerHTML =
    boxesArr.join('\n'));
}

const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

btnCreate.addEventListener('click', onClickCreateBtn);
btnDestroy.addEventListener('click', destroyBoxes);

function onClickCreateBtn() {
  const inputNum = document.querySelector('#controls input');
  if (inputNum.value >= 1 && inputNum.value <= 100) {
    const amount = inputNum.value;
    inputNum.value = '';
    createBoxes(amount);
  }
}

function destroyBoxes() {
  document.querySelector('#controls input').value = '';
  document.querySelector('#boxes').innerHTML = '';
}
