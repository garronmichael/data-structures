var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(!this.tail) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function(){
    var result = this.head.value;
    this.head = this.head.next;
   return result;
  };

  list.contains = function(target){
    var current = this.head;
    while(current) {
      if(current.value === target) {
        return true;
      } else if(current.next === null) {
        return false;
      } else {
        current = current.next;
      }
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
