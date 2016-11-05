var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { // O(1)
    if (list.head === null && list.tail === null) {
      list.head = Node(value);
      list.tail = Node(value);
    } else if (list.tail && list.head.next === null) {
      list.tail = Node(value);
      list.head.next = list.tail;
      list.tail.previous = list.head;
    } else {
      var oldTail = list.tail;
      list.tail = Node(value);
      oldTail.next = list.tail;
      list.tail.previous = oldTail;
    }
  };

  list.addToHead = function(value) {
    if (list.tail === null && list.head === null) {
      list.head = Node(value);
      list.tail = Node(value);
    } else if (list.head && list.tail.previous === null) {
      list.head = Node(value);
      list.tail.previous = list.head;
      list.head.next = list.tail;
    } else {
      var oldHead = list.head;
      list.head = Node(value);
      oldHead.previous = list.head;
      list.head.next = oldHead;
    }
  };

  list.removeTail = function() {
    var oldTail = list.tail;
    var oldTailVal = list.tail.value;
    if (oldTail.previous === null) {
      list.head = null;
      list.tail = null;
    } else {
      list.tail = oldTail.previous;
      list.tail.next = null;
    }
    return oldTailVal;
  };

  list.removeHead = function() { // O(1)
    var oldHead = list.head;
    var oldHeadVal = list.head.value;
    if (oldHead.next === null) {
      list.head = null;
      list.tail = null;
    } else {
      list.head = oldHead.next;
      list.head.previous = null;
    }
    return oldHead.value;
  };

  list.contains = function(target) { // O(n)
    var result = false;
    var traverseList = function(node) {
      if (node.value === target) {
        result = true;
        return;
      } else if (node.next) {
        traverseList(node.next);
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
  node.previous = null; 

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
