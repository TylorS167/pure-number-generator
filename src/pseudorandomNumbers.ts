import { PseudorandomNumberGenerator } from './PseudorandomNumberGenerator'
import { curry2 } from '167'
import { next } from './next'

export const pseudorandomNumbers: PseudorandomNumbers = curry2(
    function randomNumbers(
        quantity: number,
        prng: PseudorandomNumberGenerator,
    ): {
        values: ReadonlyArray<number>
        nextGenerator: PseudorandomNumberGenerator
    } {
        const values = Array(quantity)

        for (let i = 0; i < quantity; ++i) {
            const { value, nextGenerator } = next(prng)

            values[i] = value

            prng = nextGenerator
        }

        return { values, nextGenerator: prng }
    },
)

export interface PseudorandomNumbers {
    (quantity: number, prng: PseudorandomNumberGenerator): {
        values: ReadonlyArray<number>
        nextGenerator: PseudorandomNumberGenerator
    }

    (quantity: number): (
        prng: PseudorandomNumberGenerator,
    ) => {
        values: ReadonlyArray<number>
        nextGenerator: PseudorandomNumberGenerator
    }
}
