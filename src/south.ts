import { Orientation } from "../types/orientation.interface";
import East from "./east";
import West from "./west";

export default class South implements Orientation {
  rotateLeft(): Orientation {
    return new East();
  }
  rotateRight(): Orientation {
    return new West();
  }
  moveForward(): { x: number; y: number } {
    return { x: 0, y: -1 };
  }
  toString(): string {
    return "S";
  }
}