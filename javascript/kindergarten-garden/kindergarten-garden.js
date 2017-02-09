'use strict';

module.exports = class {
  constructor(diagram, students) {
    this.dictionary = {
      G: 'grass',
      C: 'clover',
      R: 'radishes',
      V: 'violets'
    }

    students = students || [
      'Alice', 'Bob', 'Charlie', 'David',
      'Eve', 'Fred', 'Ginny', 'Harriet',
      'Ileana', 'Joseph', 'Kincaid', 'Larry'
    ];

    students.sort();

    const lines = diagram.split('\n');
    const firstRow = lines[0];
    const secondRow = lines[1];

    for (let i = 0, j = 0, l = students.length; i < l; i++, j = i * 2) {
      this[students[i].toLowerCase()] = this.plantNames(firstRow.slice(j, j + 2) + secondRow.slice(j, j + 2));
    }
  }

  plantNames(plants) {
    return plants.split('').map(p => this.dictionary[p]);
  }
}