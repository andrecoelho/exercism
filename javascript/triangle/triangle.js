'use strict';

module.exports = class {
  constructor(sideA, sideB, sideC) {
    this.sides = [ sideA, sideB, sideC ].sort((a, b) => a - b);
    this.sidesSet = new Set(this.sides);
  }

  kind() {
    if (this.sides[0] <= 0) {
      throw new Error('All sides must have positive length.');
    }

    if (this.sides[0] + this.sides[1] < this.sides[2]) {
      throw new Error('Impossible triangle.');
    }

    switch (this.sidesSet.size) {
      case 1: return 'equilateral';
      case 2: return 'isosceles';
      default: return 'scalene';
    }
  }
}