"use strict";

const dividers = (number) => {
  for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
      console.log(i);
    }
  }
};

dividers(5);
