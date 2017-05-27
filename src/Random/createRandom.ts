import { Curry4, curry4 } from '167'

import { Random } from './Random'

export const createRandom: Curry4<number, number, number, number, Random> = curry4(
  function createRandom(seed0: number, seed1: number, seed2: number, seed3: number) {
    return new Random(seed0, seed1, seed2, seed3)
  },
)
