import { Test, describe, given, it } from '@typed/test'

import { createWithSeed } from './createWithSeed'
import { eq } from '@briancavalier/assert'
import { splitGenerator } from './splitGenerator'

export const test: Test =
  describe(`splitGenerator`,
    given(`a quantity and a seed generator`,
      it(`returns n number of generators`, () => {
        const seed = createWithSeed(100)

        const generators = splitGenerator(100, seed)

        eq(100, generators.length)
      }),
    ),
  )
