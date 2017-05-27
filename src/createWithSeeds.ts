import { Curry4, curry4 } from '167'

import { RandomNumberGenerator } from './RandomNumberGenerator'

// tslint:disable-next-line:max-line-length
export const createWithSeeds: Curry4<number, number, number, number, RandomNumberGenerator> = curry4(
  function createWithSeeds(seed0: number, seed1: number, seed2: number, seed3: number) {
    return new RandomNumberGenerator(seed0, seed1, seed2, seed3)
  },
)
