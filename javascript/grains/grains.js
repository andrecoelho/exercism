'use strict';

const bigInt = require('./big-integer');

module.exports = class {
  square(n) {
    return bigInt(2).pow(n - 1).toString();
  }

  total() {
    return bigInt(2).pow(64).minus(1).toString();
  }
}