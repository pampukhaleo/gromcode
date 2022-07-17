'use strict';

/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */

const superRound = (num, prec) => {
  let precNum = 1
  for (let i = 0; i < prec; i++) {
    precNum *= 10
  }
  return [
    Math.floor(num * precNum) / precNum,
    Math.trunc(num * precNum) / precNum,
    Math.ceil(num * precNum) / precNum,
    Math.round(num * precNum) / precNum,
    Number(num.toFixed(prec))
  ]
};

// examples
console.log(superRound(11.12556, 2));; // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
superRound(6.11, 3); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
