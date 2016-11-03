var BinarySearchTree = function(value) {
  var newBST = {};
  newBST.value = value;
  newBST.left = {};
  newBST.right = {};
  _.extend(newBST, BSTMethods);
  return newBST;
};

var BSTMethods = {};

BSTMethods.insert = function(value) {

  var insertNode = function(node) {
    //console.log('Currently at node', node.value);
    if (value < node.value) {
      //console.log(value, 'is less than', node.value);
      if (node.left.value === undefined) {
        //console.log('No left node defined, creating');
        node.left = BinarySearchTree(value);
      } else {
        //console.log('Traversing left from', node.value);
        insertNode(node.left);
      }
    } else if (value > node.value) {
      //console.log(value, 'is greater than', node.value);
      if (node.right.value === undefined) {
        //console.log('No right node defined, creating');
        node.right = BinarySearchTree(value);
      } else {
        //console.log('Traversing right from', node.value);
        insertNode(node.right);
      }
    }
  };
  insertNode(this);
};

BSTMethods.contains = function(value) {
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

BSTMethods.depthFirstLog = function(callback) {
  var depthFirstTravel = function(node) {
    console.log('Executing callback on node', node.value);
    callback(node.value);
    if (node.left.value !== undefined) {
      console.log('Traversing down left to node', node.left.value);
      depthFirstTravel(node.left);
    } else if (node.right.value !== undefined) {
      console.log('Traversing down right to node', node.right.value);
      depthFirstTravel(node.right);
    } else {
      console.log('No children found, returning');
      return;
    }
  };
  depthFirstTravel(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
