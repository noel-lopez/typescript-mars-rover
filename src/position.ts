import { Grid } from "./grid";

export class Position {
  private x = 0;
  private y = 0;
  private grid = new Grid();

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
