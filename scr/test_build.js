// test_build.js
// ensure the built index.js works properly

const dummyCalcul = require("../dist");

console.log("===== test_build.js: T001 =====");
const result = dummyCalcul.add1000(9);
const expected = 1009;
//const expected = 1001;
console.assert(result === expected, {result: result, expected: expected});

console.log("===== test_build.js: The End =====");
