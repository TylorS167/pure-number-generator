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

### `newRandom(s0: number, s1: number, s2: number, s3: number): Random`

Creates a new random number given 4 seed values.

```typescript
import { newRandom } from 'pure-number-generator'

const generator = newRandom(20, 40, 60, 80)

const { value, next } = generator.next()
```

### `seedRandom(seed: number): Random`

Creates a new random number generator given a single seed value

```typescript
import { seedRandom } from 'pure-number-generator'

const generator = seedRandom(100)

const { value, next } = generator.next()
```

### `generate(amount: number, generator: Random): ReadonlyArray<number>`

Creates an array of `n` amount of pseudo-random numbers

```typescript
import { generate, seedRandom } from 'pure-number-generator'

const values = generate(100, seedRandom(100)) // => [ 0.7805178083945066, ... ] 100 items
```

### `iterations(amount: number, generator: Random): number`

Generates a single number as the value by calling `Random.next()` `n` number of
times.

```typescript
import { iterations, seedRandom }

const value = iterations(1000, seedRandom(100)) // => 0.5745331489015371
```