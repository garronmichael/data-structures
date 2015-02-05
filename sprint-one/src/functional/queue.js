var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    var result = storage[0];
    delete storage[0];
    size && size--;
    for (var key in storage) {
      storage[parseInt(key)-1] = storage[key];
    }
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
