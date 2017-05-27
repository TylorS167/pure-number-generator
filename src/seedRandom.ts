import { Random } from './Random'

const RANDOM_SEED = 20

export function seedRandom(seed: number): Random {
  const calculatedSeed = seed >>> 0

  return new Random(RANDOM_SEED, calculatedSeed, calculatedSeed, calculatedSeed)
}
