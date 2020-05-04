"use strict";

var array = [0, 1];

const fibonacci = () => {
  let value = 0;
  while (value < 350) {
    value = array[array.length - 1] + array[array.length - 2];
    array.push(value);
  }
  return array;
};

const isFibonnaci = (num) => {
  return array.includes(num);
};

module.exports = {
  fibonacci,
  isFibonnaci,
};
