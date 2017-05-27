import { Curry2, curry2 } from '167'

import { RandomNumberGenerator } from './RandomNumberGenerator'
import { next } from './next'

export const iterateToRandomNumber: Curry2<number, RandomNumberGenerator, number> = curry2(
  function iterateToRandomNumber(iterations: number, seed: RandomNumberGenerator): number {
    let num = 0

    for (let i = 0; i < iterations; ++i) {
      const { value, nextGenerator } = next(seed)

      num = value

      seed = nextGenerator
    }

    return num
  },
)
