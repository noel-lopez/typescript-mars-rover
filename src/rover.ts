import { Orientation } from "../types/orientation.interface"
import North from "./north"

class Grid {
  private x = 10
  private y = 10

  constructor(x = 10, y = 10) {
    this.x = x
    this.y = y
  }

  public get xSize() {
    return this.x
  }

  public get ySize() {
    return this.y
  }
}

class Position {
  private x = 0
  private y = 0
  private grid = new Grid()

  toString() {
    return `${this.x}:${this.y}`
  }

  move({ x, y }: { x: number, y: number }) {
    this.x += x
    this.y += y
    this.warpAroundGrid()
  }

  private warpAroundGrid() {
    this.x = (this.x + this.grid.xSize) % this.grid.xSize
    this.y = (this.y + this.grid.ySize) % this.grid.ySize
  }
}

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