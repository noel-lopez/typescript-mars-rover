export class Grid {
  private x = 10;
  private y = 10;

  constructor(x = 10, y = 10) {
    this.x = x;
    this.y = y;
  }

  public get xSize() {
    return this.x;
  }

  public get ySize() {
    return this.y;
  }
}
