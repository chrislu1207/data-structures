var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.total = 0;
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.total;
};

stackMethods.push = function(value) {
  this.storage[this.total] = value;
  this.total++;
  
};

stackMethods.pop = function() {
  if ( this.total > 0) {
    this.total--;
  }
  return this.storage[this.total];
};



