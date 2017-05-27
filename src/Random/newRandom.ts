import { Curry4, curry4 } from '167'

import { Random } from './Random'

export const newRandom: Curry4<number, number, number, number, Random> = curry4(
  function newRandom(s0: number, s1: number, s2: number, s3: number) {
    return new Random(s0, s1, s2, s3)
  },
)
