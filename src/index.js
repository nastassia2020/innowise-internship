import "./style/main.css";
import * as values from "./utilities/values.utility.js";
import * as commands from "./utilities/commands.js";
import Calculator from "./utilities/calculator.utility.js";

const calc = document.querySelector(".calc");
const result = document.querySelector("#result");

let a = "";
let b = "";
let sign = "";
let finish = false;
const storedValue = [];

const calcEquality = (value, calculator) => {
  if (value === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = calculator.execute(commands.addCommand, b);
        break;
      case "-":
        a = calculator.execute(commands.subtractCommand, b);
        break;
      case "x":
        a = calculator.execute(commands.multiplyCommand, b);
        break;
      case "/":
        if (b === "0") {
          return (result.innerText = "ERROR");
        }
        a = calculator.execute(commands.divideCommand, b);
        break;
      case "xy":
        a = calculator.execute(commands.powerCommand, b);
        break;
      case "y√x":
        a = calculator.execute(commands.rootCommand, b);
        break;
    }
    finish = true;
    result.innerText = a;
  }

  if (values.functions.includes(value)) {
    switch (value) {
      case "%":
        a = calculator.execute(commands.percentageCommand);
        break;
      case "+/-":
        a = calculator.execute(commands.toggleSignCommand);
        break;
      case "x2":
        a = calculator.execute(commands.squareCommand);
        break;
      case "√x":
        a = calculator.execute(commands.squareRootCommand);
        break;
      case "x3":
        a = calculator.execute(commands.cubeCommand);
        break;
      case "3√x":
        a = calculator.execute(commands.cubeRootCommand);
        break;
      case "1/x":
        a = calculator.execute(commands.fractionCommand);
        break;
      case "x!":
        a = calculator.execute(commands.factorialCommand);
        break;
      case "10x":
        a = calculator.execute(commands.tenInPowwer);
        break;
    }
    finish = true;
    result.innerText = a;
  }

  if (values.memory.includes(value)) {
    switch (value) {
      case "M+":
        storedValue.push(calculator.currentValue.toString());
        a = storedValue[storedValue.length - 1];
        result.innerText = a;
        break;
      case "M-":
        storedValue.pop();
        break;
      case "MR":
        if (a !== "") {
          b = storedValue[storedValue.length - 1];
          result.innerText = b;
        } else a = storedValue[storedValue.length - 1];
        break;
      case "MC":
        storedValue.length = 0;
        clearAll();
        break;
    }
  }
};

const clearAll = () => {
  a = "";
  b = "";
  sign = "";
  finish = false;
  result.innerText = 0;
};

calc.addEventListener("click", (e) => {
  const calculator = new Calculator(a);

  let currentValueStr = result.innerText.toString();

  if (e.target.textContent === "Back") {
    console.log("undo from index  ", calculator.undo());
    currentValueStr = calculator.undo();
  }

  if (!e.target.classList.contains("calc-btn")) return;

  if (e.target.classList.contains("clear")) {
    clearAll();
  }

  const value = e.target.innerText;

  if (values.digit.includes(value)) {
    if (value === ".") {
      let checkForForbiddenDecimals = /^(\d+)[.]$|[*\/+-](\d+)[.]$|[.](\d+)$/;
      if (checkForForbiddenDecimals.test(currentValueStr)) {
        return;
      }

      if (currentValueStr[0] === ".") {
        return currentValueStr.replace(/^\./, "0.");
      }
    }
    if (value === "0") {
      let checkForForbiddenZeroes = /^[0]$|[*\/+-][0]$/;
      if (checkForForbiddenZeroes.test(currentValueStr)) {
        return;
      }
    }
    if (b === "" && sign === "") {
      a += value;
      result.innerText = a;
    } else if (a !== "" && b !== "" && finish) {
      b = value;
      finish = false;
      result.innerText = b;
    } else {
      b += value;
      result.innerText = b;
    }
  }

  if (values.signs.includes(value)) {
    if (a !== "" && b !== "" && !finish) {
      calcEquality("=", calculator);
    }
    sign = value;
    result.innerText = sign;
  }

  calcEquality(value, calculator);
});
