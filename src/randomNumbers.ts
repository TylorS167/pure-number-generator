import { RandomNumberGenerator } from './RandomNumberGenerator'
import { curry2 } from '167'
import { next } from './next'

export const randomNumbers: RandomNumbers =
  curry2(
    function randomNumbers(
      quantity: number,
      randomNumberGenerator: RandomNumberGenerator,
    ): { values: ReadonlyArray<number>, nextGenerator: RandomNumberGenerator }
    {
      const values = Array(quantity)

      for (let i = 0; i < quantity; ++i) {
        const { value, nextGenerator } = next(randomNumberGenerator)

        values[i] = value

        randomNumberGenerator = nextGenerator
      }

      return { values, nextGenerator: randomNumberGenerator }
    },
  )

export interface RandomNumbers {
  (quantity: number, randomNumberGenerator: RandomNumberGenerator):
    { values: ReadonlyArray<number>, nextGenerator: RandomNumberGenerator }

  (quantity: number): (randomNumberGenerator: RandomNumberGenerator) =>
    { values: ReadonlyArray<number>, nextGenerator: RandomNumberGenerator }
}
