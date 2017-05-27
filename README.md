# Purely Functional Random Number Generator

A small library that generates pseudo-random numbers between 0 and 1.

Based on a [gist](https://gist.github.com/briancavalier/f71314fcff5e7870608e) by @briancavalier.
Many many thanks to him!

## Get it

```sh
yarn add pure-number-generator
# or
npm install --save pure-number-generator
```

## API

##### `createWithSeeds(seed0: number, seed1: number, seed2: number, seed3: number): RandomNumberGenerator`

Creates a new random number generator given 4 seed values.

```typescript
import { createWithSeeds, next } from 'pure-number-generator'

const generator = createWithSeeds(20, 40, 60, 80)

const { value, nextGenerator } = next(generator)
```

##### `createWithSeed(seed: number): RandomNumberGenerator`

Creates a new random number generator given a single seed value.

```typescript
import { createWithSeed, next } from 'pure-number-generator'

const generator = createWithSeed(100)

const { value, nextGenerator } = next(generator)
```

##### `next(generator: RandomNumberGenerator): { value: number, nextGenerator: RandomNumberGenerator }`

Given a random number generator it returns an object containing a pseudo-random `value` and
the `next` random number generator.

```typescript
const { createWithSeed, next } from 'pure-number-generator'

const generator = createWithSeed(100)

const { value, nextGenerator } = next(generator)
```

##### `randomNumbers(quantity: number, generator: RandomNumberGenerator): { values: ReadonlyArray<number>, nextGenerator: RandomNumberGenerator }`

Creates an array of `n` amount of pseudo-random numbers derived from given generator.

```typescript
import { randomNumbers, createWithSeed } from 'pure-number-generator'

const values = randomNumbers(100, createWithSeed(100)) // => [ 0.7805178083945066, ... ] 100 items
```

##### `iterateToRandomNumber(iterations: number, seed: RandomNumberGenerator): { value: number, nextGenerator: RandomNumberGenerator }`

Generates a single number as the value by calling `next` `n` number of
times. All numbers given as `iterations` will be rounded to the nearest integer and
all numbers less than 1 will default to 1.

```typescript
import { iterateToRandomNumber, createWithSeed }

const value = iterateToRandomNumber(1000, createWithSeed(100)) // => 0.5745331489015371
```

##### `splitGenerator(quantity: number, seed: RandomNumberGenerator): ReadonlyArray<RandomNumberGenerator>`

Given a quantity and a seed, it creates an array of `n` number random number generators.

```typescript
import { createWithSeed, splitGenerator } from 'pure-number-generator'

const seed = createWithSeed(100)

const generators = splitGenerator(100, seed) // => [ RandomNumberGenerator, ... ]

console.log(generators.length) // => 100
```