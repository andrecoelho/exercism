'use strict';

module.exports = class {
  constructor(word) {
    this.word = word.toLowerCase();
    this.wordSorted = this.word.split('').sort().join('');
  }

  matches(wordList) {
    if (arguments.length > 1) {
      wordList = [...arguments];
    } else if (!Array.isArray(wordList)) {
      wordList = [ wordList ];
    }

    return wordList.filter(word => {
      word = word.toLowerCase();

      if (this.word === word) {
        return false;
      }

      word = word.split('').sort().join('');

      return (this.wordSorted === word);
    });
  }
}