"use strict";

const a = 10;
const b = 2;
const c = 3;
let max;
let min;

if (a > b && a > c) {
  max = a;
} else if (b > c) {
  max = b;
} else {
  max = c;
}

if (a < b && a < c) {
  min = a;
} else if (b < c) {
  min = b;
} else {
  min = c;
}

console.log(`Max digit is ${max}\nMin digit is ${min}`);
