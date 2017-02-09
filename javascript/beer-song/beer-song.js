'use strict';

module.exports = class BeerSong {
  constructor() {
    this.verses = [];
    const obotw = ' of beer on the wall';

    for (let i = 0; i <= 99; i++) {
      const bottleCount = ((i > 1) ? i + ' bottles' : (i > 0) ? '1 bottle' : 'No more bottles');

      this.verses.push(
        bottleCount +
        (obotw + ', ') +
        (bottleCount.toLowerCase() + ' of beer.\n') +
        ((i > 1) ?
          'Take one down and pass it around, '
          : (i > 0)
            ? 'Take it down and pass it around, '
            : 'Go to the store and buy some more, ') +
        (((i > 2) ? (i - 1) + ' bottles' : (i > 1) ? '1 bottle' : (i > 0) ? 'no more bottles' : '99 bottles')) +
        (obotw + '.\n')
      );
    }
  }

  verse(v) {
    if (typeof v === 'number' && v >= 0 && v <= 99) {
      return this.verses[v];
    }

    return '';
  }

  sing(start, end) {
    if (end === undefined) {
      return this.verses.slice(0, start + 1).reverse().join('\n');
    }

    return this.verses.slice(end, start + 1).reverse().join('\n');
  }
}