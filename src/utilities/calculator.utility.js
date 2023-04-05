export default class Calculator {
  constructor(a) {
    this.currentValue = a;
    this.commandHistory = [];
  }

  execute(command, value) {
    const res = command.execute(this.currentValue, value);
    this.commandHistory.push({ command, value, res });
    this.currentValue = res;
    console.log("commandHistory", this.commandHistory);
    return res;
  }

  undo() {
    const commandObject = this.commandHistory.pop();
    this.currentValue = commandObject.command.undo(
      commandObject.res,
      commandObject.value
    );
    return this.currentValue;
  }
}
