'use strict';

module.exports = class {
  constructor(number) {
    this._number = number.replace(/[^\d]/g, '');
  }

  number() {
    if (this._number.length === 10) {
      return this._number;
    }

    if (this._number.length === 11 && this._number.startsWith('1')) {
      return this._number.slice(1);
    }

    return '0000000000';
  }

  areaCode() {
    return this._number.slice(0, 3);
  }

  toString() {
    return this._number.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }
}