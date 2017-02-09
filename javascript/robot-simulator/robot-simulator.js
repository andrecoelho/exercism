'use strict';

module.exports = class {
  constructor() {
    this.validBearings = [ 'north', 'east', 'south', 'west' ];

    this.instructionsMap = {
      R: 'turnRight',
      L: 'turnLeft',
      A: 'advance'
    }
  }

  orient(bearing) {
    if (this.validBearings.indexOf(bearing) >= 0) {
      this.bearing = bearing;
    }
  }

  turnRight() {
    this.bearing = this.validBearings[
        (this.validBearings.findIndex(b => b == this.bearing) + 1)
      % this.validBearings.length];
  }

  turnLeft() {
    this.bearing = this.validBearings[
        ((this.validBearings.findIndex(b => b == this.bearing) - 1) + this.validBearings.length)
      % this.validBearings.length];
  }

  at(x, y) {
    this.coordinates = [ x, y ];
  }

  advance() {
    switch (this.bearing) {
      case 'east': this.coordinates[0] += 1; break;
      case 'west': this.coordinates[0] -= 1; break;
      case 'north': this.coordinates[1] += 1; break;
      case 'south': this.coordinates[1] -= 1;
    }
  }

  instructions(inst) {
    return inst.split('').map(i => this.instructionsMap[i]);
  }

  place(position) {
    this.coordinates = [ position.x, position.y ];
    this.orient(position.direction);
  }

  evaluate(instructions) {
    this.instructions(instructions).forEach(i => this[i]());
  }
}