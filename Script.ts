// main list of buttons
enum Button {
  ButtonA,
  ButtonB,
  ButtonC,
  ButtonD,
  ButtonE,
}

function setButtons(selectedButtons: Button[]): Button[] {
  // filtering selected buttons
  const filteredButtons = selectedButtons.filter(
    (button) => button !== Button.ButtonC
  );
  // returning the result list
  return filteredButtons;
}

// Example
const selectedButtons: Button[] = [
  Button.ButtonA,
  Button.ButtonB,
  Button.ButtonC,
];
const resultButtons = setButtons(selectedButtons);
console.log(resultButtons); // [ButtonA, ButtonB, ButtonD]

//
//
//
//
//
//
//
//
//
function getButtons(selectedButtons: Button[]): Button[] {
  // filtering selected buttons
  const filteredButtons = selectedButtons.filter(
    (button) => button == Button.ButtonC
  );
  // returning the result list
  return filteredButtons;
}

const resultButtons2 = getButtons(selectedButtons);
console.log(resultButtons2); // [ButtonA, ButtonB, ButtonD]
