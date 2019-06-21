'use strict';

const imhist = require('ndarray-imhist');

const defaultOptions = {
  channel: 0
}

function entropy (ndarray, options) {
  options = Object.assign({}, defaultOptions, options);
  validateOptions(ndarray, options);

  let [, y] = imhist(ndarray, {...options, plot: false});

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

function validateOptions (ndarray, options) {
  const maxChannel = ndarray.shape[2] - 2;
  if (options.channel && (options.channel > maxChannel || options.channel < 0)) {
    throw new Error(`Channel should be in the interval [0-${maxChannel}]`)
  }
}

module.exports = entropy;