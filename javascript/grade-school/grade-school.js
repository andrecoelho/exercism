'use strict';

module.exports = class {
  constructor() {
    this._roster = {};
  }

  add(name, grade) {
    if (Array.isArray(this._roster[grade])) {
      this._roster[grade].push(name);
      this._roster[grade].sort();
    } else {
      this._roster[grade] = [ name ];
    }
  }

  roster() {
    return this._roster;
  }

  grade(g) {
    if (Array.isArray(this._roster[g])) {
      return this._roster[g];
    } else {
      return [];
    }
  }
}