

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.calledCounter = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (index === 0 && this._storage.get(0) !== undefined) {
    this._storage.set(1, v);
  } else {
    this._storage.set(index, v);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this.calledCounter) {
    return this._storage.get(1);
  }
  if (index === 0) {
    this.calledCounter = 1;
  }
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


