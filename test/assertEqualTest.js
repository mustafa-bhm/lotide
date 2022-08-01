const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse", "Lighthouse");
assertEqual(3, 4);
assertEqual([1, 2, 3], [1, 2, 3]); /// faild

assertEqual(head([5, 6, 7]), 5);
assertEqual(head([8]), 8);
assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
