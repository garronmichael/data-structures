

var Graph = function(){
  this.values = [];
  this.edges = {};
};

Graph.prototype.addNode = function(node){
  this.values.push(node);
};

Graph.prototype.contains = function(node){
  var result = false;
  _.each(this.values, function(value) {
    if(value === node) {
      result = true;
    }
  });
  return result;
};

Graph.prototype.removeNode = function(node){
  var temp = this.values;
  return _.each(temp, function(value, index) {
    if(value === node) {
      delete temp[index];
    }
  });
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var result = false;
  if(this.edges[fromNode]) {
    for(var i = 0; i < this.edges[fromNode].length; i++) {
      if(this.edges[fromNode][i] === toNode) {
        result = true;
      }
    }
  }
  return result;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if(!this.edges[fromNode]) {
    this.edges[fromNode] = [];
    this.edges[fromNode].push(toNode);
  } else {
    this.edges[fromNode].push(toNode);
  }
  if(!this.edges[toNode]) {
    this.edges[toNode] = [];
    this.edges[toNode].push(fromNode);
  } else {
    this.edges[toNode].push(fromNode);
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if(this.edges[fromNode]) {
    for(var j = 0; j < this.edges[fromNode].length; j++) {
      if(this.edges[fromNode][j] === toNode) {
        delete this.edges[fromNode][j];
      }
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  return _.each(this.values, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



