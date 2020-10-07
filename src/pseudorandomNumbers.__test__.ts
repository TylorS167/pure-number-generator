import * as tt from '@typed/test'
import { createWithSeed } from './createWithSeed'
import { pseudorandomNumbers } from './pseudorandomNumbers'

export const test: tt.Test = tt.describe(`pseudorandomNumbers`, [
    tt.given(`an amount of 5 and a PseudorandomNumberGenerator`, [
        tt.it(
            `returns an array containing 5 psuedorandom numbers`,
            (assert: tt.Assertions) => {
                const random = createWithSeed(1000)

                const { values } = pseudorandomNumbers(5, random)

                const expected = [
                    0.7805178083945066,
                    0.5305106327868998,
                    0.5493107170332223,
                    0.6980533902533352,
                    0.7255421064328402,
                ]

                assert.equal(expected, values)
            },
        ),
    ]),
])
