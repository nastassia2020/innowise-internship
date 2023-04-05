const {
  myAbs,
  addCommand,
  subtractCommand,
  multiplyCommand,
  divideCommand,
  percentageCommand,
  toggleSignCommand,
  powerCommand,
  squareCommand,
  squareRootCommand,
  cubeCommand,
  tenInPowwer,
  cubeRootCommand,
  fractionCommand,
  rootCommand,
  factorialCommand,
} = require("./src/utilities/commands.utility.js");

test("get -2 return 2", () => {
  expect(myAbs(-2)).toBe(2);
});

test("adds 1 + 2 to equal 3", () => {
  expect(addCommand.execute(1, 2)).toBe(3);
});

test("get 3 - 2 return 1", () => {
  expect(subtractCommand.execute(3, 2)).toBe(1);
});

test("get 3 * 2 return 6", () => {
  expect(multiplyCommand.execute(3, 2)).toBe(6);
});

test("get 6 / 2 return 3", () => {
  expect(divideCommand.execute(6, 2)).toBe(3);
});

test("get 100 return percentage to equal 1", () => {
  expect(percentageCommand.execute(100)).toBe(1);
});

test("get -2 return 2", () => {
  expect(toggleSignCommand.execute(2)).toBe(-2);
});

test("get 3 ** 2 return 9", () => {
  expect(powerCommand.execute(3, 2)).toBe(9);
});

test("get 2 return square to equal 4", () => {
  expect(squareCommand.execute(2)).toBe(4);
});

test("get 4 return square root to equal 2", () => {
  expect(squareRootCommand.execute(4)).toBe(2);
});

test("get 2 return 8", () => {
  expect(cubeCommand.execute(2)).toBe(8);
});

test("get 2 return the power of 10 to equal 100", () => {
  expect(tenInPowwer.execute(2)).toBe(100);
});

test("get 8 return cube root to equal 2", () => {
  expect(cubeRootCommand.execute(8)).toBe(2);
});

test("get 5 return 1 / 5 to equal 0.2", () => {
  expect(fractionCommand.execute(5)).toBe(0.2);
});

test("get 8 and 3 return cube root of 8 to equal 2", () => {
  expect(rootCommand.execute(8, 3)).toBe(2);
});

test("get 5 return factorial to equal 120", () => {
  expect(factorialCommand.execute(5)).toBe(120);
});
