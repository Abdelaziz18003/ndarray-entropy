'use strict';

const imhist = require('ndarray-imhist');

function entropy (ndarray) {
  let [, y] = imhist(ndarray, {plot: false});

  let ySum = sum(y);
  let s = 0;
  for (let i = 0; i < y.length; i++) {
    y[i] = y[i] / ySum;

    if (y[i] === 0) {
      continue;
    }

    s += y[i] * Math.log2(y[i]);
  }
  return -s;
}

function sum (array) {
  return array.reduce((a, b) => {
    return a + b;
  }) 
}

module.exports = entropy;