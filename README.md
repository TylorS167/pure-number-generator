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

#### `createWithSeeds(seed0: number, seed1: number, seed2: number, seed3: number): RandomNumberGenerator`

Creates a new random number generator given 4 seed values.

```typescript
import { createWithSeeds } from 'pure-number-generator'

const generator = createWithSeeds(20, 40, 60, 80)

const { value, next } = generator.next()
```

#### `createWithSeed(seed: number): RandomNumberGenerator`

Creates a new random number generator given a single seed value.

```typescript
import { createWithSeed } from 'pure-number-generator'

const generator = createWithSeed(100)

const { value, next } = generator.next()
```

#### `randomNumbers(quantity: number, generator: RandomNumberGenerator): ReadonlyArray<number>`

Creates an array of `n` amount of pseudo-random numbers derived from given generator.

```typescript
import { randomNumbers, createWithSeed } from 'pure-number-generator'

const values = randomNumbers(100, createWithSeed(100)) // => [ 0.7805178083945066, ... ] 100 items
```

#### `iterateToRandomNumber(iterations: number, seed: RandomNumberGenerator): number`

Generates a single number as the value by calling `Random.next()` `n` number of
times.

```typescript
import { iterateToRandomNumber, createWithSeed }

const value = iterateToRandomNumber(1000, createWithSeed(100)) // => 0.5745331489015371
```