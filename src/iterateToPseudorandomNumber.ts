import { PseudorandomNumberGenerator } from './PseudorandomNumberGenerator'
import { curry2 } from '167'
import { next } from './next'

export const iterateToPseudorandomNumber: IterateToPseudorandomNumber = curry2(
    function iterateToPseudorandomNumber(
        iterations: number,
        prng: PseudorandomNumberGenerator,
    ): { value: number; nextGenerator: PseudorandomNumberGenerator } {
        let num = 0

        for (let i = 0; i < Math.max(Math.round(iterations), 1); ++i) {
            const { value, nextGenerator } = next(prng)

            num = value

            prng = nextGenerator
        }

        return { value: num, nextGenerator: prng }
    },
)

export interface IterateToPseudorandomNumber {
    (iterations: number, prng: PseudorandomNumberGenerator): {
        value: number
        nextGenerator: PseudorandomNumberGenerator
    }

    (iterations: number): (
        seed: PseudorandomNumberGenerator,
    ) => { value: number; nextGenerator: PseudorandomNumberGenerator }
}
