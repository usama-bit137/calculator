exports.stack = (string) => {
  const calculation = string.split("");
  calculation.pop();
  return calculation.join("");
};

exports.prepare = (array) => {
  const operations = "+-*/".split("");
  return array
    .split("")
    .map((el) => {
      return operations.includes(el) ? ` ${el} ` : el;
    })
    .join("")
    .split(" ")
    .map((el) => {
      return operations.includes(el) ? el : el * 1;
    });
};

exports.evaluator = (array) => {
  if (array[1] === "+") {
    return array[0] + array[2];
  } else if (array[1] === "-") {
    return array[0] - array[2];
  } else if (array[1] === "*") {
    return array[0] * array[2];
  } else if (array[1] === "/") {
    return array[2] === 0 ? "MATH ERROR" : array[0] / array[2];
  }
};
