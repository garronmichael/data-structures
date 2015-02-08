var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //check index for bucket
  var bucket = this._storage.get(i);
  // if !bucket
  if(!bucket) {
     // create a bucket at storage[i]
      var bucket = [];
      this._storage.set(i, bucket); // What is the difference between <-- and this.set(i, bucket);
  }
  //search if the key is in the bucket
  var found = false;
  for(var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    // if tuple with k
    if(tuple[0] === k) {
          // overwrite
      tuple[1] = v;
      found = true;
    }
  }
    // if no tuple with k
  if(!found) {
          // add [k, v] to bucket
    bucket.push([k, v]);
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
        return tuple[1];
    }
  }
  return null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
