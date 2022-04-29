const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.treeRoot = null;  // make initial root node
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.treeRoot; 
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.treeRoot = addData(this.treeRoot, data);

    function addData(node, data) {
			if (!node) {
				return new Node(data);
			}

			if (node.data === data) {
				return node;
			}

      if  (data < node.data) {
				node.left = addData(node.left, data); 
			} else {
				node.right = addData(node.right, data);
			}  
			return node;          
    }
   
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
		return searchNode(this.treeRoot, data);

    function searchNode(node, data) {
			if (!node) {
				return false;
			}

			if (node.data === data) {
				return true;
			}

      if (data < node.data) {
				return searchNode(node.left, data);
			} else {
				return searchNode(node.right, data);
			}
             
    }
  

  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    function findNode(node, data) {
      if (!node) {
				return null;
			}
      if (node.data === data) {
				return node;
			} 
             
			if (data < node.data) {
				return findNode(node.left, data);
			} 

			if (data > node.data) {
				return findNode(node.right, data);
			}             
    }
  
    return findNode(this.treeRoot, data)
  
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.treeRoot = removeNode(this.treeRoot, data);

    function removeNode(node, data) {
      if (!node) {return null;}


      if (data < node.data) {    // go to left tree 
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {    // go to right tree
        node.right = removeNode(node.right, data);
        return node;
      } else {   // if we stop on needed node
          if ((!node.left) && (!node.right)) {return null;} // no children

          if (!node.right) {   // has only left child
            node = node.left;
            return node;
          }

          if (!node.left) {   // has only right child
            node = node.right;
            return node;
          }

          // has both left and right children
            // find max value from left tree
          let treeLeftMax = node.left;
          while (treeLeftMax.right) {  // go to deep in left tree to find max
            treeLeftMax = treeLeftMax.right;
          }
          node.data = treeLeftMax.data; // left max data making an element that will be removed

          node.left = removeNode(node.left, treeLeftMax.data);  // remove that element from left tree

          return node
      }
    } 
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.treeRoot) return;
		

		let node = this.treeRoot;
    while (node.left) {
      node = node.left;
    }

    return node.data
  
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.treeRoot) return;
		

		let node = this.treeRoot;
    while (node.right) {
      node = node.right;
    }

    return node.data
  
  }
}

module.exports = {
  BinarySearchTree
};