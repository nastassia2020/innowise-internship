const commandHistory = [];

export default class Calculator {
  constructor(a) {
    this.currentValue = a;
  }

  execute(command, value) {
    const res = command.execute(this.currentValue, value);
    commandHistory.push({ command, value, res });
    this.currentValue = res;
    return res;
  }

  undo() {
    const commandObject = commandHistory.pop();

    this.currentValue = commandObject.command.undo(
      commandObject.res,
      commandObject.value
    );

    return this.currentValue;
  }
}
