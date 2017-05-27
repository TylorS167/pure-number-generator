import { Curry2, curry2 } from '167'

import { Random } from './Random'

export const generate: Curry2<number, Random, ReadonlyArray<number>> = curry2(
  function generate(quantity: number, randomNumberGenerator: Random): ReadonlyArray<number> {
    const values = Array(quantity)

    for (let i = 0; i < quantity; ++i) {
      const { value, next } = randomNumberGenerator.next()

      values[i] = value

      randomNumberGenerator = next
    }

    return values
  },
)
