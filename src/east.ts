import { Orientation } from "../types/orientation.interface";
import North from "./north";
import South from "./south";

export default class East implements Orientation {
  rotateLeft(): Orientation {
    return new North();
  }
  rotateRight(): Orientation {
    return new South();
  }
  moveForward(): { x: number; y: number } {
    return { x: 1, y: 0 };
  }
  toString(): string {
    return "E";
  }
}