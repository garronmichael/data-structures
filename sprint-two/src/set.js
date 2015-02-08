var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item){
  return (this._storage.indexOf(item) !== -1)
};

setPrototype.remove = function(item){
  for(var i = 0; i < this._storage.length; i++)
    if(this._storage[i] === item) {
      return this._storage.splice(i, 1)[0];
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
