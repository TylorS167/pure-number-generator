import { PseudorandomNumberGenerator } from './PseudorandomNumberGenerator'
import { curry2 } from '167'
import { next } from './next'

export const splitGenerator: SplitGenerator = curry2(function splitGenerator(
    quantity: number,
    prng: PseudorandomNumberGenerator,
): ReadonlyArray<PseudorandomNumberGenerator> {
    const generators: Array<PseudorandomNumberGenerator> = Array(quantity)
    let generator = prng

    for (let i = 0; i < Math.max(Math.round(quantity), 1); ++i) {
        const { nextGenerator } = next(generator)

        generators[i] = nextGenerator
        generator = nextGenerator
    }

    return generators
})

export interface SplitGenerator {
    (quantity: number, prng: PseudorandomNumberGenerator): ReadonlyArray<
        PseudorandomNumberGenerator
    >
    (quantity: number): (
        prng: PseudorandomNumberGenerator,
    ) => ReadonlyArray<PseudorandomNumberGenerator>
}
