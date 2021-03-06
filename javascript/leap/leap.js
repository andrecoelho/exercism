var Year = function(year) {
  this.year = year;
};

Year.prototype.isLeap = function() {
  if (typeof this.year !== 'number') {
    return false;
  }

  return (this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0;
};

module.exports = Year;