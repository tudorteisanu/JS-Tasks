"use strict";

const usernameInput = prompt("Enter your name");
const passwordInput = prompt("Enter your password");

const usernameStored = "deny";
const passwordStored = "1111";

if (usernameInput === usernameStored && passwordInput === passwordStored) {
  alert("Hello");
} else if (usernameInput === usernameStored && passwordInput !== passwordStored) {
  alert("Invalid Password");
} else if (usernameInput !== usernameStored && passwordInput === passwordStored) {
  alert("Invalid Login");
} else if (usernameInput !== usernameStored ||  passwordInput !== passwordStored) {
  alert("Validation Error");
}
