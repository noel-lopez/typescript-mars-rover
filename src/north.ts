import { Orientation } from "../types/orientation.interface";
import East from "./east";
import West from "./west";

export default class North implements Orientation {
  rotateLeft(): Orientation {
    return new West()
  }
  rotateRight(): Orientation {
    return new East()
  }
  moveForward(): { x: number; y: number } {
    return { x: 0, y: 1 }
  }
  toString(): string {
    return "N"
  }
}