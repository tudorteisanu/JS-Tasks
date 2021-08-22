"use strict";

const userInput = +prompt("Enter a Value");

if (userInput > 0) {
  alert(1);
} else if (userInput < 1 && userInput != 0) {
  alert(-1);
} else if (userInput == 0) {
  alert(0);
} else if (isNaN(userInput)) {
  alert("Error");
}
