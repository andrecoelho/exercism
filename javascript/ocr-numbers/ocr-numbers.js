'use strict';

function translate(input) {
  switch(input) {
    case  ' _ \n' +
          '| |\n' +
          '|_|\n' +
          '   ':
          return '0';
    case  '   \n' +
          '  |\n' +
          '  |\n' +
          '   ':
          return '1';
    case  ' _ \n' +
          ' _|\n' +
          '|_ \n' +
          '   ':
          return '2';
    case  ' _ \n' +
          ' _|\n' +
          ' _|\n' +
          '   ':
          return '3';
    case  '   \n' +
          '|_|\n' +
          '  |\n' +
          '   ':
          return '4';
    case  ' _ \n' +
          '|_ \n' +
          ' _|\n' +
          '   ':
          return '5';
    case  ' _ \n' +
          '|_ \n' +
          '|_|\n' +
          '   ':
          return '6';
    case  ' _ \n' +
          '  |\n' +
          '  |\n' +
          '   ':
          return '7';
    case  ' _ \n' +
          '|_|\n' +
          '|_|\n' +
          '   ':
          return '8';
    case  ' _ \n' +
          '|_|\n' +
          ' _|\n' +
          '   ':
          return '9';
    default:
          return '?';
  }
}

function translateMultiple(rows) {
  let output = '';

  for (let i = 0, l = rows[0].length; i < l; i += 3) {
    output += translate(rows.map(r => r.slice(i, i + 3)).join('\n'));
  }

  return output;
}

module.exports = {
  convert(input) {
    let output = '';
    let rows = input.split('\n');

    if (rows.length > 4) {
      let joined = [];

      for (let i = 0, l = rows.length; i < l; i += 4) {
        joined.push(translateMultiple(rows.slice(i, i + 4)));
      }

      return joined.join(',');
    } else {
      if (rows[0].length === 3) {
        return translate(input);
      } else {
        return translateMultiple(rows);
      }
    }

    return output;
  }
}