const calculationStack = (string) => {
  const calculation = string.split("");
  calculation.pop();
  return calculation.join("");
};

const screen = document.querySelector("#screen");
const buttonClickEvent = (symbol) => {
  const operations = ["+", "-", "*", "/"];
  if (symbol === "=") {
    // THIS IS GETTING CHUNKY
    let calculationArray = screen.textContent
      .split("")
      .map((el) => {
        return operations.includes(el) ? ` ${el} ` : el;
      })
      .join("")
      .split(" ")
      .map((el) => {
        return operations.includes(el) ? el : el * 1;
      });

    let answer;
    if (calculationArray[1] === "+") {
      answer = calculationArray[0] + calculationArray[2];
    } else if (calculationArray[1] === "-") {
      answer = calculationArray[0] - calculationArray[2];
    } else if (calculationArray[1] === "*") {
      answer = calculationArray[0] * calculationArray[2];
    } else if (calculationArray[1] === "/") {
      answer =
        calculation[2] === 0
          ? "MATH ERROR"
          : calculationArray[0] / calculationArray[2];
    }

    screen.textContent = answer;
    console.log(calculationArray);
  } else if (symbol === "DEL") {
    screen.textContent = calculationStack(screen.textContent);
  } else if (symbol === "AC") {
    screen.textContent = "";
  } else {
    screen.textContent += symbol;
  }
};

export default buttonClickEvent;
