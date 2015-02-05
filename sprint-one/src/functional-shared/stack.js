var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.length = 0;
  instance.storage = {};
  _.extend(instance, stackMethods);
  return instance;
};

 var stackMethods = {
  push: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function() {
    this.length && this.length--;
    var result = this.storage[this.length];
    delete this.storage[this.length];
    return result;
  },
  size: function() {
    return this.length;
  }
};

