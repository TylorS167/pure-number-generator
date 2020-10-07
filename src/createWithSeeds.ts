import {
    PseudorandomNumberGenerator,
    PseudorandomNumberGeneratorImpl,
} from './PseudorandomNumberGenerator'
import { curry4 } from '167'

export const createWithSeeds: CreateWithSeedsArity4 = curry4(
    function createWithSeeds(
        seed0: number,
        seed1: number,
        seed2: number,
        seed3: number,
    ) {
        return new PseudorandomNumberGeneratorImpl(seed0, seed1, seed2, seed3)
    },
)

export interface CreateWithSeedsArity4 {
    (
        seed0: number,
        seed1: number,
        seed2: number,
        seed3: number,
    ): PseudorandomNumberGenerator
    (seed0: number, seed1: number, seed2: number): CreateWithSeedsArity1
    (seed0: number, seed1: number): CreateWithSeedsArity2
    (seed0: number): CreateWithSeedsArity3
}

export interface CreateWithSeedsArity3 {
    (seed1: number, seed2: number, seed3: number): PseudorandomNumberGenerator
    (seed1: number, seed2: number): CreateWithSeedsArity1
    (seed1: number): CreateWithSeedsArity2
}

export interface CreateWithSeedsArity2 {
    (seed2: number, seed3: number): PseudorandomNumberGenerator
    (seed2: number): CreateWithSeedsArity1
}

export interface CreateWithSeedsArity1 {
    (seed3: number): PseudorandomNumberGenerator
}
