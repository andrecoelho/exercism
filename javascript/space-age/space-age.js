'use strict';

module.exports = class {
  constructor(seconds) {
    this.seconds = seconds;
    this.earthOrbit = 31557600;

    this.relativeOrbits = new Map([
      [ 'Earth', 1 ],
      [ 'Mercury', 0.2408467 ],
      [ 'Venus', 0.61519726 ],
      [ 'Mars', 1.8808158 ],
      [ 'Jupiter', 11.862615 ],
      [ 'Saturn', 29.447498 ],
      [ 'Uranus', 84.016846 ],
      [ 'Neptune', 164.79132 ],
    ]);

    this.relativeOrbits.forEach((ro, planet) => {
      this[`on${planet}`] = function() {
        return Number(Number(this.seconds / (this.earthOrbit * ro)).toFixed(2));
      }
    });
  }
}