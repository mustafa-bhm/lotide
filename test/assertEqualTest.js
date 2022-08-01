const assertEqual = require("../assertEqual");
const head = require("../head");
const tail = require("../tail");
const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

/// Test Data
// assertEqual("Lighthouse Labs", "Bootcamp"); should fail
// assertEqual(1, 1); should pass
// assertEqual("Lighthouse", "Lighthouse"); should pass
// assertEqual(3, 4); should fail
// assertEqual([1, 2, 3], [1, 2, 3]); /// should fail
