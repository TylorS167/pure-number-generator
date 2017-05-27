import { Test, describe, given, it } from '@typed/test'

import { eq } from '@briancavalier/assert'
import { iterations } from './iterations'
import { seedRandom } from './seedRandom'

export const test: Test =
  describe(`iterations`,
    given(`5 iteratations and a Random`,
      it(`returns a psuedo-random number`, () => {
        const random = seedRandom(100)
        const n = iterations(1000, random)

        eq(0.5745331489015371, n)
      }),
    ),
  )
