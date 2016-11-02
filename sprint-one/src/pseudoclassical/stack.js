var Stack = function() {
  this.total = 0;
  this.storage = {};
};

Stack.prototype.size = function() {
  return this.total;
};

Stack.prototype.push = function(value) {
  this.storage[this.total] = value;
  this.total++;
};

Stack.prototype.pop = function() {
  if (this.total > 0) {
    this.total--;
  }
  return this.storage[this.total];
};