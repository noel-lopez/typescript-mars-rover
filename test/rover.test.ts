import { describe, expect, test } from 'vitest'
import Rover from '../src/rover'

describe('rover', () => {
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