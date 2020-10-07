import {
    PseudorandomNumberGenerator,
    PseudorandomNumberGeneratorImpl,
} from './PseudorandomNumberGenerator'

const RANDOM_SEED = 20

export function createWithSeed(seed: number): PseudorandomNumberGenerator {
    const calculatedSeed = seed >>> 0

    return new PseudorandomNumberGeneratorImpl(
        RANDOM_SEED,
        calculatedSeed,
        calculatedSeed,
        calculatedSeed,
    )
}
