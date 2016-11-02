var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { // O(1)
    var oldTail = list.tail;
    if (list.head === null) {
      list.head = Node(value);
    }
    list.tail = Node(value);
    list.head.next = list.tail;
  };

  list.removeHead = function() { // O(1)
    var oldHead = list.head;
    list.head = oldHead.next;
    return oldHead.value;
  };

  list.contains = function(target) { // O(n)
    var result = false;
    var traverseList = function(node) {
      if (node.value === target) {
        result = true;
      } else if (node.next) {
        traverseList(node.next);
      } else {
        result = false;
      }
    };
    traverseList(list.head);
    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
