import { Curry2, curry2 } from '167'

import { Random } from './Random'

export const iterateToRandomNumber: Curry2<number, Random, number> = curry2(
  function iterateToRandomNumber(iterations: number, seed: Random): number {
    let num = 0

    for (let i = 0; i < iterations; ++i) {
      const { value, next } = seed.next()

      num = value

      seed = next
    }

    return num
  },
)
