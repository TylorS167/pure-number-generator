import { Random } from './Random'

const RANDOM_SEED = 20

export function seedRandom(seed: number): Random {
  const s123 = seed >>> 0

  return new Random(RANDOM_SEED, s123, s123, s123)
}
