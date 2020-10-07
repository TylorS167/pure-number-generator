import * as tt from '@typed/test'
import { createWithSeed } from './createWithSeed'
import { next } from './next'

export const test: tt.Test = tt.describe(`createWithSeed`, [
    tt.given(`a seed value of 100`, [
        tt.it(`always returns the same value`, (assert: tt.Assertions) => {
            const expectedValue = 0.8780517850536853

            const isEqual = (actualValue: unknown) =>
                assert.equal(expectedValue, actualValue)

            isEqual(next(createWithSeed(100)).value)
            isEqual(next(createWithSeed(100)).value)
            isEqual(next(createWithSeed(100)).value)
            isEqual(next(createWithSeed(100)).value)
            isEqual(next(createWithSeed(100)).value)
        }),
    ]),
])
