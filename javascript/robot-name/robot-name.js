'use strict';

let registry = new Set();

module.exports = class {
  constructor() {
    this.genName();
  }

  reset() {
    this.genName();
  }

  genName() {
    const a = 'A'.charCodeAt(0);
    const z = 'Z'.charCodeAt(0);

    let name = '';

    for (let i = 0; i < 2; i++) {
      name += String.fromCharCode(Math.trunc(Math.random() * (z - a) + a));
    }

    for (let i = 0; i < 3; i++) {
      name += Math.trunc(Math.random() * (10 - 0) + 0);
    }

    if (registry.has(name)) {
      this.genName();
    } else {
      this.name = name;
      registry.add(this.name);
    }
  }
}