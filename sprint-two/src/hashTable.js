

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) { // if hash table cell is empty
    this._storage.set(index, []);               // shove in a new array
    this._storage.get(index).push([k, v]);      // retrieve said array and push in a new key value pair
  } else {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index)[i][1] = v;
      } else {
        this._storage.get(index).push([k, v]);
      }
    }                                      // else
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tableCell = this._storage.get(index);
  for (var i = 0; i < tableCell.length; i++) {
    if (tableCell[i][0] === k) {
      return tableCell[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tableCell = this._storage.get(index);
  for (var i = 0; i < tableCell.length; i++) {
    if (tableCell[i][0] === k) {
      tableCell.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


