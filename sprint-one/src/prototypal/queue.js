var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.length = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {
  dequeue: function() {
    this.length && this.length--;
    var result = this.storage[0];
    delete this.storage[0];
    for(var key in this.storage) {
      this.storage[parseInt(key) - 1] = this.storage[key];
    }
    return result;
  },
  size: function() {
    return this.length;
  },
  enqueue: function(value) {
    this.storage[this.length] = value;
    this.length++;
  }
};
