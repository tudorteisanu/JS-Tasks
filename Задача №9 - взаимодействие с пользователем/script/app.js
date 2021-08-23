"use strict";

const userName = prompt("Введи имя");
alert(`Привет ${userName} `);

const userCheck = confirm("Js знаешь ?");
if (userCheck === true) {
  alert("Красава");
} else {
  alert("Можно начать изучение прямо сейчас");
}
