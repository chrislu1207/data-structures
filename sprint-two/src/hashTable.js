

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.tupleCount = 0;
};

HashTable.prototype.insert = function(k, v) { //O(n)
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) === undefined || this._storage.get(index) === []) {
    this._storage.set(index, []); 
    this._storage.get(index).push([k, v]);
  } else {
    var bucket = this._storage.get(index);
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      } else {
        bucket.push([k, v]);
      }
    }
  }
  this.tupleCount++;

  var upsizeLimit = this._limit * .75;

  if (this.tupleCount >= upsizeLimit) {
    var tuples = [];
    for (var m = 0; m < this._limit; m++) {
      if (this._storage.get(m)) {
        for (var n = 0; n < this._storage.get(m).length; n++) {
          tuples.push([this._storage.get(m)[n][0], this._storage.get(m)[n][1]]);
        }
        this._storage.set(m, []);
      }
    }
    this._limit = this._limit * 2;
    this._storage = LimitedArray(this._limit);
    this.tupleCount = 0;
    for (var l = 0; l < tuples.length; l++) {
      this.insert(tuples[l][0], tuples[l][1]);
    }
  }
  return;
};

HashTable.prototype.retrieve = function(k) { // O(n)
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) { // O(n)
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
  this.tupleCount--;
  var downsizeLimit = this._limit * .25;

  if (this.tupleCount <= downsizeLimit && this._limit !== 8) {
    var tuples = [];
    for (var m = 0; m < this._limit; m++) {
      if (this._storage.get(m)) {
        for (var n = 0; n < this._storage.get(m).length; n++) {
          tuples.push([this._storage.get(m)[n][0], this._storage.get(m)[n][1]]);
        }
        this._storage.set(m, []);
      }
    }
    this._limit = this._limit / 2;
    this._storage = LimitedArray(this._limit);
    this.tupleCount = 0;
    for (var l = 0; l < tuples.length; l++) {
      this.insert(tuples[l][0], tuples[l][1]);
    }
  }
  return;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


