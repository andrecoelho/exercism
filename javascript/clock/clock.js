'use strict';

class Clock {
  constructor(hour, minute) {
    this.minutes = ((hour || 0) * 60) + (minute || 0);
  }

  plus(minutes) {
    this.minutes += minutes;

    return this;
  }

  minus(minutes) {
    this.minutes -= minutes;

    return this;
  }

  toString() {
    let hour = Math.floor(this.minutes / 60) % 24;
    let minute = this.minutes % 60;

    if (hour < 0) {
      hour += 24;
    }

    if (minute < 0) {
      minute += 60;
    }

    return `${this.format(hour)}:${this.format(minute)}`;
  }

  format(digit) {
    return (digit < 10) ? `0${digit}` : digit;
  }

  equals(clock) {
    return (this.toString() === clock.toString());
  }
}

module.exports = {
  at: (hour, minute) => new Clock(hour, minute)
}