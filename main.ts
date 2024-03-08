import East from "./src/east";
import { Grid } from "./src/grid";
import { Position } from "./src/position";
import Rover from "./src/rover";

// BASIC USAGE
const rover = new Rover()
console.log(rover.execute('L')) // 0:0:W

// CUSTOM USAGE
const grid = new Grid(11, 11)
const position = new Position(7, 5, grid)
const orientation = new East()
const customRover = new Rover(position, orientation)

const result = customRover.execute('MMM')
console.log(result) // 10:5:E