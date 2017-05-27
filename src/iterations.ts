import { Random } from './Random'

export function iterations(amount: number, seed: Random): number {
  let n = 0

  for (let i = 0; i < amount; ++i) {
    const { value, next } = seed.next()

    n = value

    seed = next
  }

  return n
}
