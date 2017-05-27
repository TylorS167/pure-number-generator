import { Curry2, curry2 } from '167'

import { RandomNumberGenerator } from './RandomNumberGenerator'
import { next } from './next'

export const randomNumbers: Curry2<number, RandomNumberGenerator, ReadonlyArray<number>> =
  curry2(
    function randomNumbers(
      quantity: number,
      randomNumberGenerator: RandomNumberGenerator): ReadonlyArray<number>
    {
      const values = Array(quantity)

      for (let i = 0; i < quantity; ++i) {
        const { value, nextGenerator } = next(randomNumberGenerator)

        values[i] = value

        randomNumberGenerator = nextGenerator
      }

      return values
    },
  )
