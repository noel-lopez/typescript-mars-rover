import { describe, expect, test } from 'vitest'
class Rover {
  public execute(commands: string) {
    if (commands === "LL") {
      return '0:0:S'
    }
    return '0:0:W'
  }
}

describe('rover', () => {
  test('should face West when given a single L command from initial position', () => {
    const rover = new Rover()
    expect(rover.execute('L')).toBe('0:0:W')
  })
  test('should face South when give "LL" command line from initial position', () => {
    const rover = new Rover()
    expect(rover.execute('LL')).toBe('0:0:S')
  })
})