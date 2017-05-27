import { RandomNumberGenerator } from './RandomNumberGenerator'

const REAL_DIVISOR = 4294967296.0

export function next(
  randomNumberGenerator: RandomNumberGenerator,
): { value: number, nextGenerator: RandomNumberGenerator }
{
  const [ seed0, seed1, seed2, seed3 ] = randomNumberGenerator.seeds()

  const e = (seed0 - swapLowAndHighBits(seed1, 27)) >>> 0
  const s0 = (seed1 ^ swapLowAndHighBits(seed2, 17)) >>> 0
  const s1 = (seed2 + seed3) >>> 0
  const s2 = (seed3 + e) >>> 0
  const s3 = (e + s0) >>> 0

  return { value: s3 / REAL_DIVISOR, nextGenerator: new RandomNumberGenerator(s0, s1, s2, s3) }
}

function swapLowAndHighBits(x: number, k: number): number {
  return (x << k) | (x >> (32 - k))
}
