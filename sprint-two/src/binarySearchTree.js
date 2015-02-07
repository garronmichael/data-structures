var BinarySearchTree = function(value){
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

BinarySearchTree.prototype.insert = function(value) {
  var fn = function(node) {
    if(value > node.value) {
      if(node.right) {
        fn(node.right);
      } else {
        node.right = BinarySearchTree(value);
      }
    } else if(value < node.value) {
      if(node.left) {
        fn(node.left);
      } else {
        node.left = BinarySearchTree(value);
      }
    }
  };

  fn(this);
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var apply = function(node) {
    cb(node.value);
    if(node.left) {
      apply(node.left);
    }
    if(node.right) {
      apply(node.right);
    }
  }
  apply(this);
};

BinarySearchTree.prototype.contains = function(value) {
  var found = false;
  var find = function(node) {
    if(node.value === value) {
      found = true;
    } else if(node.left && node.value > value) {
      return find(node.left);
    } else if(node.right && node.value < value) {
      return find(node.right);
    }
  }
  find(this);
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
