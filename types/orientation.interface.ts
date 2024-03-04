export interface Orientation {
  rotateLeft(): Orientation
  rotateRight(): Orientation
  moveForward(): { x: number, y: number }
}