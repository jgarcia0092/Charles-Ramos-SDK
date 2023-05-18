# The Lord of the Rings SDK

Typescript SDK for The Lord of the Rings API

## Access Token
Before using the SDK, you'll need to get an access token from https://the-one-api.dev.

## Installation

Using npm:

```bash
$ npm install @charles-dr/lord-of-rings
```

Using yarn:
```bash
$ yarn add @charles-dr/lord-of-rings
```

Using pnpm:
```bash
$ pnpm add @charles-dr/lord-of-rings
```

Once the package is installed, you can import the library.

```js
import LordOfRings from '@charles-dr/lord-of-rings';
```

or

```js
import { LordOfRings } from '@charles-dr/lord-of-rings';
```

## Usage

To get movies:

```js
import LordOfRings from '@charles-dr/lord-of-rings';

const client = new LordOfRings("<YOUR ACCESS TOKEN>");

const movies = await client.movie.getAll();

// you can use the pagination also.
const movies = await client.movie.getAll(10, 5); // limit: 10, offset: 5
```

To get quotes:

```js
const quotes = await client.quote.getAll();

// with pagination
const quotes = await client.quote.getAll(10, 5);
```