var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) { // O(1)
  this.children.push(Tree(value));
  this.children[this.children.length - 1].parent = this;

};

treeMethods.removeFromParent = function(node) {
  for (var i = 0; i < node.parent.children.length; i++) {
    if (node.parent.children[i] === node) {
      node.parent.children[i] = null;
    }
  }
  node.parent = null;
  return node;
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
