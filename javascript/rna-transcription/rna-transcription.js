function DnaTranscriber() {
  this.transKeys = new Map([
    ['G', 'C'],
    ['C', 'G'],
    ['T', 'A'],
    ['A', 'U']
  ]);
}

DnaTranscriber.prototype.toRna = function(dnaStrand) {
  if (this.transKeys === undefined) {
    throw new Error('DNA Transcriber was not properly initialized.');
  }

  if (typeof dnaStrand !== 'string') {
    throw new Error('DNA strand is not of type String.');
  }

  if (dnaStrand.match(/[^GCTA]+/)) {
    throw new Error('Invalid DNA strand.');
  }

  return Array.from(dnaStrand, n => this.transKeys.get(n)).join('');
};

module.exports = DnaTranscriber;