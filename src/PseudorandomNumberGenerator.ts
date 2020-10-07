export interface PseudorandomNumberGenerator {
    readonly seeds: () => [number, number, number, number]
}

export class PseudorandomNumberGeneratorImpl
    implements PseudorandomNumberGenerator {
    private seed0: number
    private seed1: number
    private seed2: number
    private seed3: number

    constructor(seed0: number, seed1: number, seed2: number, seed3: number) {
        this.seed0 = seed0
        this.seed1 = seed1
        this.seed2 = seed2
        this.seed3 = seed3
    }

    public seeds(): [number, number, number, number] {
        return [this.seed0, this.seed1, this.seed2, this.seed3]
    }
}
