'use strict';

module.exports = class {
  transform(old) {
    let result = {};

    Object.keys(old).forEach(k => {
      if (old.hasOwnProperty(k)) {
        old[k].forEach(l => result[l.toLowerCase()] = parseInt(k));
      }
    });

    return result;
  }
}