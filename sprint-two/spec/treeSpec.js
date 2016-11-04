describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild", "contains", "traverse" and "removeFromParent", and properties named "value", and "parent"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.traverse).to.be.a('function');
    expect(tree.removeFromParent).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
    expect(tree.hasOwnProperty('parent')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should correctly detect nested-nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[0].children[0].addChild(9);
    tree.children[0].children[0].addChild(10);
    tree.children[1].children[0].addChild(11);
    tree.children[1].children[0].addChild(12);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
    expect(tree.contains(9)).to.equal(true);
    expect(tree.contains(10)).to.equal(true);
    expect(tree.contains(11)).to.equal(true);
    expect(tree.contains(12)).to.equal(true);
    expect(tree.contains(15)).to.equal(false);
  });

  it('should recognize parents', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.children[0].parent.value).to.equal(undefined);
    expect(tree.children[1].parent.value).to.equal(undefined);
    expect(tree.children[0].children[0].parent.value).to.equal(5);
  });

  it('should disassociate the tree and parent', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.removeFromParent(tree.children[0].children[0]).parent).to.equal(null);
    tree.children[0].addChild(7);
    expect(tree.removeFromParent(tree.children[0].children[1]).value).to.equal(7);
    expect(tree.children[0].children[1]).to.equal(null);
  });

  it('should execute a callback on every value in a tree', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[0].children[0].addChild(9);
    tree.children[0].children[0].addChild(10);
    tree.children[1].children[0].addChild(11);
    tree.children[1].children[0].addChild(12);
    tree.traverse(func);
    expect(array).to.eql([undefined, 5, 7, 9, 10, 6, 8, 11, 12]);
  });

});








































