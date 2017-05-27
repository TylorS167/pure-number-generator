import { Curry2, curry2 } from '167'

import { Random } from './Random'

export const iterations: Curry2<number, Random, number> = curry2(
  function iterations(amount: number, seed: Random): number {
    let n = 0

    for (let i = 0; i < amount; ++i) {
      const { value, next } = seed.next()

      n = value

      seed = next
    }

    return n
  },
)
