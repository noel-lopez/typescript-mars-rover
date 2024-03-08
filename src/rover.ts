import { Orientation } from "../types/orientation.interface"
import { Position } from "./position"
import North from "./north"

export default class Rover {

  private orientation: Orientation = new North()
  private position = new Position()

  public execute(commands: string) {
    const splittedCommands = commands.split('')
    for (const command of splittedCommands) {
      if (command === "L") {
        this.rotateLeft()
      }
      if (command === "R") {
        this.rotateRight()
      }
      if (command === "M") {
        this.moveForward()
      }
    }
    return `${this.position.toString()}:${this.orientation.toString()}`
  }

  private rotateLeft(): void {
    this.orientation = this.orientation.rotateLeft()
  }

  private rotateRight(): void {
    this.orientation = this.orientation.rotateRight()
  }

  private moveForward(): void {
    const { x, y } = this.orientation.moveForward()
    this.position.move({ x, y })
  }
}