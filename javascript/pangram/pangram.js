'use strict';

module.exports = class {
  constructor(sentence) {
    sentence = sentence.toLowerCase();

    this._isPangram = 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every(l => sentence.includes(l));
  }

  isPangram() {
    return this._isPangram;
  }
}