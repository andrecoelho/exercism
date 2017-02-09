module.exports = class {
  constructor(birthday) {
    if (!(birthday instanceof Date)) {
      throw new Error('The date provided is not of type Date.');
    }

    this.birthday = birthday;
  }

  date() {
    return new Date(+this.birthday + (1e9 * 1000));
  }
}