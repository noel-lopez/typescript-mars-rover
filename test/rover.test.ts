import { describe, expect, test } from 'vitest'
import Rover from '../src/rover'

describe('integration', () => {
  test('should execute correctly a sequence of commands', () => {
    const rover = new Rover()
    rover.execute('RMMM') // 3:0:E
    rover.execute('LMM') // 3:2:N
    rover.execute('LMMMM') // 9:2:W
    expect(rover.execute('RR')).toBe('9:2:E')
  })
})

describe('left side rotation', () => {
  test('should face West when given a single L command from initial position', () => {
    const rover = new Rover()
    expect(rover.execute('L')).toBe('0:0:W')
  })
  test('should face South when give "LL" command line from initial position', () => {
    const rover = new Rover()
    expect(rover.execute('LL')).toBe('0:0:S')
  })
  test('should face East when give "LLL" command line from initial position', () => {
    const rover = new Rover()
    expect(rover.execute('LLL')).toBe('0:0:E')
  })
  test('should face North when give "LLLL" command line from initial position', () => {
    const rover = new Rover()
    expect(rover.execute('LLLL')).toBe('0:0:N')
  })
})

describe('right side rotation', () => {
  test('should face East when given a single R command from initial position', () => {
    const rover = new Rover()
    expect(rover.execute('R')).toBe('0:0:E')
  })
  test('should face South when give "RR" command line from initial position', () => {
    const rover = new Rover()
    expect(rover.execute('RR')).toBe('0:0:S')
  })
  test('should face West when give "RRR" command line from initial position', () => {
    const rover = new Rover()
    expect(rover.execute('RRR')).toBe('0:0:W')
  })
  test('should face North when give "RRRR" command line from initial position', () => {
    const rover = new Rover()
    expect(rover.execute('RRRR')).toBe('0:0:N')
  })
})

describe('forward movement', () => {
  test('should move forward one step when given a single M command from initial position', () => {
    const rover = new Rover()
    expect(rover.execute('M')).toBe('0:1:N')
  })
  test('should move forward two steps when given "MM" command from initial position', () => {
    const rover = new Rover()
    expect(rover.execute('MM')).toBe('0:2:N')
  })
  test('should move forward to the right when given "RMMMM" command from initial position', () => {
    const rover = new Rover()
    expect(rover.execute('RMMMM')).toBe('4:0:E')
  })
  test('should move to the right then to the left when given "RMMMLLM" command from initial position', () => {
    const rover = new Rover()
    expect(rover.execute('RMMMLLM')).toBe('2:0:W')
  })
  test('should wrap around the grid when moving forward', () => {
    const rover = new Rover()
    expect(rover.execute('MMMMMMMMMM')).toBe('0:0:N')
  })
})