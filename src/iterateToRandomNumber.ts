import { RandomNumberGenerator } from './RandomNumberGenerator'
import { curry2 } from '167'
import { next } from './next'

export const iterateToRandomNumber: IterateToRandomNumber = curry2(
  function iterateToRandomNumber(iterations: number, seed: RandomNumberGenerator): number {
    let num = 0

    for (let i = 0; i < Math.max(Math.round(iterations), 1); ++i) {
      const { value, nextGenerator } = next(seed)

      num = value

      seed = nextGenerator
    }

    return num
  },
)

export interface IterateToRandomNumber {
  (iterations: number, seed: RandomNumberGenerator): number
  (iterations: number): (seed: RandomNumberGenerator) => number
}
