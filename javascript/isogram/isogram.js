'use strict';

module.exports = class {
  constructor(word) {
    this._isIsogram = word
      .toLowerCase()
      .replace(/\s|-/g, '')
      .split('')
      .reduce((acc, char, i, arr) => [...acc, arr.filter(c => c === char).length], [])
      .filter(c => c > 1).length === 0;
  }

  isIsogram() {
    return this._isIsogram;
  }
}