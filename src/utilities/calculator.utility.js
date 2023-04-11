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
    if (this.commandHistory.length === 0) {
      console.log("undo", this.commandHistory);
      return this.currentValue;
    }
    const commandObject = this.commandHistory.pop();
    if (commandObject.command) {
      this.currentValue = commandObject.command.undo(
        commandObject.res,
        commandObject.value
      );
    } else {
      // Handle case where commandObject.command is undefined
    }
    return this.currentValue;
  }
}
