import {
    PseudorandomNumberGenerator,
    PseudorandomNumberGeneratorImpl,
} from './PseudorandomNumberGenerator'

const REAL_DIVISOR = 4294967296.0
const FIRST_AVALANCHE_ROTATION = 27
const SECOND_AVALANCHE_ROTATION = 17

export function next(
    prng: PseudorandomNumberGenerator,
): { value: number; nextGenerator: PseudorandomNumberGenerator } {
    const [seed0, seed1, seed2, seed3] = prng.seeds()

    const e = (seed0 - rotate(seed1, FIRST_AVALANCHE_ROTATION)) >>> 0
    const s0 = (seed1 ^ rotate(seed2, SECOND_AVALANCHE_ROTATION)) >>> 0
    const s1 = (seed2 + seed3) >>> 0
    const s2 = (seed3 + e) >>> 0
    const s3 = (e + s0) >>> 0

    return {
        value: s3 / REAL_DIVISOR,
        nextGenerator: new PseudorandomNumberGeneratorImpl(s0, s1, s2, s3),
    }
}

function rotate(x: number, k: number): number {
    return (x << k) | (x >> (32 - k))
}
