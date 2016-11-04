describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should not add existing values to a set', function() {
    set.add('Stephen Strange');
    set.add('Peter Parker');
    set.add('Peter Parker');
    expect(set._storage.length).to.equal(2);
  });

  it('should handle numbers', function() {
    set.add(4);
    set.add(5);
    expect(set.contains(4)).to.equal(true);
    expect(set.contains(5)).to.equal(true);
    expect(set.contains(6)).to.equal(false);
  });

  it('should handle numbers and strings at the same time', function() {
    set.add(4);
    set.add(5);
    set.add('Stephen Strange');
    set.add('Peter Parker');
    expect(set.contains(4)).to.equal(true);
    expect(set.contains(5)).to.equal(true);
    expect(set.contains(6)).to.equal(false);
    expect(set.contains('Mel Gibson')).to.equal(false);
    expect(set.contains('Peter Parker')).to.equal(true);
    expect(set.contains('Stephen Strange')).to.equal(true);
  });

  it('should handle any object type', function() {
    var arrNum = [1, 2, 3];
    var arrStr = ['a', 'b', 'c'];
    var obj = {'a': 1, 'b': 2, 'c': 3};
    var func = function() { return 0; };
    set.add(4);
    set.add('Spider');
    set.add(arrStr);
    set.add(arrNum);
    set.add(obj);
    set.add(true);
    set.add(func);
    expect(set.contains(4)).to.equal(true);
    expect(set.contains('Spider')).to.equal(true);
    expect(set.contains(arrNum)).to.equal(true);
    expect(set.contains(arrStr)).to.equal(true);
    expect(set.contains(obj)).to.equal(true);
    expect(set.contains(true)).to.equal(true);
    expect(set.contains(func)).to.equal(true);
  });




























});
