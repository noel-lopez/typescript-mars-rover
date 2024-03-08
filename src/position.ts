import { Grid } from "./grid";

export class Position {
  private x: number
  private y: number
  private grid: Grid

  constructor(
    x: number = 0,
    y: number = 0,
    grid: Grid = new Grid()
  ) {
    this.x = x;
    this.y = y;
    this.grid = grid;
  }

  toString() {
    return `${this.x}:${this.y}`;
  }

  move({ x, y }: { x: number; y: number; }) {
    this.x += x;
    this.y += y;
    this.warpAroundGrid();
  }

  private warpAroundGrid() {
    this.x = (this.x + this.grid.xSize) % this.grid.xSize;
    this.y = (this.y + this.grid.ySize) % this.grid.ySize;
  }
}
