export function myAbs(a) {
  if (a < 0) {
    return -1 * a;
  } else {
    return a;
  }
}

export const addCommand = {
  execute: function (num1, num2) {
    return +num1 + +num2;
  },
  undo: function (res, num2) {
    return res - num2;
  },
};

export const subtractCommand = {
  execute: function (num1, num2) {
    return num1 - num2;
  },
  undo: function (res, num2) {
    return res + +num2;
  },
};

export const multiplyCommand = {
  execute: function (num1, num2) {
    return num1 * num2;
  },
  undo: function (res, num2) {
    return res / num2;
  },
};

export const divideCommand = {
  execute: function (num1, num2) {
    return num1 / num2;
  },
  undo: function (res, num2) {
    return res * num2;
  },
};

export const percentageCommand = {
  execute: function (num) {
    return num / 100;
  },
  undo: function (res) {
    return res * 100;
  },
};

export const toggleSignCommand = {
  execute: function (num) {
    return -num;
  },
};

export const powerCommand = {
  execute: function (num1, num2) {
    return num1 ** num2;
  },
  undo: function (res, num2) {
    return res * num2;
  },
};

export const squareCommand = {
  execute: function (num) {
    return num ** 2;
  },
  undo: function (res) {
    if (res < 0) {
      return NaN;
    }
    let guess = res;
    for (let i = 0; i < 10; i++) {
      guess = (guess + res / guess) / 2;
    }
    return guess;
  },
};

export const squareRootCommand = {
  execute: function (num) {
    return squareCommand.undo(num);
  },
  undo: function (res) {
    return squareCommand.execute(res);
  },
};

export const cubeCommand = {
  execute: function (num) {
    return num ** 3;
  },
  undo: function (res) {
    if (res >= 0) {
      return powerCommand.execute(res, 1 / 3);
    } else {
      return -1 * powerCommand.execute(myAbs(res), 1 / 3);
    }
  },
};

export const tenInPowwer = {
  execute: function (num) {
    return 10 ** num;
  },
  undo: function (res, num) {
    if (res >= 0) {
      return powerCommand.execute(res, 1 / num);
    } else {
      return -1 * powerCommand.execute(myAbs(res), 1 / num);
    }
  },
};

export const cubeRootCommand = {
  execute: function (num) {
    return cubeCommand.undo(num);
  },
  undo: function (res) {
    return cubeCommand.execute(res);
  },
};

export const fractionCommand = {
  execute: function (num) {
    return 1 / num;
  },
  undo: function (res) {
    return 1 / res;
  },
};

export const rootCommand = {
  execute: function (num1, num2) {
    return powerCommand.execute(num1, 1 / num2);
  },
  undo: function (res, num2) {
    return powerCommand.execute(res, num2);
  },
};

export const factorialCommand = {
  execute: function (num1) {
    if (num1 < 0) {
      return;
    }
    let result = 1;
    for (let i = 2; i <= num1; i++) {
      result *= i;
    }
    return result;
  },
};
