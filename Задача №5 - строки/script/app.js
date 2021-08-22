"use strict";

const extractCurrencyValue = function cutCurrencySignFirstPos(str) {
  const signCut = str.slice(1);
  return parseInt(signCut);
};

alert(extractCurrencyValue("$300"));
