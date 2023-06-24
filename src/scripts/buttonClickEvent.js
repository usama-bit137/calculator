const controller = require("./calculatorController");

const screen = document.querySelector("#screen");
const buttonClickEvent = (symbol) => {
  if (symbol === "=") {
    const calculationArray = controller.prepare(screen.textContent);
    screen.textContent = controller.evaluator(calculationArray);
  } else if (symbol === "DEL") {
    screen.textContent = controller.stack(screen.textContent);
  } else if (symbol === "AC") {
    screen.textContent = "";
  } else if (screen.textContent === "MATH ERROR") {
    screen.textContent = symbol;
  } else {
    screen.textContent += symbol;
  }
};

export default buttonClickEvent;
