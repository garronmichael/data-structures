var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.length = 0;
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },
  dequeue: function() {
    var result = this.storage[0];
    delete this.storage[0];
    this.length && this.length--;
    for (key in this.storage) {
      this.storage[parseInt(key)-1] = this.storage[key];
    }
    return result;
  },
  size: function() {
    return this.length;
  }
};



