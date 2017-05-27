import { RandomNumberGenerator } from './RandomNumberGenerator'
import { curry4 } from '167'

// tslint:disable-next-line:max-line-length
export const createWithSeeds: CreateWithSeedsArity4 = curry4(
  function createWithSeeds(seed0: number, seed1: number, seed2: number, seed3: number) {
    return new RandomNumberGenerator(seed0, seed1, seed2, seed3)
  },
)

export interface CreateWithSeedsArity4 {
  (seed0: number, seed1: number, seed2: number, seed3: number): RandomNumberGenerator
  (seed0: number, seed1: number, seed2: number): CreateWithSeedsArity1
  (seed0: number, seed1: number): CreateWithSeedsArity2
  (seed0: number): CreateWithSeedsArity3
}

export interface CreateWithSeedsArity3 {
  (seed1: number, seed2: number, seed3: number): RandomNumberGenerator
  (seed1: number, seed2: number): CreateWithSeedsArity1
  (seed1: number): CreateWithSeedsArity2
}

export interface CreateWithSeedsArity2 {
  (seed2: number, seed3: number): RandomNumberGenerator
  (seed2: number): CreateWithSeedsArity1
}

export interface CreateWithSeedsArity1 {
  (seed3: number): RandomNumberGenerator
}
