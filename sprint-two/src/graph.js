

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) { //O(1)
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { //O(n)
  if (this.nodes) {
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i] === node) {
        return true;
      }
      return false; 
    }
  }  
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { //O(n)
  if (this.nodes) {
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i] === node) {
        this.nodes.splice(i, 1);
      } 
    }
    for ( var j = 0; j < this.edges.length; j++) {
      if (this.edges[j].includes(node)) {
        this.edges.splice(j, 1);
      }
    }
  } 
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { //O(n)
  if ( this.edges ) {
    for ( var i = 0; i < this.edges.length; i++ ) {
      if (this.edges[i].includes(fromNode) && this.edges[i].includes(toNode)) {
        return true;
      }
    }
    return false;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { //O(n)
  if (this.edges) {
    for (var i = 0; i < this.edges.length; i++) {
      if (this.edges[i].includes(fromNode) && this.edges[i].includes(toNode)) {
        return;
      }
    }
  }
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) { //O(n)
  if ( this.edges ) {
    for ( var i = 0; i < this.edges.length; i++ ) {
      if (this.edges[i].includes(fromNode) && this.edges[i].includes(toNode)) {
        this.edges.splice(i, 1);
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) { //O(n)
  _.each(this.nodes, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


