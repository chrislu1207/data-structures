var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.total = 0;
  newQueue.front = 0;
  newQueue.back = 0;
  return _.extend(newQueue, queueMethods);
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.back] = value;
  this.total++;
  this.back++;
};

queueMethods.dequeue = function() {
  if (this.total > 0) {
    this.total--;
  }
  return this.storage[this.front++];
};

queueMethods.size = function() {
  return this.total;
};
