const REAL_DIVISOR = 4294967296.0

export class Random {
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

  public next(): { value: number, next: Random } {
    const e = (this.seed0 - swapLowAndHighBits(this.seed1, 27)) >>> 0
    const s0 = (this.seed1 ^ swapLowAndHighBits(this.seed2, 17)) >>> 0
    const s1 = (this.seed2 + this.seed3) >>> 0
    const s2 = (this.seed3 + e) >>> 0
    const s3 = (e + s0) >>> 0

    return { value: s3 / REAL_DIVISOR, next: new Random(s0, s1, s2, s3) }
  }
}

function swapLowAndHighBits(x: number, k: number): number {
  return (x << k) | (x >> (32 - k))
}
