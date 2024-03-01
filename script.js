// main list of buttons
var Button;
(function (Button) {
    Button[Button["ButtonA"] = 0] = "ButtonA";
    Button[Button["ButtonB"] = 1] = "ButtonB";
    Button[Button["ButtonC"] = 2] = "ButtonC";
    Button[Button["ButtonD"] = 3] = "ButtonD";
    Button[Button["ButtonE"] = 4] = "ButtonE";
})(Button || (Button = {}));
function setButtons(selectedButtons) {
    // filtering selected buttons
    var filteredButtons = selectedButtons.filter(function (button) { return button !== Button.ButtonC; });
    // returning the result list
    return filteredButtons;
}
// Example
var selectedButtons = [
    Button.ButtonA,
    Button.ButtonB,
    Button.ButtonC,
];
var resultButtons = setButtons(selectedButtons);
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
function getButtons(selectedButtons) {
    // filtering selected buttons
    var filteredButtons = selectedButtons.filter(function (button) { return button == Button.ButtonC; });
    // returning the result list
    return filteredButtons;
}
var resultButtons2 = getButtons(selectedButtons);
console.log(resultButtons2); // [ButtonA, ButtonB, ButtonD]
