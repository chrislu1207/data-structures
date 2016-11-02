var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var index = 0;
  var current = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index] = value;
    size++;
    index++;
    //console.log(storage);
  };

  someInstance.dequeue = function() {

    if ( size > 0 ) {
      size--;
    }

    return storage[current++];
    
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
