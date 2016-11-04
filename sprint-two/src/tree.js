var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) { // O(1)
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) { // O(n)
  var result = false;
  var traverseTree = function(node) {
    if (node.value === target) {
      result = true;
    } else if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        traverseTree(node.children[i]);
      }
    }
  };
  traverseTree(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
