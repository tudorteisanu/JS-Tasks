"use strict";

const ucFirst =  function firstLetterToUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(ucFirst("valera"));
