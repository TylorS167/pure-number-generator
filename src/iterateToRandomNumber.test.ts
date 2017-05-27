import { Test, describe, given, it } from '@typed/test'

import { createWithSeed } from './createWithSeed'
import { eq } from '@briancavalier/assert'
import { iterateToRandomNumber } from './iterateToRandomNumber'

export const test: Test =
  describe(`iterateToRandomNumber`,
    given(`5 iteratations and a Random`,
      it(`returns a psuedo-random number`, () => {
        const random = createWithSeed(100)
        const n = iterateToRandomNumber(1000, random)

        eq(0.5745331489015371, n)
      }),
    ),
  )
