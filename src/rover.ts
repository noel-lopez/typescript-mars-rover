import { Orientation } from "../types/orientation.interface"
import North from "./north"

export default class Rover {

  private orientation: Orientation = new North()
  private x = 0
  private y = 0

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
    return `${this.x}:${this.y}:${this.orientation.toString()}`
  }

  private rotateLeft(): void {
    this.orientation = this.orientation.rotateLeft()
  }

  private rotateRight(): void {
    this.orientation = this.orientation.rotateRight()
  }

  private moveForward(): void {
    const { x, y } = this.orientation.moveForward()
    this.x += x
    this.y += y
    // wrap around the grid (10 x 10)
    this.x = (this.x + 10) % 10
    this.y = (this.y + 10) % 10
  }
}