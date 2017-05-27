const REAL_DIVISOR = 4294967296.0

export class Random {
  private s0: number
  private s1: number
  private s2: number
  private s3: number

  constructor(s0: number, s1: number, s2: number, s3: number) {
    this.s0 = s0
    this.s1 = s1
    this.s2 = s2
    this.s3 = s3
  }

  public next(): { value: number, random: Random } {
    const e = (this.s0 - rot(this.s1, 27)) >>> 0
    const s0 = (this.s1 ^ rot(this.s2, 17)) >>> 0
    const s1 = (this.s2 + this.s3) >>> 0
    const s2 = (this.s3 + e) >>> 0
    const s3 = (e + s0) >>> 0

    return { value: s3 / REAL_DIVISOR, random: new Random(s0, s1, s2, s3) }
  }
}

function rot(x: number, k: number): number {
  return (x << k) | (x >> (32 - k))
}
