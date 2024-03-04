import { Orientation } from "../types/orientation.interface";
import North from "./north";
import South from "./south";

export default class West implements Orientation {
  rotateLeft(): Orientation {
    return new South()
  }
  rotateRight(): Orientation {
    return new North()
  }
  moveForward(): { x: number; y: number } {
    return { x: -1, y: 0 }
  }
  toString(): string {
    return "W"
  }
}