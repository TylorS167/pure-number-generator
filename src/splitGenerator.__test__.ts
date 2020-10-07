import * as tt from '@typed/test'
import { createWithSeed } from './createWithSeed'
import { splitGenerator } from './splitGenerator'

export const test: tt.Test = tt.describe(`splitGenerator`, [
    tt.given(`a quantity and a PseudorandomNumberGenerator`, [
        tt.it(
            `returns n number of PseudorandomNumberGenerator`,
            (assert: tt.Assertions) => {
                const seed = createWithSeed(100)

                const generators = splitGenerator(100, seed)

                assert.equal(100, generators.length)
            },
        ),
    ]),
])
