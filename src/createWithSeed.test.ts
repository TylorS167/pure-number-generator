import { Test, describe, given, it } from '@typed/test'

import { createWithSeed } from './createWithSeed'
import { eq } from '@briancavalier/assert'
import { next } from './next'

export const test: Test = describe(`createWithSeed`,
  given(`a seed value of 100`,
    it(`always returns the same value`, () => {
      const expectedValue = 0.8780517850536853

      const isEqual = eq(expectedValue)

      isEqual(next(createWithSeed(100)).value)
      isEqual(next(createWithSeed(100)).value)
      isEqual(next(createWithSeed(100)).value)
      isEqual(next(createWithSeed(100)).value)
      isEqual(next(createWithSeed(100)).value)
    }),
  ),
)
