# Purely Functional Pseudorandom Number Generator

> A small library that generates pseudorandom numbers between 0 and 1.

The pseudorandom number generator is a TypeScript port of Bob Jenkins’ [small noncryptographic PRNG](http://www.burtleburtle.net/bob/rand/smallprng.html) (a.k.a BurtlePRNG).

It is suitable for large statistical calculations, but not of cryptographic quality.

When you need repeatable results, `pure-number-generator` let’s you use the same seed to initialize the PRNG, which in return provides the same sequence of generated pseudorandom numbers.

The algorithm is on par with V8’s built-in PRNG.

`pure-number-generator` is based on a [gist](https://gist.github.com/briancavalier/f71314fcff5e7870608e) by @briancavalier. Many, many thanks to him!

## Get it

```sh
npm install --save pure-number-generator
# or
yarn add pure-number-generator
```

## API

### `createWithSeeds(seed0: number, seed1: number, seed2: number, seed3: number): PseudorandomNumberGenerator`

Creates a new pseudorandom number generator, given four seed values.

```typescript
import { createWithSeeds, next } from 'pure-number-generator'

const generator = createWithSeeds(20, 40, 60, 80)

const { value, nextGenerator } = next(generator)
```

### `createWithSeed(seed: number): PseudorandomNumberGenerator`

Creates a new pseudorandom number generator, given a single seed value.

```typescript
import { createWithSeed, next } from 'pure-number-generator'

const generator = createWithSeed(100)

const { value, nextGenerator } = next(generator)
```

### `next(generator: PseudorandomNumberGenerator): { value: number, nextGenerator: PseudorandomNumberGenerator }`

Given a random number generator, it returns an object containing a pseudo-random `value` and the `next` pseudorandom number generator.

```typescript
const { createWithSeed, next } from 'pure-number-generator'

const generator = createWithSeed(100)

const { value, nextGenerator } = next(generator)
```

### `pseudorandomNumbers(quantity: number, generator: PseudorandomNumberGenerator): { values: ReadonlyArray<number>, nextGenerator: PseudorandomNumberGenerator }`

Creates an array of `n` amount of pseudo-random numbers derived from given generator.

```typescript
import { pseudorandomNumbers, createWithSeed } from 'pure-number-generator'

const values = pseudorandomNumbers(100, createWithSeed(100)) // => [ 0.7805178083945066, ... ] 100 items
```

### `iterateToPseudorandomNumber(iterations: number, seed: PseudorandomNumberGenerator): { value: number, nextGenerator: PseudorandomNumberGenerator }`

Generates a single number as the value by calling `next` `n` number of times. All numbers given as `iterations` will be rounded to the nearest integer, and all numbers less than 1 will default to 1.

```typescript
import { iterateToPseudorandomNumber, createWithSeed }

const value = iterateToPseudorandomNumber(1000, createWithSeed(100)) // => 0.5745331489015371
```

### `splitGenerator(quantity: number, seed: PseudorandomNumberGenerator): ReadonlyArray<PseudorandomNumberGenerator>`

Given a quantity and a seed, it creates an array of `n` number pseudorandom number generators.

```typescript
import { createWithSeed, splitGenerator } from 'pure-number-generator'

const seed = createWithSeed(100)

const generators = splitGenerator(100, seed) // => [ PseudorandomNumberGenerator, ... ]

console.log(generators.length) // => 100
```

## License

`pure-number-generator` is [MIT licensed](./LICENSE).