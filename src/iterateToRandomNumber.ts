import { RandomNumberGenerator } from './RandomNumberGenerator'
import { curry2 } from '167'
import { next } from './next'

export const iterateToRandomNumber: IterateToRandomNumber = curry2(
  function iterateToRandomNumber(
    iterations: number,
    seed: RandomNumberGenerator): { value: number, nextGenerator: RandomNumberGenerator }
  {
    let num = 0

    for (let i = 0; i < Math.max(Math.round(iterations), 1); ++i) {
      const { value, nextGenerator } = next(seed)

      num = value

      seed = nextGenerator
    }

    return { value: num, nextGenerator: seed }
  },
)

export interface IterateToRandomNumber {
  (iterations: number, seed: RandomNumberGenerator):
    { value: number, nextGenerator: RandomNumberGenerator }

  (iterations: number): (seed: RandomNumberGenerator) =>
    { value: number, nextGenerator: RandomNumberGenerator }
}
