var Queue = function() {
  this.total = 0;
  this.front = 0;
  this.back = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return this.total;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.back] = value;
  this.total++;
  this.back++;
};

Queue.prototype.dequeue = function() {
  if ( this.total > 0 ) {
    this.total--;
  }
  return this.storage[this.front++];
};


