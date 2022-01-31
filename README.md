<p align="center">
  <a href="https://www.rosetta-api.org">
    <img width="90%" alt="Rosetta" src="https://www.rosetta-api.org/img/rosetta_header.png">
  </a>
</p>
<h3 align="center">
   Rosetta Typescript Client
</h3>
<p align="center">
Typescript Rest client to connect apps with Rosetta nodes.
</p>

[![Version](https://img.shields.io/npm/v/rosetta-client-typescript.svg)](https://npmjs.org/package/rosetta-client-typescript)
[![Downloads/week](https://img.shields.io/npm/dw/rosetta-client-typescript.svg)](https://npmjs.org/package/rosetta-client-typescript)
[![License](https://img.shields.io/npm/l/rosetta-client-typescript.svg)](https://github.com/fboucquez/rosetta-client-typescript/blob/master/package.json)
[![Build](https://github.com/fboucquez/rosetta-client-typescript/actions/workflows/build.yml/badge.svg)](https://github.com/fboucquez/rosetta-client-typescript/actions/workflows/build.yml)
[![Api Doc](https://img.shields.io/badge/api-doc-blue.svg)](https://fboucquez.github.io/rosetta-client-typescript/)

## Overview
The `rosetta-client-typescript` provides a generated typescript reset client. The client uses `fetch` under the hood.

Much of the code in this repository is generated from the [rosetta-specifications](https://github.com/coinbase/rosetta-specifications).

## Documentation
Before diving into the SDK, we recommend taking a look at the Rosetta API Docs:

* [Overview](https://www.rosetta-api.org/docs/welcome.html)
* [Data API](https://www.rosetta-api.org/docs/data_api_introduction.html)
* [Construction API](https://www.rosetta-api.org/docs/construction_api_introduction.html)


## Usage

Install this package:

```
npm install rosetta-client-typescript
```

Create and use a Rosetta rest client:

```typescript
import { RosettaRestClientFactory } from 'rosetta-client-typescript';

const restClientFactory = new RosettaRestClientFactory({
    url: 'http://localhost:8080',
});

const networkClient = restClientFactory.network();
const networkList = await networkClient.networkList({
    metadataRequest: {},
});
console.log(JSON.stringify(networkList, null, 2));
```

## Development
* `npm install` to install dependencies
* `npm run gen` to generate types and helpers
* `npm test` to run tests
* `npm style:fix` to pretty, index, and lint the source code (including generated code)

## License
This project is available open source under the terms of the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).

© 2022 Fernando Boucquez
