var BinarySearchTree = function(value) {
  var newBST = {};
  newBST.value = value;
  newBST.left = {};
  newBST.right = {};
  _.extend(newBST, BSTMethods);
  return newBST;
};

var BSTMethods = {};

BSTMethods.insert = function(value) { //O(log n)

  var insertNode = function(node) {
    if (value < node.value) {
      if (node.left.value === undefined) {
        node.left = BinarySearchTree(value);
      } else {
        insertNode(node.left);
      }
    } else if (value > node.value) {
      if (node.right.value === undefined) {
        node.right = BinarySearchTree(value);
      } else {
        insertNode(node.right);
      }
    }
  };
  insertNode(this);
};

BSTMethods.contains = function(value) { //O(log n)
  var result = false;
  var traverseTree = function(node) {
    if (value === node.value) {
      result = true;
    }
    if (value < node.value && node.left.value !== undefined) {
      traverseTree(node.left);
    } 
    if (value > node.value && node.right.value !== undefined) {
      traverseTree(node.right);
    }
    
  };
  traverseTree(this);
  return result;
};

BSTMethods.depthFirstLog = function(callback) { //O(log n)
  var depthFirstTravel = function(node) {
    callback(node.value);
    if (node.left.value !== undefined) {
      depthFirstTravel(node.left);
    }
    if (node.right.value !== undefined) {
      depthFirstTravel(node.right);
    }
    return;
  };
  depthFirstTravel(this);
};

BSTMethods.breadthFirstLog = function(callback) {
  callback(this.value);
  var breadthFirstTravel = function(node) {
    if (node.left.value && node.right.value) {
      callback(node.left.value);
      callback(node.right.value);
      breadthFirstTravel(node.left);
      breadthFirstTravel(node.right);
    } else if (node.left.value && !node.right.value) {
      callback(node.left.value);
      breadthFirstTravel(node.left);
    } else if (!node.left.value && node.right.value) {
      callback(node.right.value);
      breadthFirstTravel(node.right);
    }
    return;
  };
  breadthFirstTravel(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
























