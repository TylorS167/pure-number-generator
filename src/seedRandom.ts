import { RandomNumberGenerator } from './RandomNumberGenerator'

const RANDOM_SEED = 20

export function seedRandom(seed: number): RandomNumberGenerator {
  const calculatedSeed = seed >>> 0

  return new RandomNumberGenerator(RANDOM_SEED, calculatedSeed, calculatedSeed, calculatedSeed)
}
