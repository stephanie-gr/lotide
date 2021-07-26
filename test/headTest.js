const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5]), 5);
assertEqual(head([]), "Hello");
assertEqual(head([5,6,7]), 57);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), 10);