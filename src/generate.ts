import { Curry2, curry2 } from '167'

import { Random } from './Random'

export const generate: Curry2<number, Random, ReadonlyArray<number>> = curry2(
  function generate(amount: number, gen: Random): ReadonlyArray<number> {
    const array = Array(amount)

    for (let i = 0; i < amount; ++i) {
      const { value, random } = gen.next()

      array[i] = value

      gen = random
    }

    return array
  },
)
