let Hamming = function() {}

Hamming.prototype.compute = function(strandA, strandB) {
  if (typeof strandA !== 'string' || typeof strandB !== 'string') {
    throw new Error('Both arguments need to be of type String.');
  }

  if (strandA.length !== strandB.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  let diffCount = 0;

  for (let i = 0, l = strandA.length; i < l; i++) {
    if (strandA[i] !== strandB[i]) {
      diffCount++;
    }
  }

  return diffCount;
}

module.exports = Hamming;