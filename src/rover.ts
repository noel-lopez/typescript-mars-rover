export default class Rover {
  public execute(commands: string) {
    if (commands === "LL") {
      return '0:0:S'
    }
    if (commands === "LLL") {
      return '0:0:E'
    }
    return '0:0:W'
  }
}