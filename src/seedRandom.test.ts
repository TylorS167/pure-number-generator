import { Test, describe, given, it } from '@typed/test'

import { eq } from '@briancavalier/assert'
import { seedRandom } from './seedRandom'

export const test: Test = describe(`seedRandom`,
  given(`a seed value of 100`,
    it(`always returns the same value`, () => {
      const expectedValue = 0.8780517850536853

      const isEqual = eq(expectedValue)

      isEqual(seedRandom(100).next().value)
      isEqual(seedRandom(100).next().value)
      isEqual(seedRandom(100).next().value)
      isEqual(seedRandom(100).next().value)
      isEqual(seedRandom(100).next().value)
    }),
  ),
)
