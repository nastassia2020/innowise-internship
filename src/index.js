export default class Calculator {
  constructor(a = 0, b = 0) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }

  subtract() {
    return this.a - this.b;
  }

  multiply() {
    return this.a * this.b;
  }

  divide() {
    return this.a / this.b;
  }

  percentage() {
    return this.a / 100;
  }
}

class Command {
  constructor(target) {
    this.target = target;
    this.commandsExecuted = [];
  }

  execute(command) {
    this.commandsExecuted.push(command);
    return this.target[command]();
  }
}

let x = new Command(new Calculator(8));
console.log(x.execute("percentage"));
