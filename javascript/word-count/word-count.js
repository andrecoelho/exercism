module.exports = class {
  count(phrase) {
    if (typeof phrase !== 'string') {
      throw new Error('Phrase is not of type String.');
    }

    return phrase
      .trim()
      .replace(/[\n\t\s]+/, ' ')
      .toLowerCase()
      .split(' ')
      .reduce((tokenCounter, word) => {
        tokenCounter[word] = ++tokenCounter[word] || 1;

        return tokenCounter;
      }, {});
  }
}