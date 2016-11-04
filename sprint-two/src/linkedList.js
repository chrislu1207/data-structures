var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { // O(1)
    if (list.head === null) {
      list.head = Node(value);
      list.tail = Node(value);
    } else if (list.tail && list.head.next === null) {
      list.tail = Node(value);
      list.head.next = list.tail;
    } else {
      var oldTail = list.tail;
      list.tail = Node(value);
      oldTail.next = list.tail;
    }
  };

  list.removeHead = function() { // O(1)
    var oldHead = list.head.value;
    list.head = list.head.next;
    return oldHead;
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
