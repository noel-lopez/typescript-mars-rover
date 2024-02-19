export default class Rover {
  public execute(commands: string) {
    let orientation = "N"
    const splittedCommands = commands.split('')
    for (const command of splittedCommands) {
      if (command === "L") {
        orientation = this.rotateLeft(orientation)
      }
    }
    return "0:0:" + orientation
  }

  private rotateLeft(orientation: string): string {
    if (orientation === "N") {
      return "W"
    }
    if (orientation === "W") {
      return "S"
    }
    if (orientation === "S") {
      return "E"
    }
    return ""
  }
}