const nameInput = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

function onNameInput(e) {
  const inputData = e.currentTarget.value.trim();
  nameOutput.textContent = inputData === '' ? 'Anonymous' : inputData;
}

nameInput.addEventListener('input', onNameInput);
