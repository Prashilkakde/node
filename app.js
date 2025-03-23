require("./xyz");

var name = "prashil";

// var { x, calculateSum } = require("./calculate/sum");
var { calculateSum, calculateMultiply } = require("./calculate");

const data = require("./calculate/data.json");

var a = 10;
var b = 20;

// console.log("x", x);
// console.log(global);
// // console.log(globalThis);

console.log("name", name);
calculateMultiply(a, b);
calculateSum(a, b);
console.log("data", data);
