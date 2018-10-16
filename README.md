# jest-matcher-one-of

[![Build Status](https://travis-ci.org/d4nyll/jest-matcher-one-of.svg?branch=master)](https://travis-ci.org/d4nyll/jest-matcher-one-of)
[![codecov](https://codecov.io/gh/d4nyll/jest-matcher-one-of/branch/master/graph/badge.svg)](https://codecov.io/gh/d4nyll/jest-matcher-one-of)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d301a1416e9ef124382f/test_coverage)](https://codeclimate.com/github/d4nyll/jest-matcher-one-of/test_coverage) 
[![CodeFactor](https://www.codefactor.io/repository/github/d4nyll/jest-matcher-one-of/badge)](https://www.codefactor.io/repository/github/d4nyll/jest-matcher-one-of)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9ab3b405ea4c4c9297759dce2cea8e10)](https://www.codacy.com/app/d4nyll/jest-matcher-one-of?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=d4nyll/jest-matcher-one-of&amp;utm_campaign=Badge_Grade)
[![Maintainability](https://api.codeclimate.com/v1/badges/d301a1416e9ef124382f/maintainability)](https://codeclimate.com/github/d4nyll/jest-matcher-one-of/maintainability) 
[![Known Vulnerabilities](https://snyk.io/test/github/d4nyll/jest-matcher-one-of/badge.svg)](https://snyk.io/test/github/d4nyll/jest-matcher-one-of)
[![Greenkeeper badge](https://badges.greenkeeper.io/d4nyll/jest-matcher-one-of.svg)](https://greenkeeper.io/)

A Jest matcher (`toBeOneOf`) to test if a value is one of many (like enums).

## Installation

1. Add the package

    ```sh
    yarn add jest-matcher-one-of --dev
    npm install jest-matcher-one-of --save-dev
    ```

2. Require the package at the root of your test files

    ```js
    require('jest-matcher-one-of');
    import 'jest-matcher-one-of'; // Using ES6 w/ Babel or TypeScript
    ```

## Usage

```js
expect(1).toBeOneOf([1, 2]);
expect(1).not.toBeOneOf([2, 3, 4]);
expect(1).toBeOneOf(1); // Also forgiving for non-array values
```

## Contributing

Get the source code and run the tests.

```sh
$ git clone git@github.com:d4nyll/jest-matcher-one-of.git
$ yarn        # or npm install
$ yarn test   # or npm test
```

