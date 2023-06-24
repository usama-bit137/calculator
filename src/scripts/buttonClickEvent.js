const calculationPrep = (string) => {
  const operations = ["+", "-", "*", "/"];
  const calculation = string.split(" ");
  calculation.pop();
  return operations.includes(calculation[-1])
    ? calculation.join(" ") + " "
    : calculation.join(" ");
};

const screen = document.querySelector("#screen");
const buttonClickEvent = (symbol) => {
  const operations = ["+", "-", "*", "/"];

  if (symbol === "=") {
    screen.textContent = symbol;
    // SPLIT INTO AN ARRAY AND PASS INTO A FUNCTION
    return;
  } else if (operations.includes(symbol)) {
    screen.textContent += " " + symbol + " ";
    return;
  } else if (symbol === "DEL") {
    screen.textContent = calculationPrep(screen.textContent);
    return;
  } else if (symbol === "AC") {
    screen.textContent = "";
    return;
  }
  screen.textContent += symbol;
};

export default buttonClickEvent;
