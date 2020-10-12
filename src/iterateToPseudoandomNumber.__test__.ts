import * as tt from '@typed/test'
import { createWithSeed } from './createWithSeed'
import { iterateToPseudorandomNumber } from './iterateToPseudorandomNumber'

export const test: tt.Test = tt.describe(`iterateToPseudorandomNumber`, [
    tt.given(`5 iteratations and a PseudorandomNumberGenerator`, [
        tt.it(`returns a psuedorandom number`, (assert: tt.Assertions) => {
            const random = createWithSeed(100)
            const { value, nextGenerator } = iterateToPseudorandomNumber(
                1000,
                random,
            )

            assert.equal(0.5745331489015371, value)

            assert.equal(
                0.40251842862926424,
                iterateToPseudorandomNumber(value, nextGenerator).value,
            )
        }),
    ]),
])
