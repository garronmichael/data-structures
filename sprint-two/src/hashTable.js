var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(!bucket) {
      var bucket = [];
      this._storage.set(i, bucket);
  }
  var found = false;
  for(var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if(tuple[0] === k) {
      tuple[1] = v;
      found = true;
    }
  }
  if(!found) {
    bucket.push([k, v]);
    this._counter++;
    if (this._counter > this._limit * 0.75) {
      this.resize(this._limit * 2);
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(!bucket) {
    return null;
  }
  for(var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if(tuple[0] === k) {
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(!bucket) {
    return null;
  }
  for(var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if(tuple[0] === k) {
      bucket.splice(i, 1);
      this._counter--;
      if (this._counter < this._limit * 0.25) {
        this.resize(this._limit * 0.5);
      }
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype.resize = function(limit) {
  var oldStorage = this._storage;
  this._storage = LimitedArray(limit);
  this._limit = limit;
  this._counter = 0;
  oldStorage.each(function(bucket) {
    if(!bucket) {
      return;
    }
    for(var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
