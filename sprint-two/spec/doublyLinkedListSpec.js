describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "addToHead", "removeTail" ,"removeHead", "contains"', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should contain values that were added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(6);
    doublyLinkedList.addToTail(7);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(true);
    expect(doublyLinkedList.contains(7)).to.equal(true);
    expect(doublyLinkedList.contains(8)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  it('should contain a value that was added to head', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(6);
    doublyLinkedList.addToHead(3);
    expect(doublyLinkedList.head.value).to.equal(3);
  });

  it('should remove a value from the tail when removeTail is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(6);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should return the value of the tail when removeTail is called', function() {
    doublyLinkedList.addToHead(6);
    expect(doublyLinkedList.removeTail()).to.equal(6 );
  });

  it('should work when adding and removing from both sides', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToHead(3);
    doublyLinkedList.addToHead(2);
    expect(doublyLinkedList.removeTail()).to.equal(5);
    expect(doublyLinkedList.removeTail()).to.equal(4);
    expect(doublyLinkedList.removeTail()).to.equal(3);
    expect(doublyLinkedList.removeTail()).to.equal(2);
    doublyLinkedList.addToHead(2);
    doublyLinkedList.addToHead(1);
    doublyLinkedList.addToTail(3);
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(1);
    expect(doublyLinkedList.removeHead()).to.equal(2);
    expect(doublyLinkedList.removeHead()).to.equal(3);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });
});





















