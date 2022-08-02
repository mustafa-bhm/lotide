# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install mustafa200/lotide`

**Require it:**

`const _ = require('mustafa200/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head`: returns the first element of an array
- `tail`: returns the last element of an array
- `middle` : returns the middle element of an array
- `assertArraysEqual`: a function to compare two arrays with an assertion
- `assertEqual`: a function to compare two primitives with an assertion
- `assertObjectsEqual` : a function to compare two objects
- `countLetters`: returns the count of the occurence of letters in a string
- `countOnly`: counts the elemnts of an array or an object
- `eqArrays`: to compare two arrays
- `eqObjects`:to compare two objects
- `findKey` : returns the key of an object
- `findKeyByValue`: returns a key in an object by looking its value
- `letterPositions`: returns the position of each letter in a giving string
- `map`: maps an array into a new one
- `takeUntil`; Returns elemnts of an arry until a giving value
- `without`; Returns an array with unwanted elemnts removed .

### Keywords

LHL Lotide
