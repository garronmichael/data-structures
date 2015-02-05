var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function() {
  this.length && this.length--;
  var result = this[0];
  delete this[0];
  for (var i = this.length; i>0; i--) {
    this[i-1] = this[i];
  }
  return result;
};

Queue.prototype.size = function() {
  return this.length;
};



