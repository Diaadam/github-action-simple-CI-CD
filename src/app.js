'use strict';

const { add, subtract, multiply, divide } = require('./calculator');

console.log('Simple Calculator App');
console.log('---------------------');
console.log(`10 + 5 = ${add(10, 5)}`);
console.log(`10 - 5 = ${subtract(10, 5)}`);
console.log(`10 * 5 = ${multiply(10, 5)}`);
console.log(`10 / 5 = ${divide(10, 5)}`);
