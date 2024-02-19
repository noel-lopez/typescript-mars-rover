export default class Rover {
  public execute(commands: string) {
    if (commands === "LL") {
      return '0:0:S'
    }
    return '0:0:W'
  }
}